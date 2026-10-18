// ============================================================
// 🏠  localStorage — HOMEWORK
// ============================================================
// Mini Project: Persistent Task Board
//
// The Task Board from Event Listeners — now with persistence.
// Every change is saved to localStorage automatically.
// Refreshing the page restores exactly where the user left off.
//
// STORAGE KEY: "taskBoardData"
// Store the full tasks array under this key.
// ============================================================


// ============================================================
// DEFAULT TASKS — used only when nothing is saved yet
// ============================================================
const defaultTasks = [
  {
    id: 1,
    title: "Design landing page",
    assignee: "Alex",
    priority: "high",
    status: "todo",
  },
  {
    id: 2,
    title: "Set up project repo",
    assignee: "Sofia",
    priority: "high",
    status: "done",
  },
  {
    id: 3,
    title: "Write API docs",
    assignee: "Liam",
    priority: "medium",
    status: "inprogress",
  },
  {
    id: 4,
    title: "Fix login bug",
    assignee: "Alex",
    priority: "high",
    status: "inprogress",
  },
  {
    id: 5,
    title: "Add dark mode",
    assignee: "Maya",
    priority: "low",
    status: "todo",
  },
];


// This is your working tasks array — start it empty.
// loadTasks() will fill it from localStorage (or from defaultTasks).
let tasks = [];


// ----------------------------------------------------------
// TASK 1 — saveTasks
// ----------------------------------------------------------
// Declare a function called saveTasks.
// No parameters.
//
// Inside:
//   1. Save tasks to localStorage:
//      localStorage.setItem("taskBoardData", JSON.stringify(tasks))
//
//   2. Flash the save indicator:
//      Select #save-indicator
//      Add class "visible"
//      After 1500ms, remove class "visible":
//        setTimeout(function() {
//          saveIndicator.classList.remove("visible");
//        }, 1500);
//
// This function will be called after EVERY change.


function saveTasks() {
    localStorage.setItem("taskBoardData", JSON.stringify(tasks));

    const saveIndicator = document.getElementById("save-indicator");
    saveIndicator.classList.add("visible");
    setTimeout(function() {
         saveIndicator.classList.remove("visible");
    }, 1500);
}


// ----------------------------------------------------------
// TASK 2 — loadTasks
// ----------------------------------------------------------
// Declare a function called loadTasks.
// No parameters. Returns nothing — populates the tasks array.
//
// Inside:
//   1. const raw = localStorage.getItem("taskBoardData")
//
//   2. IF raw is null (nothing saved yet):
//      Set tasks = [...defaultTasks]  (copy the defaults)
//      Call saveTasks() to save them immediately
//      Return early
//
//   3. ELSE:
//      Set tasks = JSON.parse(raw)
//
// ⚠️  Always check for null before parsing.


function loadTasks() {
    const raw = localStorage.getItem("taskBoardData");

    if (raw === null) {
        tasks = [...defaultTasks]; // [...array] is the spread operator; unpacks every item out of an array
        saveTasks();
        return;
    } else {
     tasks = JSON.parse(raw);
    }

}


// ----------------------------------------------------------
// TASK 3 — createTaskCard (returns a DOM element)
// ----------------------------------------------------------
// Carried from Event Listeners — same structure, restated here
// so you don't have to flip back to that file.
// Parameter: task (object)
//
// Build and return a <li> with:
//   1. class "task-card"
//      dataset.id = task.id
//      dataset.priority = task.priority
//   2. A title <p class="task-title"> — textContent: task.title
//   3. A meta <div class="task-meta"> with two spans:
//      a) priority span — textContent: task.priority.toUpperCase()
//         add class: "priority-" + task.priority
//         (e.g. class="priority-high" for high priority)
//      b) assignee span — textContent: "👤 " + task.assignee
//   4. An actions <div class="card-actions"> with two buttons:
//      a) <button class="complete-btn"> textContent: "✅ Complete"
//      b) <button class="remove-btn">   textContent: "🗑️ Remove"
//   5. If task.status === "done" → add class "completed" to the <li>
//   6. Append title, meta, and actions to the <li>
//
// Return the <li> — do NOT append it here.


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

    const priority = document.createElement("span");
    priority.textContent = task.priority.toUpperCase();
    priority.classList.add("priority-" + task.priority);

    const assignee = document.createElement("span");
    assignee.textContent = "👤 " + task.assignee;

    meta.appendChild(priority);
    meta.appendChild(assignee);

    const actions = document.createElement("div");
    actions.classList.add("card-actions");

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.textContent = "✅ Complete";

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-btn");
    removeBtn.textContent = "🗑️ Remove";

    actions.appendChild(completeBtn);
    actions.appendChild(removeBtn);

    if (task.status === "done") {
        li.classList.add("completed");
    }

    li.appendChild(title);
    li.appendChild(meta);
    li.appendChild(actions);

    return li;
}


