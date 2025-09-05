/**
 * PHP Quiz Data
 */
const phpQuestions = [
  {
    question: "Which symbol denotes a variable in PHP?",
    optionA: "@",
    optionB: "$",
    optionC: "#",
    optionD: "%",
    correctOption: "optionB",
    explanation: "Variables in PHP always start with the $ symbol."
  },
  {
    question: "Which superglobal contains form data sent via POST?",
    optionA: "$_FORM",
    optionB: "$_POST",
    optionC: "$_REQUEST",
    optionD: "$_INPUT",
    correctOption: "optionB",
    explanation: "$_POST specifically stores POST request body variables."
  },
  {
    question: "What does === check in PHP?",
    optionA: "Value only",
    optionB: "Type only",
    optionC: "Value and type",
    optionD: "Memory address",
    correctOption: "optionC",
    explanation: "=== enforces identical type and value; == does type juggling."
  },
  {
    question: "Which function outputs human-readable type & value info?",
    optionA: "print()",
    optionB: "echo()",
    optionC: "dump()",
    optionD: "var_dump()",
    correctOption: "optionD",
    explanation: "var_dump shows detailed type and value structure."
  },
  {
    question: "Which error level halts script execution?",
    optionA: "E_NOTICE",
    optionB: "E_WARNING",
    optionC: "E_PARSE / E_ERROR",
    optionD: "E_STRICT",
    correctOption: "optionC",
    explanation: "E_ERROR and E_PARSE are fatal; script stops."
  },
  {
    question: "Which array function preserves keys while slicing?",
    optionA: "array_slice()",
    optionB: "array_splice()",
    optionC: "array_split()",
    optionD: "array_cut()",
    correctOption: "optionA",
    explanation: "array_slice returns a portion; preserves string keys (numeric reindexed unless preserve flag)."
  },
  {
    question: "Which PHP version introduced scalar type declarations?",
    optionA: "5.3",
    optionB: "5.6",
    optionC: "7.0",
    optionD: "8.0",
    correctOption: "optionC",
    explanation: "PHP 7.0 added scalar types & return type declarations."
  },
  {
    question: "What is the default visibility if none specified for class properties?",
    optionA: "public",
    optionB: "private",
    optionC: "protected",
    optionD: "internal",
    correctOption: "optionA",
    explanation: "If omitted, properties & methods are public by default (though explicit is recommended)."
  },
  {
    question: "Which operator supports null coalescing?",
    optionA: "?:",
    optionB: "??",
    optionC: "::",
    optionD: "=>",
    correctOption: "optionB",
    explanation: "The null coalescing operator ?? returns first operand if set and not null."
  },
  {
    question: "Which allows strict typing enforcement?",
    optionA: "declare(strict_types=1);",
    optionB: "use(strict);",
    optionC: "enable_strict();",
    optionD: "#strict on",
    correctOption: "optionA",
    explanation: "declare(strict_types=1); at file top enables strict scalar type checks."
  }
];