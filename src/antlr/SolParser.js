// Generated from SolParser.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SolParserListener = require('./SolParserListener').SolParserListener;
var SolParserVisitor = require('./SolParserVisitor').SolParserVisitor;

var grammarFileName = "SolParser.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$\u0106\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0003\u0002\u0007\u0002",
    "F\n\u0002\f\u0002\u000e\u0002I\u000b\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0005\u0003O\n\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004^",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0003\u0007\u0003\b\u0006\bg\n\b\r\b\u000e\bh\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b",
    "s\n\u000b\f\u000b\u000e\u000bv\u000b\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0006\f|\n\f\r\f\u000e\f}\u0003\f\u0003\f\u0003\r\u0003\r",
    "\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u008e\n",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0005\u0014\u00ab\n\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0005\u0015\u00b0\n\u0015\u0003",
    "\u0015\u0003\u0015\u0005\u0015\u00b4\n\u0015\u0003\u0015\u0003\u0015",
    "\u0005\u0015\u00b8\n\u0015\u0003\u0016\u0006\u0016\u00bb\n\u0016\r\u0016",
    "\u000e\u0016\u00bc\u0003\u0017\u0007\u0017\u00c0\n\u0017\f\u0017\u000e",
    "\u0017\u00c3\u000b\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0005\u0018\u00ca\n\u0018\u0003\u0019\u0003\u0019\u0003",
    "\u0019\u0003\u0019\u0003\u0019\u0005\u0019\u00d1\n\u0019\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e",
    "\u0003\u001e\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003 ",
    "\u0003 \u0003 \u0003 \u0005 \u00ef\n \u0003 \u0003 \u0005 \u00f3\n ",
    "\u0003 \u0005 \u00f6\n \u0003 \u0003 \u0003 \u0003 \u0003 \u0003 \u0003",
    "!\u0003!\u0003!\u0003\"\u0005\"\u0102\n\"\u0003\"\u0003\"\u0003\"\u0003",
    "\u00c1\u0002#\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016",
    "\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@B\u0002\u0005\u0003\u0002",
    "\u0007\t\u0003\u0002\n\n\u0003\u0002  \u0002\u0108\u0002G\u0003\u0002",
    "\u0002\u0002\u0004N\u0003\u0002\u0002\u0002\u0006]\u0003\u0002\u0002",
    "\u0002\b_\u0003\u0002\u0002\u0002\na\u0003\u0002\u0002\u0002\fc\u0003",
    "\u0002\u0002\u0002\u000ef\u0003\u0002\u0002\u0002\u0010j\u0003\u0002",
    "\u0002\u0002\u0012l\u0003\u0002\u0002\u0002\u0014n\u0003\u0002\u0002",
    "\u0002\u0016y\u0003\u0002\u0002\u0002\u0018\u0081\u0003\u0002\u0002",
    "\u0002\u001a\u0084\u0003\u0002\u0002\u0002\u001c\u008d\u0003\u0002\u0002",
    "\u0002\u001e\u008f\u0003\u0002\u0002\u0002 \u0094\u0003\u0002\u0002",
    "\u0002\"\u009b\u0003\u0002\u0002\u0002$\u00a2\u0003\u0002\u0002\u0002",
    "&\u00a7\u0003\u0002\u0002\u0002(\u00af\u0003\u0002\u0002\u0002*\u00ba",
    "\u0003\u0002\u0002\u0002,\u00c1\u0003\u0002\u0002\u0002.\u00c4\u0003",
    "\u0002\u0002\u00020\u00cb\u0003\u0002\u0002\u00022\u00d2\u0003\u0002",
    "\u0002\u00024\u00d6\u0003\u0002\u0002\u00026\u00db\u0003\u0002\u0002",
    "\u00028\u00de\u0003\u0002\u0002\u0002:\u00e3\u0003\u0002\u0002\u0002",
    "<\u00e6\u0003\u0002\u0002\u0002>\u00ea\u0003\u0002\u0002\u0002@\u00fd",
    "\u0003\u0002\u0002\u0002B\u0101\u0003\u0002\u0002\u0002DF\u0005\u0004",
    "\u0003\u0002ED\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002GE\u0003",
    "\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HJ\u0003\u0002\u0002\u0002",
    "IG\u0003\u0002\u0002\u0002JK\u0007\u0002\u0002\u0003K\u0003\u0003\u0002",
    "\u0002\u0002LO\u0005\u001c\u000f\u0002MO\u0005\u0006\u0004\u0002NL\u0003",
    "\u0002\u0002\u0002NM\u0003\u0002\u0002\u0002O\u0005\u0003\u0002\u0002",
    "\u0002P^\u0005\n\u0006\u0002Q^\u0005\f\u0007\u0002R^\u0005\u0014\u000b",
    "\u0002S^\u0005\u0016\f\u0002T^\u0005\u0012\n\u0002U^\u0005\u0018\r\u0002",
    "V^\u0005\u001a\u000e\u0002W^\u0005\b\u0005\u0002X^\u0007\u0011\u0002",
    "\u0002Y^\u0007\u0012\u0002\u0002Z^\u0005\u000e\b\u0002[^\u0005\u0010",
    "\t\u0002\\^\u0007\n\u0002\u0002]P\u0003\u0002\u0002\u0002]Q\u0003\u0002",
    "\u0002\u0002]R\u0003\u0002\u0002\u0002]S\u0003\u0002\u0002\u0002]T\u0003",
    "\u0002\u0002\u0002]U\u0003\u0002\u0002\u0002]V\u0003\u0002\u0002\u0002",
    "]W\u0003\u0002\u0002\u0002]X\u0003\u0002\u0002\u0002]Y\u0003\u0002\u0002",
    "\u0002]Z\u0003\u0002\u0002\u0002][\u0003\u0002\u0002\u0002]\\\u0003",
    "\u0002\u0002\u0002^\u0007\u0003\u0002\u0002\u0002_`\t\u0002\u0002\u0002",
    "`\t\u0003\u0002\u0002\u0002ab\u0007\u0005\u0002\u0002b\u000b\u0003\u0002",
    "\u0002\u0002cd\u0007\u0006\u0002\u0002d\r\u0003\u0002\u0002\u0002eg",
    "\u0007\u000b\u0002\u0002fe\u0003\u0002\u0002\u0002gh\u0003\u0002\u0002",
    "\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002i\u000f\u0003",
    "\u0002\u0002\u0002jk\u0007\f\u0002\u0002k\u0011\u0003\u0002\u0002\u0002",
    "lm\u0007\u0010\u0002\u0002m\u0013\u0003\u0002\u0002\u0002no\u0007\u000f",
    "\u0002\u0002op\u0007\u000b\u0002\u0002pt\u0007\u0007\u0002\u0002qs\u0007",
    "\u000b\u0002\u0002rq\u0003\u0002\u0002\u0002sv\u0003\u0002\u0002\u0002",
    "tr\u0003\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002",
    "\u0002vt\u0003\u0002\u0002\u0002wx\u0007\n\u0002\u0002x\u0015\u0003",
    "\u0002\u0002\u0002y{\u0007\u000f\u0002\u0002z|\n\u0003\u0002\u0002{",
    "z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002}{\u0003\u0002\u0002",
    "\u0002}~\u0003\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f",
    "\u0080\u0007\n\u0002\u0002\u0080\u0017\u0003\u0002\u0002\u0002\u0081",
    "\u0082\u0007\u000e\u0002\u0002\u0082\u0083\u0007$\u0002\u0002\u0083",
    "\u0019\u0003\u0002\u0002\u0002\u0084\u0085\u0007\r\u0002\u0002\u0085",
    "\u0086\u0007\"\u0002\u0002\u0086\u001b\u0003\u0002\u0002\u0002\u0087",
    "\u008e\u0005\"\u0012\u0002\u0088\u008e\u0005\u001e\u0010\u0002\u0089",
    "\u008e\u0005 \u0011\u0002\u008a\u008e\u0005$\u0013\u0002\u008b\u008e",
    "\u0005.\u0018\u0002\u008c\u008e\u0005<\u001f\u0002\u008d\u0087\u0003",
    "\u0002\u0002\u0002\u008d\u0088\u0003\u0002\u0002\u0002\u008d\u0089\u0003",
    "\u0002\u0002\u0002\u008d\u008a\u0003\u0002\u0002\u0002\u008d\u008b\u0003",
    "\u0002\u0002\u0002\u008d\u008c\u0003\u0002\u0002\u0002\u008e\u001d\u0003",
    "\u0002\u0002\u0002\u008f\u0090\u0007\u0013\u0002\u0002\u0090\u0091\u0007",
    "\u000b\u0002\u0002\u0091\u0092\u0007\u0011\u0002\u0002\u0092\u0093\u0005",
    "B\"\u0002\u0093\u001f\u0003\u0002\u0002\u0002\u0094\u0095\u0007\u0013",
    "\u0002\u0002\u0095\u0096\u0007\u000b\u0002\u0002\u0096\u0097\u0007\u0011",
    "\u0002\u0002\u0097\u0098\u0007\u000b\u0002\u0002\u0098\u0099\u0005*",
    "\u0016\u0002\u0099\u009a\u0005B\"\u0002\u009a!\u0003\u0002\u0002\u0002",
    "\u009b\u009c\u0007\u0013\u0002\u0002\u009c\u009d\u0007\u000b\u0002\u0002",
    "\u009d\u009e\u0005&\u0014\u0002\u009e\u009f\u0007\u000b\u0002\u0002",
    "\u009f\u00a0\u0005*\u0016\u0002\u00a0\u00a1\u0005B\"\u0002\u00a1#\u0003",
    "\u0002\u0002\u0002\u00a2\u00a3\u0007\u0014\u0002\u0002\u00a3\u00a4\u0007",
    "\u000b\u0002\u0002\u00a4\u00a5\u0007\u0011\u0002\u0002\u00a5\u00a6\u0005",
    "B\"\u0002\u00a6%\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007\u0011\u0002",
    "\u0002\u00a8\u00aa\u0007\u001c\u0002\u0002\u00a9\u00ab\u0005(\u0015",
    "\u0002\u00aa\u00a9\u0003\u0002\u0002\u0002\u00aa\u00ab\u0003\u0002\u0002",
    "\u0002\u00ab\u00ac\u0003\u0002\u0002\u0002\u00ac\u00ad\u0007\u001d\u0002",
    "\u0002\u00ad\'\u0003\u0002\u0002\u0002\u00ae\u00b0\u0007\u000b\u0002",
    "\u0002\u00af\u00ae\u0003\u0002\u0002\u0002\u00af\u00b0\u0003\u0002\u0002",
    "\u0002\u00b0\u00b1\u0003\u0002\u0002\u0002\u00b1\u00b3\u0007\u0011\u0002",
    "\u0002\u00b2\u00b4\u0007\u000b\u0002\u0002\u00b3\u00b2\u0003\u0002\u0002",
    "\u0002\u00b3\u00b4\u0003\u0002\u0002\u0002\u00b4\u00b7\u0003\u0002\u0002",
    "\u0002\u00b5\u00b6\u0007\u001e\u0002\u0002\u00b6\u00b8\u0005(\u0015",
    "\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002\u00b7\u00b8\u0003\u0002\u0002",
    "\u0002\u00b8)\u0003\u0002\u0002\u0002\u00b9\u00bb\n\u0004\u0002\u0002",
    "\u00ba\u00b9\u0003\u0002\u0002\u0002\u00bb\u00bc\u0003\u0002\u0002\u0002",
    "\u00bc\u00ba\u0003\u0002\u0002\u0002\u00bc\u00bd\u0003\u0002\u0002\u0002",
    "\u00bd+\u0003\u0002\u0002\u0002\u00be\u00c0\u0005\u0004\u0003\u0002",
    "\u00bf\u00be\u0003\u0002\u0002\u0002\u00c0\u00c3\u0003\u0002\u0002\u0002",
    "\u00c1\u00c2\u0003\u0002\u0002\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002",
    "\u00c2-\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u00054\u001b\u0002\u00c5\u00c9\u0005,\u0017\u0002\u00c6",
    "\u00ca\u00052\u001a\u0002\u00c7\u00ca\u00050\u0019\u0002\u00c8\u00ca",
    "\u0005:\u001e\u0002\u00c9\u00c6\u0003\u0002\u0002\u0002\u00c9\u00c7",
    "\u0003\u0002\u0002\u0002\u00c9\u00c8\u0003\u0002\u0002\u0002\u00ca/",
    "\u0003\u0002\u0002\u0002\u00cb\u00cc\u00058\u001d\u0002\u00cc\u00d0",
    "\u0005,\u0017\u0002\u00cd\u00d1\u00052\u001a\u0002\u00ce\u00d1\u0005",
    "0\u0019\u0002\u00cf\u00d1\u0005:\u001e\u0002\u00d0\u00cd\u0003\u0002",
    "\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00cf\u0003\u0002",
    "\u0002\u0002\u00d11\u0003\u0002\u0002\u0002\u00d2\u00d3\u00056\u001c",
    "\u0002\u00d3\u00d4\u0005,\u0017\u0002\u00d4\u00d5\u0005:\u001e\u0002",
    "\u00d53\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007\u0015\u0002\u0002",
    "\u00d7\u00d8\u0007\u000b\u0002\u0002\u00d8\u00d9\u0005*\u0016\u0002",
    "\u00d9\u00da\u0005B\"\u0002\u00da5\u0003\u0002\u0002\u0002\u00db\u00dc",
    "\u0007\u0017\u0002\u0002\u00dc\u00dd\u0005B\"\u0002\u00dd7\u0003\u0002",
    "\u0002\u0002\u00de\u00df\u0007\u0016\u0002\u0002\u00df\u00e0\u0007\u000b",
    "\u0002\u0002\u00e0\u00e1\u0005*\u0016\u0002\u00e1\u00e2\u0005B\"\u0002",
    "\u00e29\u0003\u0002\u0002\u0002\u00e3\u00e4\u0007\u0018\u0002\u0002",
    "\u00e4\u00e5\u0005B\"\u0002\u00e5;\u0003\u0002\u0002\u0002\u00e6\u00e7",
    "\u0005> \u0002\u00e7\u00e8\u0005,\u0017\u0002\u00e8\u00e9\u0005@!\u0002",
    "\u00e9=\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007\u0019\u0002\u0002",
    "\u00eb\u00ec\u0007\u000b\u0002\u0002\u00ec\u00f5\u0007\u0011\u0002\u0002",
    "\u00ed\u00ef\u0007\u000b\u0002\u0002\u00ee\u00ed\u0003\u0002\u0002\u0002",
    "\u00ee\u00ef\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002\u0002",
    "\u00f0\u00f2\u0007\u001e\u0002\u0002\u00f1\u00f3\u0007\u000b\u0002\u0002",
    "\u00f2\u00f1\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002",
    "\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4\u00f6\u0007\u0011\u0002\u0002",
    "\u00f5\u00ee\u0003\u0002\u0002\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002",
    "\u00f6\u00f7\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007\u000b\u0002\u0002",
    "\u00f8\u00f9\u0007\u001b\u0002\u0002\u00f9\u00fa\u0007\u000b\u0002\u0002",
    "\u00fa\u00fb\u0005*\u0016\u0002\u00fb\u00fc\u0005B\"\u0002\u00fc?\u0003",
    "\u0002\u0002\u0002\u00fd\u00fe\u0007\u001a\u0002\u0002\u00fe\u00ff\u0005",
    "B\"\u0002\u00ffA\u0003\u0002\u0002\u0002\u0100\u0102\u0007\u000b\u0002",
    "\u0002\u0101\u0100\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002",
    "\u0002\u0102\u0103\u0003\u0002\u0002\u0002\u0103\u0104\u0007 \u0002",
    "\u0002\u0104C\u0003\u0002\u0002\u0002\u0015GN]ht}\u008d\u00aa\u00af",
    "\u00b3\u00b7\u00bc\u00c1\u00c9\u00d0\u00ee\u00f2\u00f5\u0101"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, "';'", 
                     null, null, "'$${'", "'${'", "'import'", null, null, 
                     null, null, null, "'if'", "'elif'", "'else'", "'endif'", 
                     "'for'", "'done'", "'in'", "'('", "')'", "','" ];

