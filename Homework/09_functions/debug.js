// ============================================================
// 🐛  FUNCTIONS — HOMEWORK  |  DEBUG TASKS
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This arrow function should return the full name
// but always returns undefined. What's wrong?

// const getFullName = (first, last) => {
//   first + " " + last;
// };

// console.log(getFullName("Alex", "Rivera"));

// What's wrong ↓
// missing a return statement to return the full name

// Your fix — write TWO versions:
//   a) Fix by adding return inside the braces

const getFullName = (first, last) => {
  return first + " " + last;
};

console.log(getFullName("Alex", "Rivera"));

//   b) Fix by removing the braces (one-liner implicit return)

const getFullName2 = (first, last) => first + " " + last;

console.log(getFullName2("Alex", "Rivera"));


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return "Admin", "Moderator", or "Member"
// depending on role. It works for "admin" but returns
// undefined for everything else. What's wrong?

// function getRoleLabel(role) {
//   if (role === "admin") {
//     return "Admin";
//   } else if (role === "mod") {
//     ("Moderator");
//   } else {
//     ("Member");
//   }
// }

// console.log(getRoleLabel("admin")); // "Admin" ✅
// console.log(getRoleLabel("mod")); // undefined ❌
// console.log(getRoleLabel("member")); // undefined ❌

// What's wrong ↓
// does not return a string for the moderator or member roles

// Your fix ↓

// function getRoleLabel(role) {
//   if (role === "admin") {
//     return "Admin";
//   } else if (role === "mod") {
//     return "Moderator";
//   } else {
//     return "Member";
//   };
// }

// console.log(getRoleLabel("admin")); // "Admin" ✅
// console.log(getRoleLabel("mod")); // "Moderator" ✅
// console.log(getRoleLabel("member")); // "Member" ✅

// Bonus: rewrite the whole function as an arrow function
// using nested ternaries (just to see what it looks like —
// then write a comment about whether you'd actually use it).

const getRoleLabel = (role) => {
  return role === "admin" ? "Admin": role === "mod" ? "Moderator":"Member";
};

console.log(getRoleLabel("admin")); // "Admin" ✅
console.log(getRoleLabel("mod")); // "Moderator" ✅
console.log(getRoleLabel("member")); // "Member" ✅

// The arrow function is straight forward, but I would use if/else statements instead of nested ternaries because they are easier to read

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount calculator has TWO bugs.
// Both cause wrong math — find them both.

// const applyDiscount = (price, discountPercent = 10) => {
//   const discountAmount = price * discountPercent;
//   const finalPrice = price + discountAmount;
//   return finalPrice;
// };

// console.log(applyDiscount(100, 20)); // expected: 80
// console.log(applyDiscount(50)); // expected: 45

// Bug 1 (math) ↓
// const discountAmount = price * discountPercent; In this line, discountPercent should divided by 100 to account for the actual percent discounted

// Bug 2 (math) ↓
// const finalPrice = price + discountAmount; In this line, the final price should subtract instead of adding the discountAmount.

// Your fix ↓

const applyDiscount = (price, discountPercent = 10) => {
  const discountAmount = price * discountPercent/100;
  const finalPrice = price - discountAmount;
  return finalPrice;
};

console.log(applyDiscount(100, 20)); // expected: 80
console.log(applyDiscount(50)); // expected: 45