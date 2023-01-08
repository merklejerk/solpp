'use strict'
const _ = require('lodash');
const assert = require('assert');
const merge = require('../src/semver-merge');


describe('semver-merge', function() {
	it('Throws with incompatible semvers', async function() {
		const MERGE_ERROR = /^Cannot reconcile semvers/i;
		assert.throws(() => merge(['0.5', '^0.4.24']), (err) => MERGE_ERROR.test(err.message));
		assert.throws(() => merge(['^0.5', '^0.4.24']), (err) => MERGE_ERROR.test(err.message));
		assert.throws(() => merge(['0.4.24', '<0.4.24']), (err) => MERGE_ERROR.test(err.message));
		assert.throws(() => merge(['0.4.0', '0.4.24']), (err) => MERGE_ERROR.test(err.message));
	});

	it('Reconciles to highest semver', async function() {
		assert.equal(merge(['0.5', '>=0.4.24']), '0.5.0');
		assert.equal(merge(['^0.4', '^0.4.24']), '0.4.24');
		assert.equal(merge(['0.4', '^0.4.24']), '0.4.24');
		assert.equal(merge(['0.4', '0.4.24']), '0.4.24');
		assert.equal(merge(['^0.4', '0.4.24']), '0.4.24');
	});

	it('Handles multiple ranges with the same base version', async function() {
		assert.equal(merge(['=0.4.24', '>=0.4.24']), '0.4.24');
	});
});
