// ============================================================
// 🐛  OBJECTS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the product's category but logs undefined.

const product = {
  name:     "Laptop",
  price:    999,
  category: "Electronics",
  stock:    10
};

// console.log(product.Category);

// What's wrong ↓
// Category is capitalized when in the object it is lowercase

// Your fix ↓
// Changed Category to lowercase
console.log(product.category);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should log each product's name and price.
// It logs "undefined undefined" for every product. Why?

const inventory = [
  { Name: "Shirt",  Price: 29.99 },
  { Name: "Jeans",  Price: 59.99 },
  { Name: "Jacket", Price: 89.99 }
];

// for (let i = 0; i < inventory.length; i++) {
//   console.log(inventory[i].name + " — $" + inventory[i].price);
// }

// What's wrong ↓
// The capitalization in the log doesn't match the object properties

// Your fix ↓
for (let i = 0; i < inventory.length; i++) {
  console.log(inventory[i].Name + " — $" + inventory[i].Price);
}

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total value of all products
// (price × stock) and log it. It logs NaN. There are TWO bugs.

const products = [
  { name: "Phone",   price: 699, stock: 15 },
  { name: "Tablet",  price: 499, stock: 8  },
  { name: "Monitor", price: 329, stock: 12 }
];

let totalValue = 0;

// for (let i = 0; i <= products.length; i++) {
//   totalValue += products[i].price * products.stock;
// }

// console.log("Total value: $" + totalValue);

// Bug 1 ↓
// The condition i <= products.length goes out of range of the array length. Should be i < products.length

// Bug 2 ↓
// When adding the value to totalValue, products.stock should be products[i].stock to account for the specific object property

// Your fix ↓
for (let i = 0; i < products.length; i++) {
  totalValue += products[i].price * products[i].stock;
}

console.log("Total value: $" + totalValue);