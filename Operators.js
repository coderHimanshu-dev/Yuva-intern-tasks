// JavaScript Operators Notes

// 1) Arithmetic operators
const a = 10;
const b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// 2) Assignment operators
let total = 5;
total += 2; // total = total + 2
console.log(total); // 7

total *= 3; // total = total * 3
console.log(total); // 21

// 3) Comparison operators
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(3 < 7); // true
console.log(3 <= 2); // false
console.log(5 != "5"); // false
console.log(5 !== "5"); // true

// 4) Logical operators
const isLoggedIn = true;
const hasAccess = false;
console.log(isLoggedIn && hasAccess); // false
console.log(isLoggedIn || hasAccess); // true
console.log(!isLoggedIn); // false

// 5) Ternary operator
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // adult

// 6) Nullish coalescing (??)
const user = null;
const displayName = user ?? "Guest";
console.log(displayName); // Guest

// 7) Optional chaining (?.)
const person = { profile: { name: "Ava" } };
console.log(person.profile?.name); // Ava

// 8) Type operators
console.log(typeof 42); // "number"
console.log(typeof "hi"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"

// 9) Bitwise operators (operate on 32-bit signed integers)
console.log(5 & 1); // 1
console.log(5 | 1); // 5
console.log(5 ^ 1); // 4
console.log(~5); // -6
console.log(5 << 1); // 10
console.log(5 >> 1); // 2

// 10) Increment and decrement
let x = 4;
console.log(++x); // 5
console.log(x--); // 5 (then x becomes 4)
console.log(x); // 4

// Notes
// - == and != compare values loosely and can coerce types.
// - === and !== compare both type and value and are generally preferred.
// - && returns first falsy value or last value; || returns first truthy value or last value.
// - ?? only treats null and undefined as nullish, unlike ||.
