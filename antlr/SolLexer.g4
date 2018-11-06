lexer grammar SolLexer;

fragment
LF: [\r\n] ;

fragment
ID_FRAG: [_a-zA-Z] [_a-zA-Z0-9]* ;

fragment
EOL_FRAG: LF |  EOF ;

PP_LINE_BEGIN
	: [\t ]* '//' [\t ]* '#' -> skip, pushMode(PP_LINE_MODE) ;

PP_BLOCK_BEGIN
	: '/*' [\t ]* '#' -> skip, pushMode(PP_BLOCK_MODE) ;

BLOCK_COMMENT
	: '/*' [\t ]* ~[#\t ] .*? '*/'
	| '/*' [\t ]* '*/' ;

LINE_COMMENT
	: '//' [\t ]* ~[#\t ] .*? EOL_FRAG
	| '//' [\t ]* EOL_FRAG ;

STRING_LITERAL
	: '"' (~["\r\n\\] | ('\\' .))* '"'
	| '\'' (~['\r\n\\] | ('\\' .))* '\'' ;

NUMBER_LITERAL
	: [0-9]+
	| '0' [0-7]+
	| ('0x' | '0X') [0-9A-Fa-f]+
	| '0b' [01]+
	| [0-9]+ '.' [0-9]+ ('e' '-'? [0-9]+) ;

BOOLEAN_LITERAL
	: 'true'
	| 'false' ;

SEMICOLON: ';' ;

WS: [\t ]+ ;

EOL: EOL_FRAG ;

BEGIN_EVAL_MACRO_EXPRESSION
	: '$${' -> skip, pushMode(INSIDE_EVAL_MACRO_EXPRESSION) ;

BEGIN_EXPAND_MACRO_EXPRESSION
	: '${' -> skip, pushMode(INSIDE_EXPAND_MACRO_EXPRESSION) ;

IMPORT_KW: 'import' ;

PRAGMA_VERSION: 'pragma' [\t ]+ 'solidity' [\t ]* '^'?  ([0-9] '.'?)* ';' ;

IDENTIFIER: ID_FRAG ;

WORD: (~[\t \r\n])+? ;

// Preprocessor disabled mode
mode NO_PP ;

NO_PP_BLOCK_COMMENT: '/*' .*? '*/' -> type(BLOCK_COMMENT) ;

NO_PP_LINE_COMMENT: '//' .*? EOL_FRAG -> type(LINE_COMMENT) ;

NO_PP_STRING_LITERAL: STRING_LITERAL -> type(STRING_LITERAL) ;

NO_PP_NUMBER_LITERAL: NUMBER_LITERAL -> type(NUMBER_LITERAL) ;

NO_PP_BOOLEAN_LITERAL: BOOLEAN_LITERAL -> type(BOOLEAN_LITERAL) ;

NO_PP_SEMICOLON: SEMICOLON -> type(SEMICOLON) ;

NO_PP_WS: WS -> type(WS) ;

NO_PP_EOL: EOL -> type(EOL) ;

NO_PP_IMPORT_KW: IMPORT_KW -> type(IMPORT_KW) ;

NO_PP_PRAGMA_VERSION: PRAGMA_VERSION -> type(PRAGMA_VERSION) ;

NO_PP_IDENTIFIER: IDENTIFIER -> type(IDENTIFIER) ;

NO_PP_WORD: WORD -> type(WORD) ;

// Preprocessor line comment mode
mode PP_LINE_MODE ;
DEF_KW
	: 'def'
	| 'define' ;

MACRO_KW
	: 'macro' ;

UNDEF_KW
	: 'undef'
	| 'undefine' ;

IF_KW: 'if' ;

ELIF_KW: 'elif' ;

ELSE_KW: 'else' ;

ENDIF_KW: 'endif' ;

FOR_KW: 'for' ;

DONE_KW: 'done' ;

IN_KW: 'in' ;

LPAREN: '(' ;

RPAREN: ')' ;

COMMA: ',' ;

PP_CONT: '\\' LF -> skip ;

PP_COMMENT: '//' -> skip ;

PP_END: (LF|EOF) -> popMode ;

PP_WS: [\t ]+ -> skip ;

PP_IDENTIFIER: IDENTIFIER -> type(IDENTIFIER) ;

PP_WORD: WORD -> type(WORD) ;

// Preprocessor block comment mode
mode PP_BLOCK_MODE ;
PP_BLOCK_DEF_KW: DEF_KW -> type(DEF_KW) ;
PP_BLOCK_MACRO_KW: MACRO_KW -> type(MACRO_KW) ;
PP_BLOCK_UNDEF_KW: UNDEF_KW -> type(UNDEF_KW) ;
PP_BLOCK_IF_KW: IF_KW -> type(IF_KW) ;
PP_BLOCK_ELIF_KW: ELIF_KW -> type(ELIF_KW) ;
PP_BLOCK_ELSE_KW: ELSE_KW -> type(ELSE_KW) ;
PP_BLOCK_ENDIF_KW: ENDIF_KW -> type(ENDIF_KW) ;
PP_BLOCK_FOR_KW: FOR_KW -> type(FOR_KW) ;
PP_BLOCK_DONE_KW: DONE_KW -> type(DONE_KW) ;
PP_BLOCK_IN_KW: IN_KW -> type(IN_KW) ;
PP_BLOCK_LPAREN: LPAREN -> type(LPAREN) ;
PP_BLOCK_RPAREN: RPAREN -> type(RPAREN) ;
PP_BLOCK_COMMA: COMMA -> type(COMMA) ;
PP_BLOCK_WS: [\t \r\n]+ -> skip;
PP_BLOCK_IDENTIFIER: IDENTIFIER -> type(IDENTIFIER) ;
PP_BLOCK_WORD: WORD -> type(WORD) ;
PP_BLOCK_END: ('*/'|EOF) -> type(PP_END), popMode;

mode INSIDE_EVAL_MACRO_EXPRESSION ;
LEAVE_EVAL_MACRO_EXPRESSION: '}' -> skip, popMode ;

EVAL_MACRO_EXPRESSION: (~[}])+ ;

mode INSIDE_EXPAND_MACRO_EXPRESSION ;
LEAVE_EXPAND_MACRO_EXPRESSION: '}' -> skip, popMode ;

EXPAND_MACRO_EXPRESSION: (~[}])+ ;