var symbolicNames = [ null, "PP_LINE_BEGIN", "PP_BLOCK_BEGIN", "BLOCK_COMMENT", 
                      "LINE_COMMENT", "STRING_LITERAL", "NUMBER_LITERAL", 
                      "BOOLEAN_LITERAL", "SEMICOLON", "WS", "EOL", "BEGIN_EVAL_MACRO_EXPRESSION", 
                      "BEGIN_EXPAND_MACRO_EXPRESSION", "IMPORT_KW", "PRAGMA_VERSION", 
                      "IDENTIFIER", "WORD", "DEF_KW", "UNDEF_KW", "IF_KW", 
                      "ELIF_KW", "ELSE_KW", "ENDIF_KW", "FOR_KW", "DONE_KW", 
                      "IN_KW", "LPAREN", "RPAREN", "COMMA", "PP_CONT", "PP_END", 
                      "LEAVE_EVAL_MACRO_EXPRESSION", "EVAL_MACRO_EXPRESSION", 
                      "LEAVE_EXPAND_MACRO_EXPRESSION", "EXPAND_MACRO_EXPRESSION" ];

var ruleNames =  [ "sourceUnit", "anything", "code", "literal", "blockComment", 
                   "lineComment", "whitespace", "lineBreak", "pragmaVersion", 
                   "nakedImportStatement", "importStatement", "macroExpansion", 
                   "macroEvaluation", "directive", "nakedDefineDirective", 
                   "defineDirective", "defineMacroDirective", "undefineDirective", 
                   "functionSpec", "functionArgs", "directivePayload", "blockContent", 
                   "ifBlock", "elifBlock", "elseBlock", "ifDirective", "elseDirective", 
                   "elifDirective", "endifDirective", "forBlock", "forDirective", 
                   "doneDirective", "endDirective" ];

function SolParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SolParser.prototype = Object.create(antlr4.Parser.prototype);
SolParser.prototype.constructor = SolParser;

Object.defineProperty(SolParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SolParser.EOF = antlr4.Token.EOF;
SolParser.PP_LINE_BEGIN = 1;
SolParser.PP_BLOCK_BEGIN = 2;
SolParser.BLOCK_COMMENT = 3;
SolParser.LINE_COMMENT = 4;
SolParser.STRING_LITERAL = 5;
SolParser.NUMBER_LITERAL = 6;
SolParser.BOOLEAN_LITERAL = 7;
SolParser.SEMICOLON = 8;
SolParser.WS = 9;
SolParser.EOL = 10;
SolParser.BEGIN_EVAL_MACRO_EXPRESSION = 11;
SolParser.BEGIN_EXPAND_MACRO_EXPRESSION = 12;
SolParser.IMPORT_KW = 13;
SolParser.PRAGMA_VERSION = 14;
SolParser.IDENTIFIER = 15;
SolParser.WORD = 16;
SolParser.DEF_KW = 17;
SolParser.UNDEF_KW = 18;
SolParser.IF_KW = 19;
SolParser.ELIF_KW = 20;
SolParser.ELSE_KW = 21;
SolParser.ENDIF_KW = 22;
SolParser.FOR_KW = 23;
SolParser.DONE_KW = 24;
SolParser.IN_KW = 25;
SolParser.LPAREN = 26;
SolParser.RPAREN = 27;
SolParser.COMMA = 28;
SolParser.PP_CONT = 29;
SolParser.PP_END = 30;
SolParser.LEAVE_EVAL_MACRO_EXPRESSION = 31;
SolParser.EVAL_MACRO_EXPRESSION = 32;
SolParser.LEAVE_EXPAND_MACRO_EXPRESSION = 33;
SolParser.EXPAND_MACRO_EXPRESSION = 34;

SolParser.RULE_sourceUnit = 0;
SolParser.RULE_anything = 1;
SolParser.RULE_code = 2;
SolParser.RULE_literal = 3;
SolParser.RULE_blockComment = 4;
SolParser.RULE_lineComment = 5;
SolParser.RULE_whitespace = 6;
SolParser.RULE_lineBreak = 7;
SolParser.RULE_pragmaVersion = 8;
SolParser.RULE_nakedImportStatement = 9;
SolParser.RULE_importStatement = 10;
SolParser.RULE_macroExpansion = 11;
SolParser.RULE_macroEvaluation = 12;
SolParser.RULE_directive = 13;
SolParser.RULE_nakedDefineDirective = 14;
SolParser.RULE_defineDirective = 15;
SolParser.RULE_defineMacroDirective = 16;
SolParser.RULE_undefineDirective = 17;
SolParser.RULE_functionSpec = 18;
SolParser.RULE_functionArgs = 19;
SolParser.RULE_directivePayload = 20;
SolParser.RULE_blockContent = 21;
SolParser.RULE_ifBlock = 22;
SolParser.RULE_elifBlock = 23;
SolParser.RULE_elseBlock = 24;
SolParser.RULE_ifDirective = 25;
SolParser.RULE_elseDirective = 26;
SolParser.RULE_elifDirective = 27;
SolParser.RULE_endifDirective = 28;
SolParser.RULE_forBlock = 29;
SolParser.RULE_forDirective = 30;
SolParser.RULE_doneDirective = 31;
SolParser.RULE_endDirective = 32;

function SourceUnitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_sourceUnit;
    return this;
}

SourceUnitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceUnitContext.prototype.constructor = SourceUnitContext;

SourceUnitContext.prototype.EOF = function() {
    return this.getToken(SolParser.EOF, 0);
};

SourceUnitContext.prototype.anything = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnythingContext);
    } else {
        return this.getTypedRuleContext(AnythingContext,i);
    }
};

SourceUnitContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterSourceUnit(this);
	}
};

SourceUnitContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitSourceUnit(this);
	}
};

SourceUnitContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitSourceUnit(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.SourceUnitContext = SourceUnitContext;

SolParser.prototype.sourceUnit = function() {

    var localctx = new SourceUnitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SolParser.RULE_sourceUnit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SolParser.BLOCK_COMMENT) | (1 << SolParser.LINE_COMMENT) | (1 << SolParser.STRING_LITERAL) | (1 << SolParser.NUMBER_LITERAL) | (1 << SolParser.BOOLEAN_LITERAL) | (1 << SolParser.SEMICOLON) | (1 << SolParser.WS) | (1 << SolParser.EOL) | (1 << SolParser.BEGIN_EVAL_MACRO_EXPRESSION) | (1 << SolParser.BEGIN_EXPAND_MACRO_EXPRESSION) | (1 << SolParser.IMPORT_KW) | (1 << SolParser.PRAGMA_VERSION) | (1 << SolParser.IDENTIFIER) | (1 << SolParser.WORD) | (1 << SolParser.DEF_KW) | (1 << SolParser.UNDEF_KW) | (1 << SolParser.IF_KW) | (1 << SolParser.FOR_KW))) !== 0)) {
            this.state = 66;
            this.anything();
            this.state = 71;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 72;
        this.match(SolParser.EOF);
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

function AnythingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_anything;
    return this;
}

AnythingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AnythingContext.prototype.constructor = AnythingContext;

AnythingContext.prototype.directive = function() {
    return this.getTypedRuleContext(DirectiveContext,0);
};

AnythingContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

AnythingContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterAnything(this);
	}
};

AnythingContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitAnything(this);
	}
};

AnythingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitAnything(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.AnythingContext = AnythingContext;

SolParser.prototype.anything = function() {

    var localctx = new AnythingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SolParser.RULE_anything);
    try {
        this.state = 76;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SolParser.DEF_KW:
        case SolParser.UNDEF_KW:
        case SolParser.IF_KW:
        case SolParser.FOR_KW:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.directive();
            break;
        case SolParser.BLOCK_COMMENT:
        case SolParser.LINE_COMMENT:
        case SolParser.STRING_LITERAL:
        case SolParser.NUMBER_LITERAL:
        case SolParser.BOOLEAN_LITERAL:
        case SolParser.SEMICOLON:
        case SolParser.WS:
        case SolParser.EOL:
        case SolParser.BEGIN_EVAL_MACRO_EXPRESSION:
        case SolParser.BEGIN_EXPAND_MACRO_EXPRESSION:
        case SolParser.IMPORT_KW:
        case SolParser.PRAGMA_VERSION:
        case SolParser.IDENTIFIER:
        case SolParser.WORD:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.code();
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

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.blockComment = function() {
    return this.getTypedRuleContext(BlockCommentContext,0);
};

CodeContext.prototype.lineComment = function() {
    return this.getTypedRuleContext(LineCommentContext,0);
};

CodeContext.prototype.nakedImportStatement = function() {
    return this.getTypedRuleContext(NakedImportStatementContext,0);
};

CodeContext.prototype.importStatement = function() {
    return this.getTypedRuleContext(ImportStatementContext,0);
};

CodeContext.prototype.pragmaVersion = function() {
    return this.getTypedRuleContext(PragmaVersionContext,0);
};

CodeContext.prototype.macroExpansion = function() {
    return this.getTypedRuleContext(MacroExpansionContext,0);
};

CodeContext.prototype.macroEvaluation = function() {
    return this.getTypedRuleContext(MacroEvaluationContext,0);
};

CodeContext.prototype.literal = function() {
    return this.getTypedRuleContext(LiteralContext,0);
};

CodeContext.prototype.IDENTIFIER = function() {
    return this.getToken(SolParser.IDENTIFIER, 0);
};

CodeContext.prototype.WORD = function() {
    return this.getToken(SolParser.WORD, 0);
};

CodeContext.prototype.whitespace = function() {
    return this.getTypedRuleContext(WhitespaceContext,0);
};

CodeContext.prototype.lineBreak = function() {
    return this.getTypedRuleContext(LineBreakContext,0);
};

CodeContext.prototype.SEMICOLON = function() {
    return this.getToken(SolParser.SEMICOLON, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.CodeContext = CodeContext;

SolParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SolParser.RULE_code);
    try {
        this.state = 91;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 78;
            this.blockComment();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 79;
            this.lineComment();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 80;
            this.nakedImportStatement();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 81;
            this.importStatement();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 82;
            this.pragmaVersion();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 83;
            this.macroExpansion();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 84;
            this.macroEvaluation();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 85;
            this.literal();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 86;
            this.match(SolParser.IDENTIFIER);
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 87;
            this.match(SolParser.WORD);
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 88;
            this.whitespace();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 89;
            this.lineBreak();
            break;

        case 13:
            this.enterOuterAlt(localctx, 13);
            this.state = 90;
            this.match(SolParser.SEMICOLON);
            break;

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

function LiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_literal;
    return this;
}

LiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LiteralContext.prototype.constructor = LiteralContext;

LiteralContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SolParser.STRING_LITERAL, 0);
};

LiteralContext.prototype.NUMBER_LITERAL = function() {
    return this.getToken(SolParser.NUMBER_LITERAL, 0);
};

LiteralContext.prototype.BOOLEAN_LITERAL = function() {
    return this.getToken(SolParser.BOOLEAN_LITERAL, 0);
};

LiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterLiteral(this);
	}
};

LiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitLiteral(this);
	}
};

LiteralContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitLiteral(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.LiteralContext = LiteralContext;

SolParser.prototype.literal = function() {

    var localctx = new LiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SolParser.RULE_literal);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SolParser.STRING_LITERAL) | (1 << SolParser.NUMBER_LITERAL) | (1 << SolParser.BOOLEAN_LITERAL))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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

function BlockCommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_blockComment;
    return this;
}

BlockCommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockCommentContext.prototype.constructor = BlockCommentContext;

BlockCommentContext.prototype.BLOCK_COMMENT = function() {
    return this.getToken(SolParser.BLOCK_COMMENT, 0);
};

BlockCommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterBlockComment(this);
	}
};

BlockCommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitBlockComment(this);
	}
};

BlockCommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitBlockComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.BlockCommentContext = BlockCommentContext;

SolParser.prototype.blockComment = function() {

    var localctx = new BlockCommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SolParser.RULE_blockComment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.match(SolParser.BLOCK_COMMENT);
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

function LineCommentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_lineComment;
    return this;
}

LineCommentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineCommentContext.prototype.constructor = LineCommentContext;

LineCommentContext.prototype.LINE_COMMENT = function() {
    return this.getToken(SolParser.LINE_COMMENT, 0);
};

LineCommentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterLineComment(this);
	}
};

LineCommentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitLineComment(this);
	}
};

LineCommentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitLineComment(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.LineCommentContext = LineCommentContext;

SolParser.prototype.lineComment = function() {

    var localctx = new LineCommentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SolParser.RULE_lineComment);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 97;
        this.match(SolParser.LINE_COMMENT);
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

function WhitespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_whitespace;
    return this;
}

WhitespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WhitespaceContext.prototype.constructor = WhitespaceContext;

WhitespaceContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.WS);
    } else {
        return this.getToken(SolParser.WS, i);
    }
};


WhitespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterWhitespace(this);
	}
};

WhitespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitWhitespace(this);
	}
};

WhitespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitWhitespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.WhitespaceContext = WhitespaceContext;

SolParser.prototype.whitespace = function() {

    var localctx = new WhitespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SolParser.RULE_whitespace);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 99;
        		this.match(SolParser.WS);
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 102; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function LineBreakContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_lineBreak;
    return this;
}

LineBreakContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineBreakContext.prototype.constructor = LineBreakContext;

LineBreakContext.prototype.EOL = function() {
    return this.getToken(SolParser.EOL, 0);
};

LineBreakContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterLineBreak(this);
	}
};

LineBreakContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitLineBreak(this);
	}
};

LineBreakContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitLineBreak(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.LineBreakContext = LineBreakContext;

SolParser.prototype.lineBreak = function() {

    var localctx = new LineBreakContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SolParser.RULE_lineBreak);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 104;
        this.match(SolParser.EOL);
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

function PragmaVersionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_pragmaVersion;
    this.content = null; // Token
    return this;
}

PragmaVersionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PragmaVersionContext.prototype.constructor = PragmaVersionContext;

PragmaVersionContext.prototype.PRAGMA_VERSION = function() {
    return this.getToken(SolParser.PRAGMA_VERSION, 0);
};

PragmaVersionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterPragmaVersion(this);
	}
};

PragmaVersionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitPragmaVersion(this);
	}
};

PragmaVersionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitPragmaVersion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.PragmaVersionContext = PragmaVersionContext;

