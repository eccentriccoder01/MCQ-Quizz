/**
 * CSS Quiz Data
 * 10 curated questions with explanations
 */
const cssQuestions = [
  {
    question: "What does the 'C' in CSS stand for?",
    optionA: "Creative",
    optionB: "Cascading",
    optionC: "Central",
    optionD: "Computed",
    correctOption: "optionB",
    explanation: "CSS = Cascading Style Sheets. 'Cascading' refers to how styles are applied in order of priority."
  },
  {
    question: "Which selector has the highest specificity (assuming all else equal)?",
    optionA: ".card .title",
    optionB: "#main .title",
    optionC: "header nav a.title",
    optionD: ".title:hover",
    correctOption: "optionB",
    explanation: "An ID selector (#main) adds a higher specificity weight than class or type selectors."
  },
  {
    question: "Which property creates a stacking context (without z-index on positioned element)?",
    optionA: "opacity: 0.8;",
    optionB: "display: flex;",
    optionC: "outline: none;",
    optionD: "letter-spacing: 1px;",
    correctOption: "optionA",
    explanation: "Opacity (value other than 1), along with transforms, filters, etc., can create a new stacking context."
  },
  {
    question: "What unit scales relative to available width of the viewport?",
    optionA: "em",
    optionB: "rem",
    optionC: "vw",
    optionD: "%",
    correctOption: "optionC",
    explanation: "vw (viewport width) is 1% of the viewport width. % depends on parent box size, not viewport."
  },
  {
    question: "Which declaration centers a block-level element horizontally (no flex/grid)?",
    optionA: "margin: auto 0;",
    optionB: "margin: 0 auto;",
    optionC: "text-align: center;",
    optionD: "justify-content: center;",
    correctOption: "optionB",
    explanation: "margin: 0 auto centers elements with a defined width in normal flow."
  },
  {
    question: "Given: .box { width: 200px; padding: 20px; border: 4px solid; box-sizing: border-box; } Actual rendered width?",
    optionA: "200px",
    optionB: "248px",
    optionC: "224px",
    optionD: "180px",
    correctOption: "optionA",
    explanation: "With box-sizing: border-box total width includes padding + border inside declared width."
  },
  {
    question: "Which pseudo-class selects an element only if it is the only child of its parent?",
    optionA: ":only",
    optionB: ":single-child",
    optionC: ":only-child",
    optionD: ":alone",
    correctOption: "optionC",
    explanation: ":only-child matches an element if it is the sole child of its parent."
  },
  {
    question: "What does flex: 2 represent in shorthand (flex-grow flex-shrink flex-basis)?",
    optionA: "2 0 0",
    optionB: "2 1 0",
    optionC: "2 2 auto",
    optionD: "2 1 auto",
    correctOption: "optionB",
    explanation: "Single number sets flex-grow; flex-shrink defaults to 1; flex-basis defaults to 0."
  },
  {
    question: "Which media query targets screens narrower than 600px?",
    optionA: "@media (min-width: 600px)",
    optionB: "@media (width < 600px)",
    optionC: "@media (max-width: 600px)",
    optionD: "@media screen-width(<=600px)",
    correctOption: "optionC",
    explanation: "(max-width: 600px) applies when viewport width is 600px or less."
  },
  {
    question: "Which property enables GPU acceleration most often (triggering composite layer)?",
    optionA: "background-repeat",
    optionB: "transform",
    optionC: "letter-spacing",
    optionD: "text-transform",
    correctOption: "optionB",
    explanation: "transform frequently promotes an element to its own layer, improving animation performance."
  }
];