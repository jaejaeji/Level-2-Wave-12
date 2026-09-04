// ============================================================
// 🏠  DATA TYPES — HOMEWORK  |  MENTEE VERSION
// ============================================================
// Mini Project: Receipt Generator
//
// Build a formatted shopping receipt using template literals,
// string methods, and type conversion.
//
// RULE: No functions, no conditionals, no loops, no arrays.
// Everything is sequential — declare variables, log results.
// You only know Lessons 1, 2, and 3.
//
// All output goes to the console.
// ============================================================

console.log("=== RECEIPT GENERATOR ===\n");

// ============================================================
// THE RAW DATA — messy, as it might come from a form
// ============================================================
const storeName = "  PIXEL GADGETS  ";
const customerName = "alex rivera";
const customerEmail = "  ALEX@PIXELGADGETS.COM  ";

const item1Name = "wireless headphones";
const item1Price = "79.99"; // string — from form input
const item1Qty = 2;

const item2Name = "usb-c hub";
const item2Price = "44.99"; // string — from form input
const item2Qty = 1;

const item3Name = "desk lamp";
const item3Price = "34.99"; // string — from form input
const item3Qty = 3;

const discountCode = "  SAVE10  "; // messy whitespace
const taxRate = 0.08;
const orderDate = "2025-01-15";
const orderStatus = null; // not yet processed

// ----------------------------------------------------------
// TASK 1 — Clean the store and customer data
// ----------------------------------------------------------
// The store name and customer name need formatting.
//
// a) Clean storeName: trim whitespace, lowercase it, then capitalize
//    just the first letter. (Capitalizing every word would need
//    .split() — that's an Array Methods trick, coming later. For
//    now we're only fixing the very first letter.)
//      const cleanStore = storeName.trim().toLowerCase();
//      const titleStore = cleanStore[0].toUpperCase() + cleanStore.slice(1);
//    Log: `Store: ${titleStore}`
//
// b) Clean customerName: same approach — trim, lowercase, capitalize
//    just the first letter.
//    Log: `Customer: ${titleCustomer}`
//
// c) Clean customerEmail: trim and lowercase.
//    Log: `Email: ${cleanEmail}`
//
// d) Clean discountCode: trim and uppercase.
//    Log: `Discount code: ${cleanCode}`

console.log("--- Task 1: Clean the Data ---");
// your code here

const cleanStore = storeName.trim().toLowerCase();
const titleStore = cleanStore[0].toUpperCase() + cleanStore.slice(1);

console.log(`Store: ${titleStore}`);

const cleanCustomer = customerName.trim().toLowerCase();
const titleCustomer = cleanCustomer[0].toUpperCase() + cleanCustomer.slice(1);

console.log(`Customer: ${titleCustomer}`);

const cleanEmail = customerEmail.trim().toLowerCase();

console.log(`Email: ${cleanEmail}`);

const cleanCode = discountCode.trim().toUpperCase(); //used toLowerCase() instead of toUpperCase() --- IGNORE ---

console.log(`Discount code: ${cleanCode}`);


// ----------------------------------------------------------
// TASK 2 — Convert prices to numbers
// ----------------------------------------------------------
// All three prices are strings. Convert them to numbers
// so you can do arithmetic.
//
// a) const price1 = parseFloat(item1Price);
//    Log: `${item1Name} price type before: ${typeof item1Price}`
//    Log: `${item1Name} price type after:  ${typeof price1}`
//
// b) Do the same for item2Price and item3Price.
//    Log the type before and after for each.
//
// c) Log all three prices to confirm they converted correctly.

console.log("\n--- Task 2: Convert Prices ---");
// your code here

const price1 = parseFloat(item1Price);

console.log(`${item1Name} price type before: ${typeof item1Price}`);
console.log(`${item1Name} price type after: ${typeof price1}`);

const price2 = parseFloat(item2Price);

console.log(`${item2Name} price type before: ${typeof item2Price}`);
console.log(`${item2Name} price type after: ${typeof price2}`);

const price3 = parseFloat(item3Price);

console.log(`${item3Name} price type before: ${typeof item3Price}`);
console.log(`${item3Name} price type after: ${typeof price3}`);

console.log(`${item1Name}: ${price1}`)
console.log(`${item2Name}: ${price2}`)
console.log(`${item3Name}: ${price3}`)


// ----------------------------------------------------------
// TASK 3 — Calculate line totals
// ----------------------------------------------------------
// A line total = price × quantity.
//
// a) const line1Total = price1 * item1Qty;
//    Log: `${item1Name} × ${item1Qty} = $${line1Total.toFixed(2)}`
//    (.toFixed(2) rounds to 2 decimal places and returns a string)
//
// b) Do the same for items 2 and 3.
//
// c) Calculate the subtotal (before tax):
//    const subtotal = line1Total + line2Total + line3Total;
//    Log: `Subtotal: $${subtotal.toFixed(2)}`
//
// Write a comment: why couldn't you calculate line1Total
// before converting item1Price to a number?

