const _ = require('lodash');
const bn = require('bn-str-256');
const bitwise = require('./bitwise');

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
	}
};
