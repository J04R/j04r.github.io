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
      window.location.href = "../23.html?token=dog23";
  } else {
      // Otherwise, do something else (e.g., navigate to another part of the site)
      window.location.href = "../websites.html";
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
