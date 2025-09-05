/**
 * Rust Quiz Data
 */
const rustQuestions = [
  {
    question: "What is Rust's most unique feature, which guarantees memory safety?",
    optionA: "Garbage Collection",
    optionB: "Ownership and Borrowing",
    optionC: "Manual memory management with malloc/free",
    optionD: "Automatic Reference Counting (ARC)",
    correctOption: "optionB",
    explanation: "Rust's core feature is its ownership system with a borrow checker that enforces memory safety rules at compile time."
  },
  {
    question: "How do you declare a mutable variable in Rust?",
    optionA: "var x = 5;",
    optionB: "let mut x = 5;",
    optionC: "mutable x = 5;",
    optionD: "let x = 5;",
    correctOption: "optionB",
    explanation: "Variables in Rust are immutable by default. The `mut` keyword is required to make them mutable."
  },
  {
    question: "What is the purpose of `Cargo` in the Rust ecosystem?",
    optionA: "It is the Rust compiler",
    optionB: "It is a code formatter",
    optionC: "It is Rust's build system and package manager",
    optionD: "It is the standard library documentation tool",
    correctOption: "optionC",
    explanation: "Cargo handles building code, downloading libraries (crates), and managing project dependencies."
  },
  {
    question: "How does Rust handle the possibility of a missing value?",
    optionA: "Using `null` or `nil`",
    optionB: "By throwing a `NullPointerException`",
    optionC: "Using the `Option<T>` enum",
    optionD: "By returning a default value",
    correctOption: "optionC",
    explanation: "The `Option<T>` enum (`Some(value)` or `None`) is used to handle optional values, preventing null-related bugs."
  },
  {
    question: "What does the `?` operator do in Rust?",
    optionA: "It marks a variable as optional",
    optionB: "It is used for the ternary conditional expression",
    optionC: "It is error propagation shorthand for `Result` and `Option` types",
    optionD: "It indicates a public field in a struct",
    correctOption: "optionC",
    explanation: "The `?` operator is used to propagate errors, returning early from a function if a `Result` is `Err` or an `Option` is `None`."
  },
  {
    question: "What is a 'trait' in Rust?",
    optionA: "A specific implementation of a struct",
    optionB: "A way to define shared behavior, similar to an interface",
    optionC: "A macro for generating code",
    optionD: "A keyword for multithreading",
    correctOption: "optionB",
    explanation: "A trait defines a set of methods that a type must implement, enabling a form of polymorphism."
  },
  {
    question: "What is the difference between a String and a &str in Rust?",
    optionA: "They are the same thing",
    optionB: "`String` is a growable, heap-allocated string, while `&str` is a fixed-size string slice",
    optionC: "`&str` is mutable, while `String` is immutable",
    optionD: "`String` is for ASCII, `&str` is for UTF-8",
    correctOption: "optionB",
    explanation: "`String` is an owned type, while `&str` (a string slice) is a borrowed, immutable view into a string."
  },
  {
    question: "What does the 'borrow checker' do?",
    optionA: "It checks for spelling mistakes in code",
    optionB: "It manages network requests",
    optionC: "It enforces Rust's ownership rules at compile time",
    optionD: "It lends money to other programs",
    correctOption: "optionC",
    explanation: "The borrow checker is the part of the compiler that ensures all borrows are valid, preventing data races and dangling pointers."
  },
  {
    question: "Which keyword is used for pattern matching in Rust?",
    optionA: "switch",
    optionB: "select",
    optionC: "match",
    optionD: "case",
    correctOption: "optionC",
    explanation: "The `match` keyword is a powerful control flow operator that allows you to compare a value against a series of patterns."
  },
  {
    question: "How do you handle recoverable errors in Rust?",
    optionA: "Using the `panic!` macro",
    optionB: "Using `try-catch` blocks",
    optionC: "Using the `Result<T, E>` enum",
    optionD: "Ignoring them",
    correctOption: "optionC",
    explanation: "The `Result<T, E>` enum (`Ok(value)` or `Err(error)`) is the standard way to handle errors that can be recovered from."
  }
];