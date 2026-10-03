// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

function renderBoardTitle() {
  const titleEl = document.querySelector("#board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// What's wrong ↓
// const titleEl = document.querySelector(".board-title"); This line uses the selector type for a class, should be #board-title instead for id


// Your fix ↓
// const titleEl = document.querySelector("#board-title");


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    // list.innerHTML = li.outerHTML;
    list.appendChild(li);
  });
}

renderTasks();

// What's wrong ↓
// list.innerHTML = li.outerHTML; This line replaces the list each iteration with the li DOM element

// Your fix ↓
// list.appendChild(li); We want to append the items in li to the list for each iteration
 


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  // for (let i = 0; i <= highCards.length; i++) {
  //   highCards[i].classList.add("highlighted");
  // }

  for (let i = 0; i < highCards.length; i++) {
    // const card = highCards[i].parentElement;
    const card = highCards[i].closest(".task-card");
    
    card.classList.add("highlighted");

  }
}

highlightTasks();

// Bug 1 ↓
// for (let i = 0; i <= highCards.length; i++) In this line the <= should be < so it doesn't include an array element/object that's out of range

// Bug 2 ↓
// Shows this error: Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
// .priority-high class doesn't exist in the HTML
// highCards[i].classList.add("highlighted"); This line tries adds the class "highlighted" to the span instead of the task list, so we need to move up to it's parent.


// Your fix ↓
// for (let i = 0; i < highCards.length; i++)
// Inside the for loop, replaced the original code with the following code:
    // const card = highCards[i].parentElement; // moves up a parent element
    // or
    // const card = highCards[i].closest(".task-card"); // moves up through parents until it finds element with class "task-card"

    
    // card.classList.add("highlighted");
