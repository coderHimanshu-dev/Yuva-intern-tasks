// JavaScript Loops

// for: repeats while a condition is true; useful when iteration count is known.
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while: checks the condition before each iteration.
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// do...while: always runs the body at least once.
let number = 0;
do {
  console.log(number);
  number++;
} while (number < 3);

// for...of: loops over values in an iterable, such as an array.
for (const fruit of ["apple", "banana"]) {
  console.log(fruit);
}

// for...in: loops over enumerable keys (commonly used with objects).
const person = { name: "Asha", age: 20 };
for (const key in person) {
  console.log(key, person[key]);
}

// break exits a loop; continue skips to its next iteration.
for (let i = 0; i < 5; i++) {
  if (i === 1) continue;
  if (i === 4) break;
  console.log(i);
}

// Practiced exercises

// Exercise 1: Print numbers 1 to 5 using a for loop.
for (let i = 1; i <= 5; i++) {
  console.log("Exercise 1:", i);
}

// Exercise 2: Calculate the sum of 1 to 10.
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum of 1 to 10:", sum);

// Exercise 3: Print only even numbers using a while loop.
let even = 2;
while (even <= 10) {
  console.log("Exercise 3:", even);
  even += 2;
}

// Exercise 4: Use for...of to find the first vowel in a word.
const word = "banana";
let vowelFound = false;
for (const letter of word) {
  if (["a", "e", "i", "o", "u"].includes(letter)) {
    console.log("Exercise 4: First vowel is", letter);
    vowelFound = true;
    break;
  }
}
if (!vowelFound) {
  console.log("Exercise 4: No vowel found");
}

// Exercise 5: Iterate over an object and print each key-value pair.
const student = { name: "Asha", className: "JavaScript", score: 95 };
for (const key in student) {
  console.log("Exercise 5:", key, student[key]);
}

// Update the loop variable so a while loop can eventually end.
