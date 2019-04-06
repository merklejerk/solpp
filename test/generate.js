'use strict'
const _ = require('lodash');
const path = require('path');
const fs = require('mz/fs');
const assert = require('assert');
const lib = require('../src/index');
const {OPTS} = require('./reference/generate');

const INPUT_FILE = path.resolve(__dirname, './contracts/TestContract.sol');
const REFERENCE_FILE = path.resolve(__dirname, './reference/TestContract.sol');

describe('solidity-oven', function() {
	it('generates the reference output', async function() {
		const ref = await fs.readFile(REFERENCE_FILE, 'utf-8');
		const output = await lib.processFile(INPUT_FILE, OPTS);
		assert.equal(_.trimEnd(output), _.trimEnd(ref));
	});
});
