'use strict'
const _ = require('lodash');
const bn = require('bn-str-256');
const ethjs = require('ethereumjs-util');
const ops = require('./operations');
const FunctionAdapter = require('./function-adapter');

const MIN_UINT8_VALUE = 0;
const MIN_UINT16_VALUE = 0;
const MIN_UINT32_VALUE = 0;
const MIN_UINT64_VALUE = 0;
const MIN_UINT128_VALUE = 0;
const MIN_UINT256_VALUE = 0;
const MAX_UINT8_VALUE = bn.sub(bn.pow(2, 8), 1);
const MAX_UINT16_VALUE = bn.sub(bn.pow(2, 16), 1);
const MAX_UINT32_VALUE = bn.sub(bn.pow(2, 32), 1);
const MAX_UINT64_VALUE = bn.sub(bn.pow(2, 64), 1);
const MAX_UINT128_VALUE = bn.sub(bn.pow(2, 128), 1);
const MAX_UINT256_VALUE = bn.sub(bn.pow(2, 256), 1);
const MAX_INT8_VALUE = bn.sub(bn.pow(2, 8-1), 1);
const MIN_INT8_VALUE = bn.neg(bn.pow(2, 8-1));
const MAX_INT16_VALUE = bn.sub(bn.pow(2, 16-1), 1);
const MIN_INT16_VALUE = bn.neg(bn.pow(2, 16-1));
const MAX_INT32_VALUE = bn.sub(bn.pow(2, 32-1), 1);
const MIN_INT32_VALUE = bn.neg(bn.pow(2, 32-1));
const MAX_INT64_VALUE = bn.sub(bn.pow(2, 64-1), 1);
const MIN_INT64_VALUE = bn.neg(bn.pow(2, 64-1));
const MAX_INT128_VALUE = bn.sub(bn.pow(2, 128-1), 1);
const MIN_INT128_VALUE = bn.neg(bn.pow(2, 128-1));
const MAX_INT256_VALUE = bn.sub(bn.pow(2, 256-1), 1);
const MIN_INT256_VALUE = bn.neg(bn.pow(2, 256-1));

const HEX_LITERAL_REGEX = /^0x[0-9a-f]$/i;

function int(n) {
	return bn.int(n);
}

function uint(n) {
	return bn.max(bn.int(n), 0);
}

function _uint(n, bytes) {
	return bn.int(bn.mod(bn.max(0, bn.int(n || 0)), bn.pow(2, bytes * 8)));
}

function _int(n, bytes) {
	return bn.int(bn.mod(bn.int(n || 0), bn.pow(2, bytes * 8)));
}

function uint8(n) {
	return _uint(n, 1);
}

function uint16(n) {
	return _uint(n, 2);
}

function uint32(n) {
	return _uint(n, 4);
}

function uint64(n) {
	return _uint(n, 8);
}

function uint128(n) {
	return _uint(n, 16);
}

function uint256(n) {
	return _uint(n, 32);
}

function int8(n) {
	return _int(n, 1);
}

function int16(n) {
	return _int(n, 2);
}

function int32(n) {
	return _int(n, 4);
}

function int64(n) {
	return _int(n, 8);
}

function int128(n) {
	return _int(n, 16);
}

function int256(n) {
	return _int(n, 32);
}

function log(n, base) {
	if (bn.sign(n) == -1)
		throw new Error('Cannot take the logarithm of a negative');
	return bn.log(n, base);
}
log.minArgs = 1;

function exp(y) {
	return bn.exp(y);
}

function sqrt(n) {
	if (bn.sign(n) == -1)
		throw new Error('Cannot take the square root of a negative');
	return bn.sqrt(n);
}

function round(n) {
	return bn.round(n);
}

function max(a, b) {
	return bn.max(a, b);
}

function min(a, b) {
	return bn.min(a, b);
}

function clamp(x, lo, hi) {
	return bn.clamp(x, lo, hi);
}

function abs(x) {
	return bn.abs(x);
}

function sign(x) {
	return bn.sign(x);
}

function sd(x, digits) {
	if (digits)
		return bn.sd(x, bn.toNumber(digits));
	return bn.sd(x);
}
sd.minArgs = 1;

