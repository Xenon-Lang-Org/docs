# Keywords

# Types

- Signed Integer: `i8`, `i16`, `i32`, `i64`
- Unsigned Integer: `u8`, `u16`, `u32`, `u64`
- Floating point: `f32`, `f64`
- Structure: `{ }`
- Array: `[ ]`
- Enum: `< >`
# Syntax

- Variable: `let`
- Typing: `:`, `->`
- Conditions: `if` `elif` `else`
- Loops: `while`
- Qualifiers: `mut`, `*`
- Functions: `fn`
- Dereference: `@`
- Reference: `&`
- Type Definition: `type`

# Exemples

## Variables

To declare a variable, use the `let` keyword followed by the variable name, a type, and a value. Typing variables is done using `:` and a combination of type, type qualifier, and pointer declaration.

```xn
let a: i32 = 42;
```

All variables are const by default. You'll need to explicitly declare it as mutable with the `mut` qualifier.

```xn
let a: i32 = 42; // const i32
let b: mut i32 = 42; // mutable i32
```

This also applies to pointers:

```xn
let ptr1: *i32 = 42; // pointer to const i32
let ptr2: *mut i32 = 42; // pointer to mutable i32
```

## Pointers

The syntax for pointers in xenon is similar to C, with one important difference, **Dereferencing pointers is done with `@`**

```xn
let a: i32 = 42; // const i32
let ptr: *i32 = &a; // pointer to a
let b: i32 = @ptr; // b = 42
```

## Functions

Functions are declared with the `fn` keyword, followed by the function name, arguments, and return type, defined by `->`.

```xn
fn add(a: i32, b: i32) -> i32
{
    return a + b;
}
```

## Loops

Loops in xenon are limited to while loops.

```xn
let i: mut i32 = 0;

while (i < 10) {
    i += 1;
}
```

## Conditionals

Conditionnals follow similar patterns than other languages, using if, elif and else keywords.

```xn
let a: i32 = 42;

if (a == 42) {
    // do something
} elif (a == 43) {
    // do something else
} else {
    // do something else
}
```

## Structs

You can define structs by using brackets and the 'type' keyword, which is used to define a new type like a struct or an enum.

```xn
type Point = {
    x: i32,
    y: i32
};

let p: Point = {1, 2};
```

Declaring an unammed struct is also possible.

```xn
let p: {x: i32, y: i32} = {1, 2};
```

As well as accessing struct members like you would with an array.

```xn
let p: {x: i32, y: i32} = {1, 2};
let x: i32 = p[0]; // x = 1
let y: i32 = p[1]; // y = 2
```

## Arrays

Arrays are declared with the `[size: type]` syntax.
```xn
let arr: [10: i32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```
Two-dimensional arrays (and more) are also possible.
```xn
let tab: [2: [2: i32]] = [[0, 1], [2, 3]];
```
