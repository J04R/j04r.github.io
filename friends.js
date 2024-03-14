var audio = document.getElementById('audioPlayer');

// Check if autoplay is supported
var isAutoplaySupported = audio.autoplay !== undefined;

if (isAutoplaySupported) {
  audio.play();
}

function back() {
    window.location.href = 'index.html'
}

function darkenImage(element) {
    element.classList.add('darken');
}

function resetImage(element) {
    element.classList.remove('darken');
}

function showAlvin() {
    window.open("https://albe0411.github.io", "_blank");
}

function showThomas() {
    window.open("https://thomashurka.github.io", "_blank");
}