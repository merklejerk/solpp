parser grammar ExprParser;

options {
	tokenVocab=ExprLexer;
}

expressionRoot: expr=expression EOF ;

expression
	: num=expression units=UNIT_KW #unitsOperation
	| value=literal #literalOperation
	| name=IDENTIFIER #identifierOperation
	| obj=expression DOT key=IDENTIFIER #propertyOperation
	| list=expression LBRACKET inner=expression RBRACKET #indexOperation
	| LBRACKET items=listItems RBRACKET #listOperation
	| LPAREN inner=expression RPAREN #groupOperation
	| DEFINED_KW LPAREN name=IDENTIFIER RPAREN #definedOperation
	| PEEK_KW LPAREN name=IDENTIFIER RPAREN #peekOperation
	| callee=expression LPAREN args=callArguments? RPAREN #callOperation
	| op=BITWISE_INVERT_OP right=expression #bitwiseInvertOperation
	| <assoc=right> left=expression op=POW_OP right=expression #powerOperation
 	| op=SUB_OP right=expression #negateOperation
	| left=expression op=BITWISE_OP right=expression #bitwiseOperation
	| left=expression op=(MUL_OP | DIV_OP | MOD_OP) right=expression #arithmeticOperation
	| left=expression op=(ADD_OP | SUB_OP) right=expression #arithmeticOperation
	| left=expression op=LOGICAL_OP right=expression #logicalOperation
	| op=NOT_OP right=expression #logicalNotOperation
	| condition=expression TERNARY_OP first=expression TERNARY_SEPARATOR second=expression #ternaryOperation
	;

literal
	: str=stringLiteral
	| num=numberLiteral
	| bool=booleanLiteral ;

stringLiteral: value=STRING_LITERAL ;

booleanLiteral: value=BOOLEAN_LITERAL ;

numberLiteral
	: value=OCTAL_LITERAL #octalLiteral
	| value=HEX_LITERAL #hexLiteral
	| value=BINARY_LITERAL #binaryLiteral
	| value=DECIMAL_LITERAL #decimalLiteral
	;

callArguments
	: arg=expression (COMMA rest=callArguments)? ;

listItems
	: item=expression (COMMA rest=listItems)? ;
