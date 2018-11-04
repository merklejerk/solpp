// Generated from ./ExprParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprParserListener = require('./ExprParserListener').ExprParserListener;
var ExprParserVisitor = require('./ExprParserVisitor').ExprParserVisitor;

var grammarFileName = "ExprParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001ft\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0005\u00031\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0005\u0003P\n\u0003\u0003\u0003\u0007\u0003S\n\u0003",
    "\f\u0003\u000e\u0003V\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004\\\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0005\bh\n\b\u0003\t\u0003\t\u0003\t\u0005\tm\n\t\u0003\n\u0003\n\u0003",
    "\n\u0005\nr\n\n\u0003\n\u0002\u0003\u0004\u000b\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0002\u0004\u0003\u0002\u0016\u0018\u0003\u0002",
    "\u0014\u0015\u0002\u0082\u0002\u0014\u0003\u0002\u0002\u0002\u00040",
    "\u0003\u0002\u0002\u0002\u0006[\u0003\u0002\u0002\u0002\b]\u0003\u0002",
    "\u0002\u0002\n_\u0003\u0002\u0002\u0002\fa\u0003\u0002\u0002\u0002\u000e",
    "g\u0003\u0002\u0002\u0002\u0010i\u0003\u0002\u0002\u0002\u0012n\u0003",
    "\u0002\u0002\u0002\u0014\u0015\u0005\u0004\u0003\u0002\u0015\u0016\u0007",
    "\u0002\u0002\u0003\u0016\u0003\u0003\u0002\u0002\u0002\u0017\u0018\b",
    "\u0003\u0001\u0002\u00181\u0005\u0006\u0004\u0002\u0019\u001a\u0007",
    "\r\u0002\u0002\u001a\u001b\u0005\u0012\n\u0002\u001b\u001c\u0007\u000e",
    "\u0002\u0002\u001c1\u0003\u0002\u0002\u0002\u001d\u001e\u0007\u000b",
    "\u0002\u0002\u001e\u001f\u0005\u0004\u0003\u0002\u001f \u0007\f\u0002",
    "\u0002 1\u0003\u0002\u0002\u0002!\"\u0007\u0011\u0002\u0002\"#\u0007",
    "\u000b\u0002\u0002#$\u0007\u0013\u0002\u0002$1\u0007\f\u0002\u0002%",
    "&\u0007\u0012\u0002\u0002&\'\u0007\u000b\u0002\u0002\'(\u0005\u0004",
    "\u0003\u0002()\u0007\f\u0002\u0002)1\u0003\u0002\u0002\u0002*+\u0007",
    "\u001b\u0002\u0002+1\u0005\u0004\u0003\u000b,-\u0007\u0015\u0002\u0002",
    "-1\u0005\u0004\u0003\t./\u0007\u0019\u0002\u0002/1\u0005\u0004\u0003",
    "\u00040\u0017\u0003\u0002\u0002\u00020\u0019\u0003\u0002\u0002\u0002",
    "0\u001d\u0003\u0002\u0002\u00020!\u0003\u0002\u0002\u00020%\u0003\u0002",
    "\u0002\u00020*\u0003\u0002\u0002\u00020,\u0003\u0002\u0002\u00020.\u0003",
    "\u0002\u0002\u00021T\u0003\u0002\u0002\u000223\f\n\u0002\u000234\u0007",
    "\u001a\u0002\u00024S\u0005\u0004\u0003\n56\f\b\u0002\u000267\u0007\u001c",
    "\u0002\u00027S\u0005\u0004\u0003\t89\f\u0007\u0002\u00029:\t\u0002\u0002",
    "\u0002:S\u0005\u0004\u0003\b;<\f\u0006\u0002\u0002<=\t\u0003\u0002\u0002",
    "=S\u0005\u0004\u0003\u0007>?\f\u0005\u0002\u0002?@\u0007\u001d\u0002",
    "\u0002@S\u0005\u0004\u0003\u0006AB\f\u0003\u0002\u0002BC\u0007\u001e",
    "\u0002\u0002CD\u0005\u0004\u0003\u0002DE\u0007\u001f\u0002\u0002EF\u0005",
    "\u0004\u0003\u0004FS\u0003\u0002\u0002\u0002GH\f\u0011\u0002\u0002H",
    "I\u0007\r\u0002\u0002IJ\u0005\u0004\u0003\u0002JK\u0007\u000e\u0002",
    "\u0002KS\u0003\u0002\u0002\u0002LM\f\f\u0002\u0002MO\u0007\u000b\u0002",
    "\u0002NP\u0005\u0010\t\u0002ON\u0003\u0002\u0002\u0002OP\u0003\u0002",
    "\u0002\u0002PQ\u0003\u0002\u0002\u0002QS\u0007\f\u0002\u0002R2\u0003",
    "\u0002\u0002\u0002R5\u0003\u0002\u0002\u0002R8\u0003\u0002\u0002\u0002",
    "R;\u0003\u0002\u0002\u0002R>\u0003\u0002\u0002\u0002RA\u0003\u0002\u0002",
    "\u0002RG\u0003\u0002\u0002\u0002RL\u0003\u0002\u0002\u0002SV\u0003\u0002",
    "\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002U\u0005",
    "\u0003\u0002\u0002\u0002VT\u0003\u0002\u0002\u0002W\\\u0005\n\u0006",
    "\u0002X\\\u0005\u000e\b\u0002Y\\\u0005\f\u0007\u0002Z\\\u0005\b\u0005",
    "\u0002[W\u0003\u0002\u0002\u0002[X\u0003\u0002\u0002\u0002[Y\u0003\u0002",
    "\u0002\u0002[Z\u0003\u0002\u0002\u0002\\\u0007\u0003\u0002\u0002\u0002",
    "]^\u0007\u0013\u0002\u0002^\t\u0003\u0002\u0002\u0002_`\u0007\u0006",
    "\u0002\u0002`\u000b\u0003\u0002\u0002\u0002ab\u0007\u0010\u0002\u0002",
    "b\r\u0003\u0002\u0002\u0002ch\u0007\u0007\u0002\u0002dh\u0007\b\u0002",
    "\u0002eh\u0007\t\u0002\u0002fh\u0007\n\u0002\u0002gc\u0003\u0002\u0002",
    "\u0002gd\u0003\u0002\u0002\u0002ge\u0003\u0002\u0002\u0002gf\u0003\u0002",
    "\u0002\u0002h\u000f\u0003\u0002\u0002\u0002il\u0005\u0004\u0003\u0002",
    "jk\u0007\u000f\u0002\u0002km\u0005\u0010\t\u0002lj\u0003\u0002\u0002",
    "\u0002lm\u0003\u0002\u0002\u0002m\u0011\u0003\u0002\u0002\u0002nq\u0005",
    "\u0004\u0003\u0002op\u0007\u000f\u0002\u0002pr\u0005\u0012\n\u0002q",
    "o\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r\u0013\u0003\u0002",
    "\u0002\u0002\n0ORT[glq"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     "'('", "')'", "'['", "']'", "','", null, "'defined'", 
                     "'peek'", null, "'+'", "'-'", "'*'", "'/'", "'%'", 
                     "'!'", "'**'", "'~'", null, null, "'?'", "':'" ];