function dp(x, digits) {
	if (digits)
		return bn.dp(x, bn.toNumber(digits));
	return bn.dp(x);
}
dp.minArgs = 1;

function hex(x, bytes) {
	x = x || 0;
	if (bytes) {
		const length = bn.toNumber(bn.int(bn.parse(bytes))) * 2;
		return bn.toHex(x, length);
	}
	return bn.toHex(x);
}
hex.minArgs = 1;

function decimal(x) {
	return bn.parse(x);
}

function _toString(x) {
	if (_.isNil(x))
		return '';
	if (typeof(x) != 'string')
		return `${x}`;
	return x;
}

function quote(x) {
	return JSON.stringify(_toString(x));
}

function unquote(x) {
	x = x.trim();
	if (ops.isStringLiteral(x)) {
		if (x[0] == '\'')
			x = '"' + x.substr(1, x.length-2) + '"';
		return JSON.parse(x);
	}
	return x;
}

function concat(...args) {
	let r = '';
	for (let a of args)
		r += _toString(a);
	return r;
}
concat.maxArgs = 1000;
concat.minArgs = 1;

function strHex(x, bytes=null, encoding='utf-8') {
	bytes = bn.toNumber(bn.int(bytes || 0));
	const L = Math.abs(bytes);
	let strbuf = Buffer.from(`${x}`, encoding || 'utf-8');
	if (L) {
		if (strbuf.length > L) {
			if (bytes >= 0)
				strbuf = strbuf.slice(bytes);
			else
				strbuf = strbuf.slice(0, bytes);
		}
		else if (strbuf.length < L) {
			const padding = Buffer.alloc(L - strbuf.length);
			if (bytes >= 0)
				strbuf = Buffer.concat([padding, strbuf]);
			else
				strbuf = Buffer.concat([strbuf, padding]);
		}
	}
	return '0x'+strbuf.toString('hex');
}
strHex.minArgs = 1;
strHex.maxArgs = 3;

function uppercase(s) {
	return _toString(s).toUpperCase();
}

function lowercase(s) {
	return _toString(s).toLowerCase();
}

function camelcase(s) {
	return _.camelCase(_toString(s));
}

function capitalize(s) {
	return _.capitalize(_toString(s));
}

function keccak(...args) {
	const buffers = [];
	for (let a of args) {
		try {
			if (a === true)
				a = 1;
			else if (a === false)
				a = 0;
			if (typeof(a) != 'string' && typeof(a) != 'number')
				throw new Error('Unsupported type');
			if (typeof(a) == 'string' && HEX_LITERAL_REGEX.test(a)) {
				buffers.push(Buffer.from(a.substr(2), 'hex'));
			}
			try {
				buffers.push(bn.toBuffer(a));
			} catch (err) {
				buffers.push(Buffer.from(a, 'utf-8'));
			}
		} catch (err) {
			throw new Error(`Cannot convert ${a} to a buffer for hashing.`);
		}
	}
	return '0x' + ethjs.keccak256(Buffer.concat(buffers)).toString('hex');
}
keccak.minArgs = 1;
keccak.maxArgs = 1000;

function keyToAddress(key) {
	if (!_.isBuffer(key))
		key = bn.toBuffer(key, 32);
	return ethjs.toChecksumAddress(
		'0x'+ethjs.privateToAddress(key).toString('hex'));
}

function islist(x) {
	return _.isArray(x);
}

function range(end, start, step) {
	if (_.isNil(start)) {
		end = bn.int(end);
		start = '0';
	}
	else {
		const t = end;
		end = bn.int(start || 0);
		start = bn.int(t || 0);
	}
	step = bn.int(step || 0);
	if (bn.eq(step, 0))
		step = bn.gte(end, start) ? '1' : '-1';
	const r = [start];
	while (true) {
		const next = bn.add(_.last(r), step);
		if (bn.sign(step) == -1 && bn.lte(next, end))
			break;
		else if (bn.sign(step) == 1 && bn.gte(next, end))
			break;
		r.push(next);
	}
	return r;
}
range.minArgs = 1;
range.maxArgs = 3;

function join(list, separator) {
	separator = _toString(separator || '');
	if (!_.isArray(list))
		throw new Error(`"${list}" is not a list`);
	return _.map(list, i => _toString(i)).join(separator);
}
join.minArgs = 1;
join.minArgs = 2;

