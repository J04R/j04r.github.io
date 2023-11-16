const cube = document.querySelector('.cube');

cube.addEventListener('mouseover', () => {
    cube.style.animation = 'none';
});

cube.addEventListener('mouseout', () => {
    cube.style.animation = 'rotate 5s infinite linear';
});

cube.addEventListener('click', () => {
    // Stop the rotation
    cube.style.animation = 'none';

    // Array of possible faces
    const faces = ['front', 'back', 'right', 'left', 'top', 'bottom'];

    // Randomly pick a face
    const randomFace = faces[Math.floor(Math.random() * faces.length)];

    // Apply the chosen face
    cube.style.transform = `rotateX(45deg) rotateY(45deg) rotateTo${randomFace}()`;
});

// Additional functions for custom rotations
function rotateToFront() {
    cube.style.transform += ' rotateY(0deg)';
}

function rotateToBack() {
    cube.style.transform += ' rotateY(180deg)';
}

function rotateToRight() {
    cube.style.transform += ' rotateY(90deg)';
}

function rotateToLeft() {
    cube.style.transform += ' rotateY(-90deg)';
}

function rotateToTop() {
    cube.style.transform += ' rotateX(90deg)';
}

function rotateToBottom() {
    cube.style.transform += ' rotateX(-90deg)';
}
