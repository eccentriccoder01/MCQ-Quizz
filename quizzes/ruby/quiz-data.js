/**
 * Ruby Quiz Data
 */
const rubyQuestions = [
  {
    question: "What is the fundamental principle of Ruby?",
    optionA: "Everything is a function",
    optionB: "Everything is an object",
    optionC: "Performance is the top priority",
    optionD: "Static typing is essential",
    correctOption: "optionB",
    explanation: "In Ruby, every piece of data, including numbers and booleans, is an object with methods you can call."
  },
  {
    question: "What is a 'block' in Ruby?",
    optionA: "A section of code that is blocked from executing",
    optionB: "A chunk of code that can be passed to a method to be executed",
    optionC: "A data structure for storing key-value pairs",
    optionD: "A way to define a class",
    correctOption: "optionB",
    explanation: "Blocks are a key feature of Ruby's expressiveness, often used with iterators like `.each`."
  },
  {
    question: "What is a 'gem' in the context of Ruby?",
    optionA: "A special variable type",
    optionB: "A packaged library or application that can be installed",
    optionC: "A reserved keyword",
    optionD: "A performance optimization tool",
    correctOption: "optionB",
    explanation: "RubyGems is the package manager for Ruby, and a 'gem' is the format for distributable libraries."
  },
  {
    question: "What does `nil` represent in Ruby?",
    optionA: "The number zero",
    optionB: "An empty string",
    optionC: "The absence of a value, similar to null",
    optionD: "An undefined variable, which causes an error",
    correctOption: "optionC",
    explanation: "`nil` is an object that represents nothingness. In a boolean context, it is considered false."
  },
  {
    question: "What is the difference between a symbol and a string?",
    optionA: "There is no difference",
    optionB: "Symbols are mutable, strings are not",
    optionC: "Symbols are immutable and there is only one copy of a given symbol at a time, making them efficient for keys",
    optionD: "Strings are used for method names, symbols are for text",
    correctOption: "optionC",
    explanation: "Symbols (e.g., `:my_key`) are often used as identifiers or hash keys because they are memory-efficient and immutable."
  },
  {
    question: "What is Ruby on Rails?",
    optionA: "Ruby's standard library",
    optionB: "A popular server-side web application framework written in Ruby",
    optionC: "The official Ruby compiler",
    optionD: "A code editor for Ruby",
    correctOption: "optionB",
    explanation: "Rails is a full-stack framework that follows conventions like MVC (Model-View-Controller) to speed up web development."
  },
  {
    question: "How would you print 'Hello, World!' to the console in Ruby?",
    optionA: "console.log('Hello, World!')",
    optionB: "print('Hello, World!')",
    optionC: "echo 'Hello, World!'",
    optionD: "puts 'Hello, World!'",
    correctOption: "optionD",
    explanation: "`puts` (put string) is the common method for printing output to the console, and it adds a newline character."
  },
  {
    question: "What is a 'module' in Ruby used for?",
    optionA: "Only for defining classes",
    optionB: "To group methods, classes, and constants, often used as a namespace or for mixins",
    optionC: "To handle file I/O",
    optionD: "To create singleton objects",
    correctOption: "optionB",
    explanation: "Modules are a way to bundle functionality. They can be mixed into classes to share methods (a form of multiple inheritance)."
  },
  {
    question: "What will the expression `5.times { |i| print i }` output?",
    optionA: "12345",
    optionB: "01234",
    optionC: "5",
    optionD: "An error",
    correctOption: "optionB",
    explanation: "The `.times` method on an integer iterates that many times, passing the current index (starting from 0) to the block."
  },
  {
    question: "What does the term 'metaprogramming' refer to in Ruby?",
    optionA: "Programming with multiple monitors",
    optionB: "A style of programming that avoids methods",
    optionC: "Writing code that writes or modifies other code at runtime",
    optionD: "A strict set of programming rules",
    correctOption: "optionC",
    explanation: "Ruby is highly dynamic, allowing for techniques like defining methods at runtime, which is known as metaprogramming."
  }
];