// ============================================================
// 🐛  LOOPS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This loop should log numbers 1 through 10.
// It only logs 1 through 9. What's wrong?

// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// What's wrong ↓
// the loop condition is i < 10, but it should be i <= 10 to include 10

// Your fix ↓
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should calculate the sum of 1 through 5 (answer: 15).
// It always logs 0. What's wrong?

// for (let i = 1; i <= 5; i++) {
//   let total = 0;
//   total += i;
// }
// console.log("Sum: " + total);

// What's wrong ↓
// let total = 0; being inside the loop resets the total to 0 on each iteration. It should be declared outside the loop.

// Your fix ↓
let total = 0;

for (let i = 1; i <= 5; i++) {
  total += i;
}
console.log("Sum: " + total);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log all ODD numbers from 1 to 10,
// then log "Done!" at the end.
// Instead it logs nothing and skips straight to "Done!".
// There are TWO bugs. Find both.

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   } else {
//     continue;
//   }
// }
// console.log("Done!");

// Bug 1 ↓
// The if condition is checking for even numbers. Wrote continue statement under the if statement so even numbers are skipped.

// Bug 2 ↓
// Wrote console.log(i) under else so odd numbers are logged instead of even numbers

// Your fix ↓
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  } else {
    console.log(i);
  }
}

console.log("Done!");