'use strict'
const _ = require('lodash');
const {ExprLexer} = require('./antlr/ExprLexer');
const {ExprParser} = require('./antlr/ExprParser');
const {
	createParseTree,
	getNodeText,
	getNodeRuleName,
	getNodeLocation,
	isNode
} = require('./antlr-utils');
const bn = require('./bn');
const builtins = require('./builtins');
const ops = require('./operations');
const units = require('./units');
const FunctionAdapter = require('./function-adapter');
const Lambda = require('./lambda');

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

function evaluateCode(body, ctx) {
	if (!_.isString(body) || body.literal)
		return body;
	return createExpression(body).evaluate(ctx);
}

function expandCode(body, ctx) {
	if (!_.isString(body) || body.literal)
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

function evaluateToFunction(node, ctx) {
	try {
		const fn = evaluate(node, ctx);
		if (ops.fn.isCallable(fn))
			return fn;
		return new FunctionAdapter(fn);
	} catch (err) {
		throw new Error(`${err.message}: ` +
			`"${getNodeText(node, true)}"`);
	}
}

function evaluateToList(node, ctx) {
	const list = evaluate(node, ctx);
	if (!ops.list.isList(list)) {
		throw new Error(`Expression does not evaluate to a list: ` +
			`"${getNodeText(node, true)}"`);
	}
	return list;
}

function expand(node, ctx) {
	const name = getNodeRuleName(node);
	switch (name) {
		case 'IdentifierOperation': {
			const name = getNodeText(node.name, true);
			const body = contextLookup(ctx, name);
			return ops.string.toString(body);
		}
		case 'CallOperation': {
			let fn =  evaluateToFunction(node.callee, ctx);
			let args = _.map(collectArgs(node.args), a => getNodeText(a, true));
			return fn.expand(args, ctx);
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

function collectArgs(node, arg='arg', rest='rest') {
	const args = [];
	while (node) {
		if (node[arg])
			args.push(node[arg]);
		if (!(rest in node))
			break;
		node = node[rest];
	}
	return args;
}

function evaluate(node, ctx) {
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
				return _.assign(ops.string.unquote(v), {literal: true});
			if (kind == 'FstringLiteral') {
				return _.assign(ops.string.interpolate(
					ops.string.unquote(v),
					expr => evaluateCode(expr, ctx),
					expr => expandCode(expr, ctx)), {literal: true});
			}
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
			const args = _.map(collectArgs(node.args), a => evaluate(a, ctx));
			return fn.evaluate(args, ctx);
		}
		case 'LambdaOperation': {
			node = node.children[0];
			let args = [];
			if (node.args)
				args = _.map(collectArgs(node.args), a => getNodeText(a, true));
			else if (node.arg)
				args = [getNodeText(node.arg, true)];
			return new Lambda(
					args,
					new Expression(node.body),
					getNodeText(node.body, true));
		}
	}
	return false;
}

class Expression {
	constructor(bodyOrNode) {
		if (_.isString(bodyOrNode)) {
			this.body = bodyOrNode;
			this.expr = createParseTree(
				ExprLexer, ExprParser, 'expressionRoot', bodyOrNode).expr;
		} else {
			this.body = getNodeText(bodyOrNode);
			this.expr = bodyOrNode;
		}
	}

	evaluate(ctx) {
		return evaluate(this.expr, ctx);
	}

	expand(ctx) {
		return expand(this.expr, ctx);
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
	toString: ops.string.toString
};
