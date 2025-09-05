/**
 * C++ Quiz Data
 */
const cppQuestions = [
  {
    question: "Which paradigm is NOT supported directly by C++?",
    optionA: "Procedural",
    optionB: "Object-Oriented",
    optionC: "Functional features",
    optionD: "Pure declarative logic (Prolog-style)",
    correctOption: "optionD",
    explanation: "C++ supports procedural, OO, generic, some functional; logic programming is not a core paradigm."
  },
  {
    question: "What does RAII primarily manage?",
    optionA: "Network sockets",
    optionB: "Resource lifetime through object scope",
    optionC: "Template instantiation order",
    optionD: "Macro expansions",
    correctOption: "optionB",
    explanation: "RAII ties resource acquisition & release to object lifetime ensuring deterministic cleanup."
  },
  {
    question: "Which produces undefined behavior?",
    optionA: "Accessing vector size()",
    optionB: "Double deleting same pointer",
    optionC: "Throwing exception",
    optionD: "Returning by value",
    correctOption: "optionB",
    explanation: "Deleting the same memory twice is undefined behavior."
  },
  {
    question: "Which cast is safest for polymorphic downcast (with run-time check)?",
    optionA: "static_cast",
    optionB: "reinterpret_cast",
    optionC: "dynamic_cast",
    optionD: "const_cast",
    correctOption: "optionC",
    explanation: "dynamic_cast performs run-time type checking for polymorphic types."
  },
  {
    question: "What is the size of an empty class (most implementations)?",
    optionA: "0 bytes",
    optionB: "1 byte",
    optionC: "2 bytes",
    optionD: "Implementation always 8 bytes",
    correctOption: "optionB",
    explanation: "Empty classes are given size 1 to ensure unique addresses for instances."
  },
  {
    question: "Which feature prevents implicit conversions on constructors?",
    optionA: "static",
    optionB: "final",
    optionC: "explicit",
    optionD: "override",
    correctOption: "optionC",
    explanation: "explicit constructors avoid unintended implicit conversions."
  },
  {
    question: "Which avoids copying when returning large objects?",
    optionA: "Move semantics (C++11)",
    optionB: "Multiple inheritance",
    optionC: "static variables",
    optionD: "Virtual destructors",
    correctOption: "optionA",
    explanation: "Move semantics allow transfer of resources rather than deep copy."
  },
  {
    question: "What does std::unique_ptr enforce?",
    optionA: "Multiple shared owners",
    optionB: "Atomic reference counting",
    optionC: "Exclusive ownership",
    optionD: "Cycle detection",
    correctOption: "optionC",
    explanation: "unique_ptr ensures a single owner for a dynamically allocated object."
  },
  {
    question: "Which container guarantees contiguous storage?",
    optionA: "std::list",
    optionB: "std::vector",
    optionC: "std::forward_list",
    optionD: "std::unordered_map",
    correctOption: "optionB",
    explanation: "std::vector provides contiguous memory, unlike list/forward_list."
  },
  {
    question: "Which keyword prevents method overriding in derived classes?",
    optionA: "lock",
    optionB: "final",
    optionC: "sealed",
    optionD: "override",
    correctOption: "optionB",
    explanation: "final after a virtual function disallows further overriding."
  }
];