document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('buttonoff');
    const soundDown = document.getElementById('soundDown');
    const soundUp = document.getElementById('soundUp');
    const clickCounter = document.getElementById('clickCounter');
    const originalSrc = 'images/ButtonOFF.png';
    const newSrc = 'images/ButtonON.png';
    const delay = 100; // Adjust this value as needed
    const soundTimeout = 500; // Adjust this value as needed
    let isClickable = true;
    let isMouseUp = false;
    let shouldPlayMouseUpSound = false;
    let clickCount = 0;

    function playSoundUp() {
        if (!soundUp.paused) {
            soundUp.pause();
            soundUp.currentTime = 0;
        }
        soundUp.play();
        shouldPlayMouseUpSound = false;
    }

    image.onmousedown = function() {
        if (!isClickable) return;
        isMouseUp = false;
        image.src = newSrc;
        soundDown.play(); // Play the sound for button down
        updateClickCounter(++clickCount);
    };

    image.onmouseup = function() {
        if (!isClickable) return;
        isMouseUp = true;
        shouldPlayMouseUpSound = true;
        setTimeout(function() {
            image.src = originalSrc;
            if (shouldPlayMouseUpSound) {
                playSoundUp(); // Play the sound for button release
            }
        }, delay);
    };

    setInterval(function() {
        if (isMouseUp && shouldPlayMouseUpSound && soundUp.paused) {
            playSoundUp(); // Play the sound if it hasn't started playing after a timeout
        }
    }, soundTimeout);

    function updateClickCounter(count) {
        clickCounter.textContent = count;
    }
});


function darken(element) {
    element.classList.add("darken")
}

function remove(element) {
    element.classList.remove("darken")
}