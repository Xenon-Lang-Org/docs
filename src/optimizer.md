# Optimizer

Using the [Interpreter](./interpreter.md)'s tool set, the optimizer is able to modify the code structure by using multiple compiler optimization methods.

### Constant Folding

By keeping track of defined constant variables, references to them are substituted with their actual value. 


<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
let x: i32 = 12;
return x;
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
return 12;
```

</div>

</div>

This also works for binary operation that uses literal and/or constants.

<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
let x: i32 = 10 + 5;
return x * 2;
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
return 30;
```

</div>

</div>

### Conditional Unwrapping

Using constant folding, Conditional branches that have constant value are pre-computed, the resulting body (if/else) is then inserted at its place. The other body is discarded.

<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
let foo: mut f32 = 1.7;
let x: i32 = 1;

if (x) {
    foo = 12.2;
} else {
    foo = 4.6;
}
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
let foo: mut f32 = 1.7;
foo = 12.2;
```

</div>

</div>

### Returning Branch Unpacking

When entering an **If** statement that is guaranteed to return, its else branch (if any) is unpacked to the main body since the rest of the body will never be executed if the main branch of the **If** is entered.

<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
if (foo == bar) {
    foo = 20;
    return 1;
} else {
    foo = 13;
}
bar = 20;
return 0;
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
if (foo == bar) {
    foo = 20;
    return 1;
}
foo = 13;
bar = 20;
return 0;
```

</div>

</div>

### Dead Code Elimination

Code that succeed a return statement is discarded as it will never be executed. This pairs well with returning branch unpacking as it can lead to mutiple return statements on the same branch.

<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
bar = 10;
return 0;
let foo: mut i32 = 4;
while (foo > 0) {
    bar = bar * 2;
}
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
bar = 10;
return 0;
```

</div>

</div>

### Function Inlining

Functions that do simple operations (including those that are optimized as such) are inlined when used as expressions. The function definition itself is not discarded.

<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
fn compute(a: i32, b: i32) -> i32
{
    let c: i32 = 12;
    return a * b * c;
}

let x: mut i32 = compute(10, 2);
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
fn compute(a: i32, b: i32) -> i32
{
    return a * b * 12;
}

let x: mut i32 = 240;
```

</div>

</div>

### Loop Unrolling

Some while loops can have their content unrolled into the main branch when specific conditions are met:

- The condition of the while loop is constant expect a single mutable variable (named the **loop variable**)
- The body of the loop modifies the loop variable in a constant way (i.e. `i = i + 1` or `i = compute(i, 13)` assuming `compute` is an inlineable function)
- The while in finite and has at most 16 loops

<div style="display: flex; gap: 16px; align-items: center">

<div style="flex: 1;">

```xn
let i: mut i32 = 0;
let nb: mut i32 = 1;

while (i < 3) {
    nb = nb * nb + i;
    i = i + 1;
}
```

</div>

**Becomes**

<div style="flex: 1;">

```xn
let i: mut i32 = 0;
let nb: mut i32 = 1;

nb = nb * nb + i;
i = i + 1;
nb = nb * nb + i;
i = i + 1;
nb = nb * nb + i;
i = i + 1;
```

</div>

</div>