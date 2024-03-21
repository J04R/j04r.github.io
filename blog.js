var x = 0;
var y = 4;
var z = 2;
var a = 6;

function darkenImage(element) {
  element.classList.add('darken');
}

function resetImage(element) {
  element.classList.remove('darken');
}

function showHate() {
  if (x == 0) {
      document.getElementById("mainblog").classList.add("show");
      document.getElementById("mainblog2").classList.remove("show")
      a = 6;
      x = 1;
      y = 4;
      z = 2;
    } else {
      document.getElementById("mainblog").classList.remove("show");

      x = 0;
    }
  }

function showFrance() {
  if (y == 4) {
    document.getElementById("mainblog2").classList.add("show");
    document.getElementById("mainblog").classList.remove("show")
    a = 6;
    y = 5;
    z = 2;
    x = 0;
  } else {
    document.getElementById("mainblog2").classList.remove("show");
    y = 4;
  }
}

function showBlogs() {
    if (z == 2) {
        document.getElementById("blogas").classList.add("show");
        a = 6;
        z = 3;
        y = 4;
        x = 0;
      } else {
        document.getElementById("blogas").classList.remove("show");
        z = 2;
      }
    }

function showContacts() {
  if (a == 6) {
    document.getElementById("contact").classList.add("show");
    a = 7; 
    z = 2;
    y = 4;
    x = 0;
  } else {
    document.getElementById("contact").classList.remove("show");
    a = 6;
  }
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

