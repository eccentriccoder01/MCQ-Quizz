/**
 * Java Quiz Data
 */
const javaQuestions = [
  {
    question: "Which keyword prevents a class from being subclassed?",
    optionA: "static",
    optionB: "final",
    optionC: "sealed",
    optionD: "private",
    correctOption: "optionB",
    explanation: "final on a class prevents extension. (sealed is newer and controls permitted subclasses.)"
  },
  {
    question: "Default value of an int instance field (not local variable)?",
    optionA: "undefined",
    optionB: "null",
    optionC: "0",
    optionD: "Not initialized error",
    correctOption: "optionC",
    explanation: "Primitive numeric instance fields default to 0; locals must be explicitly initialized."
  },
  {
    question: "Which collection guarantees insertion order?",
    optionA: "HashSet",
    optionB: "TreeSet",
    optionC: "LinkedHashSet",
    optionD: "PriorityQueue",
    correctOption: "optionC",
    explanation: "LinkedHashSet maintains insertion order; HashSet does not; TreeSet sorts; PriorityQueue orders by priority."
  },
  {
    question: "What does JVM stand for?",
    optionA: "Java Variable Manager",
    optionB: "Java Virtual Machine",
    optionC: "Java Version Module",
    optionD: "JIT Verified Machine",
    correctOption: "optionB",
    explanation: "JVM executes compiled bytecode (.class) enabling platform independence."
  },
  {
    question: "Which interface supports functional lambda usage (Java 8)?",
    optionA: "Serializable",
    optionB: "RandomAccess",
    optionC: "Comparable",
    optionD: "Functional interfaces (e.g. Runnable)",
    correctOption: "optionD",
    explanation: "Functional interfaces have a single abstract method and can be implemented with lambdas."
  },
  {
    question: "Which stream operation is terminal?",
    optionA: "map()",
    optionB: "filter()",
    optionC: "collect()",
    optionD: "peek()",
    correctOption: "optionC",
    explanation: "collect() triggers evaluation and terminates the stream pipeline."
  },
  {
    question: "Which exception is unchecked?",
    optionA: "IOException",
    optionB: "SQLException",
    optionC: "NullPointerException",
    optionD: "ClassNotFoundException",
    correctOption: "optionC",
    explanation: "Runtime exceptions (like NullPointerException) are unchecked."
  },
  {
    question: "What is the result of '10' + 20 in Java?",
    optionA: "30",
    optionB: "1020",
    optionC: "Exception",
    optionD: "NaN",
    correctOption: "optionB",
    explanation: "String + int results in string concatenation producing '1020'."
  },
  {
    question: "Which keyword is used for inheritance?",
    optionA: "implements",
    optionB: "extends",
    optionC: "inherits",
    optionD: "super",
    correctOption: "optionB",
    explanation: "extends is used for class inheritance; implements for interfaces."
  },
  {
    question: "Which feature enables same method name with different parameters?",
    optionA: "Overriding",
    optionB: "Shadowing",
    optionC: "Overloading",
    optionD: "Refactoring",
    correctOption: "optionC",
    explanation: "Method overloading allows multiple methods with the same name but different parameter lists."
  }
];