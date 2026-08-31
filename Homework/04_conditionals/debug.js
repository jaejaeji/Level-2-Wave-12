// ============================================================
// 🐛  CONDITIONALS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Pass" when score is 70, but it always
// logs "Pass" even when score is 30. Why?

let score = 30;
const passing = 60;

// if (score = passing) {
//   console.log("Pass ✅");
// } else {
//   console.log("Fail ❌");
// }

// What's wrong ↓
// "if (score = passing)" - this line just assigns the score variable with the variable for passing. This will assign the condition variable as always being true so it will always log "Pass"
// The = needs to change to <= so the two variables are being compared, where it asks if the score is greater than or equal to passing.

// Your fix ↓

if (score >= passing) {
  console.log("Pass ✅");
} else {
  console.log("Fail ❌");
}

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A theme park ride requires riders to be EITHER
// at least 140cm tall OR accompanied by an adult.
// But the code is turning away people it shouldn't.

const height        = 135;
const withAdult     = true;
const minHeight     = 140;

// if (height >= minHeight && withAdult) {
//   console.log("🎢 Enjoy the ride!");
// } else {
//   console.log("🚫 Sorry, you cannot ride.");
// }

// What's wrong ↓
// "if (height >= minHeight && withAdult)" - this line uses the && logical operator which requires all relevant conditions to be satisfied
// The OR logical operator, || should be used instead, so it passes when either condition is fulfilled.

// Your fix ↓
if (height >= minHeight || withAdult) {
  console.log("🎢 Enjoy the ride!");
} else {
  console.log("🚫 Sorry, you cannot ride.");
}


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This shipping calculator has two bugs.
// One causes the wrong tier to log.
// One is a style issue from a previous lesson.
// Find both.

// var orderTotal = 85;

// if (orderTotal >= 50) {
//   console.log("🚚 Standard shipping: $5");
// }
// if (orderTotal >= 100) {
//   console.log("🚀 Free express shipping!");
// }
// if (orderTotal < 50) {
//   console.log("📦 Economy shipping: $9.99");
// }

// Bug 1 ↓
// The conditional statement, if, is used for all three conditions, so each code would be handled separately
// Using else if is more appropriate so the only the correct output is logged

// Bug 2 ↓
// THe order of the compared value for these conditionals should be from highest to lowest when trying to rule out the higher variables first

// Your fix ↓
let orderTotal = 85;


if (orderTotal >= 100) {
  console.log("🚀 Free express shipping!");
} else if(orderTotal >= 50) {
  console.log("🚚 Standard shipping: $5");
} else if(orderTotal < 50) {
  console.log("📦 Economy shipping: $9.99");
}