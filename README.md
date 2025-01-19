# Xenon Language Documentation

Welcome to the Xenon language documentation repository. This project aims to provide comprehensive documentation for the Xenon programming language, including its syntax, compilation process, security features, and more.

## Table of Contents

- [Requirements](src/requirements.md)
- [Comparative Study](src/comparative_study.md)
- [Syntax](src/syntax.md)
- [Compilation Process](src/compilation_process.md)
- [Optimizer](src/optimizer.md)
- [Interpreter](src/interpreter.md)
- [BNF](src/xenon.bnf)
- [Inspirations](src/inspirations.md)
- [Security Features](src/security_features.md)

## Overview

Xenon is a programming language inspired by Rust, designed with a focus on simplicity, safety and performance. It compiles to WebAssembly (Wasm) for efficient execution across various platforms.

## Getting Started

To get started with Xenon, please refer to the [Requirements](src/requirements.md) section to set up your development environment.

## Documentation

The documentation is divided into several sections:

- **Requirements**: Details the software and system requirements for developing with Xenon.
- **Comparative Study**: Analyzes the decisions made during the development of Xenon.
- **Syntax**: Provides an overview of the language syntax with examples.
- **Compilation Process**: Describes the stages involved in compiling Xenon code to WebAssembly.
- **BNF**: Contains the Backus-Naur Form (BNF) grammar for Xenon.
- **Inspirations**: Discusses the inspirations behind Xenon's design, particularly from Rust.
- **Security Features**: Outlines the security features implemented in the Xenon compiler.

## Building the Documentation

To build the documentation, you can use `mdBook`. Follow these steps:

1. Install `mdBook`:
    ```sh
    cargo install mdbook
    ```

2. Build the documentation:
    ```sh
    mdbook build
    ```

3. Serve the documentation locally:
    ```sh
    mdbook serve
    ```

The documentation will be available at `http://localhost:3000`.
