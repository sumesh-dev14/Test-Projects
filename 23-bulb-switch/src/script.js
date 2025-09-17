const switchOn = document.getElementById("on-btn")
const switchOff = document.getElementById("off-btn")
const bulbLight = document.getElementById("bulb-img")

switchOn.addEventListener("click" () => {
    bulbLight.classList.add("on");
})