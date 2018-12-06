lexer grammar SolLexer;

fragment
LF: [\r\n] ;

fragment
ID_FRAG: [_a-zA-Z] [_a-zA-Z0-9]* ;

fragment
EOL_FRAG: LF |  EOF ;

fragment
STRING_LITERAL_FRAG
	: '"' (~[\r\n] | '\\"')*? '"'
	| '\'' (~[\r\n] | '\\\'')*? '\'' ;

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

STRING_LITERAL: STRING_LITERAL_FRAG ;

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

BEGIN_MACRO_EXPR
	: '$'?'$(' -> pushMode(INSIDE_MACRO_EXPR) ;

IMPORT_KW: 'import' ;

PRAGMA: 'pragma' -> skip, pushMode(INSIDE_PRAGMA) ;

IDENTIFIER: ID_FRAG ;

WORD: (~[\t \r\n])+? ;

mode INSIDE_PRAGMA ;
END_PRAGMA: ';' -> skip, popMode ;

PRAGMA_BODY: ~[;]+;

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

NO_PP_PRAGMA: 'pragma' -> skip, pushMode(INSIDE_PRAGMA) ;

NO_PP_IDENTIFIER: IDENTIFIER -> type(IDENTIFIER) ;

NO_PP_WORD: WORD -> type(WORD) ;

// Preprocessor line comment mode
mode PP_LINE_MODE ;
DEF_KW
	: 'def'
	| 'define' ;

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

PP_CONT: '\\' LF [\t ]* '//' [\t ]* -> skip ;

PP_END: (LF|EOF) -> popMode ;

PP_WS: [\t ]+ -> type(WS);

PP_IDENTIFIER: IDENTIFIER -> type(IDENTIFIER) ;

PP_WORD: WORD -> type(WORD) ;

// Preprocessor block comment mode
mode PP_BLOCK_MODE ;
PP_BLOCK_DEF_KW: DEF_KW -> type(DEF_KW) ;
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
PP_BLOCK_WS: [\t \r\n]+ -> type(WS) ;
PP_BLOCK_IDENTIFIER: IDENTIFIER -> type(IDENTIFIER) ;
PP_BLOCK_WORD: WORD -> type(WORD) ;
PP_BLOCK_END: ('*/'|EOF) -> type(PP_END), popMode;


mode INSIDE_MACRO_EXPR ;
MACRO_STRING: STRING_LITERAL_FRAG -> type(MACRO_WORD) ;

MACRO_WORD: ~[()]+ ;

BEGIN_MACRO_EXPR_PAREN
	: '(' -> type(MACRO_WORD), pushMode(INSIDE_MACRO_EXPR_PAREN_BODY) ;

END_MACRO_EXPR: ')' -> popMode;

mode INSIDE_MACRO_EXPR_PAREN_BODY ;
END_PAREN_BODY: ')' -> type(MACRO_WORD), popMode ;

PAREN_PAREN: '(' -> type(MACRO_WORD), pushMode(INSIDE_MACRO_EXPR_PAREN_BODY) ;

PAREN_BODY_CONTENT: ~[()]+ -> type(MACRO_WORD) ;
