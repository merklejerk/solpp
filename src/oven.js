const _ = require('lodash');
const process = require('process');
const {dirname} = require('path');
const {
	createParseTree,
	getNodeRuleName,
	getNodeText,
	getNodeLocation,
	createLocationString
} = require('./antlr-utils');
const {SolLexer} = require('./antlr/SolLexer');
const {SolParser} = require('./antlr/SolParser');
const Macro = require('./macro');
const {createExpression, toBool} = require('./macro-expression');

class Oven {
	constructor(opts={}) {
		this.cwd = opts.cwd || dirname(process.cwd());
		this.name = opts.name || '';
		this.resolver = opts.resolver || defaultResolver;
		this.ctx = opts.ctx || {defs: opts.defs || {}, stack: []};
		this.cache = opts.cache || {};
		this.depth = opts.depth || 0;
		this.noFlatten = opts.noFlatten || false;
		this.noPreprocessor = opts.noPreprocessor || false;
		this.tolerant = opts.tolerant || false;
	}

	async transform(code) {
		const root = createParseTree(SolLexer, SolParser, 'sourceUnit', code,
			this.noPreprocessor ? 'NO_PP' : null);
		return this._transformNode(root);
	}

	async _transformNode(node) {
		const name = getNodeRuleName(node);
		switch (name) {
			case 'NakedImportStatement': {
					if (this.noFlatten)
						return getNodeText(node);
					let path = getNodeText(node.path);
					path = _.trim(path, path[0]);
					try {
						return await this._includeImport(path, getNodeLocation(node));
					} catch (err) {
						if (this.tolerant)
							return getNodeText(node);
						throw err;
					}
				}
			case 'ImportStatement': {
					return getNodeText(node);
				}
				break;
			case 'PragmaVersion': {
					// Squelch pragmas in dependencies.
					if (this.depth > 0)
						return '';
					return getNodeText(node.content);
				}
			case 'NakedDefineDirective': {
					const key = getNodeText(node.name);
					this.ctx.defs[key] = true;
					return '';
				}
			case 'DefineDirective': {
					const key = getNodeText(node.name, true);
					const value = getNodeText(node.body);
					this.ctx.defs[key] = value;
					return '';
				}
			case 'UndefineDirective': {
					const key = getNodeText(node.name, true);
					delete this.ctx.defs[key];
					return '';
				}
			case 'DefineMacroDirective': {
					const def = new Macro(node, this.name);
					this.ctx.defs[def.name] = def;
					return '';
				}
			case 'ElifBlock':
			case 'IfBlock': {
					if (!this._evaluateNodeExpression(node.dir.condition, true)) {
						if (node.elseAlt)
							return await this._transformNode(node.elseAlt);
						else if (node.elifAlt)
							return await this._transformNode(node.elifAlt);
						return '';
					}
					return await this._transformNode(node.content);
				}
			case 'ElseBlock': {
					return this._transformNode(node.content);
				}
			case 'ForBlock': {
					const list = this._evaluateNodeExpression(node.dir.iterable);
					if (!_.isArrayLike(list)) {
						const loc = this._getNodeLocationString(node.dir.iterable);
						throw new Error(`"${list}" is not iterable in $loc`);
					}
					const valId = getNodeText(node.dir.iterator, true);
					const keyId = node.dir.key ? getNodeText(node.dir.key, true) : null;
					let r = '';
					for (let i = 0; i < list.length; i++) {
						const frame = {};
						frame[valId] = list[i];
						if (keyId)
							frame[keyId] = i;
						this.ctx.stack.push(frame)
						r += await this._transformNode(node.content);
						this.ctx.stack.pop();
					}
					return r;
				}
			case 'MacroExpansion': {
					return this._expandNodeExpression(node.expression);
				}
			case 'MacroEvaluation': {
					return this._evaluateNodeExpression(node.expression);
				}
		}
		if (node.children) {
			let r = '';
			for (let ch of node.children)
				r += await this._transformNode(ch);
			return r;
		}
		return getNodeText(node);
	}

	_evaluateNodeExpression(node, asBool=false) {
		let expr = this._createNodeExpression(node);
		try {
			const r = expr.evaluate(this.ctx);
			if (asBool)
				return toBool(r);
			return r;
		} catch (err) {
			const loc = this._getNodeLocationString(node);
			const content = getNodeText(node, true);
			throw new Error(`Failed to evaluate expression: "${content}" in ` +
		 		loc + `: ${err.message}`, err);
		}
	}

	_createNodeExpression(node) {
		const content = getNodeText(node, true);
		try {
			return createExpression(content);
		} catch (err) {
			const loc = this._getNodeLocationString(node);
			throw new Error(err.message + ` in ` + loc, err);
		}
	}

	_expandNodeExpression(node) {
		let expr = this._createNodeExpression(node);
		try {
			return expr.expand(this.ctx);
		} catch (err) {
			const loc = this._getNodeLocationString(node);
			const content = getNodeText(node, true);
			throw new Error(`Failed to expand expression: "${content}" in ` +
		 		loc + `: ${err.message}`, err);
		}
	}

	_getNodeLocationString(node) {
		return this._createLocationString(getNodeLocation(node));
	}

	_createLocationString(loc) {
		return createLocationString(loc, this.name);
	}

	async _includeImport(path, loc) {
		const resolved = await this.resolver(path, this.cwd, this.name);
		if (!resolved) {
			throw new Error(`Cannot resolve import "${path}": ` +
				this._createLocationString(loc));
		}
		if (resolved.name in this.cache) // Already included.
			return '';
		this.cache[resolved.name] = {
			from: {
				loc: loc,
				name: this.name
			}};
		return this._descend(resolved.code, resolved.name, resolved.cwd);
	}

	async _descend(code, name, cwd) {
		const oven = new Oven({
			cwd: cwd || this.cwd,
			name: name || this.name,
			resolver: this.resolver,
			ctx: this.ctx,
			cache: this.cache,
			depth: this.depth + 1,
		});
		return oven.transform(code);
	}
}

module.exports = Oven;
