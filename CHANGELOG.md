## Version 0.9.1
  - Stringify a function (built-in or externally defined) will render the
  function's name instead of just '<Function'.

## Version 0.8.0
  - Evaluating an expression that results in an array will emit a
  javascript-style array (e.g., `$$(range(3))` -> `[0, 1, 2]`). Previously, it
  would only emit the comma-separated contents, without brackets or spaces.

## Version 0.7.0
  - All macro expansions/evaluations now use parenthesis in the form
  `$(...)` and `$(...)`. This is a breaking change from previous versions that
  used curly braces (`${...}` and `$${...}`). The rationale behind this change
  is to produce fewer errors with popular Solidity linters.
  - Pragmas, such as solidity semvers and feature enablers, are now aggregated
  and across included source units. With compiler semvers, the highest
  intersecting semver will rendered in the the flattened result.
  An error will be raised if the compiler semvers across all source units do
  not intersect.
