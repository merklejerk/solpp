'use strict'
const _ = require('lodash');
const {resolve} = require('path');
const Oven = require('./oven');
const resolver = require('./resolver');

function collapseEmptyLines(code) {
	let emptyCounter = 0;
	const lines = code.split(/[\r\n]/);
	const r = [];
	for (let line of lines) {
		line = _.trimEnd(line);
		if (!line) {
			if (emptyCounter++ > 0)
				continue;
		} else {
			emptyCounter = 0;
		}
		r.push(line);
	}
	if (r.length > 0 && !_.last(r))
		r.splice(r.length-1, 1);
	return _.trimEnd(r.join('\n'));
}

async function processCode(code, opts={}) {
	opts = _.defaults({depth: 0}, opts, {
			cwd: resolve(process.cwd()),
			resolver: resolver,
			collapseEmptyLines: true
		});
	const output = await (new Oven(opts).transform(code));
	if (opts.collapseEmptyLines)
		return collapseEmptyLines(output);
	return output;
}

async function processFile(file, opts={}) {
	opts = _.defaults({depth: 0}, opts, {
			cwd: resolve(process.cwd()),
			resolver: resolver,
			collapseEmptyLines: true
		});
	const resolved = await opts.resolver(file, opts.cwd, null);
	if (!resolved)
		throw new Error(`File not found: "${file}"`);
	_.assign(opts, {
			cwd: resolved.cwd,
			name: resolved.name
		});
	return processCode(resolved.code, opts);
}

module.exports = {
	processCode: processCode,
	processFile: processFile,
	resolver: resolver
};
