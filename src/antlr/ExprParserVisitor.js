// Generated from ExprParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

function ExprParserVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprParserVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprParserVisitor.prototype.constructor = ExprParserVisitor;

// Visit a parse tree produced by ExprParser#expressionRoot.
ExprParserVisitor.prototype.visitExpressionRoot = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#powerOperation.
ExprParserVisitor.prototype.visitPowerOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#groupOperation.
ExprParserVisitor.prototype.visitGroupOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#valueOperation.
ExprParserVisitor.prototype.visitValueOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#ternaryOperation.
ExprParserVisitor.prototype.visitTernaryOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#indexOperation.
ExprParserVisitor.prototype.visitIndexOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#definedOperation.
ExprParserVisitor.prototype.visitDefinedOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#bitwiseOperation.
ExprParserVisitor.prototype.visitBitwiseOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#logicalNotOperation.
ExprParserVisitor.prototype.visitLogicalNotOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#bitwiseInvertOperation.
ExprParserVisitor.prototype.visitBitwiseInvertOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#peekOperation.
ExprParserVisitor.prototype.visitPeekOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#arithmeticOperation.
ExprParserVisitor.prototype.visitArithmeticOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#negateOperation.
ExprParserVisitor.prototype.visitNegateOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#callOperation.
ExprParserVisitor.prototype.visitCallOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#logicalOperation.
ExprParserVisitor.prototype.visitLogicalOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#listOperation.
ExprParserVisitor.prototype.visitListOperation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#expressionValue.
ExprParserVisitor.prototype.visitExpressionValue = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#identifier.
ExprParserVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#stringLiteral.
ExprParserVisitor.prototype.visitStringLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#booleanLiteral.
ExprParserVisitor.prototype.visitBooleanLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#octalLiteral.
ExprParserVisitor.prototype.visitOctalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#hexLiteral.
ExprParserVisitor.prototype.visitHexLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#binaryLiteral.
ExprParserVisitor.prototype.visitBinaryLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#decimalLiteral.
ExprParserVisitor.prototype.visitDecimalLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#callArguments.
ExprParserVisitor.prototype.visitCallArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#listItems.
ExprParserVisitor.prototype.visitListItems = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprParserVisitor = ExprParserVisitor;