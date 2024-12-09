# Comparative Study - Glados Project

This study evaluates the decisions made for the **Glados Project**, where we aim to design and implement a custom imperative programming language using **Haskell**. This language will be compiled into **WebAssembly** (Wasm) for efficient execution. The study explores the reasons for selecting **Haskell**, the imperative programming paradigm, and WebAssembly as the compilation target. We also compare tools, approaches, and technologies in parsing, runtime, and language design, emphasizing performance, scalability, and maintainability.

---

## 1. **Programming Language for Development: Haskell**

### Relevance and Justification

Haskell was chosen as the development language due to its powerful capabilities for constructing **parsers**, **interpreters**, and **compilers**. Its functional nature and abstractions enable the development of highly modular and maintainable codebases.

- **Pros**:
  - Strong support for **parsing libraries** like **Parsec** and **Megaparsec**, simplifying grammar and syntax design.
  - Immutability and **pure functional programming** paradigms facilitate reasoning about program correctness.
  - Rich type system and **algebraic data types** (ADTs) enable safe and clear representation of language constructs.

- **Cons**:
  - Steep learning curve for developers unfamiliar with functional programming.
  - Runtime performance of Haskell programs might lag behind C++ for specific tasks; however, its suitability for compilation pipeline development outweighs this limitation.

**Comparative Study**:
- **Rust**: While offering excellent performance and memory safety, Rust's low-level nature can make the development of parsers and compilers less expressive compared to Haskell.
- **Python**: Easy to use for prototyping compilers but lacks the performance and static type-checking needed for complex language implementations.

---

## 2. **Programming Paradigm: Imperative**

### Relevance and Justification

While Haskell is a functional language, we have chosen to design **Glados** as an **imperative programming language**, reflecting the needs of developers accustomed to control-flow structures and mutable state.

- **Pros**:
  - Familiarity for most developers due to the prevalence of imperative languages like **C**, **Java**, and **Python**.
  - Straightforward translation into **WebAssembly**, which is inherently imperative.
  - Simplifies implementation of state-based computations and control-flow mechanisms like loops and conditionals.

- **Cons**:
  - Imperative languages require careful management of mutable state, which may introduce bugs like race conditions or unexpected side effects.

**Comparative Study**:
- **Functional Languages**: While offering declarative programming benefits, functional languages introduce a steeper learning curve for imperative-oriented developers.
- **Object-Oriented Languages**: Overhead introduced by class hierarchies and object management is unnecessary for the lightweight, performance-oriented design of Glados.

---

## 3. **Compilation Target: WebAssembly (Wasm)**

### Relevance and Justification

WebAssembly was selected as the compilation target due to its cross-platform compatibility, lightweight binary format, and growing adoption for high-performance web and server-side applications.

- **Pros**:
  - **Performance**: WebAssembly offers near-native execution speed, making it ideal for computationally intensive programs.
  - **Portability**: Wasm can be executed in web browsers and standalone runtimes, enhancing deployment flexibility.
  - **Security**: Sandboxed execution model prevents unauthorized access to the host environment.

- **Cons**:
  - Limited debugging tools compared to traditional binaries.
  - Learning curve for developers new to Wasm bytecode.

**Comparative Study**:
- **LLVM IR**: Offers high-performance backend support and optimizations but lacks the portability and security guarantees of WebAssembly.
- **JavaScript**: While highly portable, its performance and scalability fall short for resource-intensive applications.

---

## 4. **Parsing Approach**

### Relevance and Justification

Efficient parsing is critical to language design. For **Glados**, we are using **Megaparsec**, a Haskell library for constructing parsers.

- **Pros**:
  - Combines **composability** and **expressiveness** with strong error reporting.
  - Haskell’s **monadic parsing** simplifies handling complex grammar.
  - Modular design allows easy addition or modification of language constructs.

- **Cons**:
  - Parsing performance might not match low-level tools like **ANTLR**, but the trade-off is acceptable given Haskell’s strengths in parser design.

