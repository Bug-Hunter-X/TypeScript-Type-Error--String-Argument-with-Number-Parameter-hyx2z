# TypeScript Type Error: String Argument with Number Parameter

This repository demonstrates a common type error in TypeScript: passing a string argument to a function that expects a number.

## Bug Description

The `add` and `subtract` functions are defined to accept two number parameters. However, when attempting to pass string arguments to these functions, TypeScript correctly identifies this as a type error.

## Bug Solution

The solution is to ensure that only numbers are passed as arguments to the functions.  Input validation or type assertions can be employed to achieve this.