SolParser.prototype.pragmaVersion = function() {

    var localctx = new PragmaVersionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SolParser.RULE_pragmaVersion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        localctx.content = this.match(SolParser.PRAGMA_VERSION);
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

function NakedImportStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_nakedImportStatement;
    this.path = null; // Token
    return this;
}

NakedImportStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NakedImportStatementContext.prototype.constructor = NakedImportStatementContext;

NakedImportStatementContext.prototype.IMPORT_KW = function() {
    return this.getToken(SolParser.IMPORT_KW, 0);
};

NakedImportStatementContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.WS);
    } else {
        return this.getToken(SolParser.WS, i);
    }
};


NakedImportStatementContext.prototype.SEMICOLON = function() {
    return this.getToken(SolParser.SEMICOLON, 0);
};

NakedImportStatementContext.prototype.STRING_LITERAL = function() {
    return this.getToken(SolParser.STRING_LITERAL, 0);
};

NakedImportStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterNakedImportStatement(this);
	}
};

NakedImportStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitNakedImportStatement(this);
	}
};

NakedImportStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitNakedImportStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.NakedImportStatementContext = NakedImportStatementContext;

SolParser.prototype.nakedImportStatement = function() {

    var localctx = new NakedImportStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SolParser.RULE_nakedImportStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(SolParser.IMPORT_KW);
        this.state = 109;
        this.match(SolParser.WS);
        this.state = 110;
        localctx.path = this.match(SolParser.STRING_LITERAL);
        this.state = 114;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SolParser.WS) {
            this.state = 111;
            this.match(SolParser.WS);
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 117;
        this.match(SolParser.SEMICOLON);
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

function ImportStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_importStatement;
    return this;
}

ImportStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ImportStatementContext.prototype.constructor = ImportStatementContext;

ImportStatementContext.prototype.IMPORT_KW = function() {
    return this.getToken(SolParser.IMPORT_KW, 0);
};

ImportStatementContext.prototype.SEMICOLON = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.SEMICOLON);
    } else {
        return this.getToken(SolParser.SEMICOLON, i);
    }
};


ImportStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterImportStatement(this);
	}
};

ImportStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitImportStatement(this);
	}
};

ImportStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitImportStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ImportStatementContext = ImportStatementContext;

SolParser.prototype.importStatement = function() {

    var localctx = new ImportStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SolParser.RULE_importStatement);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 119;
        this.match(SolParser.IMPORT_KW);
        this.state = 121; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 120;
            _la = this._input.LA(1);
            if(_la<=0 || _la===SolParser.SEMICOLON) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 123; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SolParser.PP_LINE_BEGIN) | (1 << SolParser.PP_BLOCK_BEGIN) | (1 << SolParser.BLOCK_COMMENT) | (1 << SolParser.LINE_COMMENT) | (1 << SolParser.STRING_LITERAL) | (1 << SolParser.NUMBER_LITERAL) | (1 << SolParser.BOOLEAN_LITERAL) | (1 << SolParser.WS) | (1 << SolParser.EOL) | (1 << SolParser.BEGIN_EVAL_MACRO_EXPRESSION) | (1 << SolParser.BEGIN_EXPAND_MACRO_EXPRESSION) | (1 << SolParser.IMPORT_KW) | (1 << SolParser.PRAGMA_VERSION) | (1 << SolParser.IDENTIFIER) | (1 << SolParser.WORD) | (1 << SolParser.DEF_KW) | (1 << SolParser.UNDEF_KW) | (1 << SolParser.IF_KW) | (1 << SolParser.ELIF_KW) | (1 << SolParser.ELSE_KW) | (1 << SolParser.ENDIF_KW) | (1 << SolParser.FOR_KW) | (1 << SolParser.DONE_KW) | (1 << SolParser.IN_KW) | (1 << SolParser.LPAREN) | (1 << SolParser.RPAREN) | (1 << SolParser.COMMA) | (1 << SolParser.PP_CONT) | (1 << SolParser.PP_END) | (1 << SolParser.LEAVE_EVAL_MACRO_EXPRESSION))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (SolParser.EVAL_MACRO_EXPRESSION - 32)) | (1 << (SolParser.LEAVE_EXPAND_MACRO_EXPRESSION - 32)) | (1 << (SolParser.EXPAND_MACRO_EXPRESSION - 32)))) !== 0));
        this.state = 125;
        this.match(SolParser.SEMICOLON);
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

function MacroExpansionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_macroExpansion;
    this.expr = null; // Token
    return this;
}

MacroExpansionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MacroExpansionContext.prototype.constructor = MacroExpansionContext;

MacroExpansionContext.prototype.BEGIN_EXPAND_MACRO_EXPRESSION = function() {
    return this.getToken(SolParser.BEGIN_EXPAND_MACRO_EXPRESSION, 0);
};

MacroExpansionContext.prototype.EXPAND_MACRO_EXPRESSION = function() {
    return this.getToken(SolParser.EXPAND_MACRO_EXPRESSION, 0);
};

MacroExpansionContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterMacroExpansion(this);
	}
};

MacroExpansionContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitMacroExpansion(this);
	}
};

MacroExpansionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitMacroExpansion(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.MacroExpansionContext = MacroExpansionContext;

SolParser.prototype.macroExpansion = function() {

    var localctx = new MacroExpansionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SolParser.RULE_macroExpansion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 127;
        this.match(SolParser.BEGIN_EXPAND_MACRO_EXPRESSION);
        this.state = 128;
        localctx.expr = this.match(SolParser.EXPAND_MACRO_EXPRESSION);
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

function MacroEvaluationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_macroEvaluation;
    this.expr = null; // Token
    return this;
}

MacroEvaluationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MacroEvaluationContext.prototype.constructor = MacroEvaluationContext;

MacroEvaluationContext.prototype.BEGIN_EVAL_MACRO_EXPRESSION = function() {
    return this.getToken(SolParser.BEGIN_EVAL_MACRO_EXPRESSION, 0);
};

MacroEvaluationContext.prototype.EVAL_MACRO_EXPRESSION = function() {
    return this.getToken(SolParser.EVAL_MACRO_EXPRESSION, 0);
};

MacroEvaluationContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterMacroEvaluation(this);
	}
};

MacroEvaluationContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitMacroEvaluation(this);
	}
};

MacroEvaluationContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitMacroEvaluation(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.MacroEvaluationContext = MacroEvaluationContext;

SolParser.prototype.macroEvaluation = function() {

    var localctx = new MacroEvaluationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SolParser.RULE_macroEvaluation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 130;
        this.match(SolParser.BEGIN_EVAL_MACRO_EXPRESSION);
        this.state = 131;
        localctx.expr = this.match(SolParser.EVAL_MACRO_EXPRESSION);
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

function DirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_directive;
    return this;
}

DirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectiveContext.prototype.constructor = DirectiveContext;

DirectiveContext.prototype.defineMacroDirective = function() {
    return this.getTypedRuleContext(DefineMacroDirectiveContext,0);
};

DirectiveContext.prototype.nakedDefineDirective = function() {
    return this.getTypedRuleContext(NakedDefineDirectiveContext,0);
};

DirectiveContext.prototype.defineDirective = function() {
    return this.getTypedRuleContext(DefineDirectiveContext,0);
};

DirectiveContext.prototype.undefineDirective = function() {
    return this.getTypedRuleContext(UndefineDirectiveContext,0);
};

DirectiveContext.prototype.ifBlock = function() {
    return this.getTypedRuleContext(IfBlockContext,0);
};

DirectiveContext.prototype.forBlock = function() {
    return this.getTypedRuleContext(ForBlockContext,0);
};

DirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterDirective(this);
	}
};

DirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitDirective(this);
	}
};

DirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.DirectiveContext = DirectiveContext;

