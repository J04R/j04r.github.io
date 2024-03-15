var token = sessionStorage.getItem("secretToken");

// Check if a token is present and validate it (you may need to adjust this logic)
if (token && isValidToken(token)) {
    // Token is valid, allow access to the secret content
} else {
    // Token is missing or invalid, deny access
    // Redirect the user to another page or display an error message
    window.location.href = "index.html";
}

function isValidToken(token) {
    // You would implement your validation logic here
    // For example, check if the token exists in a database or matches a predefined value
    // This is just a placeholder function, you should replace it with your own logic
    return true; // Placeholder, replace with your own validation logic
}

var audio = document.getElementById('audioPlayer');

// Check if autoplay is supported
var isAutoplaySupported = audio.autoplay !== undefined;

if (isAutoplaySupported) {
  audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
  
    // Set initial volume
    audioPlayer.volume = 0.3; // You can set this to any value between 0.0 and 1.0
  
    // Function to adjust the volume (0.0 to 1.0)
    function setVolume(volume) {
        audioPlayer.volume = volume;
    }
  }
  )