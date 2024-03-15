function showRecipes() {
    alert("HELLO IM A BUTTON TO SHOW RECIPES")
}

var x = 0;
var z = 2;

function showSocials() {
  if (x == 0) {
    document.getElementById("socials").classList.add("change");
    x = 1;
  } else {
    document.getElementById("socials").classList.remove("change");
    x = 0;
  }
}

function showRecipes() {
    if (z == 2) {
      document.getElementById("recipes").classList.add("change");
      z = 3;
    } else {
      document.getElementById("recipes").classList.remove("change");
      z = 2;
    }
  }

  function smash() {
    window.open("smash.html", "_blank");
  }

  function svamp() {
    window.open("svamp.html", "_blank");
  }

  function discord() {
    window.open("https://discordapp.com/users/810177525011578890", "_blank");
  }

  function youtube() {
    window.open("https://www.youtube.com/channel/UCObs67mc5ReTaED39vs6u7w", "_blank");
  }

  function darkenImage(element) {
    element.classList.add('darken');
}

function resetImage(element) {
    element.classList.remove('darken');
}

function backlink() {
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  var token = generateToken();

  sessionStorage.setItem("secretToken", token);
  
  // Check if the random number is 1 (1% chance)
  if (randomNumber === 23) {
      // Redirect to the secret website
      window.location.href = "23.html?token=dog23";
  } else {
      // Otherwise, do something else (e.g., navigate to another part of the site)
      window.location.href = "websites.html";
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

document.addEventListener("DOMContentLoaded", function() {
  const audioPlayer = document.getElementById("audioPlayer");

  // Set initial volume
  audioPlayer.volume = 0.2; // You can set this to any value between 0.0 and 1.0

  // Function to adjust the volume (0.0 to 1.0)
  function setVolume(volume) {
      audioPlayer.volume = volume;
  }
}
)