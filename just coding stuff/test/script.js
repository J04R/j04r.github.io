var x = 0;
var y = 4;
var z = 2;

function showHate() {
  if (x == 0) {
      document.getElementById("mainblog").classList.add("show");
      document.getElementById("mainblog2").classList.remove("show")
      x = 1;
    } else {
      document.getElementById("mainblog").classList.remove("show");

      x = 0;
    }
  }

function showFrance() {
  if (y == 4) {
    document.getElementById("mainblog2").classList.add("show");
    document.getElementById("mainblog").classList.remove("show")
    y = 5;
  } else {
    document.getElementById("mainblog2").classList.remove("show");
    y = 4;
  }
}

function showBlogs() {
    if (z == 2) {
        document.getElementById("blogas").classList.add("show");
        z = 3;
      } else {
        document.getElementById("blogas").classList.remove("show");
        z = 2;
      }
    }

function showContacts() {
  if (z == 2) {
    document.getElementById("contact").classList.add("show");
    z = 3;
  } else {
    document.getElementById("contact").classList.remove("show");
    z = 2;
  }
}
