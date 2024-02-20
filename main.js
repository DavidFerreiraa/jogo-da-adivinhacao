const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const btnTry = document.querySelector("#btnTry")
const btnTryAgain = document.querySelector("#btnTryAgain")

var tries = 0;

btnTry.addEventListener("click", handleClickTry)
btnTryAgain.addEventListener("click", handleClickTryAgain)

function handleClickTry(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    const randomNumber = Math.round(Math.random() * 10)

    tries++
    if (inputNumber.value == randomNumber) {
        var triesShow = document.querySelector("h2")
        triesShow.innerText = `Acertou em ${tries} tentativas`

        firstScreen.classList.toggle("hide")
        secondScreen.classList.toggle("hide")
    } 
    inputNumber.value = ""
}

function handleClickTryAgain() {
    tries = 0;
    secondScreen.classList.toggle("hide")
    firstScreen.classList.toggle("hide")
}