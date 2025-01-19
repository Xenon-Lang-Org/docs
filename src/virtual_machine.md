# Virtual Machine (xrun)

This document describes a lightweight virtual machine designed to execute WebAssembly (WASM) files. Inspired by tools like [Wasmer](https://wasmer.io/), this VM enables developers to run WASM binaries, invoke specific functions, and pass arguments directly from the command line.

## Key Features

1. **Command-Line Interface**: The VM accepts WASM files as input and allows invoking specific functions with optional arguments.
2. **Function Invocation**: Supports invoking a default `main` function or any user-specified function within the WASM file.
3. **Input Flexibility**: Accepts command-line arguments to be passed to the WASM module.
4. **Bytecode Parsing**: Reads and interprets the binary content of the provided WASM file.
5. **Compact and Modular Design**: Inspired by Wasmer's philosophy, focusing on simplicity and extensibility.

## Argument Handling

- **Help (`-h`, `--help`)**: Displays usage instructions.
- **Invoke Specific Function**: Command format: `xrun <file.wasm> --invoke function_name [args...]`.
- **Default Function**: If no function is specified, the VM invokes `main` in the WASM file.

### Similarity to Wasmer

- **Shared Goals**:
  - Execute WASM files efficiently.
  - Allow invocation of exported functions with arguments.
  - Provide a flexible, CLI-based interface for developers.

- **Key Differences**:
  - This VM is more lightweight and tailored to custom workflows.
  - It emphasizes modularity and simplicity, with a minimal dependency footprint.

## Usage Examples

1. **Invoke Default `main`**:
   ```bash
   xrun my_program.wasm
   ```

2. **Invoke Specific Function**:
   ```bash
   xrun my_program.wasm --invoke myFunction arg1 arg2
   ```

3. **Show Help**:
   ```bash
   xrun -h
   ```

## Conclusion

This virtual machine bridges the gap between WebAssembly execution and custom command-line workflows. By focusing on modularity and performance, it serves as a lightweight alternative to Wasmer for executing and interacting with WASM modules.
