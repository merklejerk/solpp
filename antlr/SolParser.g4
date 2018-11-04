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
	| pragmaVersion
	| macroExpansion
	| macroEvaluation
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

pragmaVersion
	: content=PRAGMA_VERSION ;

nakedImportStatement
	: IMPORT_KW WS path=STRING_LITERAL WS* SEMICOLON ;

importStatement
	: IMPORT_KW (~SEMICOLON)+ SEMICOLON ;

macroExpansion
	: expression=EXPAND_MACRO_EXPRESSION ;

macroEvaluation
	: expression=EVAL_MACRO_EXPRESSION ;

directive
	: defineMacroDirective
	| nakedDefineDirective
	| defineDirective
	| undefineDirective
	| ifBlock
	| forBlock ;

nakedDefineDirective
	: DEF_KW name=IDENTIFIER PP_END ;

defineDirective
	: DEF_KW name=IDENTIFIER body=directivePayload PP_END ;

defineMacroDirective
	: MACRO_KW spec=functionSpec body=directivePayload PP_END ;

undefineDirective
	: UNDEF_KW name=IDENTIFIER PP_END ;

functionSpec
	: name=IDENTIFIER LPAREN args=functionArgs? RPAREN ;

functionArgs
	: arg=IDENTIFIER (COMMA rest=functionArgs)? ;

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
	: IF_KW condition=directivePayload PP_END ;

elseDirective
	: ELSE_KW PP_END ;

elifDirective
	: ELIF_KW condition=directivePayload PP_END ;

endifDirective
	: ENDIF_KW PP_END ;

forBlock
	: dir=forDirective content=blockContent doneDirective ;

forDirective
	: FOR_KW iterator=IDENTIFIER (COMMA key=IDENTIFIER)? IN_KW iterable=directivePayload PP_END ;

doneDirective
	: DONE_KW PP_END ;
