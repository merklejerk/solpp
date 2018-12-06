// Generated from SolParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SolParser.
function SolParserListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SolParserListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SolParserListener.prototype.constructor = SolParserListener;

// Enter a parse tree produced by SolParser#sourceUnit.
SolParserListener.prototype.enterSourceUnit = function(ctx) {
};

// Exit a parse tree produced by SolParser#sourceUnit.
SolParserListener.prototype.exitSourceUnit = function(ctx) {
};


// Enter a parse tree produced by SolParser#anything.
SolParserListener.prototype.enterAnything = function(ctx) {
};

// Exit a parse tree produced by SolParser#anything.
SolParserListener.prototype.exitAnything = function(ctx) {
};


// Enter a parse tree produced by SolParser#code.
SolParserListener.prototype.enterCode = function(ctx) {
};

// Exit a parse tree produced by SolParser#code.
SolParserListener.prototype.exitCode = function(ctx) {
};


// Enter a parse tree produced by SolParser#literal.
SolParserListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by SolParser#literal.
SolParserListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by SolParser#blockComment.
SolParserListener.prototype.enterBlockComment = function(ctx) {
};

// Exit a parse tree produced by SolParser#blockComment.
SolParserListener.prototype.exitBlockComment = function(ctx) {
};


// Enter a parse tree produced by SolParser#lineComment.
SolParserListener.prototype.enterLineComment = function(ctx) {
};

// Exit a parse tree produced by SolParser#lineComment.
SolParserListener.prototype.exitLineComment = function(ctx) {
};


// Enter a parse tree produced by SolParser#whitespace.
SolParserListener.prototype.enterWhitespace = function(ctx) {
};

// Exit a parse tree produced by SolParser#whitespace.
SolParserListener.prototype.exitWhitespace = function(ctx) {
};


// Enter a parse tree produced by SolParser#lineBreak.
SolParserListener.prototype.enterLineBreak = function(ctx) {
};

// Exit a parse tree produced by SolParser#lineBreak.
SolParserListener.prototype.exitLineBreak = function(ctx) {
};


// Enter a parse tree produced by SolParser#pragma.
SolParserListener.prototype.enterPragma = function(ctx) {
};

// Exit a parse tree produced by SolParser#pragma.
SolParserListener.prototype.exitPragma = function(ctx) {
};


// Enter a parse tree produced by SolParser#nakedImportStatement.
SolParserListener.prototype.enterNakedImportStatement = function(ctx) {
};

// Exit a parse tree produced by SolParser#nakedImportStatement.
SolParserListener.prototype.exitNakedImportStatement = function(ctx) {
};


// Enter a parse tree produced by SolParser#importStatement.
SolParserListener.prototype.enterImportStatement = function(ctx) {
};

// Exit a parse tree produced by SolParser#importStatement.
SolParserListener.prototype.exitImportStatement = function(ctx) {
};


// Enter a parse tree produced by SolParser#macroExpression.
SolParserListener.prototype.enterMacroExpression = function(ctx) {
};

// Exit a parse tree produced by SolParser#macroExpression.
SolParserListener.prototype.exitMacroExpression = function(ctx) {
};


// Enter a parse tree produced by SolParser#macroExpressionBody.
SolParserListener.prototype.enterMacroExpressionBody = function(ctx) {
};

// Exit a parse tree produced by SolParser#macroExpressionBody.
SolParserListener.prototype.exitMacroExpressionBody = function(ctx) {
};


// Enter a parse tree produced by SolParser#directive.
SolParserListener.prototype.enterDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#directive.
SolParserListener.prototype.exitDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#nakedDefineDirective.
SolParserListener.prototype.enterNakedDefineDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#nakedDefineDirective.
SolParserListener.prototype.exitNakedDefineDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#defineDirective.
SolParserListener.prototype.enterDefineDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#defineDirective.
SolParserListener.prototype.exitDefineDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#defineMacroDirective.
SolParserListener.prototype.enterDefineMacroDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#defineMacroDirective.
SolParserListener.prototype.exitDefineMacroDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#undefineDirective.
SolParserListener.prototype.enterUndefineDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#undefineDirective.
SolParserListener.prototype.exitUndefineDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#functionSpec.
SolParserListener.prototype.enterFunctionSpec = function(ctx) {
};

// Exit a parse tree produced by SolParser#functionSpec.
SolParserListener.prototype.exitFunctionSpec = function(ctx) {
};


// Enter a parse tree produced by SolParser#functionArgs.
SolParserListener.prototype.enterFunctionArgs = function(ctx) {
};

// Exit a parse tree produced by SolParser#functionArgs.
SolParserListener.prototype.exitFunctionArgs = function(ctx) {
};


// Enter a parse tree produced by SolParser#directivePayload.
SolParserListener.prototype.enterDirectivePayload = function(ctx) {
};

// Exit a parse tree produced by SolParser#directivePayload.
SolParserListener.prototype.exitDirectivePayload = function(ctx) {
};


// Enter a parse tree produced by SolParser#blockContent.
SolParserListener.prototype.enterBlockContent = function(ctx) {
};

// Exit a parse tree produced by SolParser#blockContent.
SolParserListener.prototype.exitBlockContent = function(ctx) {
};


// Enter a parse tree produced by SolParser#ifBlock.
SolParserListener.prototype.enterIfBlock = function(ctx) {
};

// Exit a parse tree produced by SolParser#ifBlock.
SolParserListener.prototype.exitIfBlock = function(ctx) {
};


// Enter a parse tree produced by SolParser#elifBlock.
SolParserListener.prototype.enterElifBlock = function(ctx) {
};

// Exit a parse tree produced by SolParser#elifBlock.
SolParserListener.prototype.exitElifBlock = function(ctx) {
};


// Enter a parse tree produced by SolParser#elseBlock.
SolParserListener.prototype.enterElseBlock = function(ctx) {
};

// Exit a parse tree produced by SolParser#elseBlock.
SolParserListener.prototype.exitElseBlock = function(ctx) {
};


// Enter a parse tree produced by SolParser#ifDirective.
SolParserListener.prototype.enterIfDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#ifDirective.
SolParserListener.prototype.exitIfDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#elseDirective.
SolParserListener.prototype.enterElseDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#elseDirective.
SolParserListener.prototype.exitElseDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#elifDirective.
SolParserListener.prototype.enterElifDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#elifDirective.
SolParserListener.prototype.exitElifDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#endifDirective.
SolParserListener.prototype.enterEndifDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#endifDirective.
SolParserListener.prototype.exitEndifDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#forBlock.
SolParserListener.prototype.enterForBlock = function(ctx) {
};

// Exit a parse tree produced by SolParser#forBlock.
SolParserListener.prototype.exitForBlock = function(ctx) {
};


// Enter a parse tree produced by SolParser#forDirective.
SolParserListener.prototype.enterForDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#forDirective.
SolParserListener.prototype.exitForDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#doneDirective.
SolParserListener.prototype.enterDoneDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#doneDirective.
SolParserListener.prototype.exitDoneDirective = function(ctx) {
};


// Enter a parse tree produced by SolParser#endDirective.
SolParserListener.prototype.enterEndDirective = function(ctx) {
};

// Exit a parse tree produced by SolParser#endDirective.
SolParserListener.prototype.exitEndDirective = function(ctx) {
};



exports.SolParserListener = SolParserListener;