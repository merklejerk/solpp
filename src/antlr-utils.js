'use strict'
const _ = require('lodash');
const antlr = require('antlr4');

function isNode(v) {
	return _.isFunction(v.getRuleContext);
}

function isTerminal(v) {
	return _.isObject(v.symbol);
}

function getNodeText(node, trim=false) {
	if (node.symbol && node.symbol.type == -1)
		return ''; // EOF
	let t = '';
	if (node.symbol) {
		t = node.getText()
	} else if (node.children) {
		for (let ch of node.children)
			t += getNodeText(ch);
	} else {
		t = node.getInputStream().getText(node.start, node.stop);
	}
	if (trim)
		return t.trim();
	return t;
}

function getNodeLineText(node, trim=false) {
	const {line:lineNumber} = getNodeLocation(node);
	const src = getNodeInputStream(node).strdata;
	const lines = src.split(/\r?\n/);
	const line = lines[lineNumber-1];
	if (trim)
		return line.trim();
	return line;
}

function getNodeInputStream(node) {
	if (_.isFunction(node.getInputStream))
		return node.getInputStream();
	return node.start.source[0]._input;
}

function getNodeLocation(node) {
	return {
		line: node.line || node.start.line,
		column: node.column || node.start.column,
		start: node.start.start || node.start
	};
}

function getNodeIndentation(node) {
	const line = getNodeLineText(node);
	const m = /^\s+/.exec(line);
	if (!m)
		return '';
	return m[0];
}

function createLocationString(loc, unit) {
	const {line, column} = loc;
	return `"${unit}" (${line}:${column})`;
}

function getNodeRuleName(node) {
	if (!node.getRuleContext)
		return;
	const ctx = node.getRuleContext();
	const cname = ctx.constructor.name;
	return cname.substr(cname, cname.length - 'Context'.length);
}

class ErrorListener extends antlr.error.ErrorListener {
	syntaxError(recognizer, offendingSymbol, line, column, message) {
		throw new Error(`${message} (${line}:${column})`);
	}
}

function createParseTree(LexerType, ParserType, startRule, text, mode=null) {
	const errors = new ErrorListener();
	const lexer = new LexerType(antlr.CharStreams.fromString(text));
	// If mode was passed, jump straight into that mode.
	if (_.isString(mode) && _.includes(lexer.modeNames, mode))
		lexer.mode(_.indexOf(lexer.modeNames, mode));
	const tokens = new antlr.CommonTokenStream(lexer);
	const parser = new ParserType(tokens);
	parser.removeErrorListeners();
	lexer.removeErrorListeners();
	parser.addErrorListener(errors);
	lexer.addErrorListener(errors);
	parser.buildParseTrees = true;
	return parser[startRule]();
}

class NodeError extends Error {
	constructor(node, message, inner) {
		super(message, inner);
		this.name = this.constructor.name;
		this.node = node;
		Object.setPrototypeOf(this, NodeError.prototype);
	}
}

module.exports = {
	getNodeText,
	getNodeLocation,
	getNodeIndentation,
	getNodeLineText,
	createLocationString,
	getNodeRuleName,
	createParseTree,
	isNode,
	isTerminal,
	NodeError
};