function len(x) {
	if (!_.isArrayLike(x))
		throw new Error(`Cannot take the length of "${x}"`);
	return x.length;
}

function sum(list) {
	if (!_.isArray(list))
		throw new Error(`"${list}" is not a list`);
	return _.reduce(list, (s,v) => bn.add(s, v), '0');
}

function map(list, fn) {
	if (!_.isArray(list))
		throw new Error(`"${list}" is not a list`);
	fn = new FunctionAdapter(fn);
	const r = [];
	for (let i = 0; i < list.length; i++) {
		if (fn.maxArgs >= 2)
			r.push(fn.evaluate([list[i], i], this));
		else
			r.push(fn.evaluate([list[i]], this));
	}
	return r;
}

function reduce(list, fn, initial='0') {
	if (!_.isArray(list))
		throw new Error(`"${list}" is not a list`);
	fn = new FunctionAdapter(fn);
	let r = initial;
	for (let i = 0; i < list.length; i++) {
		if (fn.maxArgs >= 3)
			r = fn.evaluate([r, list[i], i], this);
		else
			r = fn.evaluate([r, list[i]], this);
	}
	return r;
}
reduce.minArgs = 2;
reduce.maxArgs = 3;

module.exports = {
	int: int,
	int8: int8,
	int16: int16,
	int32: int32,
	int64: int64,
	int128: int128,
	int256: int256,
	uint: uint,
	uint8: uint8,
	uint16: uint16,
	uint32: uint32,
	uint64: uint64,
	uint128: uint128,
	uint256: uint256,
	log: log,
	exp: exp,
	sqrt: sqrt,
	round: round,
	max: max,
	min: min,
	clamp: clamp,
	abs: abs,
	sign: sign,
	sd: sd,
	dp: dp,
	hex: hex,
	decimal: decimal,
	bool: ops.logical.bool,
	quote: quote,
	unquote: unquote,
	uppercase: uppercase,
	lowercase: lowercase,
	camelcase: camelcase,
	capitalize: capitalize,
	strhex: strHex,
	concat: concat,
	keccak: keccak,
	keccak256: keccak,
	key2addr: keyToAddress,
	islist: islist,
	range: range,
	join: join,
	len: len,
	sum: sum,
	map: map,
	reduce: reduce,
	E: bn.E,
	PI: bn.PI,
	MIN_UINT8_VALUE: MIN_UINT8_VALUE,
	MIN_UINT16_VALUE: MIN_UINT16_VALUE,
	MIN_UINT32_VALUE: MIN_UINT32_VALUE,
	MIN_UINT64_VALUE: MIN_UINT64_VALUE,
	MIN_UINT128_VALUE: MIN_UINT128_VALUE,
	MIN_UINT256_VALUE: MIN_UINT256_VALUE,
	MAX_UINT8_VALUE: MAX_UINT8_VALUE,
	MAX_UINT16_VALUE: MAX_UINT16_VALUE,
	MAX_UINT32_VALUE: MAX_UINT32_VALUE,
	MAX_UINT64_VALUE: MAX_UINT64_VALUE,
	MAX_UINT128_VALUE: MAX_UINT128_VALUE,
	MAX_UINT256_VALUE: MAX_UINT256_VALUE,
	MAX_INT8_VALUE: MAX_INT8_VALUE,
	MIN_INT8_VALUE: MIN_INT8_VALUE,
	MAX_INT16_VALUE: MAX_INT16_VALUE,
	MIN_INT16_VALUE: MIN_INT16_VALUE,
	MAX_INT32_VALUE: MAX_INT32_VALUE,
	MIN_INT32_VALUE: MIN_INT32_VALUE,
	MAX_INT64_VALUE: MAX_INT64_VALUE,
	MIN_INT64_VALUE: MIN_INT64_VALUE,
	MAX_INT128_VALUE: MAX_INT128_VALUE,
	MIN_INT128_VALUE: MIN_INT128_VALUE,
	MAX_INT256_VALUE: MAX_INT256_VALUE,
	MIN_INT256_VALUE: MIN_INT256_VALUE
};
