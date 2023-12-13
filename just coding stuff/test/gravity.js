document.addEventListener("DOMContentLoaded", function () {
    const gravityObjects = document.querySelectorAll(".gravity-object");

    gravityObjects.forEach(object => {
        makeDraggable(object);
    });

    function makeDraggable(element) {
        let isDragging = false;
        let offsetX, offsetY;

        element.addEventListener("mousedown", function (e) {
            isDragging = true;
            offsetX = e.clientX - element.getBoundingClientRect().left;
            offsetY = e.clientY - element.getBoundingClientRect().top;
        });

        document.addEventListener("mousemove", function (e) {
            if (isDragging) {
                const x = e.clientX - offsetX;
                const y = e.clientY - offsetY;

                element.style.left = x + "px";
                element.style.top = y + "px";
            }
        });

        document.addEventListener("mouseup", function () {
            isDragging = false;
        });
    }
});
