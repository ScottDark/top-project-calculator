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
function operate(operator) {
  switch (operator) {
    case "+":
      break;

    case "-":
      break;

    case "x":
      break;

    case "÷":
      break;

    default:
      return;
  }
}

window.onload = display();

/* Returns: Clicked number button to screen*/
function display() {
  // Target elements to be used later.
  const displayContent = document.querySelector(".display");
  const btnDecimal = document.querySelector(".btnDecimal");
  const btnClear = document.querySelector(".btnClear");
  const btnNum = document.querySelectorAll(".btnNum");
  const btnOp = document.querySelectorAll(".btnOp");

  // Temp variables to hold data
  let tempCurrentNum = 0;
  let tempDisplayValue;
  let arrayCalc = [];
  let getBtnValue = 0;

  //Add Event listeners to numbers and operator buttons
  btnNum.forEach((element) => {});
  btnOp.forEach((element) => {});

  if (getBtnValue === 0) {
    getBtnValue = "";
  } else {
    displayContent.append(getBtnValue);
  }
}
