var isPlaying = false;

// Function to play the sound
function playSound() {
    if (!isPlaying) {
        var audio = document.getElementById("audiofart");
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;

        // Event listener to reset isPlaying when audio finishes playing
        audio.addEventListener('ended', function() {
            isPlaying = false;
        });
    }
}

// Event listener for keydown event
document.addEventListener("keydown", function(event) {
    // Check if the key pressed is 'f'
    if (event.key === "f") {
        // Call the playSound function
        playSound();
    }
});

// Event listener for keyup event (to reset isPlaying when key is released)
document.addEventListener("keyup", function(event) {
    // Check if the key released is 'f'
    if (event.key === "f") {
        isPlaying = false;
    }
});

var audio = document.getElementById('audioPlayer');

// Check if autoplay is supported
var isAutoplaySupported = audio.autoplay !== undefined;

if (isAutoplaySupported) {
  audio.play();
}

function youtubelink() {
    window.open("https://www.youtube.com/channel/UCObs67mc5ReTaED39vs6u7w", "_blank");
}

function aboutlink() {
    window.open("about.html", "_self");
}

function medialink() {
    window.open("media.html", "_self");
}

function projectslink() {
    window.open("https://github.com/J04R?tab=repositories", "_blank");
}

function twitterLink() {
    window.open("https://twitter.com/Scriptineer", "_blank");
}

function websiteslink() {
    window.open("websites.html", "_self");
}

function thankslink() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;

    var token = generateToken();

    sessionStorage.setItem("secretToken", token);
    
    // Check if the random number is 1 (1% chance)
    if (randomNumber > 50) {
        // Redirect to the secret website
        window.location.href = "secret.html?token=dog23";
    } else {
        // Otherwise, do something else (e.g., navigate to another part of the site)
        window.location.href = "thanks.html";
    }
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

function darkenImage(element) {
    element.classList.add('darken');
}

function resetImage(element) {
    element.classList.remove('darken');
}

function friendslink() {
    window.open("friends.html", "_self")
}

function rubenTime() {
    window.location.href = 'rubo.html'
}

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");

    // Set initial volume
    audioPlayer.volume = 0.1; // You can set this to any value between 0.0 and 1.0

    // Function to adjust the volume (0.0 to 1.0)
    function setVolume(volume) {
        audioPlayer.volume = volume;
    }

    // Example: Lower the volume after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        setVolume(0.1); // Adjust the volume to your desired level
    }, 3000);
});

var audio;

function mumkey() {
    var mumkey = document.getElementById("mumkey");

    if (mumkey.style.display = "none") {
        mumkey.style.display = "block";
      } else {
        mumkey.style.display = "none";
}

    if (!audio || audio.paused) {
      // Create an Audio object and set the source (URL) of the sound file
      audio = new Audio('Audio/Pablo Meme Bass Boosted-[AudioTrimmer.com].mp3'); // Replace with the actual path to your sound file

      // Disable the button temporarily to prevent multiple clicks
      document.getElementById('mumkeybutton').disabled = true;

      // Play the audio
      audio.play();

      // Set a timeout to re-enable the button after the sound finishes playing
      setTimeout(function() {
        document.getElementById('mumkeybutton').disabled = false;
      }, audio.duration * 1000);
}
}

