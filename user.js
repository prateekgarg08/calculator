function onEqualInput(){
  if (isPending) {
    let b = operate(pendingOperator, pendingValue, display_value);
    display.textContent = b;
    pendingValue = null;
    pendingOperator = null;
    isNewNumber = true;
    isPending = false;
  }
}
function onDelInput(){
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
        console.log(display.textContent);
    } else {
        display.textContent = "0";
        isNewNumber = true;
    }
}
function onOperatorInput(operator) {
  if (isNewNumber) {
    pendingOperator = operator.id;
    return;
  }
  if (!isPending) {
    pendingValue = display_value;
    pendingOperator = operator.id;
    console.log("1");
    isNewNumber = true;
    isPending = true;
  } else {
    let b = operate(pendingOperator, pendingValue, display_value);
    display.textContent = b;
    pendingValue = display_value;
    pendingOperator = operator.id;
    console.log("2");
    isNewNumber = true;
  }
}

function onDotInput() {
  if (display.textContent.includes(".")) {
    return;
  } else {
    display.textContent += ".";
  }
}

function onNumberInput(number) {
  console.log(isNewNumber);
  if (isNewNumber) {
    display.textContent = number.textContent;
    isNewNumber = false;
  } else {
    display.textContent += number.textContent;
  }
}
numbers.forEach((number) => {
  number.addEventListener("click", () => onNumberInput(number));
});

clear.addEventListener("click", clearDisplay);

function clearDisplay() {
  display.textContent = "0";
  //isCleared == true;
  pendingOperator = null;
  pendingValue = null;
  isNewNumber = true;
  isPending = false;
}

operators.forEach((operator) => {
  operator.addEventListener("click", () => onOperatorInput(operator));
});

equal.addEventListener("click", onEqualInput);

del.addEventListener("click",onDotInput );

dot.addEventListener("click", onDotInput);

document.addEventListener("keydown", (e) => {
  console.log(e.keyCode);
  const key = document.querySelector(`button[data-keycode= "${e.keyCode}"]`);
  console.log(key);
  if (!key) return;
  if (Array.from(key.classList).includes("numbers")) onNumberInput(key);
  else if (key.id == "dot") onDotInput();
  else if (Array.from(key.classList).includes("operators")) onOperatorInput(key);
  else if (key.id == "del") onDelInput();
  else if (key.id == "equal") onEqualInput();
});
