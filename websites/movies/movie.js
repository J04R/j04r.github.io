var x = 0;
var y = 4;
var z = 2;

function showMovies() {
    if (x == 0) {
        document.getElementById("movies").classList.add("show");
        document.getElementById("games").classList.remove("show")
        document.getElementById("songs").classList.remove("show")
        z = 2;
        x = 1;
        y = 4;
      } else {
        document.getElementById("movies").classList.remove("show");
  
        x = 0;
      }
    }
  
  function showGames() {
    if (y == 4) {
      document.getElementById("games").classList.add("show");
      document.getElementById("movies").classList.remove("show")
      document.getElementById("songs").classList.remove("show")
      z = 2;
      x = 0;
      y = 5;
    } else {
      document.getElementById("games").classList.remove("show");
      y = 4;
    }
  }

  function showSongs() {
    if (z == 2) {
        document.getElementById("songs").classList.add("show");
        document.getElementById("games").classList.remove("show")
        document.getElementById("movies").classList.remove("show")
        z = 3;
        x = 0;
        y = 4;
    } else {
        document.getElementById("songs").classList.remove("show")
        z = 2;
    }
  }