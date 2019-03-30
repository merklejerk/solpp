'use strict'
const _ = require('lodash');
const fs = require('mz/fs');
const axios = require('axios');
const promisify = require('util').promisify;
const {URL} = require('url');
const {
    dirname,
    isAbsolute,
    resolve:resolvePath,
    sep:pathSeparator
} = require('path');
const resolveModuleFile = promisify(require('resolve'));

const URL_PATH_TEST = /^https?:\/\//i;
const RELATIVE_PATH_TEST = createRelativePathTest();

function createRelativePathTest() {
    if (pathSeparator === '\\')
        pathSeparator = '\\\\';
    const regex = `^[.]+${pathSeparator}.+$`;
    return new RegExp(regex, 'i');
}

function isURLPath(path, cwd, from) {
	if (URL_PATH_TEST.test(path) || URL_PATH_TEST.test(cwd))
		return true;
	return false;
}

function isRelativePath(path, cwd, from) {
    if (_.isNil(from))
        return true;
    return !URL_PATH_TEST.test(cwd) && RELATIVE_PATH_TEST.test(path);
}

function dirnameURL(url) {
	const r = new URL(url);
	r.pathname = r.pathname.substr(0,
		Math.max(0, r.pathname.lastIndexOf('/'))) || '/';
	return r.href;
}

function joinURLPath(cwd, path) {
	if (URL_PATH_TEST.test(path))
		return path;
	if (!URL_PATH_TEST.test(cwd))
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

async function urlResolver(path, cwd, from) {
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

async function relativeResolver(path, cwd, from) {
	const resolved = resolvePath(cwd, path);
	const code = await fs.readFile(resolved, 'utf-8');
	return {
		code: code,
		name: resolved,
		cwd: dirname(resolved)
	};
}

async function moduleResolver(path, cwd, from) {
    const resolved = await resolveModuleFile(path, {basedir: dirname(cwd)});
	const code = await fs.readFile(resolved, 'utf-8');
	return {
		code: code,
		name: resolved,
		cwd: dirname(resolved)
	};
}

async function resolver(path, cwd, from) {
	if (isURLPath(path, cwd, from))
		return urlResolver(path, cwd, from);
    if (isRelativePath(path, cwd, from))
        return relativeResolver(path, cwd, from);
     return moduleResolver(path, cwd, from);
}

module.exports = resolver;