// ----------------------------------------------------------
// TASK 4 — renderBoard + updateCounts
// ----------------------------------------------------------
// Declare a function called renderBoard.
// No parameters — uses the global tasks array.
//
// Clear all three lists (innerHTML = "").
// Loop through tasks, call createTaskCard, append to correct list.
// Call updateCounts() after.
//
// ---
// Declare a function called updateCounts.
// No parameters.
//
// Use filter to get four groups from the tasks array:
//   done        → status === "done"
//   pending     → status !== "done"
//   todo        → status === "todo"
//   inprogress  → status === "inprogress"
//
// Set textContent on six elements:
//   #task-count       → tasks.length + " tasks"
//   #completed-count  → "✅ " + done.length + " done"
//   #pending-count    → "⏳ " + pending.length + " pending"
//   #count-todo       → todo.length          (just the number — no label)
//   #count-inprogress → inprogress.length    (just the number — no label)
//   #count-done       → done.length          (just the number — no label)


function updateCounts() {
    const done = tasks.filter((task) => task.status === "done");
    const pending = tasks.filter((task) => task.status !== "done");
    const todo = tasks.filter((task) => task.status === "todo");
    const inprogress = tasks.filter((task) => task.status === "inprogress");

    document.getElementById("task-count").textContent = tasks.length + " tasks";
    document.getElementById("completed-count").textContent = "✅ " + done.length + " done";
    document.getElementById("pending-count").textContent = "⏳ " + pending.length + " pending";
    document.getElementById("count-todo").textContent = todo.length;
    document.getElementById("count-inprogress").textContent = inprogress.length;
    document.getElementById("count-done").textContent = done.length;
}


function renderBoard() {
    const done = document.getElementById("list-done");
    const todo = document.getElementById("list-todo");
    const inprogress = document.getElementById("list-inprogress");

    done.innerHTML = "";
    todo.innerHTML = "";
    inprogress.innerHTML = "";

    tasks.forEach((task) => {
        const newCard = createTaskCard(task);
        const li = document.getElementById("list-" + task.status);
        li.append(newCard);
    });

    updateCounts();
    applyFilter(loadFilter());
    
}


// ----------------------------------------------------------
// TASK 5 — handleAddTask
// ----------------------------------------------------------
// Declare a function called handleAddTask.
//
// Inside:
//   1. Read the four input values:
//      - #task-title-input    (.value.trim())
//      - #task-assignee-input (.value.trim())
//      - #task-priority-input (.value)
//      - #task-status-input   (.value)
//   2. If title is empty → return early
//   3. Create a new task object:
//      { id: Date.now(), title,
//        assignee: assignee || "Unassigned",
//        priority, status }
//      ⚠️ The assignee fallback matters — an empty assignee field
//         would otherwise render as "👤 " with nothing after it.
//   4. Push to tasks array
//   5. Call saveTasks()     ← persist immediately
//   6. Call renderBoard()   ← update the view
//   7. Clear title and assignee inputs
//
// Wire it up:
//   document.getElementById("add-task-btn")
//     .addEventListener("click", handleAddTask)


function handleAddTask() {
  const title = document.getElementById("task-title-input").value.trim();
  const assignee = document.getElementById("task-assignee-input").value.trim();
  const priority = document.getElementById("task-priority-input").value;
  const status = document.getElementById("task-status-input").value;


  if (title === "") {
    return;
  }


  const newTask = {
    id: Date.now(),
    title,
    assignee: assignee || "Unassigned",
    priority,
    status
  };

  tasks.push(newTask);

  saveTasks();
  renderBoard();

  document.getElementById("task-title-input").value = "";
  document.getElementById("task-assignee-input").value = "";
}


document
  .getElementById("add-task-btn")
  .addEventListener("click", handleAddTask);


// ----------------------------------------------------------
// TASK 6 — handleBoardClick (delegation for complete + remove)
// ----------------------------------------------------------
// Declare a function called handleBoardClick.
// Parameter: event
//
// Use event.target.closest(".task-card") to get the card.
// Guard: if no card → return.
//
// Get taskId: parseInt(card.dataset.id)
// Find the task in tasks using find.
//
// IF complete button clicked:
//   - Update task.status = "done" in the array
//   - Call saveTasks()
//   - Call renderBoard()
//
// IF remove button clicked:
//   - Remove from tasks: tasks.splice(tasks.findIndex(...), 1)
//   - Call saveTasks()
//   - Call renderBoard()
//
// Wire it up to document.querySelector(".board")


