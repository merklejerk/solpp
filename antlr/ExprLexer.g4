lexer grammar ExprLexer;

BLOCK_COMMENT: '/*' .*? '*/' -> skip;

fragment
EOL_FRAG: [\r\n] |  EOF ;

LINE_COMMENT
	: ('//' [\t ]* ~[#\t ] .*? EOL_FRAG | '//' [\t ]* EOL_FRAG) -> skip ;

WS: [\r\n\t ]+ -> skip ;

STRING_LITERAL
	: '"' (~[\r\n] | '\\"')*? '"'
	| '\'' (~[\r\n] | '\\\'')*? '\'' ;

OCTAL_LITERAL: '0' [0-7]+ ;

HEX_LITERAL: ('0x' | '0X') [0-9A-Fa-f]+ ;

BINARY_LITERAL: '0b' [01]+ ;

DECIMAL_LITERAL: [0-9]+ ('.' [0-9]+)? ('e' '-'? [0-9]+)? ;

LPAREN: '(' ;
RPAREN: ')' ;
LBRACKET: '[' ;
RBRACKET: ']' ;
COMMA: ',' ;
DOT: '.' ;

BOOLEAN_LITERAL
	: 'true'
	| 'false' ;

DEFINED_KW: 'defined' ;

PEEK_KW: 'peek' ;

UNIT_KW
	: 'seconds'
	| 'minutes'
	| 'hours'
	| 'days'
	| 'weeks'
	| 'years'
	| 'wei'
	| 'finney'
	| 'szabo'
	| 'ether' ;

IDENTIFIER: [_a-zA-Z] [_a-zA-Z0-9]* ;

ADD_OP: '+' ;
SUB_OP: '-' ;
MUL_OP: '*' ;
DIV_OP: '/' ;
MOD_OP: '%' ;
NOT_OP: '!' ;
POW_OP: '**' ;
BITWISE_INVERT_OP: '~' ;
BITWISE_OP
	: [&|^]
	| '<<'
	| '>> ';
LOGICAL_OP
	: '&&'
	| '||'
	| '>='
	| '<='
	| '>'
	| '<'
	| '=='
	| '!=' ;

TERNARY_OP: '?' ;

TERNARY_SEPARATOR: ':' ;
