

function thetest() {
    window.open("valve.html", "_self")
}

function dvdscr() {
    window.open("recipebook.html", "_self")
}

function darkenImage(element) {
    element.classList.add('darken');
}

function back() {
    window.location.href = 'index.html'
}

// Function to remove "darken" class on mouseout
function resetImage(element) {
    element.classList.remove('darken');
}