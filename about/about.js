

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
        window.location.href = "23.html?token=dog23";
    } else {
        // Otherwise, do something else (e.g., navigate to another part of the site)
        window.location.href = "../index.html";
    }
}

function resetImage(element) {
    element.classList.remove('darken');
}

function buglink() {
    window.open("https://forms.office.com/e/QT6myxSvQb?origin=lprLink", "_blank");
}

function suggestlink() {
    window.open("https://forms.office.com/e/AxNuEMQ3D9?origin=lprLink", "_blank")
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

document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audioPlayer");

    // Set initial volume
    audioPlayer.volume = 0.6; // You can set this to any value between 0.0 and 1.0

    // Function to adjust the volume (0.0 to 1.0)
    function setVolume(volume) {
        audioPlayer.volume = volume;
    }
}
)
