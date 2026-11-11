
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


// MONTH OVERVIEW DATA

const now = new Date();

const renderMonthTitle = function () {
    const monthName = now.toLocaleString("en-US", {month: "long"});
    document.getElementById("monthTitle").textContent = `${monthName} Overview`;
}

const getMonthPrefix = function() {
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const realMonth = String(currentMonth + 1).padStart(2, "0")
    return `${currentYear}/${realMonth}`;
}

const getMonthTransactions = function() {
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));

    if (savedTransactions === null){
        return [];
    }
    return savedTransactions.filter((data) => data.date.startsWith(getMonthPrefix()));
}


// LOAD DATA

function parseNum(num) {
    const toNum = parseFloat(num);
    return toNum.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2} );
}

const loadBalance = function(data){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));
    let totalIncome = 0;
    let totalSavings = 0;
    let totalExpenses = 0;

    if (savedTransactions !== null) {
        savedTransactions.forEach((data) => {
            if (data.type === "income") {
                return totalIncome += parseFloat(data.amount);
            }
            if (data.type === "savings") {
                return totalSavings += parseFloat(data.amount);
            }
            if (data.type === "expense") {
                return totalExpenses += parseFloat(data.amount);
            }
        });

        const balance = totalIncome - totalExpenses;
        // console.log(totalIncome);
        // console.log(totalSavings);
        // console.log(totalExpenses);
        document.getElementById("balance-total").textContent = "$" + parseNum(balance);
    } else {
        return;
    }
}

const loadIncome = function(){ //need to add account for month
    const savedTransactions = getMonthTransactions();

            const income = savedTransactions.reduce((acc, data) => {
                    if (data.type === "income") {
                        return acc + parseFloat(data.amount);
                    }
                    return acc;
        }, 0);
        document.getElementById("income-total").textContent = "$" + parseNum(income);
}

const loadSavings = function(data){
    const savedTransactions = JSON.parse(localStorage.getItem("transactionData"));

    if (savedTransactions !== null) {
            const savings = savedTransactions.reduce((acc, data) => {
                if (data.type === "savings") {
                    return acc + parseFloat(data.amount);
                }
                return acc;
            }, 0);
            document.getElementById("savings-total").textContent = "$" + parseNum(savings);
        } else {
            return;
        }
}

const loadExpenses = function(data){
    const savedTransactions = getMonthTransactions();
        const expenses= savedTransactions.reduce((acc, data) => {
            if (data.type === "expense") {
                return acc + parseFloat(data.amount);
            }
            return acc;
        }, 0);
        document.getElementById("currentExpenses").textContent = "Expenses: $" + parseNum(expenses);
}


const loadBudget = function(data){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));
    if (savedBudget !== null) {
        document.getElementById("currentBudget").textContent = "Budget: $" + parseNum(savedBudget);
    } else {
        return;
    }
}

const loadBudgetLeft = function(data){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));
    const savedTransactions = getMonthTransactions();

    if (savedBudget !== null && savedTransactions !== null) {
        const expenses= savedTransactions.reduce((acc, data) => {
            if (data.type === "expense") {
                return acc + parseFloat(data.amount);
            }
            return acc;
        }, 0);

        const budgetLeft = savedBudget - expenses;
        document.getElementById("budgetLeft").textContent = "Budget Left: $" + parseNum(budgetLeft);
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
    amountEl.textContent = "$" + parseNum(data.amount);

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
        savedTransactions.sort((a, b) => b.date.localeCompare(a.date));
        savedTransactions.slice(0, 7).forEach((data) => createRow(data));
    } else {
        return;
    }
}


// Show Bar by Category

const loadCat = function(){
    const categories = {housing: 0, bills: 0, food: 0, health: 0, transport: 0, entertainment: 0, other: 0};


    const savedTransactions = getMonthTransactions();
   
    if (savedTransactions === null) {
        return categories;
    }

    savedTransactions.forEach((data) => {
            if (data.type === "expense") {
                categories[data.category] += parseFloat(data.amount);
            }
    });

    return categories;
}


