

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
        const texts = ["Visste du att chile är en av de svåraste länderna att spela som i supremacy 1914? - Ruben", "Kan man vara så kort så att man inte kan nå sin egen längd? - Ruben ", "Hur mycket power behöver man i Rise Of Kingdoms för att bli av med ett mord? - Ruben", " Hur gammal blir man ifall man åldras tillräckligt länge? - Ruben", "Man måste tänka på tanken eftersom det är tanken som räknas när man tankar. - Ruben", "Om man donerar till en fond så donerar den fonden det du donerade. - Ruben", "N/A", "N/A", "N/A",];

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

function darkenImage(element) {
    element.classList.add('darken');
}

function back() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var token = generateToken();

    sessionStorage.setItem("secretToken", token);
    
    // Check if the random number is 1 (1% chance)
    if (randomNumber === 23) {
        // Redirect to the secret website
        window.location.href = "../23.html?token=dog23";
    } else {
        // Otherwise, do something else (e.g., navigate to another part of the site)
        window.location.href = "../index.html";
    } 
}

// Function to remove "darken" class on mouseout
function resetImage(element) {
    element.classList.remove('darken');
}

function generateToken() {
    // Generate a random string for the token
    var characters = 'dog23';
    var token = 'dog23';
    for (var i = 0; i < 20; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
  }