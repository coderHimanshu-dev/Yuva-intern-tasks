// JavaScript Functions

// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Ava"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3));

// Arrow functions
const multiply = (a, b) => a * b;
const double = (number) => number * 2;
console.log(multiply(3, 4), double(5));

// Parameters are listed in a function definition; arguments are the values
// passed when calling the function.
function describePet(animal, name) {
  return `${name} is a ${animal}.`;
}
console.log(describePet("cat", "Milo"));

// Return sends a value back to the caller. A function without a return value
// returns undefined.
function square(number) {
  return number * number;
}
console.log(square(4));

// A default parameter is used when the argument is omitted or undefined.
function welcome(name = "guest") {
  return `Welcome, ${name}!`;
}
console.log(welcome(), welcome("Sam"));

// A callback is a function passed to another function.
function processNumber(number, callback) {
  return callback(number);
}
console.log(processNumber(6, (value) => value * value));

// Scope determines where a variable can be accessed.
const sharedMessage = "Accessible throughout this file";
function showScope() {
  const functionMessage = "Accessible inside showScope";
  if (true) {
    let blockMessage = "Accessible inside this block";
    console.log(sharedMessage, functionMessage, blockMessage);
  }
  // blockMessage is not accessible here.
}
showScope();

// Function declarations are hoisted and can be called before their definition.
console.log(hoistedGreeting());
function hoistedGreeting() {
  return "This function declaration is hoisted.";
}

// let/const variables and function expressions cannot be used before their
// declarations are initialized.
