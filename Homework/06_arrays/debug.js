// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

const letters = ["A", "B", "C", "D", "E"];
// const middleIndex = letters.length / 2;
// console.log(letters[middleIndex]);

// What's wrong ↓
// console.log(middleIndex); // This logs 2.5, which is not a whole number and is not a valid index for arrays


// Your fix ↓
const middleIndex = Math.ceil(letters.length / 2) - 1; // rounds middleIndex up to the nearest whole number, 3, which is the correct order for the middle element. Subtracting 1 correctly assigns the index to "C"
console.log(letters[middleIndex]);



// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

const prices = [10, 20, 30, 40];
let total = 0;

// for (let i = 0; i <= prices.length; i++) {
//   total += prices[i];
// }

// console.log("Total: $" + total);

// What's wrong ↓
// console.log(prices[prices.length]); // This logs undefined because the index for price.length is out of bounds
// the loop condition should be i < prices.length instead of i <= prices.length to avoid accessing an undefined index

// Your fix ↓
for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

// let topIndex  = 1;
// let topScore  = 0;

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] > topScore) {
//     topScore = scores[i];
//     topIndex = i;
//   }
// }

// console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
// The topIndex starts at 1, which means it skips the first index, 0. It should start at 0 to ensure all scores are compared.

// Bug 2 ↓
// The topScore starts at 0, but it should start with the first score in the array to ensure all scores are compared correctly.

// Your fix ↓
let topIndex  = 0;
let topScore  = scores[0];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);
