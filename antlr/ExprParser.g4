parser grammar ExprParser;

options {
	tokenVocab=ExprLexer;
}

expressionRoot: expr=expression EOF ;

expression
	: value=expressionValue #valueOperation
	| list=expression LBRACKET inner=expression RBRACKET #indexOperation
	| LBRACKET items=listItems RBRACKET #listOperation
	| LPAREN inner=expression RPAREN #groupOperation
	| DEFINED_KW LPAREN name=IDENTIFIER RPAREN #definedOperation
	| PEEK_KW LPAREN inner=expression RPAREN #peekOperation
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

expressionValue
	: stringLiteral
	| numberLiteral
	| booleanLiteral
	| identifier ;

identifier: name=IDENTIFIER ;

stringLiteral: str=STRING_LITERAL ;

booleanLiteral: bool=BOOLEAN_LITERAL ;

numberLiteral
	: literal=OCTAL_LITERAL #octalLiteral
	| literal=HEX_LITERAL #hexLiteral
	| literal=BINARY_LITERAL #binaryLiteral
	| literal=DECIMAL_LITERAL #decimalLiteral
	;

callArguments
	: arg=expression (COMMA rest=callArguments)? ;

listItems
	: item=expression (COMMA rest=listItems)? ;
