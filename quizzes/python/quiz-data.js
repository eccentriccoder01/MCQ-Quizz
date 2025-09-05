/**
 * Python Quiz Data
 */
const pythonQuestions = [
  {
    question: "What is the primary purpose of the `__init__` method in a Python class?",
    optionA: "To initialize the class attributes",
    optionB: "To be the very first method called when the interpreter starts",
    optionC: "To destroy an object when it's no longer needed",
    optionD: "To define a private method",
    correctOption: "optionA",
    explanation: "The __init__ method is the constructor for a class, used to initialize the state of an object."
  },
  {
    question: "Which of the following data types is immutable in Python?",
    optionA: "List",
    optionB: "Dictionary",
    optionC: "Set",
    optionD: "Tuple",
    correctOption: "optionD",
    explanation: "Tuples are immutable, meaning their contents cannot be changed after creation. Lists, dictionaries, and sets are mutable."
  },
  {
    question: "What does the `yield` keyword do in Python?",
    optionA: "Ends the execution of a function entirely",
    optionB: "Pauses a function's execution and returns a value, creating a generator",
    optionC: "Returns multiple values at once from a function",
    optionD: "Forces a function to run in a separate thread",
    correctOption: "optionB",
    explanation: "The `yield` keyword is used in a function to create a generator, which can pause and resume its execution."
  },
  {
    question: "How do you write a single-line comment in Python?",
    optionA: "// This is a comment",
    optionB: "/* This is a comment */",
    optionC: "# This is a comment",
    optionD: "",
    correctOption: "optionC",
    explanation: "Single-line comments in Python start with the hash (#) character."
  },
  {
    question: "What is a list comprehension in Python?",
    optionA: "A detailed documentation string for a list",
    optionB: "A concise way to create lists",
    optionC: "A method to compress lists in memory",
    optionD: "A way to compare two lists for equality",
    correctOption: "optionB",
    explanation: "List comprehensions offer a shorter syntax for creating a new list based on the values of an existing list."
  },
  {
    question: "What will `print('hello'[1:3])` output?",
    optionA: "h",
    optionB: "el",
    optionC: "ell",
    optionD: "he",
    correctOption: "optionB",
    explanation: "String slicing in Python `[start:end]` extracts characters from the start index up to (but not including) the end index."
  },
  {
    question: "What is the purpose of the `pass` statement in Python?",
    optionA: "To skip an iteration in a loop",
    optionB: "To act as a placeholder where code will eventually go",
    optionC: "To exit a function",
    optionD: "To raise an exception",
    correctOption: "optionB",
    explanation: "The `pass` statement is a null operation; nothing happens when it executes. It's used as a placeholder."
  },
  {
    question: "How do you handle exceptions in Python?",
    optionA: "Using `try...catch` blocks",
    optionB: "Using `try...except` blocks",
    optionC: "Using `if...else error` blocks",
    optionD: "Using `check...handle` blocks",
    correctOption: "optionB",
    explanation: "Python uses the `try...except` syntax for handling exceptions and preventing program crashes."
  },
  {
    question: "What is the Global Interpreter Lock (GIL) in CPython?",
    optionA: "A security feature that locks global variables",
    optionB: "A tool for debugging Python code",
    optionC: "A mutex that allows only one thread to execute Python bytecode at a time",
    optionD: "A way to install global packages",
    correctOption: "optionC",
    explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously."
  },
  {
    question: "What is the difference between `==` and `is` in Python?",
    optionA: "They are identical",
    optionB: "`==` is for assignment, `is` is for comparison",
    optionC: "`==` checks for equality of values, `is` checks for identity (same object in memory)",
    optionD: "`is` checks for equality of values, `==` checks for identity",
    correctOption: "optionC",
    explanation: "`==` compares the values of two objects, while `is` compares their memory addresses to see if they are the same object."
  }
];