/**
 * C# Quiz Data
 */
const csharpQuestions = [
  {
    question: "What is the .NET Framework?",
    optionA: "A text editor for C#",
    optionB: "A programming language",
    optionC: "A software framework that provides a large class library and runtime environment",
    optionD: "A database management system",
    correctOption: "optionC",
    explanation: ".NET is a platform that includes a Common Language Runtime (CLR) and a Framework Class Library (FCL) for building applications."
  },
  {
    question: "What is the purpose of the `using` statement in C#?",
    optionA: "To create a loop",
    optionB: "To import a namespace and to ensure an object is properly disposed of",
    optionC: "To declare a new variable",
    optionD: "To handle exceptions",
    correctOption: "optionB",
    explanation: "`using` has two main purposes: importing namespaces and defining a scope for IDisposable objects to ensure they are cleaned up."
  },
  {
    question: "What is LINQ in C#?",
    optionA: "A way to link C# files together",
    optionB: "Language Integrated Query, a feature for querying data from collections, databases, etc.",
    optionC: "A library for creating user interfaces",
    optionD: "A debugging tool",
    correctOption: "optionB",
    explanation: "LINQ provides a powerful and consistent way to query various data sources directly within the C# language."
  },
  {
    question: "What is the difference between a `struct` and a `class` in C#?",
    optionA: "There is no difference",
    optionB: "Structs are value types, while classes are reference types",
    optionC: "Classes cannot have methods",
    optionD: "Structs are used only for numbers",
    correctOption: "optionB",
    explanation: "Structs are stored on the stack and passed by value, while classes are stored on the heap and passed by reference."
  },
  {
    question: "What do the `async` and `await` keywords do in C#?",
    optionA: "They make the code run slower",
    optionB: "They are used to write asynchronous code that is easier to read and maintain",
    optionC: "They are used for multithreading only",
    optionD: "They are used to declare variables",
    correctOption: "optionB",
    explanation: "`async` and `await` are language features that simplify writing non-blocking, asynchronous operations."
  },
  {
    question: "What is a 'property' in C#?",
    optionA: "A global variable",
    optionB: "A class method that has no parameters",
    optionC: "A member that provides a flexible mechanism to read, write, or compute the value of a private field",
    optionD: "A configuration file for a project",
    correctOption: "optionC",
    explanation: "Properties expose fields using accessor methods (get and set), allowing for controlled access."
  },
  {
    question: "What is a 'delegate' in C#?",
    optionA: "A type that represents a reference to a method with a specific signature",
    optionB: "A base class for all other classes",
    optionC: "A way to prevent inheritance",
    optionD: "A keyword for creating loops",
    correctOption: "optionA",
    explanation: "Delegates are similar to function pointers and are used to implement events and callback methods."
  },
  {
    question: "What is garbage collection in the context of C#?",
    optionA: "A tool for deleting unused files",
    optionB: "The process of manually freeing memory",
    optionC: "The automatic memory management process that reclaims memory occupied by unreferenced objects",
    optionD: "A way to clean up the user interface",
    correctOption: "optionC",
    explanation: "The .NET garbage collector manages memory allocation and deallocation automatically, preventing common memory leaks."
  },
  {
    question: "What is the purpose of an 'interface' in C#?",
    optionA: "The visual part of an application",
    optionB: "A type of class with full implementation",
    optionC: "A contract that defines a set of methods, properties, and events that a class must implement",
    optionD: "A way to connect to the internet",
    correctOption: "optionC",
    explanation: "Interfaces define a contract for what a class can do, without specifying how it does it, enabling polymorphism."
  },
  {
    question: "Which access modifier makes a member accessible only within its own class and by derived class instances?",
    optionA: "public",
    optionB: "private",
    optionC: "internal",
    optionD: "protected",
    correctOption: "optionD",
    explanation: "`protected` members are accessible within the containing class and in any class that inherits from it."
  }
];