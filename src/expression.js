'use strict'
const _ = require('lodash');
const bn = require('bn-str-256');
const {ExprLexer} = require('./antlr/ExprLexer');
const {ExprParser} = require('./antlr/ExprParser');
const {
	createParseTree,
	getNodeText,
	getNodeRuleName,
	isNode
} = require('./antlr-utils');
const builtins = require('./builtins');
const ops = require('./operations');
const units = require('./units');
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
	if (!_.isString(body))
		return body;
	return createExpression(body).evaluate(ctx);
}

function expandCode(body, ctx={}) {
	if (!_.isString(body))
		return body;
	return createExpression(body).expand(ctx);
}

function createExpression(body) {
	try {
		return new Expression(body);
	} catch (err) {
		throw new Error(`"${body}" is not a valid expression`);
	}
}

function evaluateToFunction(node, ctx={}) {
	try {
		return new FunctionAdapter(evaluate(node, ctx));
	} catch (err) {
		throw new Error(`${err.message}: ` +
			`"${getNodeText(node, true)}"`);
	}
}

function evaluateToList(node, ctx={}) {
	const list = evaluate(node, ctx);
	if (!ops.list.isList(list)) {
		throw new Error(`Expression does not evaluate to a list: ` +
			`"${getNodeText(node, true)}"`);
	}
	return list;
}

function expand(node, ctx={}) {
	const name = getNodeRuleName(node);
	switch (name) {
		case 'IdentifierOperation': {
			const name = getNodeText(node.name, true);
			const body = contextLookup(ctx, name);
			return ops.string.toString(body);
		}
		case 'CallOperation': {
			let fn =  evaluateToFunction(node.callee, ctx);
			let args = node.args;
			let _args = [];
			while (args) {
				_args.push(getNodeText(args.arg));
				args = args.rest;
			}
			return fn.expand(_args, ctx);
		}
		case 'TernaryOperation': {
			const condition = evaluate(node.condition, ctx);
			if (condition)
				return expand(node.first, ctx);
			return expand(node.second, ctx);
		}
	}
	return getNodeText(node, true);
}

function evaluate(node, ctx={}) {
	const name = getNodeRuleName(node);
	switch (name) {
		case 'LogicalOperation': {
			const left = evaluate(node.left, ctx);
			const right = evaluate(node.right, ctx);
			const op = getNodeText(node.op, true);
			return Expression.LOGICAL_OPS[op](left, right);
		}
		case 'ArithmeticOperation': {
			const left = evaluate(node.left, ctx);
			const right = evaluate(node.right, ctx);
			const op = getNodeText(node.op, true);
			return Expression.ARITHMETIC_OPS[op](left, right);
		}
		case 'BitwiseOperation': {
			const left = evaluate(node.left, ctx);
			const right = evaluate(node.right, ctx);
			const op = getNodeText(node.op, true);
			return Expression.BITWISE_OPS[op](left, right);
		}
		case 'PowerOperation': {
			const left = evaluate(node.left, ctx);
			const right = evaluate(node.right, ctx);
			return ops.math.pow(left, right);
		}
		case 'NegateOperation': {
			const right = evaluate(node.right, ctx);
			return ops.math.neg(right);
		}
		case 'LogicalNotOperation': {
			const right = evaluate(node.right, ctx);
			return !ops.logical.bool(right);
		}
		case 'BitwiseInvertOperation': {
			const right = evaluate(node.right, ctx);
			return ops.bitwise.invert(right);
		}
		case 'TernaryOperation': {
			const condition = evaluate(node.condition, ctx);
			if (condition)
				return evaluate(node.first, ctx);
			return evaluate(node.second, ctx);
		}
		case 'GroupOperation': {
			return evaluate(node.inner, ctx);
		}
		case 'DefinedOperation': {
			const id = getNodeText(node.name);
			return contextLookup(ctx, id) !== undefined;
		}
		case 'PeekOperation': {
			const name = getNodeText(node.name, true);
			const body = contextLookup(ctx, name);
			return ops.string.toString(body);
		}
		case 'IndexOperation': {
			const list = evaluateToList(node.list, ctx);
			const idx = bn.toNumber(bn.int(evaluate(node.inner, ctx)));
			const at = ops.list.at(list, idx);
			if (isNode(at))
				return evaluate(at, ctx);
			return at;
		}
		case 'PropertyOperation': {
			throw new Error(
				`Property operations are not currently supported: ` +
				`"${getNodeText(node, true)}"`);
		}
		case 'ListOperation': {
			let items = node.items;
			let _items = [];
			while (items) {
				_items.push(evaluate(items.item, ctx));
				items = items.rest;
			}
			return _items;
		}
		case 'UnitsOperation': {
			const n = evaluate(node.num, ctx);
			const u = getNodeText(node.units, true);
			return ops.math.mul(n, units[u]);
		}
		case 'LiteralOperation': {
			const kind = getNodeRuleName(node.value.children[0]);
			const v = getNodeText(node.value.children[0].children[0], true);
			if (kind == 'BooleanLiteral')
				return v != 'false';
			if (kind == 'StringLiteral')
				return builtins.unquote(v);
			return v;
		}
		case 'IdentifierOperation': {
			const name = getNodeText(node.name, true);
			const body = contextLookup(ctx, name);
			if (body === '' || _.isNil(body) || body === false)
				return false;
			// Evaluate as code if the contents are a string.
			if (_.isString(body))
				return evaluateCode(body, ctx);
			return body;
		}
		case 'CallOperation': {
			let fn =  evaluateToFunction(node.callee, ctx);
			let args = node.args;
			let _args = [];
			while (args) {
				_args.push(evaluate(args.arg, ctx));
				args = args.rest;
			}
			return fn.evaluate(_args, ctx);
		}
	}
}

class Expression {
	constructor(body) {
		this.body = body;
		this.root = createParseTree(
			ExprLexer, ExprParser, 'expressionRoot', body);
	}

	evaluate(ctx={}) {
		return evaluate(this.root.expr, ctx);
	}

	expand(ctx={}) {
		return expand(this.root.expr, ctx);
	}

	toString() {
		return this.body;
	}
}

Expression.ARITHMETIC_OPS = {
	'+': ops.math.add,
	'-': ops.math.sub,
	'*': ops.math.mul,
	'/': ops.math.div,
	'%': ops.math.mod
};

Expression.LOGICAL_OPS = {
	'==': ops.logical.eq,
	'!=': ops.logical.ne,
	'<=': ops.logical.lte,
	'>=': ops.logical.gte,
	'<': ops.logical.lt,
	'>': ops.logical.gt,
	'||': ops.logical.or,
	'&&': ops.logical.and
};

Expression.BITWISE_OPS = {
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
