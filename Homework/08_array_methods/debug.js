// ============================================================
// 🐛  ARRAY METHODS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should create a new array of prices with tax added (10%).
// Instead it logs an array of undefined. What's wrong?

const prices = [29.99, 49.99, 14.99, 99.99];

const withTax = prices.map(function(price) {
  // const taxed = price * 1.10;
  // console.log(taxed);
  return price * 1.10;
});

console.log("With tax:", withTax);

// What's wrong ↓

// the array method map isn't returning anything

// Your fix ↓

// returned the value for const taxed instead of having a separate const


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return only the pending orders.
// But it returns an empty array. Why?

const orders = [
  { id: 1, status: "delivered" },
  { id: 2, status: "pending"   },
  { id: 3, status: "pending"   },
  { id: 4, status: "cancelled" }
];

const pending = orders.filter(function(order) {
  // return order.status = "pending";
  return order.status === "pending";

});

console.log(pending);

// What's wrong ↓

// return order.status = "pending"; --> the = sign in this line is used for assignment, not comparison

// Your fix ↓

// Change the single = sign into === to compare the value and type


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total value of all orders
// (quantity × price for each). It produces a wrong result.
// There are TWO bugs.

const lineItems = [
  { product: "Shirt",  quantity: 2, price: 29.99 },
  { product: "Jeans",  quantity: 1, price: 59.99 },
  { product: "Jacket", quantity: 3, price: 89.99 }
];

// const orderTotal = lineItems.reduce(function(acc, item) {
//   return acc + item.quantity * item.price;
// });

const orderTotal = lineItems.reduce(function(acc, item) {
  return acc + item.quantity * item.price;
}, 0);

console.log("Order total: $" + orderTotal.toFixed(2));

// Bug 1 ↓

// the acc variable should start from 0

// Bug 2 ↓
// Hint: run it and read the output carefully.
// What is the value on the first iteration?

// The value shows $[object Object]59.99269.96999999999997, which is taking acc as the first object in lineItems and concatenating it with the quantityxprice for the following two objects
// Value shows as 389.93999999999994 after allowing acc to start from 0. Javascript uses binary floating-point numbers which makes it difficult to represent some decimal numbers internally.

// Your fix ↓

// Allow acc to start from 0
// used .toFixed(2) to fix to 2 decimals