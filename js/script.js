import { formatNumber, formatNumberInteger } from "./format.js"

const globalInputA = document.querySelector("#inputA")
const globalInputB = document.querySelector("#inputB")

const inputSum = document.querySelector("#sum")
const inputSubtractionOne = document.querySelector("#subtraction-one")
const inputSubtractionTwo = document.querySelector("#subtraction-two")

const inputMultiplication = document.querySelector("#multiplication")
const inputDivisionOne = document.querySelector("#division-one")
const inputDivisionTwo = document.querySelector("#division-two")

const inputPowOne = document.querySelector("#pow-one")
const inputPowTwo = document.querySelector("#pow-two")

const inputDividerOne = document.querySelector("#divider-one")
const inputDividerTwo = document.querySelector("#divider-two")

const inputFactorialOne = document.querySelector("#factorial-one")
const inputFactorialTwo = document.querySelector("#factorial-two")

function start() {
  globalInputA.addEventListener("input", handleChangeInputA)
  globalInputB.addEventListener("input", handleChangeInputB)

  calculate()
}

function handleChangeInputA() {
  calculate()
}
function handleChangeInputB() {
  calculate()
}

function calculate() {
  const a = formatNumberInteger(globalInputA.value)
  const b = formatNumberInteger(globalInputB.value)

  inputSum.value = sum(a, b)
  inputSubtractionOne.value = subtract(a, b)
  inputSubtractionTwo.value = subtract(b, a)

  inputMultiplication.value = multiply(a, b)
  inputDivisionOne.value = divide(a, b)
  inputDivisionTwo.value = divide(b, a)

  inputPowOne.value = pow(a)
  inputPowTwo.value = pow(b)

  inputDividerOne.value = getDividersOfNumber(a)
  inputDividerTwo.value = getDividersOfNumber(b)

  inputFactorialOne.value = getFactorialOfNumber(a)
  inputFactorialTwo.value = getFactorialOfNumber(b)
}

function sum(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  if (num1 === 0 || num2 === 0) return "Divisão por 0"
  return formatNumber(num1 / num2)
}

function pow(num) {
  return num ** 2
}

function getDividersOfNumber(number) {
  let dividersOfNumber = []

  for (let i = 1; i <= number; i++) {
    number % i === 0 && dividersOfNumber.push(i)
  }

  return `${dividersOfNumber.toString()} (${dividersOfNumber.length})`
}

function getFactorialOfNumber(number) {
  if (number > 21) return "Número muito grande"
  if (number === 0) return 1
  return number * getFactorialOfNumber(number - 1)
}

window.addEventListener("load", () => start())