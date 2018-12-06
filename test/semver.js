'use strict'
const _ = require('lodash');
const assert = require('assert');
const merge = require('../src/semver-merge');


describe('semver-merge', function() {
	it('Throws with incompatible semvers', async function() {
		const MERGE_ERROR = {message: /^Cannot reconcile semvers/i};
		assert.throws(() => merge(['0.5', '^0.4.24']), MERGE_ERROR);
		assert.throws(() => merge(['^0.5', '^0.4.24']), MERGE_ERROR);
		assert.throws(() => merge(['0.4.24', '<0.4.24']), MERGE_ERROR);
		assert.throws(() => merge(['0.4.0', '0.4.24']), MERGE_ERROR);
	});

	it('Reconciles to highest semver', async function() {
		assert.equal(merge(['0.5', '>=0.4.24']), '0.5.0');
		assert.equal(merge(['^0.4', '^0.4.24']), '0.4.24');
		assert.equal(merge(['0.4', '^0.4.24']), '0.4.24');
		assert.equal(merge(['0.4', '0.4.24']), '0.4.24');
		assert.equal(merge(['^0.4', '0.4.24']), '0.4.24');
	});
});
