function thetest() {
    window.open("test/test.html", "_blank");
}

function dvdscr() {
    window.open("dvdscr.html", "_blank");
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