
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

// CONTACT FORM - Data

let contactMessages = [];

loadMessages();

function pushMessages() {

    const nameInput = document.getElementById("name").value.trim();
    const emailInput = document.getElementById("email").value.trim();
    const messageInput = document.getElementById("message").value.trim();

    const errMessage = validateMessage(nameInput, emailInput, messageInput);
    if (errMessage.length > 0) {
        alert(errMessage.join("\n"));
        return errMessage;
    }

    contactMessages.push({ "date": Date.now(), "name": nameInput, "email": emailInput, "message": messageInput });

    return errMessage;
}

function validateMessage(name, email, message) {
    const errMessage = [];
    if (name === "") {
        errMessage.push("Please enter a name.");
    }
    if (!email.includes("@") || !email.includes(".") ) {
        errMessage.push('Email needs to be in the correct format (include a "@" and ".")');
    }
    if (message.length < 10) {
        errMessage.push("Message needs to be at least 10 characters.");
    }

    return errMessage;
}

function saveMessages(data, errMessage, event) {
    if (errMessage.length > 0) {
        return;
    }
    localStorage.setItem("messageData", JSON.stringify(data));
    console.log("Message data saved");
    alert("Message Sent!");
    event.target.reset()
}

function loadMessages() {
    const savedMessages = JSON.parse(localStorage.getItem("messageData"));
    if (savedMessages !== null) {
        contactMessages = savedMessages;
    }
}
// CONTACT FORM - Submit

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault(); // stop browser from reloading page
    const errMessage = pushMessages();
    saveMessages(contactMessages, errMessage, event);
});
