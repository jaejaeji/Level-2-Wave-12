
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


// Transaction Values - Input

let allTransactionData = [];

const getTransactions = JSON.parse(localStorage.getItem("transactionData"));
if (getTransactions !== null) {
    allTransactionData = getTransactions;
}

document.getElementById("inputTransaction").addEventListener("submit", function(event){
    event.preventDefault();
    const type = document.getElementById("type").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const category = document.getElementById("category").value;
    const amount = document.getElementById("amount").value;

    
    const transactionData = {
        id: Date.now(),
        type: type,
        date: date,
        description: description,
        category: category,
        amount: amount
    };

    createRow(transactionData);

    allTransactionData.push(transactionData);
    saveTransactions(allTransactionData);
    // console.log(allTransactionData);

})

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

const saveTransactions = function(data){
    const savedTransactions = localStorage.setItem("transactionData", JSON.stringify(data));
    console.log("Transaction data saved");
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


// Budget Value - Input

document.getElementById("inputBudget").addEventListener("submit", function(event){
    event.preventDefault();
    const budget = document.getElementById("budget").value;
    // console.log(`budget: $${budget}`);

    document.getElementById("currentBudget").textContent = budget;

    saveBudget(budget);
})

const saveBudget = function(data){
    const savedBudget = localStorage.setItem("budgetData", JSON.stringify(data));
    console.log("Budget data saved");
}

const loadBudget = function(data){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));
    // console.log(savedBudget);
    if (savedBudget !== null) {
        document.getElementById("currentBudget").textContent = savedBudget;
    } else {
        return;
    }
}


const loadData = function(){
    loadTheme();
    loadTransactions();
    loadBudget();
}

loadData();

// Clear Data

document.getElementById("clear-data").addEventListener("click", function(event){
    // localStorage.clear();

    localStorage.removeItem("transactionData");
    localStorage.removeItem("budgetData");

    window.location.reload();
    console.log("localStorage is cleared")

})

// Show Transactions by Type Tab

const loadType = function(type){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));

    if (savedTransactions !== null) {
        const filteredTransactions = savedTransactions.filter((transaction) => {
            return transaction.type === type;
        })

        filteredTransactions.forEach((data) => createRow(data));

        console.log(filteredTransactions);
    }
}

document.getElementById("allTab").addEventListener("click", function(event){
    event.preventDefault();

    const transRows = document.getElementById("transactionRows");
    transRows.innerHTML = "";

    loadTransactions();
})

document.getElementById("expensesTab").addEventListener("click", function(event){
    event.preventDefault();

    const transRows = document.getElementById("transactionRows");
    transRows.innerHTML = "";

    loadType("expense");
})

document.getElementById("incomeTab").addEventListener("click", function(event){
    event.preventDefault();

    const transRows = document.getElementById("transactionRows");
    transRows.innerHTML = "";

    loadType("income");
})

document.getElementById("savingsTab").addEventListener("click", function(event){
    event.preventDefault();

    const transRows = document.getElementById("transactionRows");
    transRows.innerHTML = "";

    loadType("savings");
})


// function