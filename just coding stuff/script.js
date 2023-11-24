document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("pixelCanvas");
    const ctx = canvas.getContext("2d");
    let isPainting = false;
    let brushSize = 5;
    let opacity = 1;
    let currentColor = "#000000";
    let eraserMode = false;
    let tolerance = 10;

    const eraserCanvas = document.createElement("canvas");
    eraserCanvas.width = canvas.width;
    eraserCanvas.height = canvas.height;
    const eraserCtx = eraserCanvas.getContext("2d");

    function startPainting(e) {
        isPainting = true;
        draw(e);
    }

    function stopPainting() {
        isPainting = false;
        ctx.beginPath();
    }


    function draw(e) {
        if (!isPainting) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";

        if (eraserMode) {
            eraserCtx.clearRect(0, 0, eraserCanvas.width, eraserCanvas.height);
            eraserCtx.beginPath();
            eraserCtx.arc(mouseX, mouseY, brushSize / 2, 0, 2 * Math.PI);
            eraserCtx.fillStyle = "#fff";
            eraserCtx.fill();

            ctx.globalCompositeOperation = "destination-out";
            ctx.drawImage(eraserCanvas, 0, 0);
        } else {
            ctx.globalCompositeOperation = "source-over";
            ctx.strokeStyle = currentColor;
            ctx.globalAlpha = opacity;

            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
        }
    }
    

    function toggleEraserMode() {
        eraserMode = !eraserMode;

        const eraserButton = document.getElementById("eraserButton");
        eraserButton.classList.toggle("active", eraserMode);
    }

    function changeBrushSize(size) {
        brushSize = size;
    }

    function changeOpacity(opacityValue) {
        opacity = opacityValue;
    }

    function changeColor(newColor) {
        currentColor = newColor;
    }

    function updateColorSelector() {
        const colorSelector = document.getElementById("colorSelector");
        colorSelector.addEventListener("input", function () {
            currentColor = colorSelector.value;
        });
    }

    function updateBrushSize() {
        const brushSizeInput = document.getElementById("brushSize");
        brushSizeInput.addEventListener("input", function () {
            changeBrushSize(parseInt(brushSizeInput.value));
        });
    }

    function updateOpacity() {
        const opacityInput = document.getElementById("opacity");
        opacityInput.addEventListener("input", function () {
            changeOpacity(parseFloat(opacityInput.value));
        });
    }
    // ... (other functions)

    // Call the functions to set up UI interactions
    updateColorSelector();
    updateBrushSize();
    updateOpacity();

    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mousemove", draw);

    canvas.addEventListener("click", function (e) {
        fillBucket(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    });

    const eraserButton = document.getElementById("eraserButton");
    eraserButton.addEventListener("click", toggleEraserMode);

    // Additional functions to handle UI interactions and changes

    // Additional functions to handle UI interactions and changes
});

