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

/* Display function */
function display() {
  let button = document.querySelectorAll(".btn");

  button.forEach((e) => {
    let displayValue = e.addEventListener("click", function getButton() {
      console.log(e.textContent);
    });
  });

  let display = document.querySelector(".display");
  // display.textContent = anyNumber;
}
