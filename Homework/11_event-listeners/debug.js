// ============================================================
// 🐛  EVENT LISTENERS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> for <script src="debug.js">
// in index.html.
// ============================================================


// Adding card for testing functions ↓

const tasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  }
]

function createTaskCard(task) {
  const li = document.createElement("li");
  li.classList.add("task-card");
  li.dataset.id = task.id;
  li.dataset.priority = task.priority;

  const title = document.createElement("p");
  title.classList.add("task-title");
  title.textContent = task.title;

  const meta = document.createElement("div");
  meta.classList.add("task-meta");

  const prioritySpan = document.createElement("span");
  prioritySpan.classList.add("priority-" + task.priority);
  prioritySpan.textContent = task.priority.toUpperCase();

  const assigneeSpan = document.createElement("span");
  assigneeSpan.textContent = "👤 " + task.assignee;

  const actions = document.createElement("div");
  actions.classList.add("card-actions");
  
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.textContent = "✅ Complete";

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-btn");
  removeBtn.textContent = "🗑️ Remove";

  meta.appendChild(prioritySpan);
  meta.appendChild(assigneeSpan);
  actions.appendChild(completeBtn);
  actions.appendChild(removeBtn);
  
  li.appendChild(title);
  li.appendChild(meta);
  li.appendChild(actions);

  if (task.status === "done") {
    li.classList.add("completed");
  } 

  return li;
}

document.getElementById("list-todo").appendChild(createTaskCard(tasks[0]));


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// Clicking "Add Task" should log the title.
// Instead it logs the title immediately when the page loads,
// then does nothing when you click. What's wrong?

// function logTitle() {
//   const title = document.getElementById("task-title-input").value;
//   console.log("Title: " + title);
// }

// document.getElementById("add-task-btn")
//   .addEventListener("click", logTitle());

// What's wrong ↓
// logTitle() calls the function right away. The function needs to be written without '()' so it passes when clicked

// Your fix ↓
function logTitle() {
  const title = document.getElementById("task-title-input").value;
  console.log("Title: " + title);
}

document.getElementById("add-task-btn")
  .addEventListener("click", logTitle);


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should hide/show task cards based on priority filter.
// Clicking "High" hides all tasks instead of showing only high ones.
// What's wrong with the condition?

// function handleFilter(event) {
//   const filter  = event.target.dataset.filter;
//   const allCards = document.querySelectorAll(".task-card");

//   allCards.forEach(function(card) {
//     if (card.dataset.priority !== filter) {
//       card.classList.remove("hidden");
//     } else {
//       card.classList.add("hidden");
//     }
//   });
// }

// document.querySelector(".header-right")
//   .addEventListener("click", handleFilter);

// What's wrong ↓

// In the if statement, the !== comparison should be === instead
// We want to remove the "hidden" class (which hides the card) when the priority key value matches the filter constant (event.target.dataset.filter corresponds to the text value of the clicked button)

// Your fix ↓

function handleFilter(event) {
  const filter  = event.target.dataset.filter;
  const allCards = document.querySelectorAll(".task-card");

  allCards.forEach(function(card) {
    if (card.dataset.priority === filter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.querySelector(".header-right")
  .addEventListener("click", handleFilter);


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This delegation handler should remove a task card when
// its Remove button is clicked. Nothing happens when clicked.
// There are TWO bugs.

// function handleBoardClick(event) {
//   const card   = event.target.closest(".task-card");
//   const taskId = card.dataset.id;

//   if (event.target.classList.contains("remove-btn")) {
//     card.remove();
//   }
// }

// document.querySelector(".board")
//   .addEventListener("click", handleBoardClick);

// Bug 1 ↓
// for const taskId, use parseInt(card.dataset.id) instead to change strings to integers
// Also, there were no cards to render. A task card was added in the beginning of debug.js

// Bug 2 ↓
// console error: Uncaught TypeError: Cannot read properties of null (reading 'dataset')
// returns null when clicking empty board space. .closest returns null when it finds nothing
// a null guard was added so taskId doesn't error out


// Your fix ↓

function handleBoardClick(event) {
  const card   = event.target.closest(".task-card");

  if (!card) {
    return;
  }

  const taskId = parseInt(card.dataset.id);

  if (event.target.classList.contains("remove-btn")) {
    card.remove();
  }
}

document.querySelector(".board")
  .addEventListener("click", handleBoardClick);
