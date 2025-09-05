/**
 * Swift Quiz Data
 */
const swiftQuestions = [
  {
    question: "In Swift, what is the difference between `let` and `var`?",
    optionA: "`let` is for local scope, `var` is for global scope",
    optionB: "`let` declares a constant (immutable), while `var` declares a variable (mutable)",
    optionC: "`var` declares a constant, while `let` declares a variable",
    optionD: "There is no difference, they are interchangeable",
    correctOption: "optionB",
    explanation: "`let` is used for constants whose values will not change, providing safety. `var` is for variables that can be reassigned."
  },
  {
    question: "What are 'Optionals' in Swift used for?",
    optionA: "To make code run faster",
    optionB: "To handle values that may be absent (nil)",
    optionC: "To define optional function parameters",
    optionD: "To create optional UI elements",
    correctOption: "optionB",
    explanation: "Optionals are a core feature of Swift's type safety, used to represent either a value or the absence of a value (nil)."
  },
  {
    question: "What is the primary difference between a `struct` and a `class` in Swift?",
    optionA: "Structs cannot have methods",
    optionB: "Classes cannot have properties",
    optionC: "Structs are Value Types, while Classes are Reference Types",
    optionD: "Classes are older and structs are a newer feature",
    correctOption: "optionC",
    explanation: "Structs are copied when passed around (value types), while classes share a single instance (reference types)."
  },
  {
    question: "How do you safely unwrap an optional value in Swift?",
    optionA: "Using the force unwrap operator `!`",
    optionB: "Using `if let` or `guard let` syntax",
    optionC: "By adding `?` at the end",
    optionD: "By converting it to a string",
    correctOption: "optionB",
    explanation: "`if let` and `guard let` provide safe ways to check for and use the value inside an optional, avoiding crashes."
  },
  {
    question: "What is a 'protocol' in Swift?",
    optionA: "A set of rules for networking",
    optionB: "A blueprint of methods, properties, and other requirements that suit a particular task",
    optionC: "A type of class that cannot be instantiated",
    optionD: "A keyword for error handling",
    correctOption: "optionB",
    explanation: "Protocols are similar to interfaces in other languages; they define a contract of functionality that a type can adopt."
  },
  {
    question: "What is Automatic Reference Counting (ARC) in Swift?",
    optionA: "A way to count array elements",
    optionB: "A system for managing network connections",
    optionC: "Swift's memory management system to track and manage app's memory usage",
    optionD: "A tool for counting code references",
    correctOption: "optionC",
    explanation: "ARC automatically frees up the memory used by class instances when those instances are no longer needed."
  },
  {
    question: "What does the nil-coalescing operator `??` do?",
    optionA: "It combines two strings",
    optionB: "It performs a logical AND operation",
    optionC: "It unwraps an optional if it contains a value, or provides a default value if it's nil",
    optionD: "It checks if two optionals are equal",
    correctOption: "optionC",
    explanation: "The `??` operator is a concise way to provide a fallback value for an optional type."
  },
  {
    question: "What is a 'closure' in Swift?",
    optionA: "A way to close an application",
    optionB: "A self-contained block of functionality that can be passed around, similar to lambdas",
    optionC: "A security feature to close memory leaks",
    optionD: "A type of loop",
    correctOption: "optionB",
    explanation: "Closures are reference types that can capture and store references to any constants and variables from the context in which they are defined."
  },
  {
    question: "Which UI framework is Apple's modern, declarative approach to building apps?",
    optionA: "UIKit",
    optionB: "AppKit",
    optionC: "SwiftUI",
    optionD: "Core Graphics",
    correctOption: "optionC",
    explanation: "SwiftUI provides a declarative syntax to build user interfaces across all Apple platforms."
  },
  {
    question: "How can you iterate over a dictionary `let dict = [\"a\": 1, \"b\": 2]`?",
    optionA: "for i in dict { ... }",
    optionB: "dict.forEach { ... }",
    optionC: "for (key, value) in dict { ... }",
    optionD: "for item at dict { ... }",
    correctOption: "optionC",
    explanation: "The standard way to iterate over a dictionary is using a for-in loop with a tuple to access both the key and the value."
  }
];