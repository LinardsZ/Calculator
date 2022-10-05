"use strict";
const calcDisplay = document.querySelector(".calculator-display");
const clearButton = document.querySelector(".clear-btn");
const addButton = document.querySelector(".add-btn");
const subtractButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const moduloButton = document.querySelector(".modulo-btn");
const equalButton = document.querySelector(".equal-btn");

let FIRST_OPERAND = null;
let SECOND_OPERAND = null;
let OPERATOR = null;

clearButton.addEventListener("click", reset);

const operations = [addButton, subtractButton, multiplyButton, divideButton, moduloButton];
operations.forEach(function(button) {
  button.addEventListener("click", setOperator);
})

const numpad = document.querySelectorAll(".numpad");
numpad.forEach(function(button) {
  button.addEventListener("click", setOperand);
});

equalButton.addEventListener("click", operate);

function operate() {
    //TODO: if second operand is null, then execute the expression even without second operand
  if (!FIRST_OPERAND || !OPERATOR) return;
  switch (OPERATOR) {
    case "+":
      add();
      break;
    case "-":
      subtract();
      break;
    case "*":
      multiply();
      break;
    case "/":
      divide();
      break;
    case "%":
      modulo();
      break;
    default:
      alert("error");
    }
}

function add() {
  FIRST_OPERAND = +FIRST_OPERAND + +SECOND_OPERAND;
  clearInternalValues();
  setDisplay(FIRST_OPERAND);
}

function subtract() {
  FIRST_OPERAND = +FIRST_OPERAND - +SECOND_OPERAND;
  clearInternalValues();
  setDisplay(FIRST_OPERAND);
}

function multiply() {
  FIRST_OPERAND = +FIRST_OPERAND * +SECOND_OPERAND;
  clearInternalValues();
  setDisplay(FIRST_OPERAND);
}

function divide() {
  FIRST_OPERAND = +FIRST_OPERAND / +SECOND_OPERAND;
  clearInternalValues();
  setDisplay(FIRST_OPERAND);
}

function modulo() {
  FIRST_OPERAND = +FIRST_OPERAND % +SECOND_OPERAND;
  clearInternalValues();
  setDisplay(FIRST_OPERAND);
}

function setDisplay(value) {
  calcDisplay.textContent = value;
}

function setOperator() {
  if (OPERATOR === null && FIRST_OPERAND !== null) {
    OPERATOR = this.textContent;
  }
}

function setOperand() {
  if (FIRST_OPERAND === null) {
    FIRST_OPERAND = this.textContent;
    setDisplay(FIRST_OPERAND);
  }
  else if (FIRST_OPERAND !== null && OPERATOR === null) {
    FIRST_OPERAND = FIRST_OPERAND + this.textContent;
    setDisplay(FIRST_OPERAND);
  }
  else if (SECOND_OPERAND === null){
    SECOND_OPERAND = this.textContent;
    setDisplay(SECOND_OPERAND);
  }
  else {
    SECOND_OPERAND = SECOND_OPERAND + this.textContent;
    setDisplay(SECOND_OPERAND);
  }
}

function clearInternalValues() {
  SECOND_OPERAND = null;
  OPERATOR = null;
}

function reset() {
  calcDisplay.textContent = 0;
  FIRST_OPERAND = null;
  SECOND_OPERAND = null;
  OPERATOR = null;
}