var symbolicNames = [ null, "BLOCK_COMMENT", "LINE_COMMENT", "WS", "STRING_LITERAL", 
                      "OCTAL_LITERAL", "HEX_LITERAL", "BINARY_LITERAL", 
                      "DECIMAL_LITERAL", "LPAREN", "RPAREN", "LBRACKET", 
                      "RBRACKET", "COMMA", "BOOLEAN_LITERAL", "DEFINED_KW", 
                      "PEEK_KW", "IDENTIFIER", "ADD_OP", "SUB_OP", "MUL_OP", 
                      "DIV_OP", "MOD_OP", "NOT_OP", "POW_OP", "BITWISE_INVERT_OP", 
                      "BITWISE_OP", "LOGICAL_OP", "TERNARY_OP", "TERNARY_SEPARATOR" ];

var ruleNames =  [ "expressionRoot", "expression", "expressionValue", "identifier", 
                   "stringLiteral", "booleanLiteral", "numberLiteral", "callArguments", 
                   "listItems" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.BLOCK_COMMENT = 1;
ExprParser.LINE_COMMENT = 2;
ExprParser.WS = 3;
ExprParser.STRING_LITERAL = 4;
ExprParser.OCTAL_LITERAL = 5;
ExprParser.HEX_LITERAL = 6;
ExprParser.BINARY_LITERAL = 7;
ExprParser.DECIMAL_LITERAL = 8;
ExprParser.LPAREN = 9;
ExprParser.RPAREN = 10;
ExprParser.LBRACKET = 11;
ExprParser.RBRACKET = 12;
ExprParser.COMMA = 13;
ExprParser.BOOLEAN_LITERAL = 14;
ExprParser.DEFINED_KW = 15;
ExprParser.PEEK_KW = 16;
ExprParser.IDENTIFIER = 17;
ExprParser.ADD_OP = 18;
ExprParser.SUB_OP = 19;
ExprParser.MUL_OP = 20;
ExprParser.DIV_OP = 21;
ExprParser.MOD_OP = 22;
ExprParser.NOT_OP = 23;
ExprParser.POW_OP = 24;
ExprParser.BITWISE_INVERT_OP = 25;
ExprParser.BITWISE_OP = 26;
ExprParser.LOGICAL_OP = 27;
ExprParser.TERNARY_OP = 28;
ExprParser.TERNARY_SEPARATOR = 29;

ExprParser.RULE_expressionRoot = 0;
ExprParser.RULE_expression = 1;
ExprParser.RULE_expressionValue = 2;
ExprParser.RULE_identifier = 3;
ExprParser.RULE_stringLiteral = 4;
ExprParser.RULE_booleanLiteral = 5;
ExprParser.RULE_numberLiteral = 6;
ExprParser.RULE_callArguments = 7;
ExprParser.RULE_listItems = 8;

function ExpressionRootContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expressionRoot;
    this.expr = null; // ExpressionContext
    return this;
}

ExpressionRootContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionRootContext.prototype.constructor = ExpressionRootContext;

ExpressionRootContext.prototype.EOF = function() {
    return this.getToken(ExprParser.EOF, 0);
};

ExpressionRootContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ExpressionRootContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterExpressionRoot(this);
	}
};

ExpressionRootContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitExpressionRoot(this);
	}
};

ExpressionRootContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitExpressionRoot(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ExpressionRootContext = ExpressionRootContext;

ExprParser.prototype.expressionRoot = function() {

    var localctx = new ExpressionRootContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_expressionRoot);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        localctx.expr = this.expression(0);
        this.state = 19;
        this.match(ExprParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;


 
ExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function PowerOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PowerOperationContext.prototype = Object.create(ExpressionContext.prototype);
PowerOperationContext.prototype.constructor = PowerOperationContext;

ExprParser.PowerOperationContext = PowerOperationContext;

PowerOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

PowerOperationContext.prototype.POW_OP = function() {
    return this.getToken(ExprParser.POW_OP, 0);
};
PowerOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterPowerOperation(this);
	}
};

PowerOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitPowerOperation(this);
	}
};

PowerOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitPowerOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function GroupOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.inner = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

GroupOperationContext.prototype = Object.create(ExpressionContext.prototype);
GroupOperationContext.prototype.constructor = GroupOperationContext;

ExprParser.GroupOperationContext = GroupOperationContext;

GroupOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

GroupOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

GroupOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
GroupOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterGroupOperation(this);
	}
};

GroupOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitGroupOperation(this);
	}
};

GroupOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitGroupOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ValueOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.value = null; // ExpressionValueContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ValueOperationContext.prototype = Object.create(ExpressionContext.prototype);
ValueOperationContext.prototype.constructor = ValueOperationContext;

ExprParser.ValueOperationContext = ValueOperationContext;

ValueOperationContext.prototype.expressionValue = function() {
    return this.getTypedRuleContext(ExpressionValueContext,0);
};
ValueOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterValueOperation(this);
	}
};

ValueOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitValueOperation(this);
	}
};

ValueOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitValueOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function TernaryOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.condition = null; // ExpressionContext;
    this.first = null; // ExpressionContext;
    this.second = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

TernaryOperationContext.prototype = Object.create(ExpressionContext.prototype);
TernaryOperationContext.prototype.constructor = TernaryOperationContext;

ExprParser.TernaryOperationContext = TernaryOperationContext;

TernaryOperationContext.prototype.TERNARY_OP = function() {
    return this.getToken(ExprParser.TERNARY_OP, 0);
};

TernaryOperationContext.prototype.TERNARY_SEPARATOR = function() {
    return this.getToken(ExprParser.TERNARY_SEPARATOR, 0);
};

TernaryOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
TernaryOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterTernaryOperation(this);
	}
};

TernaryOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitTernaryOperation(this);
	}
};

TernaryOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitTernaryOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function IndexOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.list = null; // ExpressionContext;
    this.inner = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexOperationContext.prototype = Object.create(ExpressionContext.prototype);
