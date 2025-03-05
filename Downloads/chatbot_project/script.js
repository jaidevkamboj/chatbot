const botResponses = {
    "hi": "Hello! How can I assist you today?",
    "how are you": "I'm a bot, but I'm functioning as expected!",
    "bye": "Goodbye! Have a great day!",
    "default": "I'm sorry, I don't understand that."
};

function sendMessage() {
    const userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    appendMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    const botReply = botResponses[userInput.toLowerCase()] || botResponses["default"];
    setTimeout(() => appendMessage(botReply, "bot"), 500);
}

function appendMessage(text, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}`;
    messageElement.innerHTML = `<div class="text">${text}</div>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
