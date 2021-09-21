// const btn_1 = document.getElementById("btn_1");
// const btn_2 = document.getElementById("btn_2");
// const btn_3 = document.getElementById("btn_3");
// const btn_4 = document.getElementById("btn_4");
// const btn_5 = document.getElementById("btn_5");
// const btn_6 = document.getElementById("btn_6");
// const btn_7 = document.getElementById("btn_7");
// const btn_8 = document.getElementById("btn_8");
// const btn_9 = document.getElementById("btn_9");

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const clear = document.querySelector("#clear");
const equal = document.querySelector("#equal");
const del = document.getElementById("del");
const dot = document.querySelector("#dot");

let display_value = parseFloat(display.textContent);

let observer = new MutationObserver((mutation) => {
  display_value = parseFloat(display.textContent);
  console.log(display.textContent);
});
observer.observe(display, { childList: true });

let pendingValue = null;
let pendingOperator = null;

let isCleared = true;
let isNewNumber = true;
let operatorSelected = null;
let isPending = false;
let isOperatorSelected = false;
