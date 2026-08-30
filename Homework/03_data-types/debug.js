// ============================================================
// 🐛  DATA TYPES — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This tries to build a greeting using the customer's first name.
// It logs "undefined Rivera" instead of "Alex Rivera". What's wrong?

const customerName = "alex rivera";
const cleanName    = customerName.trim().toLowerCase();

// Trying to capitalise the first letter:
// const titled = cleanname[0].toUpperCase() + cleanname.slice(1);
// console.log(`Hello, ${titled}!`);

// What's wrong ↓
// variables used in "titled" are "cleanname" instead of "cleanName". Need to be aware of variables being capital sensitive
// Last name needs to be capitalized

// Your fix ↓
const titled = cleanName[0].toUpperCase() + cleanName.slice(1,5) + cleanName[5].toUpperCase() + cleanName.slice(6);
console.log(`Hello, ${titled}!`);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This calculates the total for an order item.
// The result is "79.992" instead of 159.98. What's wrong?

const itemPrice = "79.99";  // from a form input
const itemQty   = 2;

// const lineTotal = itemPrice * itemQty;  // works — * coerces
// const receipt   = `Total: $${itemPrice + lineTotal}`; // bug here

// console.log(receipt); // "Total: $79.99159.98" — wrong

// What's wrong ↓
// The total should be just lineTotal, not itemPrice + lineTotal
// "itemPrice" is a string; should be converted into a number to prevent bugs in the future

// Your fix ↓
const priceNum = parseFloat(itemPrice);

const lineTotal = itemPrice * itemQty;  // works — * coerces
const receipt   = `Total: $${lineTotal.toFixed(2)}`; // bug here

console.log(receipt); // "Total: $79.99159.98" — wrong



// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This builds a discount label and checks if a code is valid.
// There are TWO bugs — one produces a wrong boolean,
// one produces a wrong string.

const rawCode     = "  save10  ";
const validCode   = "SAVE10";

// Bug 1: comparing without cleaning
// const isValid = rawCode === validCode;
// console.log(`Code valid: ${isValid}`);  // false — wrong, should be true

// // Bug 2: building a label with the raw code
// const label = `Discount code: ${rawCode} — valid: ${isValid}`;
// console.log(label); // shows messy whitespace in the label

// Bug 1 ↓
// rawCode should be cleaned using trim and toUpperCase

// Bug 2 ↓
// Whitespace in rawCode needs to be removed using trim

// Your fix for both ↓
const cleanCode = rawCode.trim().toUpperCase();
console.log(cleanCode);

const isValid = cleanCode === validCode;
console.log(`Code valid: ${isValid}`);  // shows as true

// Bug 2: building a label with the raw code
const label = `Discount code: ${rawCode.trim()} — valid: ${isValid}`;
console.log(label); // shows messy whitespace in the label