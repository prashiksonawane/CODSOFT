let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function useOperator(op) {
  if (currentNumber !== "") {
    previousNumber = currentNumber;
    currentNumber = "";
    operator = op;
  }
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function calculate() {
  if (currentNumber !== "" && operator !== "") {
    let result = 0;
    switch (operator) {
      case "+":
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case "-":
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case "*":
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      case "/":
        if (currentNumber !== "0") {
          result = parseFloat(previousNumber) / parseFloat(currentNumber);
        } else {
          alert("Division by zero is not allowed!");
        }
        break;
    }
    currentNumber = result.toString();
    previousNumber = "";
    operator = "";
    document.getElementById("result").value = currentNumber;
  }
}
