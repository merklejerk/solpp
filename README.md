![build status](https://travis-ci.org/merklejerk/solpp.svg?branch=master)
[![npm package](https://badge.fury.io/js/solpp.svg)](https://www.npmjs.com/package/solpp)

# **solpp**
#### A [preprocessor](https://en.wikipedia.org/wiki/Preprocessor) and flattener for Ethereum's [Solidity](https://solidity.readthedocs.io) source files.

`solpp` is designed *specifically* for Solidity, which means it
actually understands some of Solidity's grammar and offers high-precision
math and builtin functions suitable for use with Solidity's primitives.

## Features

- Flattens your source files for easy contract verification on
[etherscan.io](https://etherscan.io) by merging all naked imports.
- Will even include URL imports, along with their dependencies.
- Simple, practical language inspired by C preprocessor directives,
python, and javascript.
- Easily declare symbols and macro functions in your source file with
`#def` directives.
- `#if`/`#elif`/`#else` blocks for conditional code rendering.
- `#for` blocks for repeating code.
- Expand (substitute) with `$(...)` or evaluate with `$$(...)` symbols, macros,
and expressions anywhere in your code.
- All math is done in extremely high precision (up to120 digits) and can
represent integers AND decimals.
- Robust expression syntax with many useful builtin functions.

##### Please see the [ChangeLog](./CHANGELOG.md) for breaking changes between versions.

## Topics
- [Example](#example)
- [Installation](#installation)
- [Command Line Usage](#command-line-usage)
   - [CLI Options](#cli-options)
   - [Instructions](#instructions)
      - [External Symbols](#external-symbols)
- [Library Usage](#library-usage)
- [Language Reference](#language-reference)
   - [Directive Syntax](#directive-syntax)
   - [Symbols](#symbols)
   - [Macros](#macros)
   - [Expansion](#expansion)
   - [Evaluation](#evaluation)
      - [Inline Evaluation](#inline-evaluation)
   - [If/Elif/Else Blocks](#if-elif-else-blocks)
   - [For Loops](#for-loops)
   - [Expressions](#expressions)
      - [Operations](#operations)
      - [Literals](#literals)
   - [Builtins](#builtins)
      - [Language Functions](#language-functions)
      - [Numerical Functions](#numerical-functions)
      - [String Functions](#string-functions)
      - [List Functions](#list-functions)
      - [Ethereum Functions](#ethereum-functions)
      - [Constants](#constants)

## Example

```solidity
// solpp will inline this file and any of its dependencies.
import './MyLibrary.sol';
// If you have a file in node_modules, solpp can grab that too.
import 'openzeppelin-solidity/contracts/math/Math.sol';
// solpp can also do the same with URLs!
import 'https://raw.githubusercontent.com/OpenZeppelin/openzeppelin-solidity/v2.0.0/contracts/token/ERC20/ERC20.sol';


contract MyContract {
   // Define and use a symbol.
   // #def EIGHT_QUARTERS 8 / 4
   uint256 _var1 = $(EIGHT_QUARTERS); // -> uint256 _var1 = 8 / 4;
   // Evaluate a symbol as an expression. Note the double $.
   uint256 _var2 = $$(EIGHT_QUARTERS); // -> uint256 _var2 = 2;
   // We can even remove the symbol if we don't need it anymore.
   // #undef EIGHT_QUARTERS

   // Define and use a macro.
   // #def POW(a, b) a ** b
   // Here we expand then evaluate the symbol.
   uint256 _var3 = $(POW(2, 3)) + $$(POW(16, 0.5)); // -> uint256 _var3 = 2 ** 3 + 4;
   // Macros can call other macros and symbols during evaluation.
   // #def SQUARE(x) POW(x, 2)
   uint256 _var4 = $$(SQUARE(10)); // -> uint256 _var4 = 100;
   // You can also evaluate expressions inline.
   // Here we compute LOG(10) expressed as parts per million
   // using some builtin functions.
   uint256 _log10 = $$(int(log(10) * 1e6)); // -> uint256 _log10 = 2302585;
   // All math supports decimals. here we output sqrt(2) as a
   // decimal string with 16 digits of precision.
   string _sqrt2 = $$(quote(sd(2**0.5, 16))); // -> string _sqrt2 = "1.414213562373095";
   // We can even do bitwise operations on integers and output hex.
   bytes32 _bytes = $$(hex(int((2**0.5) * 1e18) << 8)); // -> bytes32 _bytes = 0x13a04bbdfdc9be8800;
   // Maybe we want to combine some strings.
   string _fullName = $$(quote(join(['Bob', 'Smith'], ' '))); // -> string _fullName = "Bob Smith";
   // Or do string interpolation.
   // #def GREETING(first, last) quote(`Hello, $(first} $(last}!`)
   string _fullName2 = $$(GREETING('Bob', 'Smith')) // -> string _fullName2 = "Hello, Bob Smith!";
   // Convert a private key to an address? Sure!
   // #def PRIV_KEY 0x563b99585e0709e3a7ac78b8957aa0f53bc874a86f288884d7ccafe3b9e9b934
   address _addr = $$(key2addr(PRIV_KEY)); // -> _addr = 0x86c0bfFbA7b505c82f1533aFe6C69A604c3e2870;

   function foo(uint256 x) pure returns (uint256) {
      // #if EXT_SYMBOL
      // If the symbol EXT_SYMBOL is defined externally or in a source file
      // as "truthy" (non-false, non-zero), this code will be rendered.
      return x * 100;
      // #else
      // Otherwise, this code will be rendered.
      return x / 100;
      // #endif
   }

   function bar(uint256 x) pure returns (uint256) {
     // Repeat code with a a for loop.
     return x /* #for V in range(1,4) */+ $$(V+1)/* #done */; // -> return x + 1 + 2 + 3;
   }
}
```

## Installation
If your project scaffolding is node-based, you can install it as a
development dependency inside your project directory.
As a development dependency, you should be able to call
`solpp` in a `"scripts"` entry in your project's `package.json` file.

To run the tool manually, you can use `npx solpp` from within your project
directory.

```bash
# Install as a project development dependency with npm.
npm install -D solpp
# or if using yarn
yarn add -D solpp
```

If you want `solpp` to be accessible from anywhere in your filesystem, you'll
need to install it globally.

```bash
# Install globally with npm.
npm install -g solpp
# or if using yarn
yarn global add solpp
```

## Command Line Usage

### CLI Options
```
Usage: solpp [options] <source-file>

Options:
   -v --version                 output the version number
   -o, --output <file>          write output to a file (instead of stdout)
   --no-flatten                 do not flatten (include) naked imports
   --no-pp                      disable the preprocessor (just flatten)
   -D, --define <name>[=value]  define a preprocessor symbol (can be repeated)
   --defs <file>                preprocessor definitions JS or JSON file
   --tolerant                   ignore missing imports when flattening
   -h, --help                   output usage information
```

### Instructions

You should invoke `solpp` for the contract file that you want to preprocess.
It will automatically include and preprocess all **naked** imports found within
the file and subsequent files. Naked imports are of the form
`import "path/to/file";`. Any other import scheme will be ignored.

**`solpp` is not a compiler**, so you will still need to compile the generated code
yourself, via [solc](https://solidity.readthedocs.io/en/v0.4.25/using-the-compiler.html)
or a build pipeline like [truffle](https://github.com/trufflesuite/truffle).

If you are using a build pipeline such as
[truffle](https://github.com/trufflesuite/truffle), you should keep your
raw source files in a separate directory and run `solpp` to output code
into the pipeline's source directory before compiling your project.

#### External Symbols

You can define preprocessor symbols inside source files using the `#def`
directive or you can define them externally on the command line
(with the `-D` flag) or in a JS/JSON file. The order of priority in which
redundantly declared symbols override each other, from highest priority to
lowest priority, is Source -> Command Line -> Definitions File.

A JSON definitions file is just a plain object such as:
```js
{
   "MY_SYMBOL_1": 100,
   "MY_SYMBOL_2": true,
   "MY_SYMBOL_3": "48192.418291248",
   "MY_SYMBOL_4": "blah blah",
   "MY_SYMBOL_5": ['symbols', 'can', 'hold', 'lists']
}
```

If using a JS file, it will be imported as a nodejs module, so you must assign
your object to `module.exports`. The advantage of using a JS file is you can
define symbols as functions, which can be called from
[evaluations](#evaluation) in your code.

## Library Usage

If you `require('solpp')` into your nodejs project, you can use it
programmatically. This allows `solpp` to be integrated into any pipeline.

The library exposes 3 functions, all of which return promises:

```js
const solpp = require('solpp');

// Preprocess code. Returns processed code.
PROCESSED_CODE: String = await solpp.processCode(
   // The raw code to process.
   code: String,
   // Options object. All fields are optional.
   opts={
      // Dictionary of preprocessor symbols and functions
      defs: {...},
      // Unique name for the source unit (like a full path).
      name: String,
      // The current working directory.
      cwd: String,
      // Function to resolve imported files.
      resolver: Function(path, cwd, from),
      // Whether or not to collapse 2 or more empty lines. Defaults to true.
      collapseEmptyLines: Boolean,
      // Whether to ignore unresolved imports. Defaults to false.
      tolerant: Boolean,
      // Don't flatten/inline imports. Defaults to false.
      noFlatten: Boolean,
      // Disable the preprocessor. Defaults to false.
      noPreprocessor: Boolean
});

// Preprocess code in a file. Returns processed code.
PROCESSED_CODE: String = await solpp.processFile(
   // The path of the raw code file.
   path: String,
   // Same as in processCode().
   opts={...});

// The default resolver used when none is set.
// Will either resolve filesystem files or remote files (URLs).
// Returns an object.
{
   // The raw code in the file.
   code: String
   // A unique name for the file (usually just the full path or URL)
   name: String,
   // The parent directory (or URL path) of the file.
   cwd: String,
} = await solpp.resolver(
      // The import path. May be a relative or absolute path, or even a URL.
      path: String,
      // The current working directory, or parent URL path if coming from a remote file.
      cwd: String,
      // The name of the importing file.
      from: String
   );
```

## Language Reference

### Directive Syntax

All `solpp` directives are contained inside either line comments or block
comments. This design is to maintain compatibility with existing Solidity
editor highlighters. You can use line and block comment directives
interchangeably. Line comment directives terminate at the end of the line,
unless the line ends in a `\` character, which allows you to continue the
directive on the next immediate line comment.

**Example**
```solidity
// Single line comment directive.
// #def LDEF All this text is the value of LDEF.

// A line comment directive spread across two lines.
// #def MULTILINE_LDEF If you start running out of room, you can continue \
// on the next line like so.

// Block comment directives are great in tight #for loops or #if blocks.
// This will render: uint256 fac5 = 1 * 2 * 3 * 4 * 5;
uint256 fac5 = 1/* #for i in range(2, 6) */ * $$(i)/* #done */;
bool maybe = /* #if SOME_SYMBOL */true/* #else */false;/* #endif */
```

### Symbols
Symbols can be declared externally on the command line or in a definitions
file, or from right within a source file with the `#def` directive.
Symbols can take on arbitrary values: code snippets, expressions, strings,
numbers (binary, hex, octal, decimals), booleans, and lists.

Once defined, symbols (and macros) can be [expanded](#expansion) (`$(...)`)
or [evaluated](#evaluation) (`$$(...)`) in your code. Symbols do not
have to hold valid expressions, but only those that do can be evaluated.

If you no longer need a symbol, you can undefine it with the `#undef` directive.

**Input**
```solidity
// Define a symbol
// #def MY_EXPR 1 + 1
// Expand it.
uint256 x = $(MY_EXPR);
// Now evaluate it.
uint256 y = $$(MY_EXPR);

// Remove this symbol.
// #undef MY_EXPR
```

**Result**
```solidity
// Define a symbol
// Expand it.
uint256 x = 1 + 1;
// Now evaluate it.
uint256 y = 2;

// Remove this symbol.
```

### Macros
Macros are similar to symbols except that they take some arguments, like a
function. They can be defined externally in a (javascript) definitions file or
from within your code also with the `#def` directive.

[Expanding](#expansion) a macro will perform a substitution of the arguments
across its contents. [Evaluating](#evaluation) a macro will evaluate its
contents as an expression, just like calling a function. You can even call
other macros or reference other symbols inside macros during evaluation.
Like symbols, macros do not have to hold valid expressions, but
only those that do can be evaluated.

If you no longer need a macro, you can undefine it with the `#undef` directive.

**Input**
```solidity
// Define a macro
// #def MY_MACRO(x) (x / 2) + 1
// Expand it.
uint256 x = $(MY_MACRO(10));
// Evaluate it.
uint256 y = $$(MY_MACRO(10));

// Define a new macro that calls the other macro.
// #def OTHER_MACRO(x) MY_MACRO(x * 10)
// Evaluate it.
uint256 z = $$(OTHER_MACRO(8));

// Remove this macro.
// #undef OTHER_MACRO
```

**Result**
```solidity
// Define a macro
// Expand it.
uint256 x = (10/2) + 1;
// Evaluate it.
uint256 y = 6;

// Define a new macro that calls the other macro.
// Evaluate it.
uint256 z = 41;

// Remove this macro.
```

### Expansion

Expansion occurs whenever a `$(...)` block is encountered in regular code
(i.e., not inside a comment or string literal). When expanding a symbol, the
contents of that symbol are simply put in the place of the expansion block.

A similar result occurs when expanding a macro, except arguments will be
substituted throughout the macro's contents.

**Input**
```solidity
// Expanding a symbol.
// #def SYM_1 foo / 2
uint256 v = 1 + $(SYM_1);

// Expanding a macro.
// #def MACRO_1(x) x / 2
uint256 v2 = 1 + $(MACRO_1(100));
```

**Result**
```solidity
// Expanding a symbol.
uint256 v = 1 + foo / 2;

// Expanding a macro.
uint256 v = 1 + 100 / 2;
```

### Evaluation

Evaluation occurs whenever a `$$(...)` block is encountered in regular code
(i.e., not inside a comment or string literal). When evaluating a symbol, the
contents of that symbol are parsed and evaluated as an expression, with the
ultimate result put in the place of the evaluation block. Macros work the same
 way, except they can accept arguments which will also be evaluated.

Macros and symbols call and refer to other macros, symbols, and
[builtins](#builtins) during evaluation.

If a macro or symbol does not contain a valid expression during an evaluation
operation, an error will be raised. If a symbol is encountered that is
undefined, it will take on the value of `0`.

**Input**
```solidity
// Evaluating a symbol.
// #def SYM_1 5 * 2
uint256 v = 1 + $$(SYM_1);

// Evaluating a macro.
// #def MACRO_1(x) x * 2
uint256 v2 = 1 + $$(MACRO_1(2));

// Macro calling another macro and referencing a symbol.
// #def SYM_2 2 ** 3
// #def MACRO_2(x) MACRO_1(x) + SYM_2
uint256 v3 = $$(MACRO_2(4));
```
**Result**
```solidity
// Evaluating a symbol.
uint256 v = 1 + 10;

// Evaluating a macro.
uint256 v2 = 1 + 4;

// Macro calling another macro and referencing a symbol.
uint256 v3 = 16;
```

#### Inline Evaluation

You don't have to use symbols or macros in your evaluation blocks. You can put
any valid expression inside of them as well.

**Input**
```solidity
// Compute the sqrt of 2 as parts per million.
// Here we use the builtin function 'int' to make the result an integer.
uint256 sqrt2 = $$(int(2**0.5 * 1e6));
```

**Result**
```solidity
// Compute the sqrt of 2 as parts per million.
// Here we use the builtin function 'int' to make the result an integer.
uint256 sqrt2 = 1414213;
```


### If/Elif/Else Blocks

One of the most common uses of a preprocessor is conditional code
generation. This is easily accomplished through the
`#if`, `#elif`, `#else`, and `#endif` directives. Code between an
`#if/else/elif` and `#endif` directive will only be rendered if the directive's
condition **evaluates** to "truthy" (either true, non-zero, or a
non-empty string). Conditions are normal preprocessor
[expressions](#expressions), which can be as simple as a single value or a
complex sequence of operations.

Blocks may also be nested, with inner blocks depending on outer blocks.

**Input**
```solidity
// #if true
// This block will always render.
uint256 x = 100;
// #endif

// #if 0
// This block will never render
uint256 x = 200;
// #endif

// #if EXT_SYM_1
// This block will only render if EXT_SYM_1 is defined as truthy.
uint256 foo = 1;
// #elif EXT_SYM_2 == 'foobar'
// This Block will only render if EXT_SYM_1 is falsey (or undefined)
// AND EXT_SYM_1 is set to the string 'foobar'
uint256 foo = 2;
// #else
// This block will only render if the preceding two conditions fail.
uint256 foo = 3;
// #endif
```

**Result** (with `EXT_SYM_2='foobar'`)
```solidity
// This block will always render.
uint256 x = 100;

// This Block will only render if EXT_SYM_1 is falsey (or undefined)
// AND EXT_SYM_1 is set to the string 'foobar'
uint256 foo = 2;
```

### For Loops

Another great use case for preprocessors is unrolling loops or generating
constant values for an array. The `#for` directive can help you do all those
things and more.

`#for` directives iterate over a list, either one you have explicity defined with
the list operator (`[...]`) or from a list producing function function such as
`range()`. `#for` directives have the syntax `#for ITEM, IDX in LIST`, which
iterates over values and indices, or simply `#for ITEM in LIST`, if you only
want to iterate over the values in a list.

**Input**
```solidity
// Calculate the summation of 0...4
uint256 sum = 0;
// #for ITEM in range(1, 5)
sum += $$(ITEM);
// #done
```

**Result**
```solidity
// Calculate the summation of 0...4
uint256 sum = 0;
sum += 1;
sum += 2;
sum += 3;
sum += 4;
```

While `#for` offers a lot of explicit control, when working with lists,
(which the `range()` builtin returns), you might find a more concise solution
by exploiting [list builtin functions](#list-functions), such as `map()`,
`reduce()`, and `join()`.

### Expressions

Preprocessor expressions are similar to javascript expressions, with many of the
usual operations and precedence. All mathematical operations are done using
high-precision (up to 120 significant digits) math, which can hold many more
digits than the largest Solidity type (uint256).

It's worth noting that bitwise operations, however,
will only operate on 256-bit integers, and will always result in a 256-bit
unsigned integer. Attempting to perform a bitwise operation on a number with a
decimal component will result in an error.

#### Operations

| Operation | Description |
|-----------|-------------|
| `a + b` | Add `a` to `b` |
| `a - b` | Subract `b` from `a` |
| `a * b` | Multiple `a` with `b` |
| `a / b` | Divide `a` by `b` |
| `a % b` | Modulo of `a` with `b` |
| `a ** b` | Raise `a` to `b` |
| `~a` | 256-bit bitwise INVERT `a` |
| `a & b` | 256-bit `a` bitwise AND `b` |
| <code>a &#124; b</code> | 256-bit `a` bitwise OR `b` |
| `a ^ b` | 256-bit `a` bitwise XOR `b` |
| `a << b` | 256-bit bitwise shift `a` left by `b` bits |
| `a >> b` | 256-bit bitwise shift `a` right by `b` bits |
| `!a` | logical NOT `a` |
| <code>a &#124;&#124; b</code> | logical `a` OR `b` |
| `a && b` | logical `a` AND `b` |
| `(...)` | Expression grouping (explicit precedence) |
| `a ? b : c` | Ternary operator: return `b` if `a` is true, otherwise return `c` |
| `foo(x, y, z)` | Call function/macro `foo` with arguments `x`, `y`, and `z` |
| `id` | Evaluate the symbol `id` |
| `[a, b, c]` | Create a list with values `a`, `b`, and `c`, which can be expressions |
| `(a, b) => ...` | Define an anonymous (lambda) macro, useful for the `map()` and `reduce()` [builtins](#list-functions) |

##### Literals

There are 3 types of literals: booleans, strings, and numbers.
Internally, numbers are stored as decimal strings, so they do not lose
precision.

| Example | Description |
|---------|-------------|
| `true` | `true` boolean |
| `false` | `false` boolean |
| `"foo"` | Double quoted string |
| `'foo'` | Single quoted string |
| <code>&#96;foo $(bar}&#96;</code> | Interpolated string (with `bar` *expanded* in place) |
| <code>&#96;foo $$(bar}&#96;</code> | Interpolated string (with `bar` *evaluated* in place) |
| `32` | Positive integer number |
| `-32` | Negative integer number |
| `32.55` | Decimal number |
| `1.5e5` | Exponent notation number |
| `0xa047` | hexadecimal notation number |
| `0b0101011` | binary notation number |
| `077414` | octal notation number |


### Builtins

Many general-purpose and domain-specific builtin functions come already defined
and can be called during [evaluation](#evaluation).

#### Language Functions

| Function | Description |
|----------|-------------|
| `defined(x)` | Test whether the symbol `x` is defined |
| `peek(x)` | Return the *literal* value of symbol `x` (does not evaluate the contents of `x`)  |
| `bool(x)` | Coerce `x` into a boolean |
| `islist(x)` | Check if `x` is a list |

#### Numerical Functions

| Function | Description |
|----------|-------------|
| `min(a, b)` | Take the minimum of `a` and `b` |
| `max(a, b)` | Take the maximum of `a` and `b` |
| `clamp(x, lo, hi)` | Clamp `x` to be within `lo` and `hi`, inclusive |
| `abs(x)` | Take the absolute value of `x` |
| `sqrt(x)` | Get the square root of x, same as doing `x**0.5` |
| `log(x)` | Take the natural logarithm of `x` |
| `log(x, b)` | Take the logarithm of `x` with base `b` |
| `exp(y)` | Raise the mathematical constant `e` to `y` |
| `sign(x)` | Get the sign of `x` (either `-1`, `0`, or `1`) |
| `sd(x)` | Get the number of significant digits in the number x |
| `sd(x, n)` | Return a number which is `x` with `n` significant digits |
| `dp(x)` | Get the number of decimal places in the number x |
| `dp(x, n)` | Return a number which is `x` with `n` decimal places |
| `round(x)` | Round `x` to a signed integer |
| `int(x)` | Truncate `x` to a signed integer |
| `uint(x)` | Truncate `x` to an positive integer |
| `int8(x)` | Truncate `x` to a signed 8-bit integer |
| `uint8(x)` | Truncate `x` to an positive 8-bit integer |
| `int16(x)` | Truncate `x` to a signed 16-bit integer |
| `uint16(x)` | Truncate `x` to an positive 16-bit integer |
| `int32(x)` | Truncate `x` to a signed 32-bit integer |
| `uint32(x)` | Truncate `x` to an positive 32-bit integer |
| `int64(x)` | Truncate `x` to a signed 64-bit integer |
| `uint64(x)` | Truncate `x` to an positive 64-bit integer |
| `int128(x)` | Truncate `x` to a signed 128-bit integer |
| `uint128(x)` | Truncate `x` to an positive 128-bit integer |
| `int256(x)` | Truncate `x` to a signed 256-bit integer |
| `uint256(x)` | Truncate `x` to an positive 256-bit integer |
| `hex(x)` | Encode `x` as a hexadecimal |
| `hex(x, n)` | Encode `x` as a hexadecimal, padding or truncating to `n` bytes. If `n` is negative, `n` will be right padded/truncated. |
| `decimal(x)` | Encode `x` as a decimal |

#### String Functions

| Function | Description |
|----------|-------------|
| `len(x)` | Get the length of string `x` |
| `concat(...)` | Concatenates all arguments into a single string. |
| `quote(x)` | Turn `x` into a quoted string. |
| `unquote(x)` | Remove quotes from a quoted string `x`. |
| `strhex(x)` | Return the utf-8 hex of a string `x`. |
| `uppercase(x)` | Uppercase the string `x`. |
| `lowercase(x)` | Lowercase the string `x`. |
| `camelcase(x)` | Camelcase the string `x`. |
| `capitalize(x)` | capitalize the string `x`. |
| `repeat(s, n)` | Repeat the string `s` `n` times. |

#### List Functions

| Function | Description |
|----------|-------------|
| `islist(x)` | Check if `x` is a list |
| `len(x)` | Get the length of list `x` |
| `range(end)` | Create a list of numbers from `0` to `end` (exclusive) with step size `1` |
| `range(start, end, step=1)` | Create a list of numbers from `start` to `end` (exclusive) with step size `step` |
| `filled(len, value=0)` | Create a `len` length list filled with `value` |
| `concat(...)` | Combines a series of lists into one. |
| `sum(x)` | Returns the sum of all values in `x`. |
| `join(a, sep='')` | Join list `a` into a string with separator `sep` |
| `map(a, fn)` | Create a list where each item in `a` is run through the function/macro `fn`. If `fn` can take two arguments, the index of the item will be passed as the 2nd argument. |
| `reduce(a, fn, initial=0)` | Run items in the list `a` through the function/macro `fn`, which takes 2-3 arguments (`total, value, [index]`) and returns the new total. |

#### Ethereum Functions

| Function | Description |
|----------|-------------|
| `keccak256(...)` | Compute the keccak256 hash of all arguments. |
| `key2addr(k)` | Get the address associated with private key `k` |

#### Constants

| Name | Description |
|----------|-------------|
| `E` | The mathematical constant *e* |
| `PI` | The mathematical constant *π* |
| `__line` | The line number of the expression |
| `__indent` | The indentation of the expression (string of whitespaces leading up to the expression |
