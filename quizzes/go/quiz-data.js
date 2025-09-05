/**
 * Go Quiz Data
 */
const goQuestions = [
  {
    question: "How do you run a function concurrently in Go?",
    optionA: "thread myFunc()",
    optionB: "async myFunc()",
    optionC: "go myFunc()",
    optionD: "concurrency.run(myFunc)",
    correctOption: "optionC",
    explanation: "The `go` keyword before a function call starts its execution in a new goroutine, concurrently."
  },
  {
    question: "What is the primary mechanism for communication between goroutines?",
    optionA: "Shared memory and mutexes",
    optionB: "Global variables",
    optionC: "Channels",
    optionD: "Function callbacks",
    correctOption: "optionC",
    explanation: "Go's concurrency model encourages communication over channels instead of sharing memory."
  },
  {
    question: "What does the `:=` operator do in Go?",
    optionA: "It's a strict equality check",
    optionB: "It's a pointer dereference operator",
    optionC: "It's a short variable declaration that declares and initializes a variable",
    optionD: "It assigns a value to a pre-existing variable",
    correctOption: "optionC",
    explanation: "The `:=` syntax is shorthand for declaring a variable and initializing it, letting Go infer the type."
  },
  {
    question: "How are errors typically handled in Go?",
    optionA: "By using try-catch blocks",
    optionB: "By returning an error value as the last return value of a function",
    optionC: "By using assertions",
    optionD: "By letting the program panic",
    correctOption: "optionB",
    explanation: "Go functions often return an error as the final result. The caller is expected to check if the error is nil."
  },
  {
    question: "What is the purpose of the `defer` keyword in Go?",
    optionA: "To delay a variable's initialization",
    optionB: "To schedule a function call to be run just before the surrounding function returns",
    optionC: "To define a function that returns another function",
    optionD: "To run a function in the background",
    correctOption: "optionB",
    explanation: "`defer` is used to ensure a function call is performed later in a program's execution, usually for cleanup."
  },
  {
    question: "In Go, if a type name or function name starts with a capital letter, what does it signify?",
    optionA: "It is a constant",
    optionB: "It is a public (exported) name",
    optionC: "It is a private (unexported) name",
    optionD: "It is a type definition",
    correctOption: "optionB",
    explanation: "In Go, identifiers are exported (visible outside the package) if they begin with a capital letter."
  },
  {
    question: "Which of the following is NOT a built-in type in Go?",
    optionA: "map",
    optionB: "slice",
    optionC: "class",
    optionD: "interface",
    correctOption: "optionC",
    explanation: "Go is not an object-oriented language in the traditional sense and does not have classes. It uses structs and interfaces."
  },
  {
    question: "What does `make([]int, 5, 10)` create?",
    optionA: "An array of 5 integers",
    optionB: "A slice with a length of 5 and a capacity of 10",
    optionC: "A map with a capacity of 5",
    optionD: "A channel that can hold 10 integers",
    correctOption: "optionB",
    explanation: "`make` is used to create slices, maps, and channels. For slices, it can specify both length and capacity."
  },
  {
    question: "What is the 'zero value' for a pointer type in Go?",
    optionA: "0",
    optionB: "undefined",
    optionC: "null",
    optionD: "nil",
    correctOption: "optionD",
    explanation: "The zero value for pointers, interfaces, maps, slices, channels, and function types is `nil`."
  },
  {
    question: "How do you define a struct in Go?",
    optionA: "class Person { name string }",
    optionB: "struct Person { name string }",
    optionC: "type Person struct { name string }",
    optionD: "def Person: name: string",
    correctOption: "optionC",
    explanation: "Structs are defined using the `type` keyword followed by the name and the `struct` keyword with fields inside braces."
  }
];