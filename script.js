function add(numOne, numTwo) {
    return numOne + numTwo
}

function sub(numOne, numTwo) {
    return numOne - numTwo
}

function mul(numOne, numTwo) {
    return numOne * numTwo
}

function div(numOne, numTwo) {
    return numOne / numTwo
}

const display = document.querySelector("#display")

function appendToDisplay(input) {
    display.value += input;
}

// This is a callback function that checks if a character is equal to the operator to use in findIndex method
const isSymbol = (element) => element === "+" || element === "-" || element === "x" || element === "/"

function calculate() {
    let theString = display.value
    theString = theString.split("")
    opIdx = theString.findIndex(isSymbol)

    let numOne = parseInt(theString.slice(0, opIdx).join(""))
    let numTwo = parseInt(theString.slice(opIdx + 1).join(""))
    let opSymb = theString[opIdx]

    if (opSymb === "+") {
        display.value = add(numOne, numTwo)
    } else if (opSymb === "-") {
        display.value = sub(numOne, numTwo)
    } else if (opSymb === "*") {
        display.value = mul(numOne, numTwo)
    } else if (opSymb === "/") {
        display.value = div(numOne, numTwo)
    }
}

function clearScreen() {
    display.value = ""
}