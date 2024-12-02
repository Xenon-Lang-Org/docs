

# Variable declaration

To declare a variable, use the let keyword followed by the variable name, a type, and a value.
```gl
let a: i32 = 42;
```

All variables are const by default. You'll need to explicitly declare it as mutable with the `mut` keyword.
```gl
let a: i32 = 42; // const i32
let b: mut i32 = 42; // mutable i32
```

This also applies to pointers:
```gl
let ptr1: *i32 = 42; // pointer to const i32
let ptr2: *mut i32 = 42; // pointer to mutable i32
```

# Pointers

The syntax for pointers in glados-lang is similar to C, with one important difference, **Dereferencing pointers is done with "@"**
```gl
let a: i32 = 42; // const i32
let ptr: *i32 = &a; // pointer to a
let b: i32 = @ptr; // b = 42
```

# Functions

Functions are declared with the `fn` keyword, followed by the function name, arguments, and return type.
```gl
fn add(a: i32, b: i32) -> i32
{
    return a + b;
}
```

# Loops

Loops in glados-lang are limited to while loops.
```gl
let i: mut i32 = 0;

while (i < 10) {
    i += 1;
}
```

# Conditionals

Conditionnals follow similar patterns than other languages, using if, elif and else keywords.
```gl
let a: i32 = 42;

if (a == 42) {
    // do something
} elif (a == 43) {
    // do something else
} else {
    // do something else
}
```

# Structs

You can define structs by using brackets and the 'type' keyword, which is used to define a new type like a struct or an enum.
```gl
type Point = {
    x: i32,
    y: i32
};

let p: Point = {1, 2};
```

Declaring an unammed struct is also possible.
```gl
let p: {x: i32, y: i32} = {1, 2};
```

As well as accessing struct members like you would with an array.
```gl
let p: {x: i32, y: i32} = {1, 2};
let x: i32 = p[0]; // x = 1
let y: i32 = p[1]; // y = 2
```

# Enums

Two types of enums exists in glados-lang, a classic enum and a type enum. They are declared slightly differently:
```gl
// classic enum
type ReturnType = <
    OK = 0 |
    ERROR = 84
>;

let status: ReturnType = OK;


// type enum (would require a definition of Dog and Cat)
type AnimalType = <
    DOG: Dog |
    CAT: Cat
>;

let animal: AnimalType = DOG;
// Mouais non c'est n'importe quoi ce que je viens de faire

```

# Arrays

Arrays are declared with the `[size: type]` syntax.
```gl
let arr: [10: i32] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
```
Two-dimensional arrays (and more) are also possible.
```gl
let tab: [2: [2: i32]] = [[0, 1], [2, 3]];
```
