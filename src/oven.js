'use strict'
require('colors');
const _ = require('lodash');
const process = require('process');
const {dirname} = require('path');
const {
	createParseTree,
	getNodeRuleName,
	getNodeText,
	getNodeIndentation,
	getNodeLocation,
	getNodeLineText,
	createLocationString,
	NodeError
} = require('./antlr-utils');
const {SolLexer} = require('./antlr/SolLexer');
const {SolParser} = require('./antlr/SolParser');
const {SourceMapGenerator} = require('source-map');
const Macro = require('./macro');
const {createExpression, toBool, toString} = require('./expression');
const semverMerge = require('./semver-merge');

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
		this.pragmas = opts.pragmas || [];
		this.sourceMap = opts.sourceMap || new SourceMapGenerator();
	}

	async transform(code) {
		const root = createParseTree(
			SolLexer,
			SolParser,
			'sourceUnit',
			code,
			this.noPreprocessor ? 'NO_PP' : null
		);
		try {
			const _code = await this._transformNode(root);
			// If we're the root source unit, prepend the merged pragmas.
			const prefix = this.depth == 0 ? this._mergePragmas() + '\n\n' : '';
			return prefix + _code;
		} catch (err) {
			if (err instanceof NodeError) {
				throw new Error(
					this._createNodeErrorString(node, err.message),
					err
				);
			}
			throw err;
		}
	}

	async _transformNode(node) {
		const name = getNodeRuleName(node);
		switch (name) {
			case 'NakedImportStatement': {
				if (this.noFlatten) {
					return getNodeText(node);
				}
				let path = getNodeText(node.path);
				path = _.trim(path, path[0]);
				try {
					return await this._includeImport(path, node);
				} catch (err) {
					if (this.tolerant)
						return getNodeText(node);
					throw err;
				}
			}
			case 'ImportStatement': {
				return getNodeText(node);
				break;
			}
			case 'Pragma': {
				// Aggregate pragmas and output a merged version later.
				this.pragmas.push(getNodeText(node.body, true));
				return '';
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
				if (!this._evaluateNodeExpression(node.dir.condition, 'bool')) {
					if (node.elseAlt) {
						return await this._transformNode(node.elseAlt);
					}
					else if (node.elifAlt) {
						return await this._transformNode(node.elifAlt);
					}
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
					console.error(node.dir.iterable, `"${list}" is not iterable`);
				}
				const valId = getNodeText(node.dir.iterator, true);
				const keyId = node.dir.key ? getNodeText(node.dir.key, true) : null;
				let r = '';
				for (let i = 0; i < list.length; i++) {
					const frame = {};
					frame[valId] = list[i];
					if (keyId) {
						frame[keyId] = i;
					}
					this.ctx.stack.push(frame)
					r += await this._transformNode(node.content);
					this.ctx.stack.pop();
				}
				return r;
			}
			case 'MacroExpression': {
				const prefix = getNodeText(node.prefix, true);
				if (prefix.startsWith('$$')) {
					return this._evaluateNodeExpression(node.body, 'string',
						getNodeIndentation(node));
				} else {
					return this._expandNodeExpression(node.body,
						getNodeIndentation(node));
				}
			}
		}
		if (node.children) {
			let r = '';
			for (let ch of node.children) {
				r += await this._transformNode(ch);
			}
			return r;
		}
		return getNodeText(node);
	}

	_augmentContext(node, indent='') {
		const loc = getNodeLocation(node);
		return _.merge(this.ctx, {
			defs: {
				'__line': loc.line,
				'__indent': JSON.stringify(indent),
				'__filename': this.name
		}});
	}

	_evaluateNodeExpression(node, type=null, indent='') {
		let expr = this._createNodeExpression(node);
		try {
			const r = expr.evaluate(this._augmentContext(node, indent));
			if (type == 'bool') {
				return toBool(r);
			}
			else if (type == 'string') {
				return toString(r);
			}
			return r;
		} catch (err) {
			const message = `Could not evaluate expression: ${err.message}`;
			throw new NodeError(node, message, err);
		}
	}

	_expandNodeExpression(node, indent='') {
		let expr = this._createNodeExpression(node);
		try {
			return expr.expand(this._augmentContext(node, indent));
		} catch (err) {
			const message = `Could not expand expression: ${err.message}`;
			throw new NodeError(node, message, err);
		}
	}

	_createNodeErrorString(node, message) {
		const loc = getNodeLocation(node);
		const line = getNodeLineText(node, true);
		return `${message}\n${this.name.bold} (${loc.line}.bold): ${line}`;
	}

	_createNodeExpression(node) {
		const body = getNodeText(node);
		return createExpression(body);
	}

	async _includeImport(path, node) {
		let resolved;
		try {
			resolved = await this.resolver(path, this.cwd, this.name);
		} catch (err) {
			throw new NodeError(node, `Cannot resolve import "${path}"`, err);
		}
		if (resolved.name in this.cache) // Already included.
			return '';
		this.cache[resolved.name] = {
			from: {
				loc: getNodeLocation(node),
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
			pragmas: this.pragmas,
			noFlatten: this.noFlatten,
			noPreprocessor: this.noPreprocessor,
			tolerant: this.tolerant
		});
		return oven.transform(code);
	}

	_mergePragmas() {
		const pragmas = _.map(this.pragmas, s => s.replace(/\s+/g, ' '));
		// Extract the feature pragmas.
		const features = _.uniq(_.filter(pragmas, s => !/^solidity.+$/.test(s)));
		// Extract the compiler semvers.
		const compilerVersions = _.map(
			_.filter(
				_.map(pragmas, s => /^solidity\s*(.+)$/.exec(s)),
				m => !!m),
			m => m[1]
		);
		let compilerVersion = null;
		if (compilerVersions.length == 1) {
			compilerVersion = compilerVersions[0];
		}
		else if (compilerVersions.length > 1) {
			// Reconcile the compiler version.
			compilerVersion = semverMerge(compilerVersions);
		}
		return [
			...(compilerVersion ? [`pragma solidity ${compilerVersion};`] : []),
			..._.map(features, s => `pragma ${s};`)
		].join('\n');
	}
}

module.exports = Oven;