IndexOperationContext.prototype.constructor = IndexOperationContext;

ExprParser.IndexOperationContext = IndexOperationContext;

IndexOperationContext.prototype.LBRACKET = function() {
    return this.getToken(ExprParser.LBRACKET, 0);
};

IndexOperationContext.prototype.RBRACKET = function() {
    return this.getToken(ExprParser.RBRACKET, 0);
};

IndexOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};
IndexOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterIndexOperation(this);
	}
};

IndexOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitIndexOperation(this);
	}
};

IndexOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitIndexOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DefinedOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.name = null; // Token;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DefinedOperationContext.prototype = Object.create(ExpressionContext.prototype);
DefinedOperationContext.prototype.constructor = DefinedOperationContext;

ExprParser.DefinedOperationContext = DefinedOperationContext;

DefinedOperationContext.prototype.DEFINED_KW = function() {
    return this.getToken(ExprParser.DEFINED_KW, 0);
};

DefinedOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

DefinedOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

DefinedOperationContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};
DefinedOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterDefinedOperation(this);
	}
};

DefinedOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitDefinedOperation(this);
	}
};

DefinedOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitDefinedOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitwiseOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitwiseOperationContext.prototype = Object.create(ExpressionContext.prototype);
BitwiseOperationContext.prototype.constructor = BitwiseOperationContext;

ExprParser.BitwiseOperationContext = BitwiseOperationContext;

BitwiseOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

BitwiseOperationContext.prototype.BITWISE_OP = function() {
    return this.getToken(ExprParser.BITWISE_OP, 0);
};
BitwiseOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBitwiseOperation(this);
	}
};

BitwiseOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBitwiseOperation(this);
	}
};

BitwiseOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBitwiseOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalNotOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalNotOperationContext.prototype = Object.create(ExpressionContext.prototype);
LogicalNotOperationContext.prototype.constructor = LogicalNotOperationContext;

ExprParser.LogicalNotOperationContext = LogicalNotOperationContext;

LogicalNotOperationContext.prototype.NOT_OP = function() {
    return this.getToken(ExprParser.NOT_OP, 0);
};

LogicalNotOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
LogicalNotOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLogicalNotOperation(this);
	}
};

LogicalNotOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLogicalNotOperation(this);
	}
};

LogicalNotOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLogicalNotOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BitwiseInvertOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BitwiseInvertOperationContext.prototype = Object.create(ExpressionContext.prototype);
BitwiseInvertOperationContext.prototype.constructor = BitwiseInvertOperationContext;

ExprParser.BitwiseInvertOperationContext = BitwiseInvertOperationContext;

BitwiseInvertOperationContext.prototype.BITWISE_INVERT_OP = function() {
    return this.getToken(ExprParser.BITWISE_INVERT_OP, 0);
};

BitwiseInvertOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
BitwiseInvertOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBitwiseInvertOperation(this);
	}
};

BitwiseInvertOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBitwiseInvertOperation(this);
	}
};

BitwiseInvertOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBitwiseInvertOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function PeekOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.inner = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PeekOperationContext.prototype = Object.create(ExpressionContext.prototype);
PeekOperationContext.prototype.constructor = PeekOperationContext;

ExprParser.PeekOperationContext = PeekOperationContext;

PeekOperationContext.prototype.PEEK_KW = function() {
    return this.getToken(ExprParser.PEEK_KW, 0);
};

PeekOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

PeekOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

PeekOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
PeekOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterPeekOperation(this);
	}
};

PeekOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitPeekOperation(this);
	}
};

PeekOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitPeekOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ArithmeticOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ArithmeticOperationContext.prototype = Object.create(ExpressionContext.prototype);
ArithmeticOperationContext.prototype.constructor = ArithmeticOperationContext;

ExprParser.ArithmeticOperationContext = ArithmeticOperationContext;

ArithmeticOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ArithmeticOperationContext.prototype.MUL_OP = function() {
    return this.getToken(ExprParser.MUL_OP, 0);
};

ArithmeticOperationContext.prototype.DIV_OP = function() {
    return this.getToken(ExprParser.DIV_OP, 0);
};

ArithmeticOperationContext.prototype.MOD_OP = function() {
    return this.getToken(ExprParser.MOD_OP, 0);
};

ArithmeticOperationContext.prototype.ADD_OP = function() {
    return this.getToken(ExprParser.ADD_OP, 0);
};

