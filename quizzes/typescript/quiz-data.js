/**
 * TypeScript Quiz Data
 */
const typeScriptQuestions = [
  {
    question: "What is TypeScript?",
    optionA: "A new version of JavaScript",
    optionB: "A JavaScript framework for building user interfaces",
    optionC: "A superset of JavaScript that adds static types",
    optionD: "A server-side runtime environment for JavaScript",
    correctOption: "optionC",
    explanation: "TypeScript extends JavaScript by adding types, allowing for static analysis and better tooling."
  },
  {
    question: "Which of the following is a basic type in TypeScript?",
    optionA: "Object",
    optionB: "Array",
    optionC: "Boolean",
    optionD: "All of the above",
    correctOption: "optionD",
    explanation: "TypeScript includes basic types like boolean, number, string, array, object, and more."
  },
  {
    question: "How do you define an interface in TypeScript?",
    optionA: "class MyInterface { ... }",
    optionB: "type MyInterface = { ... };",
    optionC: "interface MyInterface { ... }",
    optionD: "def MyInterface { ... }",
    correctOption: "optionC",
    explanation: "The `interface` keyword is used to declare a contract or a shape that an object must adhere to."
  },
  {
    question: "What is the difference between `any` and `unknown` types?",
    optionA: "There is no difference",
    optionB: "`any` is type-safe, while `unknown` is not",
    optionC: "`unknown` is the type-safe counterpart of `any`. You must perform a type check before using an `unknown` value.",
    optionD: "`unknown` can only be used with numbers",
    correctOption: "optionC",
    explanation: "`unknown` is safer than `any` because it forces you to narrow the type before you can perform operations on it."
  },
  {
    question: "How can you make a property in an interface optional?",
    optionA: "Add `optional` before the property name",
    optionB: "Add a `?` after the property name",
    optionC: "Add `*` after the property name",
    optionD: "Assign `null` to the property",
    correctOption: "optionB",
    explanation: "A question mark `?` after a property name in an interface or type alias marks it as optional."
  },
  {
    question: "What is a 'generic' in TypeScript?",
    optionA: "A default type for all variables",
    optionB: "A component that can work over a variety of types rather than a single one",
    optionC: "A built-in utility type",
    optionD: "A way to hide types from the compiler",
    correctOption: "optionB",
    explanation: "Generics provide a way to create reusable components that work with a variety of types, like `Array<T>`."
  },
  {
    question: "What command is used to compile a TypeScript file (`app.ts`)?",
    optionA: "node app.ts",
    optionB: "ts-run app.ts",
    optionC: "tsc app.ts",
    optionD: "typescript app.ts",
    correctOption: "optionC",
    explanation: "`tsc` (TypeScript Compiler) is the command-line tool used to transpile TypeScript code into JavaScript."
  },
  {
    question: "What does the `readonly` modifier do on a class property?",
    optionA: "It makes the property accessible only within the class",
    optionB: "It prevents the property from being changed after its initial assignment in the constructor",
    optionC: "It makes the property visible to all other scripts",
    optionD: "It ensures the property is a string",
    correctOption: "optionB",
    explanation: "The `readonly` modifier ensures a property can only be set when it's declared or within the constructor."
  },
  {
    question: "What is a 'union type' in TypeScript?",
    optionA: "A type that can be one of several types",
    optionB: "A special type for arrays",
    optionC: "A type that combines all properties of several types",
    optionD: "A type that can only be `string` or `number`",
    correctOption: "optionA",
    explanation: "A union type is formed from two or more other types, representing values that may be any one of those types, using the `|` symbol."
  },
  {
    question: "How do you define an enum in TypeScript?",
    optionA: "let MyEnum = { ... }",
    optionB: "enum MyEnum { ... }",
    optionC: "type MyEnum = 'A' | 'B';",
    optionD: "const MyEnum = [ ... ]",
    correctOption: "optionB",
    explanation: "Enums allow a developer to define a set of named constants. They are defined with the `enum` keyword."
  }
];