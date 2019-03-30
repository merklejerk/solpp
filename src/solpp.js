#!/usr/bin/env node
'use strict'
const _ = require('lodash');
const program = require('commander');
const path = require('path');
const fs = require('mz/fs');
const process = require('process');
const lib = require('./index');
const VERSION = require('../package.json').version;

process.on('unhandledRejection', err => {
	console.error(err);
	process.exitCode = -1;
});

function defineDef(v, defs) {
	defs = defs || {};
	const m = /^([a-z_][a-z0-9_]*)(\s*=(.+))?$/i.exec(v);
	const key = m[1].trim() ;
	let val = (m[3] || '').trim() || true;
	if (val == 'true')
		val = true;
	else if (val == 'false')
		val = false;
	defs[key] = val;
	return defs;
}

function loadDefs(file) {
	return require(path.resolve(file));
}

program
	.version(VERSION, '-v --version')
	.arguments('<source-file>')
	.option('-o, --output <file>', 'write output to a file (instead of stdout)')
	.option('--no-flatten', 'do not flatten (include) naked imports')
	.option('--no-pp', 'disable the preprocessor (just flatten)')
	.option('-D, --define <name>[=value]', 'define a preprocessor symbol (can be repeated)',
		defineDef)
	.option('--defs <file>', 'preprocessor definitions JS or JSON file')
	.option('--tolerant', 'ignore missing imports when flattening')
	.action(async function(file) {
		let defs = _.assign(
			{}, this.defs ? loadDefs(this.defs) : {}, this.define);
		const opts = {
			defs: defs,
			tolerant: this.tolerant || false,
			noFlatten: !this.flatten,
			noPreprocessor: !this.pp
		};
		const output = await lib.processFile(file, opts);
		if (this.output)
			await fs.writeFile(path.resolve(this.output), output, 'utf-8');
		else
			console.log(output);
	});

const p = program.parse(process.argv);
if (_.isEmpty(p.args))
	p.outputHelp();
