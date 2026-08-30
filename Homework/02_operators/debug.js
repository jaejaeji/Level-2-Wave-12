// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
// const tipAmount  = billAmount % tipPercent;
// console.log("Tip: $" + tipAmount);

// What's wrong ↓

// const tipAmount  = billAmount % tipPercent;
// The line above calculates remainder instead of 15%

// Your fix ↓
const tipAmount  = billAmount * (tipPercent/100);
console.log("Tip: $" + tipAmount);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

// const countdown = 10;
// countdown -= 1;
// countdown -= 1;
// countdown -= 1;
// console.log("Countdown: " + countdown);

// What's wrong ↓

// const countdown = 10;
// The keyword const should be let for countdown to allow changes with the variable

// Your fix ↓

let countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

// var username1 = "gamer99";
// var username2 = "Gamer99";
// console.log("Names match: " + (username1 == username2));

// Logic bug ↓

// console.log("Names match: " + (username1 == username2));
// The comparison should be "===" instead of "==" to compare if two variables are equal

// Style issue 1 ↓

// var should be const

// Style issue 2 ↓

// The username should not be spelt the same and have only a capital letter as the different factor

// Your fix ↓

const username1 = "gamer99";
const username2 = "gamer109";
console.log("Names match: " + (username1 === username2));