ArithmeticOperationContext.prototype.SUB_OP = function() {
    return this.getToken(ExprParser.SUB_OP, 0);
};
ArithmeticOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterArithmeticOperation(this);
	}
};

ArithmeticOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitArithmeticOperation(this);
	}
};

ArithmeticOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitArithmeticOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function NegateOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

NegateOperationContext.prototype = Object.create(ExpressionContext.prototype);
NegateOperationContext.prototype.constructor = NegateOperationContext;

ExprParser.NegateOperationContext = NegateOperationContext;

NegateOperationContext.prototype.SUB_OP = function() {
    return this.getToken(ExprParser.SUB_OP, 0);
};

NegateOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};
NegateOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterNegateOperation(this);
	}
};

NegateOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitNegateOperation(this);
	}
};

NegateOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitNegateOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function CallOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.callee = null; // ExpressionContext;
    this.args = null; // CallArgumentsContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

CallOperationContext.prototype = Object.create(ExpressionContext.prototype);
CallOperationContext.prototype.constructor = CallOperationContext;

ExprParser.CallOperationContext = CallOperationContext;

CallOperationContext.prototype.LPAREN = function() {
    return this.getToken(ExprParser.LPAREN, 0);
};

CallOperationContext.prototype.RPAREN = function() {
    return this.getToken(ExprParser.RPAREN, 0);
};

CallOperationContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CallOperationContext.prototype.callArguments = function() {
    return this.getTypedRuleContext(CallArgumentsContext,0);
};
CallOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterCallOperation(this);
	}
};

CallOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitCallOperation(this);
	}
};

CallOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitCallOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function LogicalOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.left = null; // ExpressionContext;
    this.op = null; // Token;
    this.right = null; // ExpressionContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

LogicalOperationContext.prototype = Object.create(ExpressionContext.prototype);
LogicalOperationContext.prototype.constructor = LogicalOperationContext;

ExprParser.LogicalOperationContext = LogicalOperationContext;

LogicalOperationContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

LogicalOperationContext.prototype.LOGICAL_OP = function() {
    return this.getToken(ExprParser.LOGICAL_OP, 0);
};
LogicalOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterLogicalOperation(this);
	}
};

LogicalOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitLogicalOperation(this);
	}
};

LogicalOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitLogicalOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function ListOperationContext(parser, ctx) {
	ExpressionContext.call(this, parser);
    this.items = null; // ListItemsContext;
    ExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ListOperationContext.prototype = Object.create(ExpressionContext.prototype);
ListOperationContext.prototype.constructor = ListOperationContext;

ExprParser.ListOperationContext = ListOperationContext;

ListOperationContext.prototype.LBRACKET = function() {
    return this.getToken(ExprParser.LBRACKET, 0);
};

ListOperationContext.prototype.RBRACKET = function() {
    return this.getToken(ExprParser.RBRACKET, 0);
};

ListOperationContext.prototype.listItems = function() {
    return this.getTypedRuleContext(ListItemsContext,0);
};
ListOperationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterListOperation(this);
	}
};

ListOperationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitListOperation(this);
	}
};

ListOperationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitListOperation(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_expression, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.STRING_LITERAL:
        case ExprParser.OCTAL_LITERAL:
        case ExprParser.HEX_LITERAL:
        case ExprParser.BINARY_LITERAL:
        case ExprParser.DECIMAL_LITERAL:
        case ExprParser.BOOLEAN_LITERAL:
        case ExprParser.IDENTIFIER:
            localctx = new ValueOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 22;
            localctx.value = this.expressionValue();
            break;
        case ExprParser.LBRACKET:
            localctx = new ListOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 23;
            this.match(ExprParser.LBRACKET);
            this.state = 24;
            localctx.items = this.listItems();
            this.state = 25;
            this.match(ExprParser.RBRACKET);
            break;
        case ExprParser.LPAREN:
            localctx = new GroupOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 27;
            this.match(ExprParser.LPAREN);
            this.state = 28;
            localctx.inner = this.expression(0);
            this.state = 29;
            this.match(ExprParser.RPAREN);
            break;
        case ExprParser.DEFINED_KW:
            localctx = new DefinedOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 31;
            this.match(ExprParser.DEFINED_KW);
            this.state = 32;
            this.match(ExprParser.LPAREN);
            this.state = 33;
            localctx.name = this.match(ExprParser.IDENTIFIER);
            this.state = 34;
            this.match(ExprParser.RPAREN);
            break;
        case ExprParser.PEEK_KW:
            localctx = new PeekOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 35;
            this.match(ExprParser.PEEK_KW);
            this.state = 36;
            this.match(ExprParser.LPAREN);
            this.state = 37;
            localctx.inner = this.expression(0);
            this.state = 38;
            this.match(ExprParser.RPAREN);
            break;
        case ExprParser.BITWISE_INVERT_OP:
            localctx = new BitwiseInvertOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 40;
            localctx.op = this.match(ExprParser.BITWISE_INVERT_OP);
            this.state = 41;
            localctx.right = this.expression(9);
            break;
        case ExprParser.SUB_OP:
            localctx = new NegateOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 42;
            localctx.op = this.match(ExprParser.SUB_OP);
            this.state = 43;
            localctx.right = this.expression(7);
            break;
        case ExprParser.NOT_OP:
            localctx = new LogicalNotOperationContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 44;
            localctx.op = this.match(ExprParser.NOT_OP);
            this.state = 45;
            localctx.right = this.expression(2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 82;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 80;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new PowerOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 48;
                    if (!( this.precpred(this._ctx, 8))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
                    }
                    this.state = 49;
                    localctx.op = this.match(ExprParser.POW_OP);
                    this.state = 50;
                    localctx.right = this.expression(8);
                    break;

                case 2:
                    localctx = new BitwiseOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 51;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 52;
                    localctx.op = this.match(ExprParser.BITWISE_OP);
                    this.state = 53;
                    localctx.right = this.expression(7);
                    break;

                case 3:
                    localctx = new ArithmeticOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 54;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 55;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.MUL_OP) | (1 << ExprParser.DIV_OP) | (1 << ExprParser.MOD_OP))) !== 0))) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 56;
                    localctx.right = this.expression(6);
                    break;

                case 4:
                    localctx = new ArithmeticOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 57;
                    if (!( this.precpred(this._ctx, 4))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                    }
                    this.state = 58;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===ExprParser.ADD_OP || _la===ExprParser.SUB_OP)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 59;
                    localctx.right = this.expression(5);
                    break;

                case 5:
                    localctx = new LogicalOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.left = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 60;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 61;
                    localctx.op = this.match(ExprParser.LOGICAL_OP);
                    this.state = 62;
                    localctx.right = this.expression(4);
                    break;

                case 6:
                    localctx = new TernaryOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.condition = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 63;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 64;
                    this.match(ExprParser.TERNARY_OP);
                    this.state = 65;
                    localctx.first = this.expression(0);
                    this.state = 66;
                    this.match(ExprParser.TERNARY_SEPARATOR);
                    this.state = 67;
                    localctx.second = this.expression(2);
                    break;

                case 7:
                    localctx = new IndexOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.list = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 69;
                    if (!( this.precpred(this._ctx, 15))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
                    }
                    this.state = 70;
                    this.match(ExprParser.LBRACKET);
                    this.state = 71;
                    localctx.inner = this.expression(0);
                    this.state = 72;
                    this.match(ExprParser.RBRACKET);
                    break;

                case 8:
                    localctx = new CallOperationContext(this, new ExpressionContext(this, _parentctx, _parentState));
                    localctx.callee = _prevctx;
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 74;
                    if (!( this.precpred(this._ctx, 10))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
                    }
                    this.state = 75;
                    this.match(ExprParser.LPAREN);
                    this.state = 77;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.STRING_LITERAL) | (1 << ExprParser.OCTAL_LITERAL) | (1 << ExprParser.HEX_LITERAL) | (1 << ExprParser.BINARY_LITERAL) | (1 << ExprParser.DECIMAL_LITERAL) | (1 << ExprParser.LPAREN) | (1 << ExprParser.LBRACKET) | (1 << ExprParser.BOOLEAN_LITERAL) | (1 << ExprParser.DEFINED_KW) | (1 << ExprParser.PEEK_KW) | (1 << ExprParser.IDENTIFIER) | (1 << ExprParser.SUB_OP) | (1 << ExprParser.NOT_OP) | (1 << ExprParser.BITWISE_INVERT_OP))) !== 0)) {
                        this.state = 76;
                        localctx.args = this.callArguments();
                    }

                    this.state = 79;
                    this.match(ExprParser.RPAREN);
                    break;

                } 
            }
            this.state = 84;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ExpressionValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expressionValue;
    return this;
}

ExpressionValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionValueContext.prototype.constructor = ExpressionValueContext;

ExpressionValueContext.prototype.stringLiteral = function() {
    return this.getTypedRuleContext(StringLiteralContext,0);
};

ExpressionValueContext.prototype.numberLiteral = function() {
    return this.getTypedRuleContext(NumberLiteralContext,0);
};

ExpressionValueContext.prototype.booleanLiteral = function() {
    return this.getTypedRuleContext(BooleanLiteralContext,0);
};

ExpressionValueContext.prototype.identifier = function() {
    return this.getTypedRuleContext(IdentifierContext,0);
};

ExpressionValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterExpressionValue(this);
	}
};

ExpressionValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitExpressionValue(this);
	}
};

ExpressionValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitExpressionValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ExpressionValueContext = ExpressionValueContext;

ExprParser.prototype.expressionValue = function() {

    var localctx = new ExpressionValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ExprParser.RULE_expressionValue);
    try {
        this.state = 89;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.STRING_LITERAL:
            this.enterOuterAlt(localctx, 1);
            this.state = 85;
            this.stringLiteral();
            break;
        case ExprParser.OCTAL_LITERAL:
        case ExprParser.HEX_LITERAL:
        case ExprParser.BINARY_LITERAL:
        case ExprParser.DECIMAL_LITERAL:
            this.enterOuterAlt(localctx, 2);
            this.state = 86;
            this.numberLiteral();
            break;
        case ExprParser.BOOLEAN_LITERAL:
            this.enterOuterAlt(localctx, 3);
            this.state = 87;
            this.booleanLiteral();
            break;
        case ExprParser.IDENTIFIER:
            this.enterOuterAlt(localctx, 4);
            this.state = 88;
            this.identifier();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_identifier;
    this.name = null; // Token
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.IDENTIFIER = function() {
    return this.getToken(ExprParser.IDENTIFIER, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.IdentifierContext = IdentifierContext;

ExprParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        localctx.name = this.match(ExprParser.IDENTIFIER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StringLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_stringLiteral;
    this.str = null; // Token
    return this;
}

StringLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StringLiteralContext.prototype.constructor = StringLiteralContext;

StringLiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(ExprParser.STRING_LITERAL, 0);
};

StringLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterStringLiteral(this);
	}
};

StringLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitStringLiteral(this);
	}
};

StringLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitStringLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.StringLiteralContext = StringLiteralContext;

ExprParser.prototype.stringLiteral = function() {

    var localctx = new StringLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprParser.RULE_stringLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        localctx.str = this.match(ExprParser.STRING_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BooleanLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_booleanLiteral;
    this.bool = null; // Token
    return this;
}

BooleanLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BooleanLiteralContext.prototype.constructor = BooleanLiteralContext;

BooleanLiteralContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(ExprParser.BOOLEAN_LITERAL, 0);
};

BooleanLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBooleanLiteral(this);
	}
};

BooleanLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBooleanLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.BooleanLiteralContext = BooleanLiteralContext;

ExprParser.prototype.booleanLiteral = function() {

    var localctx = new BooleanLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprParser.RULE_booleanLiteral);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        localctx.bool = this.match(ExprParser.BOOLEAN_LITERAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NumberLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_numberLiteral;
    return this;
}

NumberLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberLiteralContext.prototype.constructor = NumberLiteralContext;


 
NumberLiteralContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function OctalLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.literal = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

OctalLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
OctalLiteralContext.prototype.constructor = OctalLiteralContext;

ExprParser.OctalLiteralContext = OctalLiteralContext;

OctalLiteralContext.prototype.OCTAL_LITERAL = function() {
    return this.getToken(ExprParser.OCTAL_LITERAL, 0);
};
OctalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterOctalLiteral(this);
	}
};

OctalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitOctalLiteral(this);
	}
};

OctalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitOctalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function BinaryLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.literal = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

BinaryLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
BinaryLiteralContext.prototype.constructor = BinaryLiteralContext;

ExprParser.BinaryLiteralContext = BinaryLiteralContext;

BinaryLiteralContext.prototype.BINARY_LITERAL = function() {
    return this.getToken(ExprParser.BINARY_LITERAL, 0);
};
BinaryLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterBinaryLiteral(this);
	}
};

BinaryLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitBinaryLiteral(this);
	}
};

BinaryLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitBinaryLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function DecimalLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.literal = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DecimalLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
DecimalLiteralContext.prototype.constructor = DecimalLiteralContext;

ExprParser.DecimalLiteralContext = DecimalLiteralContext;

DecimalLiteralContext.prototype.DECIMAL_LITERAL = function() {
    return this.getToken(ExprParser.DECIMAL_LITERAL, 0);
};
DecimalLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitDecimalLiteral(this);
	}
};

DecimalLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitDecimalLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};


function HexLiteralContext(parser, ctx) {
	NumberLiteralContext.call(this, parser);
    this.literal = null; // Token;
    NumberLiteralContext.prototype.copyFrom.call(this, ctx);
    return this;
}

HexLiteralContext.prototype = Object.create(NumberLiteralContext.prototype);
HexLiteralContext.prototype.constructor = HexLiteralContext;

ExprParser.HexLiteralContext = HexLiteralContext;

HexLiteralContext.prototype.HEX_LITERAL = function() {
    return this.getToken(ExprParser.HEX_LITERAL, 0);
};
HexLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterHexLiteral(this);
	}
};

HexLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitHexLiteral(this);
	}
};

HexLiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitHexLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.NumberLiteralContext = NumberLiteralContext;

ExprParser.prototype.numberLiteral = function() {

    var localctx = new NumberLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ExprParser.RULE_numberLiteral);
    try {
        this.state = 101;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.OCTAL_LITERAL:
            localctx = new OctalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 97;
            localctx.literal = this.match(ExprParser.OCTAL_LITERAL);
            break;
        case ExprParser.HEX_LITERAL:
            localctx = new HexLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 98;
            localctx.literal = this.match(ExprParser.HEX_LITERAL);
            break;
        case ExprParser.BINARY_LITERAL:
            localctx = new BinaryLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 99;
            localctx.literal = this.match(ExprParser.BINARY_LITERAL);
            break;
        case ExprParser.DECIMAL_LITERAL:
            localctx = new DecimalLiteralContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 100;
            localctx.literal = this.match(ExprParser.DECIMAL_LITERAL);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CallArgumentsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_callArguments;
    this.arg = null; // ExpressionContext
    this.rest = null; // CallArgumentsContext
    return this;
}

CallArgumentsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CallArgumentsContext.prototype.constructor = CallArgumentsContext;

CallArgumentsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

CallArgumentsContext.prototype.COMMA = function() {
    return this.getToken(ExprParser.COMMA, 0);
};

CallArgumentsContext.prototype.callArguments = function() {
    return this.getTypedRuleContext(CallArgumentsContext,0);
};

CallArgumentsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterCallArguments(this);
	}
};

CallArgumentsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitCallArguments(this);
	}
};

CallArgumentsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitCallArguments(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.CallArgumentsContext = CallArgumentsContext;

ExprParser.prototype.callArguments = function() {

    var localctx = new CallArgumentsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ExprParser.RULE_callArguments);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        localctx.arg = this.expression(0);
        this.state = 106;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.COMMA) {
            this.state = 104;
            this.match(ExprParser.COMMA);
            this.state = 105;
            localctx.rest = this.callArguments();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ListItemsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_listItems;
    this.item = null; // ExpressionContext
    this.rest = null; // ListItemsContext
    return this;
}

ListItemsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ListItemsContext.prototype.constructor = ListItemsContext;

ListItemsContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

ListItemsContext.prototype.COMMA = function() {
    return this.getToken(ExprParser.COMMA, 0);
};

ListItemsContext.prototype.listItems = function() {
    return this.getTypedRuleContext(ListItemsContext,0);
};

ListItemsContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.enterListItems(this);
	}
};

ListItemsContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprParserListener ) {
        listener.exitListItems(this);
	}
};

ListItemsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprParserVisitor ) {
        return visitor.visitListItems(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.ListItemsContext = ListItemsContext;

ExprParser.prototype.listItems = function() {

    var localctx = new ListItemsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ExprParser.RULE_listItems);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        localctx.item = this.expression(0);
        this.state = 111;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.COMMA) {
            this.state = 109;
            this.match(ExprParser.COMMA);
            this.state = 110;
            localctx.rest = this.listItems();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 5);
		case 3:
			return this.precpred(this._ctx, 4);
		case 4:
			return this.precpred(this._ctx, 3);
		case 5:
			return this.precpred(this._ctx, 1);
		case 6:
			return this.precpred(this._ctx, 15);
		case 7:
			return this.precpred(this._ctx, 10);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
