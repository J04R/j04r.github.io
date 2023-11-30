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

document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");

    // Set initial volume
    audioPlayer.volume = 0.1; // You can set this to any value between 0.0 and 1.0

    // Function to adjust the volume (0.0 to 1.0)
    function setVolume(volume) {
        audioPlayer.volume = volume;
    }

    // Example: Lower the volume after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        setVolume(0.1); // Adjust the volume to your desired level
    }, 3000);
});