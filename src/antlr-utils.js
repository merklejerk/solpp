'use strict'
const _ = require('lodash');
const antlr = require('antlr4');

function getNodeText(node, trim=false) {
	if (node.symbol && node.symbol.type == -1)
		return ''; // EOF
	let t = null;
	if (_.isNil(node.start)) {
		t = node.getText();
	} else {
		const start = node.start.start || node.start;
		const stop = node.stop.stop || node.stop;
		const stream = node.getInputStream ?
			node.getInputStream() : node.start.getInputStream();
		t = stream.getText(start, stop);
	}
	if (trim)
		return t.trim();
	return t;
}

function getNodeLocation(node) {
	return {
		line: node.line || node.start.line,
		column: node.column || node.start.column
	};
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

module.exports = {
	getNodeText: getNodeText,
	getNodeLocation: getNodeLocation,
	createLocationString: createLocationString,
	getNodeRuleName: getNodeRuleName,
	createParseTree: createParseTree
};
