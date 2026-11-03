// JavaScript data types
// JavaScript is dynamically typed: variables can hold values of different types.

// Primitive types
const text = "Hello"; // string: text
const wholeNumber = 42; // number: integers and decimals
const decimal = 3.14;
const bigInteger = 12345678901234567890n; // bigint: large integers (use n suffix)
const isAvailable = true; // boolean: true or false
let notAssigned; // undefined: no value assigned
const emptyValue = null; // null: intentional absence of a value
const token = Symbol("token"); // symbol: unique identifier

// Non-primitive values are objects. They can contain properties and are
// generally mutable. Arrays and functions are also objects in JavaScript.
const person = { name: "Sam", age: 25 }; // object
const colors = ["red", "green", "blue"]; // array
function greet(name) {
  // function
  return `Hello, ${name}`;
}

// typeof returns a type name. Note: typeof null is "object" (a historical
// quirk), and typeof an array is also "object"; use Array.isArray() for arrays.
typeof text; // "string"
typeof wholeNumber; // "number"
typeof bigInteger; // "bigint"
typeof isAvailable; // "boolean"
typeof notAssigned; // "undefined"
typeof emptyValue; // "object"
typeof token; // "symbol"
typeof person; // "object"
typeof greet; // "function"
Array.isArray(colors); // true

// Convert explicitly when needed: String(value), Number(value), Boolean(value).
Number("42"); // 42
String(42); // "42"
Boolean(0); // false

// Prefer strict equality (=== and !==) to avoid unexpected type coercion.
0 === "0"; // false
