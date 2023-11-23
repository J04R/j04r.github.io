function getStoredText() {
    return localStorage.getItem('dynamicText') || 'Quote of the day.. or I guess 15 seconds.. By Ruben.';
}

// Function to update the text every 5 seconds
function updateText() {
    const dynamicTextElement = document.getElementById('dynamicText');
    dynamicTextElement.textContent = getStoredText();
    const timerElement = document.getElementById('timer');

    setInterval(function () {
        // Your array of texts
        const texts = ["Visste du att chile är en av de svåraste länderna att spela som i supremacy 1914?", "Är du en finurlig vit pojke? Är du get med såsen?", "mama", "text 4", "text 5", "text 6", "text 7", "text 8", "text 9",];

        // Get a random text from the array
        const newText = texts[Math.floor(Math.random() * texts.length)];

        // Update the text content
        dynamicTextElement.textContent = newText;

                countdown = 5;

        // Save the current text to localStorage
        localStorage.setItem('dynamicText', newText);
    }, 15000);
}

// Call the function to initialize the text
updateText();