## Compilation Process Documentation

This document outlines the various stages involved in the compilation process of the Xenon language, from parsing the source code to generating the final WebAssembly (WASM) binary.

### 1. Lexer

The lexer is responsible for converting the raw source code into a stream of tokens. Tokens are the basic building blocks of the language, such as keywords, identifiers, literals, and operators.

### 2. Parser

The parser takes the stream of tokens produced by the lexer and constructs an Abstract Syntax Tree (AST). The AST represents the hierarchical structure of the source code.

### 3. Semantic Analyzer

The semantic analyzer checks the AST for semantic errors, such as type mismatches, undeclared variables, and other logical errors. It ensures that the program adheres to the language's rules.

### 4. Intermediate Representation (IR)

The IR is a lower-level representation of the program, which is easier to manipulate for optimization and code generation. The IR is generated from the AST after semantic analysis.

### 5. Fill WASM Module Data

The Fill WASM Module Data module is responsible for converting the IR into a WASM module structure. This involves collecting types, functions, globals, and other sections required for the WASM binary.

### 6. Write WASM

The Write WASM module encodes the WASM module structure into a binary format that can be executed by a WASM runtime. This involves encoding various sections such as types, functions, exports, and code.