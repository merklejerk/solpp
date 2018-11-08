const _ = require('lodash');
const bn = require('bn-str-256');
const bitwise = require('./bitwise');
const {getNodeText, isNode, isTerminal} = require('./antlr-utils');

const QUOTED_REGEX = /^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')$/;

function eq(a, b) {
	if (_.isNil(a) && _.isNil(b))
		return true;
	if (_.isEqual(a, b))
		return true;
	try {
		return bn.eq(a, b);
	} catch (err) {
		return false;
	}
}

function add(a, b) {
	if (_.isArray(a))
		return [...a, b];
	return bn.add(a, b);
}

function toBool(x) {
	if (x === true)
		return true;
	if (!x || bn.eq(x, 0))
		return false;
	return true;
}

function isStringLiteral(x) {
	return QUOTED_REGEX.test(x);
}

function toString(x) {
	if (_.isNil(x))
		return '';
	if (_.isFunction(x.toString))
		return x.toString();
	if (isNode(x) || ixTerminal(x))
		return getNodeText(x).trim();
	if (_.isFunction(x))
		return `<Function>`;
	if (_.isNumber(x))
		return bn.parse(x);
	if (_.isArray(x))
		return _.map(x, i => toString(i)).join(',');
	if (typeof(x) != 'string')
		return `${x}`;
	return x;
}

function isList(x) {
	return _.isArray(x);
}

function getListItem(list, idx) {
	if (idx < 0 || idx >= list.length) {
		throw new Error(`Index ${idx} is out of range ` +
			`(${list.length})`);
	}
	return list[idx];
}

module.exports = {
	math: {
		add: add,
		sub: (a, b) => bn.sub(a, b),
		mul: (a, b) => bn.mul(a, b),
		div: (a, b) => bn.div(a, b),
		mod: (a, b) => bn.mod(a, b),
		pow: (a, b) => bn.pow(a, b),
		neg: x => bn.neg(x)
	},
	logical: {
		eq: (a, b) => eq(a, b),
		ne: (a, b) => !eq(a, b),
		lte: (a, b) => bn.lte(a, b),
		gte: (a, b) => bn.gte(a, b),
		lt: (a, b) => bn.lt(a, b),
		gt: (a, b) => bn.gt(a, b),
		or: (a, b) => toBool(a) || toBool(b),
		and: (a, b) => toBool(a) && toBool(b),
		bool: (x) => toBool(x)
	},
	bitwise: {
		xor: (a, b) => bitwise.xor(a, b),
		and: (a, b) => bitwise.and(a, b),
		or: (a, b) => bitwise.or(a, b),
		shift: (a, b) => bitwise.shift(a, b),
		invert: (x) => bitwise.invert(x)
	},
	string: {
		isStringLiteral: isStringLiteral,
		toString: toString
	},
	list: {
		isList: isList,
		at: getListItem
	}
};
