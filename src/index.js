import "./styles.css"

const display = document.querySelector("input")

const buttons = Array.from(document.querySelectorAll("button"))
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.dataset.number === "=") {
            calculate()
        } else if (button.dataset.number === "C") {
            display.value = ""
        } else {
            display.value += button.dataset.number
        }
    })
})

const isSymbol = (element) => element === "+" || element === "-" || element === "x" || element === "/"

function calculate() {
    let theString = display.value
    theString = theString.split("")
    let opIdx = theString.findIndex(isSymbol)

    let numOne = parseInt(theString.slice(0, opIdx).join(""))
    let numTwo = parseInt(theString.slice(opIdx + 1).join(""))
    let opSymb = theString[opIdx]

    if (opSymb === "+") {
        display.value = numOne + numTwo
    } else if (opSymb === "-") {
        display.value = numOne - numTwo
    } else if (opSymb === "x") {
        display.value = numOne * numTwo
    } else if (opSymb === "/") {
        display.value = numOne / numTwo
    }
}