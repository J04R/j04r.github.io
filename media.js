

var audio = document.getElementById('audioPlayer');

// Check if autoplay is supported
var isAutoplaySupported = audio.autoplay !== undefined;

if (isAutoplaySupported) {
  audio.play();
}

function youtubelink() {
    window.open("https://www.youtube.com/channel/UCObs67mc5ReTaED39vs6u7w", "_blank");
}

function redditlink() {
    window.open("https://www.reddit.com/user/2Scriptical4You/", "_blank");
}

function steamlink() {
    window.open("https://steamcommunity.com/profiles/76561198356269821", "_blank");
}

function projectslink() {
    window.open("https://github.com/J04R", "_blank");
}

function twitterlink() {
    window.open("https://twitter.com/Scriptineer", "_blank");
}

function discordlink() {
    window.open("https://discordapp.com/users/810177525011578890", "_blank");
}

function darkenImage(element) {
    element.classList.add('darken');
}

function back() {
    window.location.href = 'index.html'
}

function resetImage(element) {
    element.classList.remove('darken');
}