// console.log(loadCat());


const renderBudgetBar = function(){
    const savedBudget = JSON.parse(localStorage.getItem("budgetData"));


    const totals = loadCat();
    let totalExpense = Object.values(totals).reduce((acc, value) => acc + value, 0);


    const percent = totalExpense / savedBudget * 100;


    if (totalExpense === 0 || savedBudget === null) {
        return;
    }


    if (percent > 100) {
        document.getElementById("budgetBar").style.background = "red";
    }
    document.getElementById("budgetBar").style.width = Math.min(percent, 100) + "%";


    // console.log(savedBudget);
}


const renderCategoryBars = function(){
    const totals = loadCat();


    let totalExpense = Object.values(totals).reduce((acc, value) => acc + value, 0);

    // console.log(totalExpense);

    const percent = {};

    if (totalExpense === 0) {
        return;
    }

    for(const category in totals){
        percent[category] = totals[category] / totalExpense * 100;
        document.getElementById(`${category}Bar`).style.width = percent[category] + "%";
        document.getElementById(`${category}Spent`).textContent = `${category.toUpperCase()}: $${parseNum(totals[category])}`;
    }

    // console.log(percent);
}

// CURRENCY API

let rates = [];

async function safeFetch(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        if (err.response && err.response.status === 404) {
            alert("❌ Currency Rates Page not found");
        } else if (err.response && err.response.status === 403) {
            alert("❌ You don't have permisison to access this server")
        } else if (err.response) {
            alert(`❌ Request failed: ${err.response.status}`);
        } else {
            alert(`❌ Network Error: ${err.message}`)
        }
    }

    return [];
}

async function loadFetch() {
    rates = await safeFetch("https://api.frankfurter.dev/v2/rates");
}

function findCurrency(currencyNum, currencyFrom, currencyTo) {
    const result = document.getElementById("currencyResult");

    if (rates.length === 0) {
        result.textContent = "Rates unavailable"
        return
    }
    const foundFrom = rates.find((item) => {
        return item["quote"] === currencyFrom;
    })


    const foundTo = rates.find((item) => {
        return item["quote"] === currencyTo;
    })


    const currencyRate = currencyNum * foundTo["rate"] / foundFrom["rate"];

    // usd/eur *From
    // krw/eur *To
    // Rate = (krw/eur) / (usd/eur) = krw/usd = To/From

    // console.log(foundFrom);
    // console.log(foundTo);
    // console.log(currencyRate.toFixed(2));

    result.textContent = parseNum(currencyRate);

    return currencyRate
}


function swapCurrency() {
    const currencyNum = document.getElementById("fromInput").value;
    let currencyFrom = document.getElementById("currencyFrom").value;
    let currencyTo = document.getElementById("currencyTo").value;

    [currencyFrom, currencyTo] = [currencyTo, currencyFrom]

    document.getElementById("currencyFrom").value = currencyFrom;
    document.getElementById("currencyTo").value = currencyTo;
    // console.log(currencyFrom, currencyTo)
    findCurrency(currencyNum, currencyFrom, currencyTo);
}



const currencyInput = function(){
    const currencyNum = document.getElementById("fromInput").value;
    const currencyFrom = document.getElementById("currencyFrom").value;
    const currencyTo = document.getElementById("currencyTo").value;
    findCurrency(currencyNum, currencyFrom, currencyTo);
}

document.getElementById("convertBtn").addEventListener('click', currencyInput)
document.getElementById("reverseBtn").addEventListener('click', swapCurrency)


function loadData() {
    loadTheme();
    loadBalance();
    loadIncome();
    loadSavings();
    loadExpenses();
    loadBudget();
    loadBudgetLeft();
    loadTransactions();
    renderMonthTitle();

    renderBudgetBar();
    renderCategoryBars();
    loadFetch();
}

loadData();