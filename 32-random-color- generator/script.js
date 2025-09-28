// generate a random colors

const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const startColors = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 700);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopColors = function() {
    clearInterval(intervalId);
    intervalId = null;
};

const clearColors = function() {
    stopColors();
    document.body.style.backgroundColor = "#212121";
}

document.querySelector("#start").addEventListener("click", startColors);
document.querySelector("#stop").addEventListener("click", stopColors);
document.querySelector("#clear").addEventListener("click", clearColors);