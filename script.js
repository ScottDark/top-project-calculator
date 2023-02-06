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
  let button = document.querySelectorAll(".btn");
  let counter = 0;
  let displayValue = 0;

  const calc = new Object();

  button.forEach((e) => {
    e.addEventListener("click", function getButton() {
      let displayCurrent = document.querySelector(".displayCurrent");
      let displaySum = document.querySelector(".displaySum");

      if (
        e.textContent === "=" ||
        e.textContent === "÷" ||
        e.textContent === "x" ||
        e.textContent === "-" ||
        e.textContent === "+"
      ) {
        let calcNumber = displayCurrent.textContent;
        let operator = e.textContent;
        if (counter >= 2) {
          counter = 0;
        }
        displayValue = displayCurrent.textContent = "";
        counter++;

        calc.operator = operator;
        calc[`number${counter}`] = calcNumber;

        console.log(calc);
        console.log(counter);
      } else if (e.textContent === "AC") {
        displayValue = displayCurrent.textContent = "";
        counter = 0;
        return displayValue;
      } else {
        displayValue = displayCurrent.textContent += e.textContent;
        return displayValue;
      }
    });
  });
}
