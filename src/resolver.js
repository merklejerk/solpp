'use strict'
const _ = require('lodash');
const fs = require('mz/fs');
const axios = require('axios');
const {URL} = require('url');
const {dirname, isAbsolute, resolve} = require('path');

const URL_TEST = /^https?:\/\//i;

function isURL(path, cwd, from) {
	if (URL_TEST.test(path) || URL_TEST.test(cwd))
		return true;
	return false;
}

function dirnameURL(url) {
	const r = new URL(url);
	r.pathname = r.pathname.substr(0,
		Math.max(0, r.pathname.lastIndexOf('/'))) || '/';
	return r.href;
}

function joinURLPath(cwd, path) {
	if (URL_TEST.test(path))
		return path;
	if (!URL_TEST.test(cwd))
		throw new Error(`Cannot resolve URL segment "${path}" from "${cwd}"`);
	let {origin, pathname} = new URL(cwd);
	const pathParts = _.filter(
		[...pathname.split('/'), ...path.split('/')], p => !!p);
	const outputPath = [];
	for (let p of pathParts) {
		if (p == '..')
			outputPath.pop();
		else
			outputPath.push(p)
	}
	return new URL(outputPath.join('/'), origin).href;
}

async function URLResolver(path, cwd, from) {
	const url = joinURLPath(cwd, path);
	const dir = dirnameURL(url);
	try {
		const response = await axios.get(url);
		return {
			code: response.data,
			name: url,
			cwd: dir
		};
	} catch (err) {
		throw new Error(`Failed to fetch URL "${url}": ${err.message}`);
	}
}

async function resolver(path, cwd, from) {
	if (isURL(path, cwd, from))
		return URLResolver(path, cwd, from);
	if (!isAbsolute(path))
		path = resolve(cwd, path);
	const code = await fs.readFile(path, 'utf-8');
	return {
		code: code,
		name: path,
		cwd: dirname(path)
	};
}

module.exports = resolver;
