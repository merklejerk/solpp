'use strict'
const _ = require('lodash');
const path = require('path');
const lib = require('../../src/index');
const fs = require('mz/fs');

const OPTS = {
	defs: require(path.resolve(__dirname, './defs.json')),
	tolerant: true
}

if (require.main == module) {
	// (async function() {
	// 	try {
	// 		const src = path.resolve(__dirname, '../contracts/TestContract.sol');
	// 		const r = await lib.processFile(src, OPTS);
	// 		console.log(r);
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// })();
	(async function() {
		try {
			const src = path.resolve(__dirname, '../contracts/TestContract_06.sol');
			const r = await lib.processFile(src, OPTS);
			console.log(r);
		} catch (err) {
			console.error(err);
		}
	})();
}

module.exports = {
	OPTS: OPTS
};
