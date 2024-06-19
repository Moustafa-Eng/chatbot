document.getElementById("send-button").addEventListener("click", () => {
    const userInput = document.getElementById("user-input").value;
    document.getElementById("user-input").value = "";

    fetch("/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ input: userInput })
    })
    .then(response => response.json())
    .then(data => {
        const chatBox = document.getElementById("chat-box");
        const userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.textContent = data.response;
        chatBox.appendChild(botMessage);

        chatBox.scrollTop = chatBox.scrollHeight;
    });
});