console.log("\n--- Task 3: Line Totals ---");
// your code here

const line1Total = price1 * item1Qty;
console.log(`${item1Name} x ${item1Qty} = $${line1Total.toFixed(2)}`);

const line2Total = price2 * item2Qty;
console.log(`${item2Name} x ${item2Qty} = $${line2Total.toFixed(2)}`);

const line3Total = price3 * item3Qty;
console.log(`${item3Name} x ${item3Qty} = $${line3Total.toFixed(2)}`); //used .tofixed(3) instead of .tofixed(2) --- IGNORE ---

const subtotal = line1Total + line2Total + line3Total;
console.log (`Subtotal: $${subtotal.toFixed(2)}`);

// Even though item1Price is a string it can be multiplied with item1Qty due to forced type coercion
// However, this won't occur for addition and the two variables will just conceatenate, so item1Price needs to be converted into a number

// ----------------------------------------------------------
// TASK 4 — Apply discount and tax
// ----------------------------------------------------------
// The SAVE10 code gives 10% off the subtotal.
//
// a) const discountAmount = subtotal * 0.10;
//    const discountedSubtotal = subtotal - discountAmount;
//    Log: `Discount (10%): -$${discountAmount.toFixed(2)}`
//    Log: `After discount: $${discountedSubtotal.toFixed(2)}`
//
// b) const taxAmount = discountedSubtotal * taxRate;
//    const grandTotal = discountedSubtotal + taxAmount;
//    Log: `Tax (8%): $${taxAmount.toFixed(2)}`
//    Log: `Grand Total: $${grandTotal.toFixed(2)}`
//
// c) Check if the discount code is valid:
//    const isValidCode = discountCode.trim().toUpperCase() === "SAVE10";
//    Log: `Discount code valid: ${isValidCode}`
//    (No if/else yet — just log the boolean value)

console.log("\n--- Task 4: Discount and Tax ---");
// your code here

const discountAmount = subtotal * 0.10;
const discountedSubtotal = subtotal - discountAmount;
console.log(`Discount (10%): -$${discountAmount.toFixed(2)}`);
console.log(`After discount: $${discountedSubtotal.toFixed(2)}`);

const taxAmount = discountedSubtotal * taxRate;
const grandTotal = discountedSubtotal + taxAmount;
console.log(`Tax (8%): $${taxAmount.toFixed(2)}`);
console.log(`Grand Total: $${grandTotal.toFixed(2)}`);

const isValidCode = discountCode.trim().toUpperCase() === "SAVE10";
console.log(`Discount code valid: ${isValidCode}`);

// ----------------------------------------------------------
// TASK 5 — Type checks and edge cases
// ----------------------------------------------------------
//
// a) Log the typeof each calculated total to confirm they're numbers:
//    Log: `typeof line1Total: ${typeof line1Total}`
//    Log: `typeof grandTotal: ${typeof grandTotal}`
//
// b) Check the orderStatus:
//    Log: `orderStatus: ${orderStatus}`
//    Log: `typeof orderStatus: ${typeof orderStatus}`
//    Log: `Boolean(orderStatus): ${Boolean(orderStatus)}`
//    Write a comment: what does null mean here in context?
//
// c) Demonstrate the coercion trap:
//    Log: `item1Price + item2Price = ${item1Price + item2Price}`
//    (The RAW strings, before converting — what do you get?)
//    Write a comment: why does this produce "79.9944.99"?

console.log("\n--- Task 5: Type Checks ---");
// your code here

console.log(`typeof line1Total: ${typeof line1Total}`);
console.log(`typeof grandTotal: ${typeof grandTotal}`);

console.log(`orderStatus: ${orderStatus}`); 
console.log(`typeof orderStatus: ${typeof orderStatus}`); // null - intentionally no value assigned
console.log(`Boolean(orderStatus): ${Boolean(orderStatus)}`);

console.log(`item1Price + item2Price = ${item1Price + item2Price}`);
// Since item1Price and item2Price are strings, addition of the two lead them to concatenate instead of adding numbers

// ----------------------------------------------------------
// TASK 6 — Build the receipt header
// ----------------------------------------------------------
// Use a multiline template literal to build a receipt header.
//
// const receiptHeader = `
// ================================
// ${titleStore}
// ================================
// Customer: ${titleCustomer}
// Email:    ${cleanEmail}
// Date:     ${orderDate}
// Code:     ${cleanCode}
// ================================`;
//
// Log receiptHeader.
//
// (Use the clean variables from Task 1)

