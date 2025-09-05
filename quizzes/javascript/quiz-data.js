/**
 * JavaScript Quiz Data
 */
const jsQuestions = [
  {
    question: "What is the result of: typeof NaN ?",
    optionA: "'number'",
    optionB: "'NaN'",
    optionC: "'undefined'",
    optionD: "'object'",
    correctOption: "optionA",
    explanation: "NaN is a special numeric value; typeof NaN returns 'number'."
  },
  {
    question: "Which statement about let vs var is TRUE?",
    optionA: "let is function-scoped; var is block-scoped",
    optionB: "Both are block-scoped",
    optionC: "let is block-scoped; var is function-scoped",
    optionD: "Both are function-scoped",
    correctOption: "optionC",
    explanation: "let and const are block-scoped; var is function-scoped (or global if outside a function)."
  },
  {
    question: "What does === check that == does not?",
    optionA: "Prototype chain",
    optionB: "Reference address only",
    optionC: "Value & type equality",
    optionD: "Memory allocation",
    correctOption: "optionC",
    explanation: "=== is strict equality (no coercion). == performs type coercion."
  },
  {
    question: "Which creates a Promise that resolves after all settle (success/fail)?",
    optionA: "Promise.race",
    optionB: "Promise.finally",
    optionC: "Promise.all",
    optionD: "Promise.allSettled",
    correctOption: "optionD",
    explanation: "Promise.allSettled waits for all promises to settle and provides their status."
  },
  {
    question: "What is the output of: [1,2,3].map(x => { x * 2 }) ?",
    optionA: "[2,4,6]",
    optionB: "[undefined, undefined, undefined]",
    optionC: "TypeError",
    optionD: "[NaN, NaN, NaN]",
    correctOption: "optionB",
    explanation: "Arrow function with { } needs explicit return. Missing return gives undefined."
  },
  {
    question: "Which is NOT a primitive type?",
    optionA: "Symbol",
    optionB: "BigInt",
    optionC: "Function",
    optionD: "Boolean",
    correctOption: "optionC",
    explanation: "Function is an object type. Primitives: string, number, bigint, boolean, undefined, symbol, null."
  },
  {
    question: "What does 'use strict'; do?",
    optionA: "Enables JIT compilation",
    optionB: "Enforces stricter parsing & error handling",
    optionC: "Disables garbage collection",
    optionD: "Forces async execution",
    correctOption: "optionB",
    explanation: "Strict mode catches silent errors, disallows some syntax, changes 'this' rules, etc."
  },
  {
    question: "Result of: const a = {n:1}; const b = a; b.n=2; console.log(a.n);",
    optionA: "1",
    optionB: "2",
    optionC: "undefined",
    optionD: "Error",
    correctOption: "optionB",
    explanation: "Objects are reference types; modifying b also changes a."
  },
  {
    question: "Which Array method returns first element matching a condition?",
    optionA: "filter()",
    optionB: "find()",
    optionC: "some()",
    optionD: "match()",
    correctOption: "optionB",
    explanation: "find() returns the first matching element or undefined."
  },
  {
    question: "Which keyword stops event propagation but not default action?",
    optionA: "event.stopPropagation()",
    optionB: "event.stopImmediatePropagation()",
    optionC: "event.preventDefault()",
    optionD: "event.block()",
    correctOption: "optionA",
    explanation: "stopPropagation stops bubble/capture. preventDefault prevents default behavior."
  }
];