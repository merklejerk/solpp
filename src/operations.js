const _ = require('lodash');
const bn = require('./bn');
const bitwise = require('./bitwise');
const {getNodeText, isNode, isTerminal} = require('./antlr-utils');

const QUOTED_REGEX = /^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)$/;
const HEX_LITERAL_REGEX = /^0x[0-9a-f]$/i;

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

function toBool(x) {
	if (x === true)
		return true;
	if (!x || bn.eq(x, 0))
		return false;
	return true;
}

function isQuotedString(x) {
	return QUOTED_REGEX.test(x);
}

function toString(x) {
	let r = '';
	if (_.isNil(x))
		r = '';
	else if (_.isString(x))
		r = x;
	else if (_.isFunction(x))
		r = x.builtinName || x.name || `<Function>`;
	else if (isNode(x) || isTerminal(x))
		r = getNodeText(x).trim();
	else if (_.isNumber(x))
		r = bn.parse(x);
	else if (_.isArray(x))
		r = '[' + _.map(x, i => toString(i)).join(', ') + ']';
	else if (_.isFunction(x.toString))
		r = x.toString();
	else
		r = `${x}`;
	r.literal = true;
	return r;
}

function toBuffer(x) {
	if (_.isBuffer(x))
		return x;
	if (x === true)
		x = 1;
	else if (x === false)
		x = 0;
	if (!_.isString(x) && typeof(x) != 'number')
		throw new Error('Type is not convertible to Buffer');
	if (_.isString(x)) {
		if (x.literal)
			return Buffer.from(x, 'utf-8');
		if (HEX_LITERAL_REGEX.test(x))
			return Buffer.from(x.substr(2), 'hex');
	}
	return bn.toBuffer(x);
}

function interpolate(str, evaluate, expand) {
	const re = /\$\$?\{[^}]*\}/gi;
	return toString(str.replace(re, s => {
		const m = /^(\$\$?)\{([^}]*)\}$/.exec(s);
		const mode = m[1] == '$$' ? evaluate : expand;
		const expr = m[2];
		return toString(mode(expr));
	}));
}

function unquote(x) {
	x = x.trim();
	if (isQuotedString(x)) {
		if (x[0] == '\'' || x[0] == '`')
			x = '"' + x.substr(1, x.length-2) + '"';
		x = JSON.parse(x);
	}
	return toString(x);
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

function isCallable(v) {
	return v && _.isArray(v.args) &&
		_.isFunction(v.expand) && _.isFunction(v.evaluate);
}

module.exports = {
	math: {
		add: (a, b) => bn.add(a, b),
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
		isQuotedString: isQuotedString,
		toString: toString,
		interpolate: interpolate,
		unquote: unquote
	},
	list: {
		isList: isList,
		at: getListItem
	},
	fn: {
		isCallable: isCallable
	},
	toBuffer: toBuffer
};
