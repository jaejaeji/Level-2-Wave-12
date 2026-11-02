
// Toggle Dark Mode Theme
function handleThemeToggle() {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    const themeBtn = document.getElementById("themeBtn");
}

document.getElementById("theme-btn").addEventListener("click", handleThemeToggle);

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

const allTransactionData = [];

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

    transactionData.forEach((key) => {
        const keyArray = [];
        keyArray.append(key);
        console.log(keyArray);
    });

    allTransactionData.push(transactionData);

    console.log(allTransactionData);

    createRow(allTransactionData);
})

const createRow = function(data){
    const li = document.createElement("li");
    li.append(data);
    document.getElementById("transactionRows").appendChild(li);
}



// Budget Value - Input

document.getElementById("inputBudget").addEventListener("submit", function(event){
    event.preventDefault();
    const budget = document.getElementById("budget").value;
    console.log(`budget: $${budget}`);
})

