document.addEventListener("DOMContentLoaded", function () {
    let chatContainer = document.getElementById("chat-container");
    let chatButton = document.getElementById("chat-toggle");

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

        showTypingAnimation();

        let botResponse = await getBotResponse(userInput);

        removeTypingAnimation();

        let botMessage = document.createElement("div");
        botMessage.classList.add("chat-bubble", "bot-message");
        botMessage.innerHTML = botResponse;
        chatBox.appendChild(botMessage);

        document.getElementById("user-input").value = "";
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    async function getBotResponse(input) {
        input = input.toLowerCase();

        // Simple Responses (Modify as needed)
        if (input.includes("hello") || input.includes("hi")) return "Hello! How can I assist you today? 😊";
        if (input.includes("bye")) return "Goodbye! Have a great day! 👋";
        if (input.includes("contact")) return "You can reach us at: 📞 +91 8296390210 | 📧 vkumar2574@gmail.com";
        if (input.includes("what is agrotech")) return "Agrotech is committed to delivering innovative agricultural solutions to empower farmers and ensure a sustainable future.  We provide cutting-edge technologies and eco-friendly products to boost agricultural productivity.";

if (input.includes("what does agrotech do")) return "Agrotech provides innovative agricultural solutions, including products like herbicides, insecticides, and fungicides, as well as field visit services and tailored pest management solutions.";

if (input.includes("where is agrotech located")) return "Agrotech is located near SBI Bank, Devadurga Circle, Raichur Road, Sirwar.";

if (input.includes("what are your mission and values")) return "We are committed to delivering innovative agricultural solutions to empower farmers and ensure a sustainable future through cutting-edge technologies and eco-friendly products.";

if (input.includes("how long has agrotech been in business")) return "Agrotech has been in business since 2025";

if (input.includes("who are the key people at agrotech")) return "Please contact us directly for inquiries regarding Agrotech personnel.";

if (input.includes("contact agrotech")) return "You can contact Agrotech by phone at +91 8296390210 or by email at technology1@agrotech.com.";

if (input.includes("number")) return " +91 8296390210.";

if (input.includes("what is your email address")) return "Our email address is technology1@agrotech.com.";

if (input.includes("what are your business hours")) return "Please contact us directly for business hours.";

if (input.includes("where are you located")) return "We are located near SBI Bank, Devadurga Circle, Raichur Road, Sirwar.";

if (input.includes("customer support")) return "Yes, you can reach our customer support at +91 8296390210 or technology1@agrotech.com.";

if (input.includes("where can i find information about your products")) return "You can find information about our products on our Products page: [Link to Products page]";

if (input.includes("field visits")) return "You can find information about our field visits on our Services page: [Link to Services Page]";

if (input.includes("where can i find information about your solutions")) return "You can find information about our solutions on our Solutions page: [Link to Solutions Page]";

if (input.includes("book a field visit")) return "To book a field visit, please visit our Booking page: [Link to Booking page]";

if (input.includes("how do i sign up for an account")) return "To sign up for an account, please visit our Registration page: [Link to Registration Page]";

if (input.includes("what products do you offer")) return "We offer a variety of agricultural products, including herbicides, insecticides, fungicides, and biopesticides. You can view our full product catalog here: [Link to Products page]";

if (input.includes("what are your best-selling products")) return "Please contact us directly for inquiries regarding Agrotech products.";

if (input.includes("do you offer organic or eco-friendly pesticides")) return "Yes, we prioritize products that are safe for the environment and promote sustainable farming practices, including eco-friendly biopesticides. You can view our product catalog here: [Link to Products page]";

if (input.includes("do you have a product catalog")) return "Yes, you can view our product catalog here: [Link to Products page]";

if (input.includes("are your products safe for the environment")) return "We prioritize products that are safe for the environment and promote sustainable farming practices. Please refer to the product descriptions for more details: [Link to Products page]";

if (input.includes("what is a field visit involves")) return "Our field visits include crop diagnosis, customized solutions, on-site support, and workshops & seminars.";

if (input.includes("how much does a field visit cost")) return "Please contact us directly for inquiries regarding our field visit prices.";

if (input.includes("do you offer field visits in my area")) return "To determine if we offer field visits in your area, please contact us at +91 8296390210 or technology1@agrotech.com with your location.";

if (input.includes("can i get a free consultation")) return "Please contact us directly for inquiries regarding free consultations.";

if (input.includes("what are the benefits of creating an account")) return "Please contact us directly for inquiries regarding the benefits of creating an account.";

if (input.includes("is there a cost to sign up")) return "Please contact us directly for inquiries regarding the price to sign up.";

if (input.includes("what information do i need to provide to sign up")) return "Please visit our Registration page to sign up: [Link to Registration Page]";

if (input.includes("how do i reset my password")) return "Contact us directly for information regarding resetting passwords";

if (input.includes("what companies do you collaborate with")) return "We collaborate with a number of leading agricultural companies, including UPL Ltd., PI Industries Ltd., and Bayer CropScience Ltd.  You can see a full list on our homepage.";

if (input.includes("are you an authorized distributor for")) return "Please contact us directly for inquiries regarding if we are authorized to distribute for these companies";
if (input.includes("how do i book a field visit") || input.includes("booking.html")) 
    return "To book an agriculture field visit, please fill out our booking form on the 'Field Visit' page. You will receive a confirmation email after successful booking.";

if (input.includes("what are the charges for field visit")) 
    return "Our field visit charges depend on the location and group size. Please visit our pricing page or contact our support team for details.";

if (input.includes("what should i bring for the field visit")) 
    return "For the field visit, we recommend wearing comfortable clothing, carrying a water bottle, and bringing a notebook for notes. More details will be shared in your confirmation email.";

// Product Inquiries
if (input.includes("do you sell organic fertilizers")) 
    return "sorry we are not selling fertilizers";

if (input.includes("what types of seeds do you offer")) 
    return "We provide high-quality seeds, including hybrid, organic, and genetically improved varieties. Visit our seeds section for more information.";

if (input.includes("do you provide farm equipment")) 
    return "Yes! We offer a range of farm equipment such as tractors, irrigation tools, and harvesting machines. Check our equipment page for details.";

// Dealer & Distributor Inquiries
if (input.includes("how can i become a distributor")) 
    return "for become distrubutor contact our main branch.";

if (input.includes("do you offer bulk discounts")) 
    return "Yes, we offer special discounts for bulk purchases. Contact our sales team for wholesale pricing and offers.";

// Farming Technology & Solutions
if (input.includes("do you provide smart farming solutions") || input.includes("solutions.html")) 
    return "Yes, we provide smart solutions.";

if (input.includes("how to book field visit") || input.includes("booking.html")) 
    return "you cank book using our booking form or call to 8296390210.";

if (input.includes("do you offer training for farmers") || input.includes("solution.html")) 
    return "We conduct training sessions and workshops for farmers on modern farming techniques. Visit our events page to register for upcoming workshops.";

// Support & Contact Information
if (input.includes("how can i contact customer support") || input.includes("contact.html")) 
    return "You just fill contact form we contact with in 48 hours";
if (input.includes("how are you")) 
    return "i am not a human. if internet is good i am fine";
if (input.includes("thank you")) 
    return "you allways welcome";
if (input.includes("where is your company located") || input.includes("office address")) 
    return "Our company is headquartered at [ Near SBI Bank, Devadurga Circle, Raichur Road, Sirwar]. You are welcome to visit us during business hours.";

if (input.includes("what is agriculture")) 
    return "Agriculture is the practice of cultivating plants and livestock to produce food, fiber, and other essential products.";

if (input.includes("why is soil testing important")) 
    return "Soil testing helps determine nutrient levels and pH balance, ensuring optimal crop growth.";

if (input.includes("how do I start a small farm")) 
    return "Starting a small farm requires good land, quality seeds, proper irrigation, and market research. We can guide you!";

if (input.includes("what is the best season to plant crops")) 
    return "The best planting season depends on your region and the type of crops you want to grow.";

if (input.includes("how can I make my farm profitable")) 
    return "You can increase farm profits by adopting modern techniques, diversifying crops, and reducing waste.";

if (input.includes("do you offer farm planning advice")) 
    return "Yes! We provide expert consultations on farm layout, crop selection, and yield optimization.";

if (input.includes("how do I keep my soil healthy")) 
    return "Use crop rotation, organic compost, and natural fertilizers to maintain soil health.";

if (input.includes("what is organic certification")) 
    return "Organic certification verifies that your farm follows organic farming standards and practices.";

if (input.includes("where can I buy farming tools")) 
    return "You can purchase high-quality farming tools and equipment from our Agrotech store.";

if (input.includes("what are the benefits of organic farming")) 
    return "Organic farming improves soil health, reduces pollution, and produces healthier food.";

if (input.includes("how do I apply for a farm loan")) 
    return "Farm loans are available through government programs and banks. We can help you with the process.";

if (input.includes("what are the common crop diseases")) 
    return "Common crop diseases include rust, blight, mildew, and root rot. Proper care and treatment can prevent them.";

if (input.includes("how do I prevent weeds on my farm")) 
    return "You can control weeds using mulching, cover crops, and organic herbicides.";

if (input.includes("what is precision agriculture")) 
    return "Precision agriculture uses GPS, AI, and sensors to improve farming efficiency and reduce waste.";

if (input.includes("how do I start a greenhouse farm")) 
    return "Starting a greenhouse farm requires good planning, temperature control, and proper ventilation.";

if (input.includes("can I farm without soil")) 
    return "Yes! Hydroponics and aquaponics allow you to grow plants without soil using nutrient-rich water.";

if (input.includes("how does smart irrigation work")) 
    return "Smart irrigation systems use sensors and automation to optimize water usage and improve crop yield.";

if (input.includes("do you offer farm visits for students")) 
    return "Yes! Our farm visits provide hands-on learning experiences for students and researchers.";

if (input.includes("how do I reduce water waste on my farm")) 
    return "Use drip irrigation, rainwater harvesting, and soil moisture sensors to reduce water waste.";

if (input.includes("what is vertical farming")) 
    return "Vertical farming is a method of growing crops in stacked layers, often using hydroponic or aeroponic systems.";

if (input.includes("do you provide training on modern farming")) 
    return "Yes! We offer training sessions on modern agricultural techniques and sustainable farming.";

if (input.includes("how do I protect my crops from pests")) 
    return "You can use organic pesticides, companion planting, and natural predators to protect your crops.";

if (input.includes("what is crop rotation")) 
    return "Crop rotation is the practice of growing different types of crops in the same area in sequential seasons to improve soil health.";

if (input.includes("how can I improve soil fertility")) 
    return "Adding compost, manure, and cover crops can help improve soil fertility.";

if (input.includes("how do I set up a drip irrigation system")) 
    return "Drip irrigation involves setting up pipes and emitters to deliver water directly to plant roots.";

if (input.includes("what are the best crops for dry regions")) 
    return "Drought-resistant crops like millet, sorghum, and chickpeas are great for dry regions.";

if (input.includes("can I start farming with little money")) 
    return "Yes! Start small with backyard farming, organic composting, and low-cost irrigation methods.";

if (input.includes("what is permaculture farming")) 
    return "Permaculture farming focuses on sustainable and self-sufficient agricultural ecosystems.";

if (input.includes("do you offer organic pest control solutions")) 
    return "Yes! We provide organic pest control solutions that are safe for crops and the environment.";

if (input.includes("how do I attract pollinators to my farm")) 
    return "Planting flowers, reducing pesticide use, and providing water sources can attract pollinators.";

if (input.includes("do you provide market connections for farmers")) 
    return "Yes! We help farmers connect with buyers, wholesalers, and online marketplaces.";

if (input.includes("what is the future of farming")) 
    return "The future of farming includes smart technologies, precision agriculture, and sustainable practices.";

if (input.includes("can you recommend good farm management apps")) 
    return "Yes! There are various farm management apps that track expenses, monitor crops, and optimize yield.";

if (input.includes("do you provide farming business plans")) 
    return "Yes! We help farmers create business plans for successful and profitable farming.";

if (input.includes("how can I export my farm products")) 
    return "Exporting farm products requires certifications, quality checks, and connections with buyers.";

if (input.includes("what is regenerative agriculture")) 
    return "Regenerative agriculture focuses on improving soil health, biodiversity, and carbon sequestration.";

if (input.includes("how do I get certified for organic farming")) 
    return "You can apply for organic certification through government or private certification bodies.";

if (input.includes("do you offer consultation for beginners")) 
    return "Yes! We provide expert consultation for beginners looking to start farming.";

if (input.includes("what is the best way to store harvested crops")) 
    return "Proper storage methods like silos, cold storage, and drying can help preserve harvested crops.";

if (input.includes("how do I start a beekeeping farm")) 
    return "Beekeeping requires knowledge about bee species, hive management, and honey production.";

if (input.includes("what is the best fertilizer for my farm")) 
    return "The best fertilizer depends on your soil type and crop needs. We can help you choose the right one.";

if (input.includes("do you offer government subsidy information")) 
    return "Yes! We provide information on government subsidies and financial aid for farmers.";

if (input.includes("how do I increase milk production in dairy farming")) 
    return "Proper nutrition, hygiene, and breeding techniques can help increase milk production.";

if (input.includes("how do I start poultry farming")) 
    return "Poultry farming requires proper housing, feed management, and disease prevention techniques.";

if (input.includes("what are the benefits of fish farming")) 
    return "Fish farming provides a sustainable source of protein and requires less land than traditional farming.";

if (input.includes("how can I build a farm pond")) 
    return "Farm ponds help with irrigation and livestock water supply. We can guide you on construction methods.";

if (input.includes("do you offer solar-powered farm solutions")) 
    return "Yes! We provide solar irrigation and energy solutions for sustainable farming.";

if (input.includes("how do I protect my farm from extreme weather")) 
    return "Use greenhouses, windbreaks, and climate-smart techniques to protect your farm.";

if (input.includes("how can I automate my farm")) 
    return "Farm automation includes sensors, drones, and AI tools to improve efficiency and productivity.";
if (input.includes("what are the benefits of organic farming")) 
    return "Organic farming improves soil fertility, reduces chemical use, and supports biodiversity.";

if (input.includes("how do I start vertical farming")) 
    return "Vertical farming requires stacked layers, hydroponics, and LED lighting for indoor growing.";

if (input.includes("how can I prevent pest infestations")) 
    return "Use natural predators, crop rotation, and organic pesticides to control pests.";

if (input.includes("what are the different types of irrigation")) 
    return "Irrigation types include drip, sprinkler, surface, and subsurface irrigation.";

if (input.includes("how do I make compost at home")) 
    return "Layer green and brown organic materials, keep it moist, and turn it regularly to make compost.";

if (input.includes("what is the importance of soil testing")) 
    return "Soil testing helps determine nutrient levels, pH balance, and fertilizer requirements.";

if (input.includes("how do I set up a rooftop garden")) 
    return "Use raised beds, lightweight soil, and proper drainage for a successful rooftop garden.";

if (input.includes("how do I reduce pesticide use on my farm")) 
    return "Integrated pest management, crop rotation, and biological control help reduce pesticide use.";

if (input.includes("how do I store harvested crops properly")) 
    return "Store crops in cool, dry conditions and use airtight containers to prevent spoilage.";

if (input.includes("how do I attract pollinators to my farm")) 
    return "Plant native flowers, avoid pesticides, and provide water sources to attract pollinators.";

if (input.includes("what is agroforestry")) 
    return "Agroforestry combines trees and crops to enhance biodiversity and improve soil health.";

if (input.includes("how do I set up a drip irrigation system")) 
    return "Install main and lateral pipes, use emitters, and connect to a water source for drip irrigation.";

if (input.includes("how do I start a poultry farm")) 
    return "Set up proper housing, choose healthy chicks, and provide balanced nutrition for poultry farming.";

if (input.includes("what are greenhouse farming advantages")) 
    return "Greenhouse farming allows year-round production, protects crops, and optimizes conditions.";

if (input.includes("how do I grow crops in sandy soil")) 
    return "Add organic matter, use cover crops, and practice mulching for better sandy soil farming.";

if (input.includes("how do I start beekeeping for honey production")) 
    return "Choose hive boxes, select bee species, and provide a nectar-rich environment for honey production.";

if (input.includes("how can I improve soil fertility naturally")) 
    return "Use compost, manure, green cover crops, and organic mulches to enhance soil fertility.";

if (input.includes("what is aquaponics")) 
    return "Aquaponics is a system that combines fish farming with hydroponics for sustainable agriculture.";

if (input.includes("how do I get government subsidies for farming")) 
    return "Check local agriculture departments, apply for grants, and meet eligibility criteria for subsidies.";

if (input.includes("what are climate-smart agriculture techniques")) 
    return "Techniques include conservation tillage, drought-resistant crops, and precision irrigation.";

if (input.includes("how do I grow medicinal plants")) 
    return "Grow medicinal plants in nutrient-rich soil, ensure proper irrigation, and harvest at the right time.";

if (input.includes("what is agro-tourism")) 
    return "Agro-tourism allows visitors to experience farming activities and promotes rural development.";

if (input.includes("how do I start a livestock farm")) 
    return "Choose the right animals, provide proper shelter, and ensure veterinary care for livestock farming.";

if (input.includes("what are the best crops for dry regions")) 
    return "Drought-tolerant crops like millets, sorghum, and chickpeas are ideal for dry regions.";

if (input.includes("how do I control plant diseases naturally")) 
    return "Use crop rotation, resistant plant varieties, and organic treatments to control plant diseases.";

if (input.includes("what is permaculture")) 
    return "Permaculture is a sustainable farming approach that mimics natural ecosystems for self-sufficiency.";

if (input.includes("how do I harvest rainwater for farming")) 
    return "Install rain barrels, use check dams, and create percolation pits for rainwater harvesting.";

if (input.includes("how can I make my farm more profitable")) 
    return "Diversify crops, explore agritourism, and sell directly to consumers to increase farm profits.";

if (input.includes("what are hybrid seeds")) 
    return "Hybrid seeds are crossbred to enhance yield, disease resistance, and growth efficiency.";

if (input.includes("how do I set up a solar-powered farm")) 
    return "Install solar panels for irrigation, lighting, and farm equipment to reduce energy costs.";

if (input.includes("how do I prevent overgrazing")) 
    return "Implement rotational grazing, maintain proper livestock numbers, and improve pasture health.";

if (input.includes("what is contract farming")) 
    return "Contract farming is an agreement between farmers and buyers to produce specific crops or livestock.";

if (input.includes("what are the products")) 
    return "herbisides,pesticides,biopesticides,etc.";

if (input.includes("how do I build a farm pond")) 
    return "Excavate a suitable area, line it properly, and ensure water conservation for farm ponds.";

if (input.includes("what is biodynamic farming")) 
    return "Biodynamic farming integrates organic practices with cosmic rhythms and soil health principles.";

if (input.includes("how do I start snail farming")) 
    return "Create a moist habitat, select edible snail species, and provide calcium-rich feed for snail farming.";

if (input.includes("how can I prevent nutrient depletion in soil")) 
    return "Use organic compost, rotate crops, and plant nitrogen-fixing cover crops to prevent depletion.";

if (input.includes("how do I grow crops in acidic soil")) 
    return "Apply lime, use acid-tolerant crops, and add organic matter to improve acidic soil conditions.";
if (input.includes("what day is today")) 
    return "Today is " + new Date().toLocaleDateString('en-US', { weekday: 'long' }) + ".";

if (input.includes("what is the weather today")) 
    return "Please check your local weather forecast for the latest updates.";

if (input.includes("how many days are there in this month")) 
    return "This month has " + new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate() + " days.";

if (input.includes("what is the current year")) 
    return "The current year is " + new Date().getFullYear() + ".";

if (input.includes("is today a holiday")) 
    return "Please check your local holiday calendar for today's public holidays.";

if (input.includes("time")) 
    return "The current time is " + new Date().toLocaleTimeString() + ".";

if (input.includes("what is the current month")) 
    return "The current month is " + new Date().toLocaleDateString('en-US', { month: 'long' }) + ".";

if (input.includes("how many weeks are there in a year")) 
    return "A year typically has 52 weeks.";

if (input.includes("is it a leap year")) 
    return new Date().getFullYear() % 4 === 0 && (new Date().getFullYear() % 100 !== 0 || new Date().getFullYear() % 400 === 0) ? "Yes, this is a leap year." : "No, this is not a leap year.";

if (input.includes("what season is it now")) 
    return "Seasons vary by region. Check your local seasonal calendar for accurate information.";
if (input.includes("what day is tomorrow")) 
    return "Tomorrow will be " + new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-US', { weekday: 'long' }) + ".";

if (input.includes("what services does Agrotech provide")) 
return "Agrotech provides various services including field visit,sloutions and products";

// Add many more Q&A pairs here...
        return "I'm sorry, I dont have big database to answer to any ouestions";
        
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