SolParser.prototype.directive = function() {

    var localctx = new DirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SolParser.RULE_directive);
    try {
        this.state = 139;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 133;
            this.defineMacroDirective();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 134;
            this.nakedDefineDirective();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 135;
            this.defineDirective();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 136;
            this.undefineDirective();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 137;
            this.ifBlock();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 138;
            this.forBlock();
            break;

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

function NakedDefineDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_nakedDefineDirective;
    this.name = null; // Token
    return this;
}

NakedDefineDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NakedDefineDirectiveContext.prototype.constructor = NakedDefineDirectiveContext;

NakedDefineDirectiveContext.prototype.DEF_KW = function() {
    return this.getToken(SolParser.DEF_KW, 0);
};

NakedDefineDirectiveContext.prototype.WS = function() {
    return this.getToken(SolParser.WS, 0);
};

NakedDefineDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

NakedDefineDirectiveContext.prototype.IDENTIFIER = function() {
    return this.getToken(SolParser.IDENTIFIER, 0);
};

NakedDefineDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterNakedDefineDirective(this);
	}
};

NakedDefineDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitNakedDefineDirective(this);
	}
};

NakedDefineDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitNakedDefineDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.NakedDefineDirectiveContext = NakedDefineDirectiveContext;

SolParser.prototype.nakedDefineDirective = function() {

    var localctx = new NakedDefineDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SolParser.RULE_nakedDefineDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 141;
        this.match(SolParser.DEF_KW);
        this.state = 142;
        this.match(SolParser.WS);
        this.state = 143;
        localctx.name = this.match(SolParser.IDENTIFIER);
        this.state = 144;
        this.endDirective();
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

function DefineDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_defineDirective;
    this.name = null; // Token
    this.body = null; // DirectivePayloadContext
    return this;
}

DefineDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineDirectiveContext.prototype.constructor = DefineDirectiveContext;

DefineDirectiveContext.prototype.DEF_KW = function() {
    return this.getToken(SolParser.DEF_KW, 0);
};

DefineDirectiveContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.WS);
    } else {
        return this.getToken(SolParser.WS, i);
    }
};


DefineDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

DefineDirectiveContext.prototype.IDENTIFIER = function() {
    return this.getToken(SolParser.IDENTIFIER, 0);
};

DefineDirectiveContext.prototype.directivePayload = function() {
    return this.getTypedRuleContext(DirectivePayloadContext,0);
};

DefineDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterDefineDirective(this);
	}
};

DefineDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitDefineDirective(this);
	}
};

DefineDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitDefineDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.DefineDirectiveContext = DefineDirectiveContext;

SolParser.prototype.defineDirective = function() {

    var localctx = new DefineDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SolParser.RULE_defineDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 146;
        this.match(SolParser.DEF_KW);
        this.state = 147;
        this.match(SolParser.WS);
        this.state = 148;
        localctx.name = this.match(SolParser.IDENTIFIER);
        this.state = 149;
        this.match(SolParser.WS);
        this.state = 150;
        localctx.body = this.directivePayload();
        this.state = 151;
        this.endDirective();
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

function DefineMacroDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_defineMacroDirective;
    this.spec = null; // FunctionSpecContext
    this.body = null; // DirectivePayloadContext
    return this;
}

DefineMacroDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DefineMacroDirectiveContext.prototype.constructor = DefineMacroDirectiveContext;

DefineMacroDirectiveContext.prototype.DEF_KW = function() {
    return this.getToken(SolParser.DEF_KW, 0);
};

DefineMacroDirectiveContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.WS);
    } else {
        return this.getToken(SolParser.WS, i);
    }
};


DefineMacroDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

DefineMacroDirectiveContext.prototype.functionSpec = function() {
    return this.getTypedRuleContext(FunctionSpecContext,0);
};

DefineMacroDirectiveContext.prototype.directivePayload = function() {
    return this.getTypedRuleContext(DirectivePayloadContext,0);
};

DefineMacroDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterDefineMacroDirective(this);
	}
};

DefineMacroDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitDefineMacroDirective(this);
	}
};

DefineMacroDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitDefineMacroDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.DefineMacroDirectiveContext = DefineMacroDirectiveContext;

SolParser.prototype.defineMacroDirective = function() {

    var localctx = new DefineMacroDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SolParser.RULE_defineMacroDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 153;
        this.match(SolParser.DEF_KW);
        this.state = 154;
        this.match(SolParser.WS);
        this.state = 155;
        localctx.spec = this.functionSpec();
        this.state = 156;
        this.match(SolParser.WS);
        this.state = 157;
        localctx.body = this.directivePayload();
        this.state = 158;
        this.endDirective();
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

function UndefineDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_undefineDirective;
    this.name = null; // Token
    return this;
}

UndefineDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UndefineDirectiveContext.prototype.constructor = UndefineDirectiveContext;

UndefineDirectiveContext.prototype.UNDEF_KW = function() {
    return this.getToken(SolParser.UNDEF_KW, 0);
};

UndefineDirectiveContext.prototype.WS = function() {
    return this.getToken(SolParser.WS, 0);
};

UndefineDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

UndefineDirectiveContext.prototype.IDENTIFIER = function() {
    return this.getToken(SolParser.IDENTIFIER, 0);
};

UndefineDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterUndefineDirective(this);
	}
};

UndefineDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitUndefineDirective(this);
	}
};

UndefineDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitUndefineDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.UndefineDirectiveContext = UndefineDirectiveContext;

SolParser.prototype.undefineDirective = function() {

    var localctx = new UndefineDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SolParser.RULE_undefineDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 160;
        this.match(SolParser.UNDEF_KW);
        this.state = 161;
        this.match(SolParser.WS);
        this.state = 162;
        localctx.name = this.match(SolParser.IDENTIFIER);
        this.state = 163;
        this.endDirective();
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

function FunctionSpecContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_functionSpec;
    this.name = null; // Token
    this.args = null; // FunctionArgsContext
    return this;
}

FunctionSpecContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionSpecContext.prototype.constructor = FunctionSpecContext;

FunctionSpecContext.prototype.LPAREN = function() {
    return this.getToken(SolParser.LPAREN, 0);
};

FunctionSpecContext.prototype.RPAREN = function() {
    return this.getToken(SolParser.RPAREN, 0);
};

FunctionSpecContext.prototype.IDENTIFIER = function() {
    return this.getToken(SolParser.IDENTIFIER, 0);
};

FunctionSpecContext.prototype.functionArgs = function() {
    return this.getTypedRuleContext(FunctionArgsContext,0);
};

FunctionSpecContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterFunctionSpec(this);
	}
};

FunctionSpecContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitFunctionSpec(this);
	}
};

FunctionSpecContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitFunctionSpec(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.FunctionSpecContext = FunctionSpecContext;

SolParser.prototype.functionSpec = function() {

    var localctx = new FunctionSpecContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SolParser.RULE_functionSpec);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        localctx.name = this.match(SolParser.IDENTIFIER);
        this.state = 166;
        this.match(SolParser.LPAREN);
        this.state = 168;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SolParser.WS || _la===SolParser.IDENTIFIER) {
            this.state = 167;
            localctx.args = this.functionArgs();
        }

        this.state = 170;
        this.match(SolParser.RPAREN);
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

function FunctionArgsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_functionArgs;
    this.arg = null; // Token
    this.rest = null; // FunctionArgsContext
    return this;
}

FunctionArgsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FunctionArgsContext.prototype.constructor = FunctionArgsContext;

FunctionArgsContext.prototype.IDENTIFIER = function() {
    return this.getToken(SolParser.IDENTIFIER, 0);
};

FunctionArgsContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.WS);
    } else {
        return this.getToken(SolParser.WS, i);
    }
};


FunctionArgsContext.prototype.COMMA = function() {
    return this.getToken(SolParser.COMMA, 0);
};

