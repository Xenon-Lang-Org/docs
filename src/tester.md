# Single File Test Runner

This script provides a mechanism to test a single file containing both source code and inline test definitions. It compiles the source file to WebAssembly, runs the specified tests, and validates the outputs.

---

## Features

- Parses inline test definitions from the source file.
- Compiles the source file to a WebAssembly (`.wasm`) file.
- Executes the WebAssembly functions and validates their outputs against the expected results.
- Provides clear color-coded feedback for test results.
- Handles edge cases like floating-point comparisons (e.g., appending `.0` to outputs).

---

## Usage

Run the script with the following command:

```bash
./xtest <file>
```

### Parameters

- `<file>`: The source file to be tested. This file must exist and contain the expected inline test cases.

Example:

```bash
./xtest examples/my_test_file.xn
```

---

## File Requirements

The source file must:

1. Be in a format compatible with the compiler (`xcc`) and the interpreter (`xin`).
2. Include test definitions in the following format:

```
// TEST "function_name" IN "arguments" OUT "expected_output"
```

### Example Test Cases

```c
// TEST "add" IN "2 3" OUT "5"
// TEST "subtract" IN "10 4" OUT "6"
```

In this example:
- The `add` function is expected to return `5` when invoked with `2` and `3`.
- The `subtract` function is expected to return `6` when invoked with `10` and `4`.

---

## Script Workflow

1. **Argument Validation:**
   - Ensures that a single file argument is provided.
   - Checks if the specified file exists.

2. **Test Case Parsing:**
   - Scans the file for lines matching the `// TEST` format.
   - Extracts the function name, arguments, and expected output.

3. **Compilation:**
   - Compiles the source file to WebAssembly using `xcc`.
   - Handles compilation errors gracefully.

4. **Test Execution:**
   - Invokes each function defined in the test cases.
   - Compares the output with the expected result.

5. **Results:**
   - Displays color-coded results for each test:
     - Green ✔ for passed tests.
     - Red ✘ for failed tests.
   - Cleans up the generated `.wasm` file.

6. **Exit Status:**
   - Exits with `0` if all tests pass.
   - Exits with `1` if any test fails.

---

## Example Output

```bash
Compiled examples/my_test_file.xn to examples/my_test_file.wasm.
Running test cases:
add(2 3) = 5 ✔
subtract(10 4) = 7 (expected 6) ✘
Some tests failed.
```

---

## Integration of Tests in a File

1. Write your source code as usual.
2. Add inline test definitions for functions you wish to validate. Use the exact format:

   ```
   // TEST "function_name" IN "arg1 arg2 ..." OUT "expected_result"
   ```

3. Ensure that your functions are accessible and invokable as described in the test cases.
4. Save the file and run the script to validate it.

---

## Dependencies

- `xcc`: Compiler to convert the source code to WebAssembly.
- `xrun`: Virtual machine to execute the generated WebAssembly files.
- `xin`: Interpreter to run the source code directly.
- `wasmer`: Tool to execute the generated WebAssembly files.

Ensure these tools are installed and accessible in your PATH and/or present in the same directory as where the script is run.

---

## Troubleshooting

- **File Not Found:** Verify the file path and ensure the file exists.
- **Compilation Errors:** Check the source code for syntax or compatibility issues.
- **Unexpected Results:** Ensure test definitions match the actual function behavior and output.

---

## License

This script is open-source and can be freely modified or distributed under the terms of your chosen license.
