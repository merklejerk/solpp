'use strict'
const _ = require('lodash');
const bn = require('bn-str-256');
const {ExprLexer} = require('./antlr/ExprLexer');
const {ExprParser} = require('./antlr/ExprParser');
const {
	createParseTree,
	getNodeText,
	getNodeRuleName
} = require('./antlr-utils');
const builtins = require('./builtins');
const ops = require('./operations');
const FunctionAdapter = require('./function-adapter');

function contextLookup(ctx, name) {
	const stack = ctx.stack || [];
	for (let i = stack.length; i > 0; i--) {
		const s = stack[i-1];
		if (name in s)
			return s[name];
	}
	const defs = ctx.defs || {};
	if (name in defs)
		return defs[name];
	if (name in builtins)
		return builtins[name];
}

function evaluateCode(body, ctx={}) {
	return createExpression(body).evaluate(ctx);
}

function expandCode(body, ctx={}) {
	return createExpression(body).expand(ctx);
}

function createExpression(body) {
	try {
		return new MacroExpression(body);
	} catch (err) {
		throw new Error(`"${body}" is not a valid expression`);
	}
}

class MacroExpression {
	constructor(body) {
		this.body = body;
		this.root = createParseTree(
			ExprLexer, ExprParser, 'expressionRoot', body);
	}

	evaluate(ctx={}) {
		return this._exec(this.root.expr, ctx, false);
	}

	expand(ctx={}) {
		return this._exec(this.root.expr, ctx, true);
	}

	_exec(node, ctx={}, expand=false) {
		const name = getNodeRuleName(node);
		if (expand) {
			if (name != 'CallOperation' && name != 'ValueOperation' && name != 'IndexOperation')
				throw new Error(`Expression does not support expansion: "${this.body}"`);
		}
		switch (name) {
			case 'LogicalOperation': {
					const left = this._exec(node.left, ctx, expand);
					const right = this._exec(node.right, ctx, expand);
					const op = getNodeText(node.op, true);
					return MacroExpression.LOGICAL_OPS[op](left, right);
				}
			case 'ArithmeticOperation': {
					const left = this._exec(node.left, ctx, expand);
					const right = this._exec(node.right, ctx, expand);
					const op = getNodeText(node.op, true);
					return MacroExpression.ARITHMETIC_OPS[op](left, right);
				}
			case 'BitwiseOperation': {
					const left = this._exec(node.left, ctx, expand);
					const right = this._exec(node.right, ctx, expand);
					const op = getNodeText(node.op, true);
					return MacroExpression.BITWISE_OPS[op](left, right);
				}
			case 'PowerOperation': {
					const left = this._exec(node.left, ctx, expand);
					const right = this._exec(node.right, ctx, expand);
					return ops.math.pow(left, right);
				}
			case 'NegateOperation': {
					const right = this._exec(node.right, ctx, expand);
					return ops.math.neg(right);
				}
			case 'LogicalNotOperation': {
					const right = this._exec(node.right, ctx, expand);
					return !ops.logical.bool(right);
				}
			case 'BitwiseInvertOperation': {
					const right = this._exec(node.right, ctx, expand);
					return ops.bitwise.invert(right);
				}
			case 'TernaryOperation': {
					const condition = this._exec(node.condition, ctx, expand);
					if (condition)
						return this._exec(node.first, ctx, expand);
					return this._exec(node.second, ctx, expand);
				}
			case 'GroupOperation': {
					return this._exec(node.inner, ctx, expand);
				}
			case 'DefinedOperation': {
					const id = getNodeText(node.name);
					return contextLookup(ctx, id) !== undefined;
				}
			case 'PeekOperation': {
					return this._exec(node.inner, ctx, true);
				}
			case 'IndexOperation': {
					const list = this._exec(node.list, ctx, expand);
					const idx = bn.toNumber(bn.int(this._exec(node.inner, ctx, expand)));
					if (!_.isArrayLike(list))
						throw new Error(`Can only index lists.`);
					if (!_.inRange(idx, 0, list.length))
						throw new Error(`Index ${idx} is outside of list [${list})].`);
					if (expand)
						return expandCode(list[idx], ctx, true);
					return evaluateCode(list[idx], ctx, true);
				}
			case 'ListOperation': {
					let items = node.items;
					let _items = [];
					while (items) {
						_items.push(this._exec(items.item, ctx, expand));
						items = items.rest;
					}
					return _items;
				}
			case 'ValueOperation': {
					const kind = getNodeRuleName(node.value.children[0]);
					const v = getNodeText(node.value.children[0].children[0], true);
					if (kind == 'Identifier') {
						const body = contextLookup(ctx, v);
						if (body === '' || _.isNil(body) || body === false)
							return false;
						if (!expand) {
							if (typeof(body) == 'string')
								return evaluateCode(body, ctx);
						}
						return body;
					}
					if (kind == 'BooleanLiteral')
						return v != 'false';
					if (kind == 'StringLiteral')
						return builtins.unquote(v);
					return v;
				}
			case 'CallOperation': {
					const callee = this._exec(node.callee, ctx, expand);
					if (!callee)
						throw new Error(`"${getNodeText(node.callee, true)}" is not a macro or function`)
					const fn = new FunctionAdapter(callee);
					let args = node.args;
					let _args = [];
					while (args) {
						if (expand)
							_args.push(getNodeText(args.arg, true))
						else
							_args.push(this._exec(args.arg, ctx, expand));
						args = args.rest;
					}
					if (expand)
						return fn.expand(_args, ctx);
				 	return fn.evaluate(_args, ctx);
				}
		}
	}
}

MacroExpression.ARITHMETIC_OPS = {
	'+': ops.math.add,
	'-': ops.math.sub,
	'*': ops.math.mul,
	'/': ops.math.div,
	'%': ops.math.mod
};

MacroExpression.LOGICAL_OPS = {
	'==': ops.logical.eq,
	'!=': ops.logical.ne,
	'<=': ops.logical.lte,
	'>=': ops.logical.gte,
	'<': ops.logical.lt,
	'>': ops.logical.gt,
	'||': ops.logical.or,
	'&&': ops.logical.and
};

MacroExpression.BITWISE_OPS = {
	'^': ops.bitwise.xor,
	'&': ops.bitwise.and,
	'|': ops.bitwise.or,
	'<<': ops.bitwise.shift,
	'>>': (a, b) => ops.bitwise.shift(a, ops.math.neg(b))
};

module.exports = {
	evaluate: evaluateCode,
	expand: expandCode,
	createExpression: createExpression,
	toBool: ops.logical.bool,
};
