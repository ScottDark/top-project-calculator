// Calculation functions START

/* Returns: Sum of two numbers
 * args: Two numbers */
function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

/* Returns: Subtraction result of two numbers
 * args: Two numbers */
function subtract(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

/* Returns: Multiplication result of two numbers
 * args: Two numbers */
function multiply(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

/* Returns: Division of two numbers
 * args: Two numbers */
function divide(numberOne, numberTwo) {
  return numberOne / numberTwo;
}

// Calculation functions END

/* Returns: Calc function
 * args: operator, two numbers */
function operate(operator, numberOne, numberTwo) {
  switch (operator) {
    case "+":
      console.log(add(numberOne, numberTwo));
      break;

    case "-":
      console.log(subtract(numberOne, numberTwo));
      break;

    case "x":
      console.log(multiply(numberOne, numberTwo));
      break;

    case "÷":
      console.log(divide(numberOne, numberTwo));
      break;

    default:
      return;
  }
}

window.onload = display();

/* Returns: Clicked number button to screen*/
function display() {
  // Get class to be able to read/write to it and make adjustments to class div.
  const getDisplay = document.querySelector(".display");
  const getDisplayResult = document.querySelector(".displayResult");
  const getButtonsNum = document.querySelectorAll(".btnNum");
  // displayText used to store first number.
  let displayNumber = 0;
  let tempDisplayNumber1;
  let tempDisplayNumber2;

  getButtonsNum.forEach((buttonNum) => {
    buttonNum.addEventListener("click", function () {
      // Set display as button text from numbers.
      getDisplay.textContent += buttonNum.textContent;
      displayNumber = getDisplay.textContent;
    });
  });

  // Get all operator buttons selected.
  const getButtonOp = document.querySelectorAll(".btnOp");

  getButtonOp.forEach((buttonOp) => {
    buttonOp.addEventListener("click", function () {
      // When operator btn gets clicked save the displayNumber in temp var
      // to make it easier to save second set of numbers for calculation.
      if (tempDisplayNumber1 != undefined && tempDisplayNumber2 == undefined) {
        tempDisplayNumber2 = displayNumber;
        displayNumber = "";
        getDisplayResult.textContent = tempDisplayNumber2;
        console.log("temp2 " + tempDisplayNumber2);
      } else {
        tempDisplayNumber1 = displayNumber;
        displayNumber = "";
        getDisplayResult.textContent = tempDisplayNumber1;
        getDisplay.textContent = "";
      }

      // Clear the display and all variables if AC button is clicked.
      if (buttonOp.textContent === "AC") {
        getDisplay.textContent = "";
        getDisplayResult.textContent = "";
        displayNumber = 0;
        tempDisplayNumber1 = null;
      }
    });
  });
}
