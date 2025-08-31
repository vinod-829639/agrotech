document.addEventListener("DOMContentLoaded", function () {
    let chatContainer = document.getElementById("chat-container");
    let chatButton = document.getElementById("chat-toggle");

    // --- START OF API CONFIGURATION ---

    // ⚠️ IMPORTANT: REPLACE "YOUR_API_KEY" WITH YOUR ACTUAL GOOGLE AI STUDIO API KEY
    // This key is not secure in client-side code and should only be used for personal testing.
    const API_KEY = "AIzaSyC8p3gJ0twAOHb0ish_zXWGe1kSS8ZGQHI"; 
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

    // --- END OF API CONFIGURATION ---


    window.toggleChat = function () {
        if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
            chatContainer.style.display = "block"; // Open chat
            chatButton.style.display = "none"; // Hide chat button
        } else {
            chatContainer.style.display = "none"; // Close chat
            chatButton.style.display = "block"; // Show chat button
        }
    };

    window.clearChat = function () {
        document.getElementById("chat-box").innerHTML = ""; // Clears chat messages
    };

    async function sendMessage() {
        let userInput = document.getElementById("user-input").value.trim();
        let chatBox = document.getElementById("chat-box");

        if (userInput === "") return;

        // Append user message
        let userMessage = document.createElement("div");
        userMessage.classList.add("chat-bubble", "user-message");
        userMessage.textContent = userInput;
        chatBox.appendChild(userMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        document.getElementById("user-input").value = ""; // Clear input immediately

        showTypingAnimation();
        
        try {
            // Get the response from the new API function
            let botResponse = await getBotResponse(userInput);

            removeTypingAnimation();

            let botMessage = document.createElement("div");
            botMessage.classList.add("chat-bubble", "bot-message");
            // Use innerHTML to correctly render formatting like line breaks from the AI
            botMessage.innerHTML = botResponse; 
            chatBox.appendChild(botMessage);

        } catch (error) {
            removeTypingAnimation(); // Also remove typing animation on error
            console.error("Error:", error);
            let errorMessage = document.createElement("div");
            errorMessage.classList.add("chat-bubble", "bot-message");
            errorMessage.textContent = "Sorry, I'm having trouble connecting. Please check the API key or try again later.";
            chatBox.appendChild(errorMessage);
        } finally {
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    /**
     * This function is now powered by the Google AI API.
     * It sends the user's input along with company context to the AI model.
     */
    async function getBotResponse(input) {
        // Provide context to the AI about your company. This helps it answer questions accurately.
        const agrotechContext = `You are a friendly and helpful chatbot for a company named "Agrotech". 
        Here is some key information about Agrotech:
        - Mission: We are committed to delivering innovative agricultural solutions to empower farmers and ensure a sustainable future. We provide cutting-edge technologies and eco-friendly products to boost agricultural productivity.
        - What we do: We provide innovative agricultural solutions, including products like herbicides, insecticides, fungicides, and biopesticides. We also offer field visit services and tailored pest management solutions.
        - Location: We are located near SBI Bank, Devadurga Circle, Raichur Road, Sirwar.
        - Contact Info: Phone is +91 8296390210, Email is technology1@agrotech.com.
        - Collaborators: We work with leading companies like UPL Ltd., PI Industries Ltd., and Bayer CropScience Ltd.

        Based on this context, please answer the user's question. If the question is not related to Agrotech or agriculture, answer it as a general helpful assistant.

        User's question: "${input}"`;

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: agrotechContext // We send the combined context and question
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorDetails = await response.text();
            throw new Error(`API request failed with status ${response.status}: ${errorDetails}`);
        }

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0].content.parts[0].text) {
             throw new Error("Invalid response format from API.");
        }
      
        // Process the response to replace newlines with <br> tags for proper HTML rendering
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

