
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
