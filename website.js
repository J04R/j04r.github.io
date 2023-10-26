navigator.mediaDevices.getUserMedia({ audio: true })
.then(function(stream) {
    // User allowed audio access, play background music
    var audio = new Audio("your-audio-file.mp3");
    audio.loop = true;
    audio.play();
})
.catch(function(error) {
    // User denied audio access, handle accordingly
    alert("Please allow audio access to enjoy the website's music.");
});

function youtubelink() {
    window.location.href = 'https://www.youtube.com/channel/UCObs67mc5ReTaED39vs6u7w'
}

function redditlink() {
    window.location.href = 'https://www.reddit.com/user/JO4R_/'
}

function steamlink() {
    window.location.href = 'https://steamcommunity.com/profiles/76561198356269821'
}

function projectslink() {
    window.location.href = 'https://github.com/J04R?tab=repositories'
}

function websiteslink() {
    window.location.href = 'websites/websites.html'
}