FunctionArgsContext.prototype.functionArgs = function() {
    return this.getTypedRuleContext(FunctionArgsContext,0);
};

FunctionArgsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterFunctionArgs(this);
	}
};

FunctionArgsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitFunctionArgs(this);
	}
};

FunctionArgsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitFunctionArgs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.FunctionArgsContext = FunctionArgsContext;

SolParser.prototype.functionArgs = function() {

    var localctx = new FunctionArgsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SolParser.RULE_functionArgs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 173;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SolParser.WS) {
            this.state = 172;
            this.match(SolParser.WS);
        }

        this.state = 175;
        localctx.arg = this.match(SolParser.IDENTIFIER);
        this.state = 177;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SolParser.WS) {
            this.state = 176;
            this.match(SolParser.WS);
        }

        this.state = 181;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SolParser.COMMA) {
            this.state = 179;
            this.match(SolParser.COMMA);
            this.state = 180;
            localctx.rest = this.functionArgs();
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

function DirectivePayloadContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_directivePayload;
    return this;
}

DirectivePayloadContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DirectivePayloadContext.prototype.constructor = DirectivePayloadContext;

DirectivePayloadContext.prototype.PP_END = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.PP_END);
    } else {
        return this.getToken(SolParser.PP_END, i);
    }
};


DirectivePayloadContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterDirectivePayload(this);
	}
};

DirectivePayloadContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitDirectivePayload(this);
	}
};

DirectivePayloadContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitDirectivePayload(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.DirectivePayloadContext = DirectivePayloadContext;

SolParser.prototype.directivePayload = function() {

    var localctx = new DirectivePayloadContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SolParser.RULE_directivePayload);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 183;
        		_la = this._input.LA(1);
        		if(_la<=0 || _la===SolParser.PP_END) {
        		this._errHandler.recoverInline(this);
        		}
        		else {
        			this._errHandler.reportMatch(this);
        		    this.consume();
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 186; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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

function BlockContentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_blockContent;
    return this;
}

BlockContentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContentContext.prototype.constructor = BlockContentContext;

BlockContentContext.prototype.anything = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AnythingContext);
    } else {
        return this.getTypedRuleContext(AnythingContext,i);
    }
};

BlockContentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterBlockContent(this);
	}
};

BlockContentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitBlockContent(this);
	}
};

BlockContentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitBlockContent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.BlockContentContext = BlockContentContext;

SolParser.prototype.blockContent = function() {

    var localctx = new BlockContentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SolParser.RULE_blockContent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 191;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
        while(_alt!=1 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1+1) {
                this.state = 188;
                this.anything(); 
            }
            this.state = 193;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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

function IfBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_ifBlock;
    this.dir = null; // IfDirectiveContext
    this.content = null; // BlockContentContext
    this.elseAlt = null; // ElseBlockContext
    this.elifAlt = null; // ElifBlockContext
    return this;
}

IfBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfBlockContext.prototype.constructor = IfBlockContext;

IfBlockContext.prototype.ifDirective = function() {
    return this.getTypedRuleContext(IfDirectiveContext,0);
};

IfBlockContext.prototype.blockContent = function() {
    return this.getTypedRuleContext(BlockContentContext,0);
};

IfBlockContext.prototype.endifDirective = function() {
    return this.getTypedRuleContext(EndifDirectiveContext,0);
};

IfBlockContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

IfBlockContext.prototype.elifBlock = function() {
    return this.getTypedRuleContext(ElifBlockContext,0);
};

IfBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterIfBlock(this);
	}
};

IfBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitIfBlock(this);
	}
};

IfBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitIfBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.IfBlockContext = IfBlockContext;

SolParser.prototype.ifBlock = function() {

    var localctx = new IfBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SolParser.RULE_ifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        localctx.dir = this.ifDirective();
        this.state = 195;
        localctx.content = this.blockContent();
        this.state = 199;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SolParser.ELSE_KW:
            this.state = 196;
            localctx.elseAlt = this.elseBlock();
            break;
        case SolParser.ELIF_KW:
            this.state = 197;
            localctx.elifAlt = this.elifBlock();
            break;
        case SolParser.ENDIF_KW:
            this.state = 198;
            this.endifDirective();
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

function ElifBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_elifBlock;
    this.dir = null; // ElifDirectiveContext
    this.content = null; // BlockContentContext
    this.elseAlt = null; // ElseBlockContext
    this.elifAlt = null; // ElifBlockContext
    return this;
}

ElifBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElifBlockContext.prototype.constructor = ElifBlockContext;

ElifBlockContext.prototype.elifDirective = function() {
    return this.getTypedRuleContext(ElifDirectiveContext,0);
};

ElifBlockContext.prototype.blockContent = function() {
    return this.getTypedRuleContext(BlockContentContext,0);
};

ElifBlockContext.prototype.endifDirective = function() {
    return this.getTypedRuleContext(EndifDirectiveContext,0);
};

ElifBlockContext.prototype.elseBlock = function() {
    return this.getTypedRuleContext(ElseBlockContext,0);
};

ElifBlockContext.prototype.elifBlock = function() {
    return this.getTypedRuleContext(ElifBlockContext,0);
};

ElifBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterElifBlock(this);
	}
};

ElifBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitElifBlock(this);
	}
};

ElifBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitElifBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ElifBlockContext = ElifBlockContext;

SolParser.prototype.elifBlock = function() {

    var localctx = new ElifBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SolParser.RULE_elifBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        localctx.dir = this.elifDirective();
        this.state = 202;
        localctx.content = this.blockContent();
        this.state = 206;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case SolParser.ELSE_KW:
            this.state = 203;
            localctx.elseAlt = this.elseBlock();
            break;
        case SolParser.ELIF_KW:
            this.state = 204;
            localctx.elifAlt = this.elifBlock();
            break;
        case SolParser.ENDIF_KW:
            this.state = 205;
            this.endifDirective();
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

function ElseBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_elseBlock;
    this.content = null; // BlockContentContext
    return this;
}

ElseBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseBlockContext.prototype.constructor = ElseBlockContext;

ElseBlockContext.prototype.elseDirective = function() {
    return this.getTypedRuleContext(ElseDirectiveContext,0);
};

ElseBlockContext.prototype.endifDirective = function() {
    return this.getTypedRuleContext(EndifDirectiveContext,0);
};

ElseBlockContext.prototype.blockContent = function() {
    return this.getTypedRuleContext(BlockContentContext,0);
};

ElseBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterElseBlock(this);
	}
};

ElseBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitElseBlock(this);
	}
};

ElseBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitElseBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ElseBlockContext = ElseBlockContext;

SolParser.prototype.elseBlock = function() {

    var localctx = new ElseBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SolParser.RULE_elseBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.elseDirective();
        this.state = 209;
        localctx.content = this.blockContent();
        this.state = 210;
        this.endifDirective();
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

function IfDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_ifDirective;
    this.condition = null; // DirectivePayloadContext
    return this;
}

IfDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IfDirectiveContext.prototype.constructor = IfDirectiveContext;

IfDirectiveContext.prototype.IF_KW = function() {
    return this.getToken(SolParser.IF_KW, 0);
};

IfDirectiveContext.prototype.WS = function() {
    return this.getToken(SolParser.WS, 0);
};

IfDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

IfDirectiveContext.prototype.directivePayload = function() {
    return this.getTypedRuleContext(DirectivePayloadContext,0);
};

IfDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterIfDirective(this);
	}
};

IfDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitIfDirective(this);
	}
};

IfDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitIfDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.IfDirectiveContext = IfDirectiveContext;

