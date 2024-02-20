const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")

var tries = 0;

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
}

function handleClickTryAgain() {
    tries = 0;
    secondScreen.classList.toggle("hide")
    firstScreen.classList.toggle("hide")
}