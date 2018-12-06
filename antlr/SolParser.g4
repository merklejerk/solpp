parser grammar SolParser;

options {
	tokenVocab=SolLexer;
}

sourceUnit
	: anything* EOF ;

anything
	: directive
	| code;

code
	: blockComment
	| lineComment
	| nakedImportStatement
	| importStatement
	| pragma
	| macroExpression
	| literal
	| IDENTIFIER
	| WORD
	| whitespace
	| lineBreak
	| SEMICOLON ;

literal
	: STRING_LITERAL
	| NUMBER_LITERAL
	| BOOLEAN_LITERAL ;

blockComment
	: BLOCK_COMMENT ;

lineComment
	: LINE_COMMENT ;

whitespace
	: WS+ ;

lineBreak
	: EOL ;

pragma
	: body=PRAGMA_BODY;

nakedImportStatement
	: IMPORT_KW WS path=STRING_LITERAL WS* SEMICOLON ;

importStatement
	: IMPORT_KW (~SEMICOLON)+ SEMICOLON ;

macroExpression
	: prefix=BEGIN_MACRO_EXPR body=macroExpressionBody END_MACRO_EXPR;

macroExpressionBody
	: first=MACRO_WORD (rest=macroExpressionBody)? ;

directive
	: defineMacroDirective
	| nakedDefineDirective
	| defineDirective
	| undefineDirective
	| ifBlock
	| forBlock ;

nakedDefineDirective
	: DEF_KW WS name=IDENTIFIER endDirective ;

defineDirective
	: DEF_KW WS name=IDENTIFIER WS body=directivePayload endDirective ;

defineMacroDirective
	: DEF_KW WS spec=functionSpec WS body=directivePayload endDirective ;

undefineDirective
	: UNDEF_KW WS name=IDENTIFIER endDirective ;

functionSpec
	: name=IDENTIFIER LPAREN args=functionArgs? RPAREN ;

functionArgs
	: WS? arg=IDENTIFIER WS? (COMMA rest=functionArgs)? ;

directivePayload
	: (~PP_END)+ ;

blockContent
	: anything*? ;

ifBlock
	: dir=ifDirective content=blockContent (elseAlt=elseBlock | elifAlt=elifBlock | endifDirective) ;

elifBlock
	: dir=elifDirective content=blockContent (elseAlt=elseBlock | elifAlt=elifBlock | endifDirective) ;

elseBlock
	: elseDirective content=blockContent endifDirective ;

ifDirective
	: IF_KW WS condition=directivePayload endDirective ;

elseDirective
	: ELSE_KW endDirective ;

elifDirective
	: ELIF_KW WS condition=directivePayload endDirective ;

endifDirective
	: ENDIF_KW endDirective ;

forBlock
	: dir=forDirective content=blockContent doneDirective ;

forDirective
	: FOR_KW WS iterator=IDENTIFIER (WS? COMMA WS? key=IDENTIFIER)? WS IN_KW WS iterable=directivePayload endDirective ;

doneDirective
	: DONE_KW endDirective ;

endDirective
	: WS? PP_END;