function handleBoardClick(event) {
  const card = event.target.closest(".task-card");
  if (card === null) {
    return;
  }

  const taskId = parseInt(card.dataset.id);


  const task = tasks.find((task) => {
    return taskId === task.id;
  })

  // console.log(task);

  if (event.target.classList.contains("complete-btn")){
    task.status = "done"
    saveTasks();
    renderBoard();
  }
  if (event.target.classList.contains("remove-btn")){

    const index = tasks.findIndex((task) => {
    return taskId === task.id;
    })
    console.log(index);
    tasks.splice(index, 1);
    saveTasks();
    renderBoard();
  }

}


document.querySelector(".board").addEventListener("click", handleBoardClick);


// ----------------------------------------------------------
// TASK 7 — handleClearAll
// ----------------------------------------------------------
// Declare a function called handleClearAll.
//
// Inside:
//   1. Confirm the user wants to clear:
//      if (!confirm("Clear all tasks? This cannot be undone.")) return;
//   2. Clear localStorage: localStorage.removeItem("taskBoardData")
//   3. Reset tasks: tasks = [...defaultTasks]
//   4. Call saveTasks() to save the defaults
//   5. Call renderBoard()
//
// Wire it up:
//   document.getElementById("clear-btn")
//     .addEventListener("click", handleClearAll)


function handleClearAll() {
  if (!confirm("Clear all tasks? This cannot be undone.")) {
    return;
  }

  localStorage.removeItem("taskBoardData");
  localStorage.removeItem("taskFilter");
  // tasks = [...defaultTasks];
  tasks = defaultTasks.map((task) => ({...task})); // copies each default task into a new object so defaultTask stays untouched.


  saveTasks();
  renderBoard();
  
  const savedFilter = loadFilter();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
  if (btn.dataset.filter === savedFilter) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
  });
}


document.getElementById("clear-btn").addEventListener("click", handleClearAll);


// ----------------------------------------------------------
// TASK 8 — init
// ----------------------------------------------------------
// Declare a function called init.
// Inside:
//   1. Call loadTasks()    ← loads from localStorage or defaults
//   2. Call renderBoard()  ← renders whatever loadTasks set up
//
// Call init() at the bottom.


function init() {
  loadTasks();
  renderBoard();
  const savedFilter = loadFilter();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
  if (btn.dataset.filter === savedFilter) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
  });

// applyFilter(savedFilter);

}


// ----------------------------------------------------------
// ⭐ STRETCH GOAL — persist filter preference
// ----------------------------------------------------------
// The board currently loses the active filter on refresh.
// Add persistence for the current filter setting.
//
// Declare a function called saveFilter.
// Parameter: filterValue (string)
// Saves: localStorage.setItem("taskFilter", filterValue)
//
// Declare a function called loadFilter.
// Returns the saved filter or "all" as default:
//   return localStorage.getItem("taskFilter") || "all"
//
// In your filter click handler:
//   - After applying the filter, call saveFilter(filterValue)
//
// In init():
//   - After renderBoard(), call:
//       const savedFilter = loadFilter()
//       Apply the saved filter (update active button + show/hide cards)
//
// Write a comment: what other UI state might be worth persisting?


// ============================================================
// START
function saveFilter(filterValue) {
  localStorage.setItem("taskFilter", filterValue);
}

function loadFilter() {
  return localStorage.getItem("taskFilter") || "all";
}

function handleFilterClick(event) {
  const filterBtn = event.target.closest(".filter-btn"); // Goes up the family tree of elements and finds "filter-btn" class
  if (filterBtn === null) { // null guard; returns if "filter-btn" isn't found
    return;
  }

  console.log(filterBtn.dataset.filter); 
  applyFilter(filterBtn.dataset.filter); // each button is assigned a dataset.filter, which is applied in the applyfilter funciton

  document.querySelectorAll(".filter-btn").forEach((btn) => { // removes "active" class from each filter button
    btn.classList.remove("active");
  });

    filterBtn.classList.add("active"); // adds "active" class to clicked filter button


  saveFilter(filterBtn.dataset.filter); // saves filter to local storage

}

  function applyFilter(filterValue){ // Goes through each task card and applies filter by priority clicked
    document.querySelectorAll(".task-card").forEach((card) => {
      if (filterValue === "all" || filterValue === card.dataset.priority) {
        card.style.display = "";
      } else {
          card.style.display = "none";
      }
    })
}

document.getElementById("filter-bar").addEventListener("click", handleFilterClick);


// Added filter buttons to the HTML and CSS with class "filter-btn"
// Some other UI states worth adding would be a dark theme and saving input status


// ============================================================
init();



