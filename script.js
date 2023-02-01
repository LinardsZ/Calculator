"use strict";
const calcDisplay = document.querySelector(".calculator-display");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");
const operatorButtons = document.querySelectorAll(".operator");
const numpadButtons = document.querySelectorAll(".numpad");
const backspaceButton = document.querySelector(".backspace");

let calculationResult = 0;
let operator = null;

function resetCalculator() {
  calcDisplay.textContent = "0";
  calculationResult = 0;
  operator = null;
}

function setCalculatorDisplay(event) {
  let nextDigit = event.target.getAttribute("data-num");
  let displayedValue = calcDisplay.textContent;

  if (isNaN(displayedValue + nextDigit) || displayedValue.length === 16) return; //the size of the calculator on the webpage only allows for up to 16 characters

  if(displayedValue === "0" || displayedValue === "") {
    calcDisplay.textContent = nextDigit;
  }
  else {
    calcDisplay.textContent = displayedValue + nextDigit; 
  }
}

function setCalculatorState(event) { //3+3= and 3+3 + (shows result, saves +)
  let newOperator = event.target.getAttribute("data-operator");
  if (operator === null) {
    calculationResult = calcDisplay.textContent;
    calcDisplay.textContent = "";
  }
  operator = newOperator;
}

function calculateResult() {
  let firstOperand = +calculationResult;
  let secondOperand = +calcDisplay.textContent;
  
  switch(operator) {
    case "+":
      firstOperand += secondOperand;
      break;
    case "-":
      firstOperand -= secondOperand;
      break;
    case "*":
      firstOperand *= secondOperand;
      break;
    case "/":
      firstOperand /= secondOperand;
      break;
    case "%":
      firstOperand %= secondOperand;
      break;
    default: //handle case for = and unexpected cases
      break;
  }

  calcDisplay.textContent = firstOperand;
  calculationResult = firstOperand;
  operator = null;
}


operatorButtons.forEach(button => button.addEventListener("click", setCalculatorState));
numpadButtons.forEach(button => button.addEventListener("click", setCalculatorDisplay));
equalButton.addEventListener("click", calculateResult);
clearButton.addEventListener("click", resetCalculator);
backspaceButton.addEventListener("click", () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
    if(operator === null) calculationResult = calcDisplay.textContent;

    if (calcDisplay.textContent === "-") {
      calcDisplay.textContent = "";
      calculationResult = 0;
    }
});


