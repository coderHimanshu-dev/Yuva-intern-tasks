// Conditional Statements in JavaScript

// 1. if statement
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}

// 2. if...else statement
let marks = 75;
if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 3. if...else if...else statement
let score = 88;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// 4. Nested if
let isStudent = true;
let hasID = false;
if (isStudent) {
  if (hasID) {
    console.log("Student entry allowed.");
  } else {
    console.log("Student ID required.");
  }
} else {
  console.log("Visitor entry allowed.");
}

// 5. switch statement
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Other day";
}

console.log("Today is " + dayName);

// 6. Ternary operator
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);
