const box = document.getElementById("box")

const widthIn = document.getElementById("width-in")
const heightIn = document.getElementById("height-in")
const colorIn = document.getElementById("color-in")

const widthText = document.getElementById("width")
const heightText = document.getElementById("height")
const colorText = document.getElementById("color")

widthIn.addEventListener("input", function(){widthChange()})
heightIn.addEventListener("input", function(){heightChange()})
colorIn.addEventListener("input", function(){colorChange()})

function widthChange() {
    const width = String(widthIn.value) + "px"
    box.style.width = width
    widthText.innerHTML = width
}

function heightChange() {
    const height = String(heightIn.value) + "px"
    box.style.height = height
    heightText.innerHTML = height
}

function colorChange() {
    box.style.backgroundColor = colorIn.value
    colorText.innerHTML = colorIn.value
}