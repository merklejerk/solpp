'use strict'
const _ = require('lodash');
const bn = require('./bn');

const BIT_FLIP = [1, 0];

function validateBitwiseOperand(n) {
	if (bn.dp(n) > 0)
		throw new Error('Bitwise operations only work with integer operands');
	return true;
}

function toBits(n, size=256) {
	validateBitwiseOperand(n);
	if (bn.sign(n) == -1) {
		// Do a two's complement for negative numbers.
		return twosComplement(bn.toBits(bn.abs(n), size));
	}
	return bn.toBits(n, size);
}

function twosComplement(bits) {
	bits = invertBits(bits);
	for (let i = bits.length; i > 0; i--) {
		const o = i - 1;
		if (bits[o] == 0) {
			bits[o] = 1;
			break;
		} else {
			bits[o] = 0;
		}
	}
	return bits;
}

function invertBits(bits) {
	return _.map(bits, b => BIT_FLIP[b]);
}

function invert(v, size=256) {
	return bn.fromBits(invertBits(toBits(v, size)));
}

function and(a, b, size=256) {
	const ba = toBits(a, size);
	const bb = toBits(b, size);
	const bits = _.times(size, i => ba[i] & bb[i]);
	return bn.fromBits(bits);
}

function or(a, b, size=256) {
	const ba = toBits(a, size);
	const bb = toBits(b, size);
	const bits = _.times(size, i => ba[i] | bb[i]);
	return bn.fromBits(bits);
}

function xor(a, b, size=256) {
	const ba = toBits(a, size);
	const bb = toBits(b, size);
	const bits = _.times(size, i => ba[i] ^ bb[i]);
	return bn.fromBits(bits);
}

function shift(v, shift, size=256) {
	validateBitwiseOperand(shift);
	shift = bn.toNumber(shift);
	const bits = toBits(v, size);
	const shifted = [];
	for (let i = 0; i < bits.length; i++) {
		const o = i + shift;
		if (o >= bits.length || o < 0)
			shifted.push(0);
		else
			shifted.push(bits[o]);
	}
	return bn.fromBits(shifted);
}

module.exports = {
	toBits: toBits,
	invert: invert,
	and: and,
	or: or,
	xor: xor,
	shift: shift
};
