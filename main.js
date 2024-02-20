//vars
const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")
let randomNumber = Math.round(Math.random() * 10)
var tries = 0;

//events
btnTry.addEventListener("click", handleClickTry)
btnTryAgain.addEventListener("click", handleClickTryAgain)
document.addEventListener("keydown", (event) => {firstScreen.classList.contains("hide") &&  event.key == "Enter" && handleClickTryAgain() 
})

//functions
function handleClickTry(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    tries++
    if (inputNumber.value == randomNumber) {
        var triesShow = document.querySelector("h2")
        triesShow.innerText = `Acertou em ${tries} tentativas`

        toggleScreen()
    } 
    inputNumber.value = ""
}

function handleClickTryAgain() {
    tries = 0;
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    firstScreen.classList.toggle("hide")
    secondScreen.classList.toggle("hide")
}