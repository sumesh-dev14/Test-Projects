const switchOn = document.getElementById("on-btn")
const switchOff = document.getElementById("off-btn")
const bulbLight = document.getElementById("bulb-img")

switchOn.addEventListener("click" , () =>{
    bulbLight.src = "../images/lightbulb-fill.svg"
})
switchOff.addEventListener("click" , () =>{
    bulbLight.src = "../images/lightbulb.svg"
})