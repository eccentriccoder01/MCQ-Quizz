/**
 * Kotlin Quiz Data
 */
const kotlinQuestions = [
  {
    question: "How does Kotlin handle null safety?",
    optionA: "By using try-catch blocks for everything",
    optionB: "By distinguishing between nullable (?) and non-nullable types",
    optionC: "By throwing exceptions for any null value",
    optionD: "It does not have null safety features",
    correctOption: "optionB",
    explanation: "Kotlin's type system is designed to eliminate NullPointerExceptions by making nullability an explicit part of the type."
  },
  {
    question: "What is the difference between `val` and `var` in Kotlin?",
    optionA: "`val` is for integers, `var` is for strings",
    optionB: "There is no difference",
    optionC: "`val` declares a read-only (immutable) variable, `var` declares a mutable variable",
    optionD: "`var` declares a read-only variable, `val` declares a mutable variable",
    correctOption: "optionC",
    explanation: "`val` is similar to `final` in Java for declaring constants, while `var` is for variables that can be reassigned."
  },
  {
    question: "What is a 'data class' in Kotlin?",
    optionA: "A class that can only hold numbers",
    optionB: "A class mainly used to hold data, with auto-generated `equals()`, `hashCode()`, `toString()`, etc.",
    optionC: "A class that cannot have methods",
    optionD: "An interface for database access",
    correctOption: "optionB",
    explanation: "Data classes are a concise way to create classes that are primarily for storing data, reducing boilerplate code."
  },
  {
    question: "What is an 'extension function' in Kotlin?",
    optionA: "A function that extends the runtime of the program",
    optionB: "A function that allows you to add new functions to existing classes without inheriting from them",
    optionC: "A function that can only be used in external libraries",
    optionD: "A function with an extremely long name",
    correctOption: "optionB",
    explanation: "Extension functions provide a way to extend a class with new functionality without having to modify its source code."
  },
  {
    question: "Which keyword is used for asynchronous programming in Kotlin?",
    optionA: "async",
    optionB: "thread",
    optionC: "suspend",
    optionD: "future",
    correctOption: "optionC",
    explanation: "The `suspend` keyword marks a function as pausable and is central to Kotlin's coroutines for async operations."
  },
  {
    question: "What is the 'Elvis operator' (`?:`) used for in Kotlin?",
    optionA: "A combination of `if` and `else`",
    optionB: "To provide a default value if an expression is null",
    optionC: "To perform a safe cast",
    optionD: "A bitwise operator",
    correctOption: "optionB",
    explanation: "The Elvis operator `?:` returns the expression on its left if it's not null, otherwise it returns the expression on the right."
  },
  {
    question: "How is Kotlin interoperable with Java?",
    optionA: "It requires a special compatibility layer",
    optionB: "It is 100% interoperable, allowing you to call Java code from Kotlin and vice versa",
    optionC: "It is not interoperable with Java",
    optionD: "It can only use Java libraries, but not be called from Java",
    correctOption: "optionB",
    explanation: "Kotlin is fully interoperable with Java, meaning they can coexist in the same project and call each other's code seamlessly."
  },
  {
    question: "What does the `when` expression in Kotlin do?",
    optionA: "It is used for loops",
    optionB: "It defines a time-based event",
    optionC: "It is an advanced form of the `if-else if` chain, similar to a `switch` statement",
    optionD: "It is used for exception handling",
    correctOption: "optionC",
    explanation: "`when` is a more powerful and flexible replacement for the traditional switch statement found in other languages."
  },
  {
    question: "What are 'Coroutines' in Kotlin?",
    optionA: "A design pattern for classes",
    optionB: "A framework for building user interfaces",
    optionC: "A concurrency design pattern for writing asynchronous code that is easier to read and manage",
    optionD: "A set of built-in math functions",
    correctOption: "optionC",
    explanation: "Coroutines simplify async programming by allowing you to write non-blocking code in a sequential, easy-to-understand way."
  },
  {
    question: "How do you create a singleton object in Kotlin?",
    optionA: "class Singleton { ... }",
    optionB: "object MySingleton { ... }",
    optionC: "singleton MySingleton { ... }",
    optionD: "final class MySingleton { ... }",
    correctOption: "optionB",
    explanation: "The `object` keyword in Kotlin is used to declare a singleton, a class that has only one instance."
  }
];