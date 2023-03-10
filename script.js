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
  const getDisplayResult = document.querySelector(".displayResult");

  switch (operator) {
    case "+":
      getDisplayResult.textContent = add(
        parseInt(numberOne),
        parseInt(numberTwo)
      );
      break;

    case "-":
      getDisplayResult.textContent = subtract(
        parseInt(numberOne),
        parseInt(numberTwo)
      );
      break;

    case "x":
      getDisplayResult.textContent = multiply(
        parseInt(numberOne),
        parseInt(numberTwo)
      );
      break;

    case "÷":
      getDisplayResult.textContent = divide(
        parseInt(numberOne),
        parseInt(numberTwo)
      );
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
  let buttonOp;

  // For each number btn add to display
  getButtonsNum.forEach((buttonNum) => {
    buttonNum.addEventListener("click", function () {
      // Set display as button text from numbers.
      getDisplay.textContent += buttonNum.textContent;
      displayNumber = getDisplay.textContent;
    });
  });

  // Get all operator buttons selected.
  const getButtonOp = document.querySelectorAll(".btnOp");

  getButtonOp.forEach((buttonOpTemp) => {
    buttonOpTemp.addEventListener("click", function () {
      // If display is empty then disable button operators.
      if (getDisplay.textContent == "") {
        // Do nothing
      } else {
        // Saves button operator if it is not "="
        buttonOp = buttonOpTemp.textContent;

        console.log(buttonOp);

        //  Saves number 2 to be used in Operate
        if (
          tempDisplayNumber1 != undefined &&
          tempDisplayNumber2 == undefined
        ) {
          tempDisplayNumber2 = displayNumber;
          displayNumber = "";
          getDisplayResult.textContent = tempDisplayNumber2;

          console.log("N2: " + tempDisplayNumber2);
        }

        // Saves number 1 to be used in Operate
        else {
          tempDisplayNumber1 = displayNumber;
          displayNumber = "";
          getDisplayResult.textContent = tempDisplayNumber1;
          getDisplay.textContent = "";

          console.log("N1: " + tempDisplayNumber1);
        }
      }
    });
  });

  const btnEqual = document.querySelector(".btnEqual");

  btnEqual.addEventListener("click", function () {
    if (getDisplay.textContent === "") {
      // Do nothing
    } else {
      tempDisplayNumber2 = displayNumber;
      displayNumber = "";
      getDisplayResult.textContent = tempDisplayNumber2;
      console.log("N2: " + tempDisplayNumber2);

      getDisplay.textContent = "";
      operate(buttonOp, tempDisplayNumber1, tempDisplayNumber2);
    }
  });

  // Allows AC to clear everything
  const btnClear = document.querySelector(".btnClear");

  btnClear.addEventListener("click", function () {
    getDisplay.textContent = "";
    getDisplayResult.textContent = "";
    displayNumber = 0;
    tempDisplayNumber1 = undefined;
  });
}
