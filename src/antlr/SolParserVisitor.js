// Generated from SolParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by SolParser.

function SolParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

SolParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
SolParserVisitor.prototype.constructor = SolParserVisitor;

// Visit a parse tree produced by SolParser#sourceUnit.
SolParserVisitor.prototype.visitSourceUnit = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#anything.
SolParserVisitor.prototype.visitAnything = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#code.
SolParserVisitor.prototype.visitCode = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#literal.
SolParserVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#blockComment.
SolParserVisitor.prototype.visitBlockComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#lineComment.
SolParserVisitor.prototype.visitLineComment = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#whitespace.
SolParserVisitor.prototype.visitWhitespace = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#lineBreak.
SolParserVisitor.prototype.visitLineBreak = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#pragma.
SolParserVisitor.prototype.visitPragma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#nakedImportStatement.
SolParserVisitor.prototype.visitNakedImportStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#importStatement.
SolParserVisitor.prototype.visitImportStatement = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#macroExpression.
SolParserVisitor.prototype.visitMacroExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#macroExpressionBody.
SolParserVisitor.prototype.visitMacroExpressionBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#directive.
SolParserVisitor.prototype.visitDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#nakedDefineDirective.
SolParserVisitor.prototype.visitNakedDefineDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#defineDirective.
SolParserVisitor.prototype.visitDefineDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#defineMacroDirective.
SolParserVisitor.prototype.visitDefineMacroDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#undefineDirective.
SolParserVisitor.prototype.visitUndefineDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#functionSpec.
SolParserVisitor.prototype.visitFunctionSpec = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#functionArgs.
SolParserVisitor.prototype.visitFunctionArgs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#directivePayload.
SolParserVisitor.prototype.visitDirectivePayload = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#blockContent.
SolParserVisitor.prototype.visitBlockContent = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#ifBlock.
SolParserVisitor.prototype.visitIfBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#elifBlock.
SolParserVisitor.prototype.visitElifBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#elseBlock.
SolParserVisitor.prototype.visitElseBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#ifDirective.
SolParserVisitor.prototype.visitIfDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#elseDirective.
SolParserVisitor.prototype.visitElseDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#elifDirective.
SolParserVisitor.prototype.visitElifDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#endifDirective.
SolParserVisitor.prototype.visitEndifDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#forBlock.
SolParserVisitor.prototype.visitForBlock = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#forDirective.
SolParserVisitor.prototype.visitForDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#doneDirective.
SolParserVisitor.prototype.visitDoneDirective = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by SolParser#endDirective.
SolParserVisitor.prototype.visitEndDirective = function(ctx) {
  return this.visitChildren(ctx);
};



exports.SolParserVisitor = SolParserVisitor;