console.log("\n--- Task 6: Receipt Header ---");
// your code here

const receiptHeader = `
${titleStore}

Customer: ${titleCustomer}
Email:    ${cleanEmail}
Date:     ${orderDate}
Code:     ${cleanCode}
`;

console.log(receiptHeader);

// ----------------------------------------------------------
// TASK 7 — Build the receipt body
// ----------------------------------------------------------
// Build the line items section as a multiline template literal.
//
// Format each line: "Item Name           x qty    $total"
// Use .padEnd() to align the columns:
//   item1Name.padEnd(20) pads the string to 20 characters with spaces
//   This makes all item names the same width for alignment
//
// const receiptBody = `
// ${item1Name.padEnd(22)}x${item1Qty}    $${line1Total.toFixed(2)}
// ${item2Name.padEnd(22)}x${item2Qty}    $${line2Total.toFixed(2)}
// ${item3Name.padEnd(22)}x${item3Qty}    $${line3Total.toFixed(2)}
// --------------------------------
// Subtotal:              $${subtotal.toFixed(2)}
// Discount (SAVE10 10%): -$${discountAmount.toFixed(2)}
// Tax (8%):              $${taxAmount.toFixed(2)}
// --------------------------------
// TOTAL:                 $${grandTotal.toFixed(2)}`;
//
// Log receiptBody.

console.log("\n--- Task 7: Receipt Body ---");
// your code here

const receiptBody = `
${item1Name.padEnd(22)}x${item1Qty}     $${line1Total.toFixed(2)}
${item2Name.padEnd(22)}x${item2Qty}     $${line2Total.toFixed(2)}
${item3Name.padEnd(22)}x${item3Qty}     $${line3Total.toFixed(2)}

Subtotal:                  $${subtotal.toFixed(2)}
Discount (SAVE10 10%):     -$${discountAmount.toFixed(2)}
Tax (8%):                  $${taxAmount.toFixed(2)}

TOTAL:                     $${grandTotal.toFixed(2)}
`;

console.log(receiptBody);

// ----------------------------------------------------------
// TASK 8 — Connect the dots: full receipt
// ----------------------------------------------------------
// Combine the header and body into one final receipt string.
//
// const fullReceipt = receiptHeader + receiptBody;
// Log fullReceipt.
//
// Then answer these as comments:
// Q1: What lesson taught you about the + operator? (Lesson 2)
// Q2: What lesson taught you to clean string data? (Lesson 3 — today)
// Q3: What would you need to learn to add a discount ONLY IF the
//     code is valid? (Conditionals — Lesson 4)
//
// The last question previews exactly where the curriculum goes next.

console.log("\n--- Task 8: Full Receipt ---");
// your code here

const fullReceipt = receiptHeader + receiptBody;
console.log(fullReceipt);

// Q1: The + operator concatenates if used with a string variable, but adds numbers together such as the "subtotal" variable in Task 3
// Q2: The tools used in Task 1 are used to clean up string data
//      .trim() removes blank spaces
//      .toLowerCase() and .toUpperCase() is used to make the string lowercase or uppercase used in conjunction with bracket notation to change specific letters
//      .slice(start, end) is used to extract a portion of the string
// Q3: the if funciton can be used to check if the code is valid

// ----------------------------------------------------------
// ⭐ STRETCH GOAL — receipt stats
// ----------------------------------------------------------
// Using only what you know (variables, operators, string methods):
//
// a) Count the total number of items (not products, but units):
//    const totalItems = item1Qty + item2Qty + item3Qty;
//    Log: `Total items: ${totalItems}`
//
// b) Find the most expensive item (without conditionals — just math):
//    const highestPrice = Math.max(price1, price2, price3);
//    Log: `Highest price: $${highestPrice.toFixed(2)}`
//    (Math.max() is a built-in that works like an operator here)
//
// c) Calculate the average item price:
//    const avgPrice = (price1 + price2 + price3) / 3;
//    Log: `Average price: $${avgPrice.toFixed(2)}`
//
// d) Check if the customer's email domain is "pixelgadgets.com":
//    const isInternalEmail = cleanEmail.endsWith("@pixelgadgets.com");
//    Log: `Internal customer: ${isInternalEmail}`

console.log("\n--- Stretch Goal - receipt stats ---");


const totalItems = item1Qty + item2Qty + item3Qty;
console.log(`Total items: ${totalItems}`);

const highestPrice = Math.max(price1, price2, price3);
console.log(`Highest price: $${highestPrice.toFixed(2)}`);

const avgPrice = (price1 + price2 + price3) / 3;
console.log(`Average price: $${avgPrice.toFixed(2)}`);

const isInternalEmail = cleanEmail.endsWith("@pixelgadgets.com");
console.log(`Internal customer: ${isInternalEmail}`);