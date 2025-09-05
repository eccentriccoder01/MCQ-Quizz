/**
 * Bash Quiz Data
 */
const bashQuestions = [
  {
    question: "What is the 'shebang' and what is its purpose in a shell script?",
    optionA: "It's a comment; it does nothing",
    optionB: "It's `#!`, and it specifies the interpreter to be used for the script",
    optionC: "It's `$$`, and it indicates the start of the script",
    optionD: "It's `##`, a special type of comment for documentation",
    correctOption: "optionB",
    explanation: "The shebang (e.g., `#!/bin/bash`) at the beginning of a script tells the system which interpreter should execute the script."
  },
  {
    question: "How do you assign a value to a variable in Bash?",
    optionA: "let my_var = 'hello'",
    optionB: "my_var := 'hello'",
    optionC: "my_var = 'hello'",
    optionD: "var my_var = 'hello'",
    correctOption: "optionC",
    explanation: "Variables are assigned without spaces around the equals sign, e.g., `my_var='hello'`."
  },
  {
    question: "What does the `|` (pipe) operator do in Bash?",
    optionA: "It performs a logical OR operation",
    optionB: "It redirects the standard output of one command to the standard input of another",
    optionC: "It runs two commands in parallel",
    optionD: "It separates multiple commands on the same line",
    correctOption: "optionB",
    explanation: "Piping is a powerful feature for chaining commands together, e.g., `ls -l | grep .txt`."
  },
  {
    question: "How do you get the output of a command into a variable?",
    optionA: "my_var = get(ls)",
    optionB: "my_var -> ls",
    optionC: "my_var=$(ls)",
    optionD: "my_var = &ls",
    correctOption: "optionC",
    explanation: "Command substitution, using `$(...)` or backticks ` `` `, executes a command and captures its output."
  },
  {
    question: "What is the difference between `>` and `>>` for redirection?",
    optionA: "There is no difference",
    optionB: "`>` is for input, `>>` is for output",
    optionC: "`>` overwrites the destination file, while `>>` appends to it",
    optionD: "`>>` overwrites the destination file, while `>` appends to it",
    correctOption: "optionC",
    explanation: "`>` is for redirecting output (and overwriting), while `>>` is for appending output to a file."
  },
  {
    question: "What does the special variable `$?` contain?",
    optionA: "The script's process ID (PID)",
    optionB: "The number of command-line arguments",
    optionC: "The exit status of the last executed command",
    optionD: "The name of the script itself",
    correctOption: "optionC",
    explanation: "An exit status of 0 typically means success, while any non-zero value indicates an error. It's used for error checking."
  },
  {
    question: "Which of the following is the correct syntax for an if-statement in Bash?",
    optionA: "if ( ... ) { ... }",
    optionB: "if [ ... ]; then ... fi",
    optionC: "if ... then ... end",
    optionD: "if: ... do: ...",
    correctOption: "optionB",
    explanation: "Bash `if` statements use square brackets for tests and are terminated by `fi` (if spelled backwards)."
  },
  {
    question: "How do you loop through a list of files in the current directory?",
    optionA: "foreach file in * { ... }",
    optionB: "loop file in $(ls) do ... done",
    optionC: "for file in *; do ... done",
    optionD: "while file in *; do ... done",
    correctOption: "optionC",
    explanation: "A `for` loop combined with a file glob (`*`) is the standard way to iterate over files in a directory."
  },
  {
    question: "What is the purpose of the `chmod` command?",
    optionA: "To change the owner of a file",
    optionB: "To change the file's modification time",
    optionC: "To change the access permissions of a file or directory",
    optionD: "To create a new mode for a file",
    correctOption: "optionC",
    explanation: "`chmod` (change mode) is used to set read (r), write (w), and execute (x) permissions for the user, group, and others."
  },
  {
    question: "What does the command `read -p 'Enter your name: ' name` do?",
    optionA: "It reads the content of a file named 'name'",
    optionB: "It prints 'Enter your name: ' and waits for user input, storing it in the variable 'name'",
    optionC: "It creates a file named after the user's input",
    optionD: "It is not a valid Bash command",
    correctOption: "optionB",
    explanation: "The `read` command is used to get input from the user. The `-p` flag allows you to specify a prompt."
  }
];