SolParser.prototype.ifDirective = function() {

    var localctx = new IfDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SolParser.RULE_ifDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 212;
        this.match(SolParser.IF_KW);
        this.state = 213;
        this.match(SolParser.WS);
        this.state = 214;
        localctx.condition = this.directivePayload();
        this.state = 215;
        this.endDirective();
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

function ElseDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_elseDirective;
    return this;
}

ElseDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElseDirectiveContext.prototype.constructor = ElseDirectiveContext;

ElseDirectiveContext.prototype.ELSE_KW = function() {
    return this.getToken(SolParser.ELSE_KW, 0);
};

ElseDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

ElseDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterElseDirective(this);
	}
};

ElseDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitElseDirective(this);
	}
};

ElseDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitElseDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ElseDirectiveContext = ElseDirectiveContext;

SolParser.prototype.elseDirective = function() {

    var localctx = new ElseDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SolParser.RULE_elseDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 217;
        this.match(SolParser.ELSE_KW);
        this.state = 218;
        this.endDirective();
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

function ElifDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_elifDirective;
    this.condition = null; // DirectivePayloadContext
    return this;
}

ElifDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElifDirectiveContext.prototype.constructor = ElifDirectiveContext;

ElifDirectiveContext.prototype.ELIF_KW = function() {
    return this.getToken(SolParser.ELIF_KW, 0);
};

ElifDirectiveContext.prototype.WS = function() {
    return this.getToken(SolParser.WS, 0);
};

ElifDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

ElifDirectiveContext.prototype.directivePayload = function() {
    return this.getTypedRuleContext(DirectivePayloadContext,0);
};

ElifDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterElifDirective(this);
	}
};

ElifDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitElifDirective(this);
	}
};

ElifDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitElifDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ElifDirectiveContext = ElifDirectiveContext;

SolParser.prototype.elifDirective = function() {

    var localctx = new ElifDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SolParser.RULE_elifDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 220;
        this.match(SolParser.ELIF_KW);
        this.state = 221;
        this.match(SolParser.WS);
        this.state = 222;
        localctx.condition = this.directivePayload();
        this.state = 223;
        this.endDirective();
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

function EndifDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_endifDirective;
    return this;
}

EndifDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndifDirectiveContext.prototype.constructor = EndifDirectiveContext;

EndifDirectiveContext.prototype.ENDIF_KW = function() {
    return this.getToken(SolParser.ENDIF_KW, 0);
};

EndifDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

EndifDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterEndifDirective(this);
	}
};

EndifDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitEndifDirective(this);
	}
};

EndifDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitEndifDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.EndifDirectiveContext = EndifDirectiveContext;

SolParser.prototype.endifDirective = function() {

    var localctx = new EndifDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SolParser.RULE_endifDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 225;
        this.match(SolParser.ENDIF_KW);
        this.state = 226;
        this.endDirective();
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

function ForBlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_forBlock;
    this.dir = null; // ForDirectiveContext
    this.content = null; // BlockContentContext
    return this;
}

ForBlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForBlockContext.prototype.constructor = ForBlockContext;

ForBlockContext.prototype.doneDirective = function() {
    return this.getTypedRuleContext(DoneDirectiveContext,0);
};

ForBlockContext.prototype.forDirective = function() {
    return this.getTypedRuleContext(ForDirectiveContext,0);
};

ForBlockContext.prototype.blockContent = function() {
    return this.getTypedRuleContext(BlockContentContext,0);
};

ForBlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterForBlock(this);
	}
};

ForBlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitForBlock(this);
	}
};

ForBlockContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitForBlock(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ForBlockContext = ForBlockContext;

SolParser.prototype.forBlock = function() {

    var localctx = new ForBlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SolParser.RULE_forBlock);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        localctx.dir = this.forDirective();
        this.state = 229;
        localctx.content = this.blockContent();
        this.state = 230;
        this.doneDirective();
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

function ForDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_forDirective;
    this.iterator = null; // Token
    this.key = null; // Token
    this.iterable = null; // DirectivePayloadContext
    return this;
}

ForDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ForDirectiveContext.prototype.constructor = ForDirectiveContext;

ForDirectiveContext.prototype.FOR_KW = function() {
    return this.getToken(SolParser.FOR_KW, 0);
};

ForDirectiveContext.prototype.WS = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.WS);
    } else {
        return this.getToken(SolParser.WS, i);
    }
};


ForDirectiveContext.prototype.IN_KW = function() {
    return this.getToken(SolParser.IN_KW, 0);
};

ForDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

ForDirectiveContext.prototype.IDENTIFIER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SolParser.IDENTIFIER);
    } else {
        return this.getToken(SolParser.IDENTIFIER, i);
    }
};


ForDirectiveContext.prototype.directivePayload = function() {
    return this.getTypedRuleContext(DirectivePayloadContext,0);
};

ForDirectiveContext.prototype.COMMA = function() {
    return this.getToken(SolParser.COMMA, 0);
};

ForDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterForDirective(this);
	}
};

ForDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitForDirective(this);
	}
};

ForDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitForDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.ForDirectiveContext = ForDirectiveContext;

SolParser.prototype.forDirective = function() {

    var localctx = new ForDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SolParser.RULE_forDirective);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.match(SolParser.FOR_KW);
        this.state = 233;
        this.match(SolParser.WS);
        this.state = 234;
        localctx.iterator = this.match(SolParser.IDENTIFIER);
        this.state = 243;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        if(la_===1) {
            this.state = 236;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SolParser.WS) {
                this.state = 235;
                this.match(SolParser.WS);
            }

            this.state = 238;
            this.match(SolParser.COMMA);
            this.state = 240;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===SolParser.WS) {
                this.state = 239;
                this.match(SolParser.WS);
            }

            this.state = 242;
            localctx.key = this.match(SolParser.IDENTIFIER);

        }
        this.state = 245;
        this.match(SolParser.WS);
        this.state = 246;
        this.match(SolParser.IN_KW);
        this.state = 247;
        this.match(SolParser.WS);
        this.state = 248;
        localctx.iterable = this.directivePayload();
        this.state = 249;
        this.endDirective();
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

function DoneDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_doneDirective;
    return this;
}

DoneDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DoneDirectiveContext.prototype.constructor = DoneDirectiveContext;

DoneDirectiveContext.prototype.DONE_KW = function() {
    return this.getToken(SolParser.DONE_KW, 0);
};

DoneDirectiveContext.prototype.endDirective = function() {
    return this.getTypedRuleContext(EndDirectiveContext,0);
};

DoneDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterDoneDirective(this);
	}
};

DoneDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitDoneDirective(this);
	}
};

DoneDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitDoneDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.DoneDirectiveContext = DoneDirectiveContext;

SolParser.prototype.doneDirective = function() {

    var localctx = new DoneDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SolParser.RULE_doneDirective);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 251;
        this.match(SolParser.DONE_KW);
        this.state = 252;
        this.endDirective();
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

function EndDirectiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SolParser.RULE_endDirective;
    return this;
}

EndDirectiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndDirectiveContext.prototype.constructor = EndDirectiveContext;

EndDirectiveContext.prototype.PP_END = function() {
    return this.getToken(SolParser.PP_END, 0);
};

EndDirectiveContext.prototype.WS = function() {
    return this.getToken(SolParser.WS, 0);
};

EndDirectiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.enterEndDirective(this);
	}
};

EndDirectiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SolParserListener ) {
        listener.exitEndDirective(this);
	}
};

EndDirectiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SolParserVisitor ) {
        return visitor.visitEndDirective(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SolParser.EndDirectiveContext = EndDirectiveContext;

SolParser.prototype.endDirective = function() {

    var localctx = new EndDirectiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SolParser.RULE_endDirective);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 255;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===SolParser.WS) {
            this.state = 254;
            this.match(SolParser.WS);
        }

        this.state = 257;
        this.match(SolParser.PP_END);
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


exports.SolParser = SolParser;
