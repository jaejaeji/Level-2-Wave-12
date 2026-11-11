
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


// Transaction Values - Input

function parseNum(num) {
    const toNum = parseFloat(num);
    return toNum.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2} );
}

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

    allTransactionData.push(transactionData);
    saveTransactions(allTransactionData);
    // console.log(allTransactionData);

    renderTransaction(filters);

    event.target.reset();

})

const createRow = function(data){
    const dateEl = document.createElement("div");
    const typeEl = document.createElement("div");
    const descriptionEl = document.createElement("div");
    const categoryEl = document.createElement("div");
    const amountEl = document.createElement("div");
    const deleteBtn = document.createElement("button");

    dateEl.textContent = data.date;
    typeEl.textContent = data.type;
    descriptionEl.textContent = data.description;
    categoryEl.textContent = data.category;
    amountEl.textContent = "$" + parseNum(data.amount);
    deleteBtn.textContent = "✕";

    dateEl.classList.add("row2");
    typeEl.classList.add("row2");
    descriptionEl.classList.add("row2");
    categoryEl.classList.add("row2");
    amountEl.classList.add("row2");
    deleteBtn.classList.add("deleteBtn");

    const divWrap = document.createElement("div");
    divWrap.classList.add("divWrap");

    divWrap.appendChild(dateEl);
    divWrap.appendChild(typeEl);
    divWrap.appendChild(descriptionEl);
    divWrap.appendChild(categoryEl);
    divWrap.appendChild(amountEl);
    divWrap.appendChild(deleteBtn);

    document.getElementById("transactionRows").appendChild(divWrap);

    function deleteTransaction() {
        const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
        const filtered = savedTransactions.filter((savedData) => savedData.id !== data.id);
        allTransactionData = filtered;
        saveTransactions(filtered);
        renderTransaction(filters);
    };

    deleteBtn.addEventListener("click", deleteTransaction)

}

const saveTransactions = function(data){
    localStorage.setItem("transactionData", JSON.stringify(data));
    console.log("Transaction data saved");
}

// const loadTransactions = function(){
//     const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
//     // console.log(savedTransactions);
//     if (savedTransactions === null) {
//         return;
//     } else if (savedTransactions !== null) {
//         savedTransactions.forEach((data) => createRow(data));
//     } else {
//         return;
//     }
// }


// Budget Value - Input

document.getElementById("inputBudget").addEventListener("submit", function(event){
    event.preventDefault();
    const budget = document.getElementById("budget").value;
    // console.log(`budget: $${budget}`);

    document.getElementById("currentBudget").textContent = parseNum(budget);

    saveBudget(budget);

    event.target.reset();

})

const saveBudget = function(data){
    const savedBudget = localStorage.setItem("budgetData", JSON.stringify(data));
    console.log("Budget data saved");
}

const loadBudget = function(data){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));
    // console.log(savedBudget);
    if (savedBudget !== null) {
        document.getElementById("currentBudget").textContent = parseNum(savedBudget);
    } else {
        return;
    }
}




// Clear Data

document.getElementById("clear-data").addEventListener("click", function(event){
    // localStorage.clear();

    localStorage.removeItem("transactionData");
    localStorage.removeItem("budgetData");
    localStorage.removeItem("messageData");


    window.location.reload();
    console.log("localStorage is cleared")

})

// Transaction filter

const filters = {type: "all", category:"all", dateFrom:"", dateTo:"9999/99/99"};


const renderTransaction = function(filter) {
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));

    if (savedTransactions === null) {
        return;
    }
    const filteredTransactions = savedTransactions.filter((transaction) => {
        return (filter.type === "all" || transaction.type === filter.type) && 
        (filter.category === "all" || transaction.category === filter.category) && 
        (transaction.date >= filter.dateFrom && transaction.date <= filter.dateTo);
    })

    filteredTransactions.sort((a, b) => b.date.localeCompare(a.date));

    const transRows = document.getElementById("transactionRows");
    transRows.innerHTML = "";
    
    filteredTransactions.forEach((data) => createRow(data));
}


document.getElementById("typeTabs").addEventListener("click", function(event){
    event.preventDefault();

    if (!event.target.value){
        return;
    }

    filters.type = event.target.value;
    renderTransaction(filters);
})


document.getElementById("catFilter").addEventListener("change", function(event){
    event.preventDefault();

    if (!event.target.value){
        return;
    }

    filters.category = event.target.value;
    // console.log(filters);
    renderTransaction(filters);

})

document.getElementById("filterBtn").addEventListener("click", (event) => {
    event.preventDefault();

    const dateFrom = document.getElementById("dateFrom").value.trim();
    let dateTo = document.getElementById("dateTo").value.trim();

    if(dateTo === "") {
        dateTo = "9999/99/99";
    } else if(dateFrom > dateTo) {
        alert("End date should be later than the start date.");
        return;
    }

    filters.dateFrom = dateFrom;
    filters.dateTo = dateTo;
    // console.log(filters);
    // console.log(dateFrom, dateTo);
    renderTransaction(filters);
})



const loadData = function(){
    loadTheme();
    // loadTransactions();
    loadBudget();
    renderTransaction(filters);
}

loadData();