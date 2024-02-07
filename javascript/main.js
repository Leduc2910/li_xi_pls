let clickCounter = 0;
function moveBtn() {
    let image = document.getElementById("img-change");
    image.src = "element/cheems01.png";
    image.style.width = 200 + 'px';
    image.style.height = 300 + 'px';
    let button = document.getElementById("btn-2");
    let button2 = document.getElementById("btn-1");
    if (clickCounter < 2) {
        let wrapperWidth = document.querySelector('.wrapper').offsetWidth;
        let wrapperHeight = document.querySelector('.wrapper').offsetHeight;
        let randomLeft = Math.floor(Math.random() * (wrapperWidth - button.offsetWidth));
        let randomTop = Math.floor(Math.random() * (wrapperHeight - button.offsetHeight));
        button.style.left = randomLeft + 'px';
        button.style.top = randomTop + 'px';
        let newWidth = button.offsetWidth * 0.5;
        let newHeight = button.offsetHeight * 0.5;
        button.style.width = newWidth + 'px';
        button.style.height = newHeight + 'px';
        let newFontSize = parseInt(window.getComputedStyle(button).fontSize) * 0.8; // Adjust the factor as needed
        button.style.fontSize = newFontSize + 'px';
        button2.style.width = button2.offsetWidth * 1.7 + "px";
        button2.style.height = button2.offsetHeight * 1.3 + "px";
        clickCounter++;
    } else {
        button.style.display = 'none';
    }
}
function changeImg() {
    let image = document.getElementById("img-change");
    image.src = "element/cheems03.png";
    image.style.width = 200 + 'px';
    image.style.height = 300 + 'px';
}

function restoreImg() {
    let image = document.getElementById("img-change");
    image.src = "element/cheems01.png";
    image.style.width = 200 + 'px';
    image.style.height = 300 + 'px';
}
function showPopup() {
    let pop_up = document.getElementById("pop-up");
    pop_up.style.visibility = "visible";
}
function closepopup() {
    let pop_up = document.getElementById("pop-up");
    pop_up.style.visibility = "hidden";
}