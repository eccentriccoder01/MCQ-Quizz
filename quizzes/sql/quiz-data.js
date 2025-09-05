/**
 * SQL Quiz Data
 */
const sqlQuestions = [
  {
    question: "Which SQL statement is used to extract data from a database?",
    optionA: "GET",
    optionB: "OPEN",
    optionC: "EXTRACT",
    optionD: "SELECT",
    correctOption: "optionD",
    explanation: "The `SELECT` statement is used to query the database and retrieve data that matches criteria that you specify."
  },
  {
    question: "Which type of JOIN returns all records from the left table, and the matched records from the right table?",
    optionA: "INNER JOIN",
    optionB: "RIGHT JOIN",
    optionC: "LEFT JOIN",
    optionD: "FULL OUTER JOIN",
    correctOption: "optionC",
    explanation: "A `LEFT JOIN` returns all rows from the left table, even if there are no matches in the right table."
  },
  {
    question: "Which clause is used to filter records that result from a GROUP BY clause?",
    optionA: "WHERE",
    optionB: "HAVING",
    optionC: "FILTER",
    optionD: "CONDITION",
    correctOption: "optionB",
    explanation: "The `WHERE` clause filters rows before grouping, while the `HAVING` clause filters groups after they have been created."
  },
  {
    question: "What does the `PRIMARY KEY` constraint uniquely identify?",
    optionA: "Each table in a database",
    optionB: "Each column in a table",
    optionC: "Each record in a table",
    optionD: "Each database user",
    correctOption: "optionC",
    explanation: "A `PRIMARY KEY` is a constraint that uniquely identifies each record (row) in a table."
  },
  {
    question: "Which aggregate function returns the number of rows?",
    optionA: "SUM()",
    optionB: "AVG()",
    optionC: "COUNT()",
    optionD: "TOTAL()",
    correctOption: "optionC",
    explanation: "`COUNT(*)` returns the total number of rows, while `COUNT(column)` returns the number of non-null values in that column."
  },
  {
    question: "Which SQL statement is used to add new data into a database?",
    optionA: "ADD RECORD",
    optionB: "INSERT INTO",
    optionC: "NEW ROW",
    optionD: "UPDATE",
    correctOption: "optionB",
    explanation: "The `INSERT INTO` statement is used to add new rows of data to a table in the database."
  },
  {
    question: "What is a 'foreign key'?",
    optionA: "A key that is not from your country",
    optionB: "A key in one table that refers to the PRIMARY KEY in another table",
    optionC: "A key that is not the primary key",
    optionD: "An encrypted key",
    correctOption: "optionB",
    explanation: "A foreign key is used to link two tables together and enforce referential integrity between them."
  },
  {
    question: "How can you select all the columns from a table named 'Customers'?",
    optionA: "SELECT all FROM Customers",
    optionB: "SELECT Customers.*",
    optionC: "SELECT * FROM Customers",
    optionD: "GET * FROM Customers",
    correctOption: "optionC",
    explanation: "The asterisk `*` is a wildcard character used to select all columns from the specified table."
  },
  {
    question: "What is the purpose of an `INDEX` in a database?",
    optionA: "To make the database file larger",
    optionB: "To enforce data types on columns",
    optionC: "To create and retrieve data from the database very quickly",
    optionD: "To provide a table of contents for a book",
    correctOption: "optionC",
    explanation: "Indexes are used to speed up the performance of queries by allowing the database to find rows faster."
  },
  {
    question: "What is a 'transaction' in SQL?",
    optionA: "A single SELECT statement",
    optionB: "A sequence of operations performed as a single logical unit of work",
    optionC: "A backup of the database",
    optionD: "A user login session",
    correctOption: "optionB",
    explanation: "A transaction ensures that all operations within it are completed successfully (commit) or none are (rollback), maintaining data integrity."
  }
];