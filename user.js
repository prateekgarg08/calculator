numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (isNewNumber) {
      display.textContent = number.textContent;
      isNewNumber = false;
    } else {
      display.textContent += number.textContent;
    }
  });
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
  operator.addEventListener("click", () => {
    if (isNewNumber) {
      pendingOperator = operator.id;
      return;
    }
    if (!isPending) {
      pendingValue = display_value;
      pendingOperator = operator.id;
      isNewNumber = true;
      isPending = true;
    } else {
      let b = operate(pendingOperator, pendingValue, display_value);
      display.textContent = b;
      pendingValue = display_value;
      pendingOperator = operator.id;
      isNewNumber = true;
    }
  });
});

equal.addEventListener("click", () => {
  if (isPending) {
    let b = operate(pendingOperator, pendingValue, display_value);
    display.textContent = b;
    pendingValue = null;
    pendingOperator = null;
    isNewNumber = true;
    isPending = false;
  }
});

del.addEventListener("click", () => {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(
      0,
      display.textContent.length - 1
    );
    console.log(display.textContent);
  } else {
    display.textContent = "0";
  }
});