**Comparative Study**:
- **ANTLR**: While high-performing and widely used, its Java-centric ecosystem can be less intuitive for Haskell developers.
- **Flex/Bison**: Suitable for low-level parser generation but lacks the abstraction and readability of Haskell-based solutions.

---

## 5. **Runtime Architecture**

### Relevance and Justification

The Glados runtime is designed to operate within a **WebAssembly-compatible virtual machine** for portability and performance.

- **Pros**:
  - **Lightweight**: Wasm binaries are optimized for fast startup and low resource usage.
  - **Cross-platform**: Ensures compatibility across web, mobile, and server environments.

- **Cons**:
  - Developing custom runtime features (e.g., garbage collection) requires additional effort.

**Comparative Study**:
- **Custom Virtual Machine**: Provides more control but introduces significant development overhead compared to Wasm-based solutions.
- **Native Executables**: Lack the portability and sandboxing advantages of Wasm.

---

## 6. **Development Tools**

### Relevance and Justification

For development, we chose tools that complement Haskell's ecosystem and facilitate collaboration, testing, and documentation.

- **GitHub**: Version control and CI/CD integration.
- **Stack**: Simplifies dependency management and builds in Haskell.
- **Visual Studio Code**: Primary editor, enhanced with Haskell plugins.

**Comparative Study**:
- **GitLab**: Similar to GitHub but less widely adopted for open-source Haskell projects.
- **Cabal**: Provides flexibility but lacks the simplicity and automation of Stack.

---

## 7. **Documentation**

### Relevance and Justification

We prioritize interactive, markdown-based documentation to ensure clarity and maintainability. **mdBook** was chosen for its seamless integration with modern development workflows.

**Comparative Study**:
- **Sphinx**: Offers advanced documentation features but has a steeper learning curve.
- **Doxygen**: Excellent for API documentation but less effective for general-purpose guides.

---

## 8. **Testing Strategy: Stack with Unit Tests**

### Relevance and Justification

Testing is a cornerstone of ensuring the correctness, stability, and maintainability of the Glados programming language. We have chosen **Stack**, a Haskell build tool, to manage our testing framework. Stack integrates seamlessly with Haskell's ecosystem and supports automated **unit testing**.

- **Pros**:
  - **Integration with Stack**: Simplifies test suite setup and execution.
  - **Automation**: Enables continuous integration pipelines with GitHub Actions, ensuring code changes do not introduce regressions.

- **Cons**:
  - Writing comprehensive test cases can be time-consuming, particularly for complex grammar and edge cases in the language design.

### Testing Methodology

1. **Unit Tests**: 
   - Focus on testing individual components like the parser, AST transformations, and WebAssembly generation.
   - Example: Ensuring that specific syntactic constructs are correctly parsed into the corresponding AST nodes.

2. **End-to-End Tests**: 
   - Verify that complete programs written in Glados compile correctly to WebAssembly and execute as intended.
   - Example: A Glados program performing arithmetic should produce the correct output in a WebAssembly runtime.

3. **Property-Based Testing**:
   - Tools like **QuickCheck** are used to test properties of language constructs.
   - Example: Testing that the order of arithmetic operations respects operator precedence.

### Comparative Study

- **Stack**:
  - Provides native integration with Haskell’s testing libraries.
  - Streamlines dependency management for test-specific modules.
  - Automatically integrates with CI/CD pipelines.

- **Cabal**: Offers similar functionality but lacks the simplicity and automation of Stack, making it less suitable for rapid development and testing workflows.
- **External Testing Frameworks**: While tools like **Pytest** or **JUnit** are effective for their respective ecosystems, they are not applicable in a Haskell-based project.

---

## Conclusion

The **Glados Project** leverages **Haskell** for its robust parsing capabilities, develops an imperative language to cater to developer familiarity, and compiles to **WebAssembly** for portability and performance. This approach ensures that the language is both developer-friendly and technically optimized for modern environments. The choices, supported by comparative analysis, provide a strong foundation for a scalable and maintainable language implementation.
