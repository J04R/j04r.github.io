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
  window.open("websites.html", "_self")
}