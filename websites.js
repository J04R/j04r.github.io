function thetest() {
    window.location.href = 'test/test.html'
}

function dvdscr() {
    window.location.href = 'dvd_scr/dvdscr.html'
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