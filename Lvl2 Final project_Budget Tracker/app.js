
// Toggle Dark Mode Theme
function handleThemeToggle() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    const themeBtn = document.getElementById("themeBtn");

    if (isDark) {
        themeBtn.textContent = "☀️ Light Mode";
        const darkMode = localStorage.setItem("darkMode", JSON.stringify(isDark));
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
        const darkMode = localStorage.setItem("darkMode", JSON.stringify(isDark));
    }
}

function loadTheme() {
    const isDark = JSON.parse(localStorage.getItem("darkMode"));

    if (isDark) {
        themeBtn.textContent = "☀️ Light Mode";
        document.body.classList.toggle("dark");
    } else {
        themeBtn.textContent = "🌙 Dark Mode";
    }
}

document.getElementById("themeBtn").addEventListener("click", handleThemeToggle);


// CONTACT FORM - Open/Close
const overlay = document.getElementById("overlay");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.getElementById("closeBtn");

function openForm() {overlay.classList.add("open");}

contactBtn.addEventListener("click", openForm);

function closeForm(event) {
    if (event.target === closeBtn || event.target === overlay){
        overlay.classList.remove("open");
    };
}

function closeFormEsc(event) {
    if (event.key === "Escape"){
        overlay.classList.remove("open");
    };
}

overlay.addEventListener("click", closeForm);
document.body.addEventListener("keydown", closeFormEsc);

// CONTACT FORM - Submit

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // stop browser from reloading page
    alert("Thanks! Nothing was actually sent, this is just a demo.");
});


// OVERVIEW DATA


const loadBalance = function(data){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    let totalIncome = 0;
    let totalSavings = 0;
    let totalExpenses = 0;

    if (savedTransactions !== null) {
        savedTransactions.forEach((data) => {
            if (data.type === "income") {
                return totalIncome += parseInt(data.amount);
            }
            if (data.type === "savings") {
                return totalSavings += parseInt(data.amount);
            }
            if (data.type === "expense") {
                return totalExpenses += parseInt(data.amount);
            }
        });

        const balance = totalIncome - totalExpenses;
        // console.log(totalIncome);
        // console.log(totalSavings);
        // console.log(totalExpenses);
        document.getElementById("balance-total").textContent = "$" + balance;
    } else {
        return;
    }
}

const loadIncome = function(data){ //need to add account for month
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    let income = 0;

    if (savedTransactions !== null) {
        savedTransactions.forEach((data) => {
            if (data.type === "income") {
                return income += parseInt(data.amount);
            }
        });

        document.getElementById("income-total").textContent = "$" + parseInt(income);

    } else {
        return;
    }
}

const loadSavings = function(data){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    let savings = 0;

    if (savedTransactions !== null) {
        savedTransactions.forEach((data) => {
            if (data.type === "savings") {
                return savings += parseInt(data.amount);
            }
        });

        document.getElementById("savings-total").textContent = "$" + parseInt(savings);
    } else {
        return;
    }
}

const loadExpenses = function(data){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    let expenses = 0;

    if (savedTransactions !== null) {
        savedTransactions.forEach((data) => {
            if (data.type === "expense") {
                return expenses += parseInt(data.amount);
            }
        });

        document.getElementById("currentExpenses").textContent = "Expenses: $" + parseInt(expenses);
        
    } else {
        return;
    }
}


const loadBudget = function(data){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));
    if (savedBudget !== null) {
        document.getElementById("currentBudget").textContent = "Budget: $" + savedBudget;
    } else {
        return;
    }
}

const loadBudgetLeft = function(data){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    let expenses = 0;

    if (savedBudget !== null && savedTransactions !== null) {
        savedTransactions.forEach((data) => {
            if (data.type === "expense") {
                return expenses += parseInt(data.amount);
            }
        });

        const budgetLeft = savedBudget - expenses;
        document.getElementById("budgetLeft").textContent = "Budget Left: $" + budgetLeft;
    } else {
        return;
    }
}



// RECENT TRANSACTIONS

const createRow = function(data){
    const dateEl = document.createElement("div");
    const typeEl = document.createElement("div");
    const descriptionEl = document.createElement("div");
    const categoryEl = document.createElement("div");
    const amountEl = document.createElement("div");

    dateEl.textContent = data.date;
    typeEl.textContent = data.type;
    descriptionEl.textContent = data.description;
    categoryEl.textContent = data.category;
    amountEl.textContent = "$" + data.amount;

    dateEl.classList.add("row2");
    typeEl.classList.add("row2");
    descriptionEl.classList.add("row2");
    categoryEl.classList.add("row2");
    amountEl.classList.add("row2");

    const divWrap = document.createElement("div");
    divWrap.classList.add("divWrap");

    divWrap.appendChild(dateEl);
    divWrap.appendChild(typeEl);
    divWrap.appendChild(descriptionEl);
    divWrap.appendChild(categoryEl);
    divWrap.appendChild(amountEl);

    document.getElementById("transactionRows").appendChild(divWrap);

}

const loadTransactions = function(){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    // console.log(savedTransactions);
    if (savedTransactions !== null) {
        savedTransactions.forEach((data) => createRow(data));
    } else {
        return;
    }
}

const loadData = function() {
    loadTheme();
    loadBalance();
    loadIncome();
    loadSavings();
    loadExpenses();
    loadBudget();
    loadBudgetLeft();
    loadTransactions();
}

loadData();


// Show Bar by Category
