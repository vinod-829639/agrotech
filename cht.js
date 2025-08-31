document.addEventListener("DOMContentLoaded", function () {
    let chatContainer = document.getElementById("chat-container");
    let chatButton = document.getElementById("chat-toggle");

    // --- START OF API CONFIGURATION ---

    // ⚠️ STEP 1: Replace "YOUR_API_KEY" with your actual Google AI Studio API key.
    // This is the most common source of errors.
    const API_KEY = "AIzaSyCkmckckr5JYx82fbx6riwGe6xtLFLmjKE"; 
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

    // --- END OF API CONFIGURATION ---


    window.toggleChat = function () {
        if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
            chatContainer.style.display = "block";
            chatButton.style.display = "none";
        } else {
            chatContainer.style.display = "none";
            chatButton.style.display = "block";
        }
    };

    window.clearChat = function () {
        document.getElementById("chat-box").innerHTML = "";
    };

    async function sendMessage() {
        let userInput = document.getElementById("user-input").value.trim();
        let chatBox = document.getElementById("chat-box");

        if (userInput === "") return;

        let userMessage = document.createElement("div");
        userMessage.classList.add("chat-bubble", "user-message");
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        
        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;

        showTypingAnimation();
        
        try {
            let botResponse = await getBotResponse(userInput);
            removeTypingAnimation();

            let botMessage = document.createElement("div");
            botMessage.classList.add("chat-bubble", "bot-message");
            botMessage.innerHTML = botResponse; 
            chatBox.appendChild(botMessage);

        } catch (error) {
            removeTypingAnimation();
            console.error("Detailed Error:", error); // Logs the full error to the developer console (F12)
            
            let errorMessage = document.createElement("div");
            errorMessage.classList.add("chat-bubble", "bot-message");
            // Provide a more helpful error message to the user
            errorMessage.textContent = "Sorry, the connection failed. Please check the API key and make sure you are running this on a local server. (See browser console for details).";
            chatBox.appendChild(errorMessage);
        } finally {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    async function getBotResponse(input) {
        // This context helps the AI understand its role as an Agrotech chatbot.
        const agrotechContext = `You are a friendly and helpful chatbot for a company named "Agrotech". 
        - Company Mission: We provide innovative agricultural solutions to empower farmers and ensure a sustainable future.
        - Location: Near SBI Bank, Devadurga Circle, Raichur Road, Sirwar.
        - Contact: Phone is +91 8296390210, Email is contact@agrotech.in.
        - Important: If asked a question unrelated to Agrotech or farming, answer it as a general helpful assistant.

        User's question: "${input}"`;

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: agrotechContext }] }]
            })
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            // This makes the error more specific if the API itself returns a message
            throw new Error(`API Error: ${response.status} - ${errorDetails}`);
        }

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) {
             throw new Error("Invalid response format from API. The response might be blocked or empty.");
        }
      
        const botReply = data.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
        return botReply;
    }

    function showTypingAnimation() {
        let chatBox = document.getElementById("chat-box");
        let typingDiv = document.createElement("div");
        typingDiv.id = "typing";
        typingDiv.classList.add("chat-bubble", "bot-message");
        typingDiv.textContent = "Typing...";
        chatBox.appendChild(typingDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function removeTypingAnimation() {
        let typingDiv = document.getElementById("typing");
        if (typingDiv) typingDiv.remove();
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") sendMessage();
    }

    document.getElementById("user-input").addEventListener("keypress", handleKeyPress);
    window.sendMessage = sendMessage;
});


