var audio = document.getElementById('audioPlayer');

// Check if autoplay is supported
var isAutoplaySupported = audio.autoplay !== undefined;

if (isAutoplaySupported) {
  audio.play();
}

function youtubelink() {
    window.open("https://www.youtube.com/channel/UCObs67mc5ReTaED39vs6u7w", "_blank");
}

function aboutlink() {
    window.open("about.html", "_self");
}

function medialink() {
    window.open("media.html", "_self");
}

function projectslink() {
    window.open("https://github.com/J04R?tab=repositories", "_blank");
}

function twitterLink() {
    window.open("https://twitter.com/Scriptineer", "_blank");
}

function websiteslink() {
    window.open("websites.html", "_self");
}

function thankslink() {
    window.open("thanks.html", "_self");
}

function darkenImage(element) {
    element.classList.add('darken');
}

function resetImage(element) {
    element.classList.remove('darken');
}

function rubenTime() {
    window.location.href = 'rubo.html'
}
