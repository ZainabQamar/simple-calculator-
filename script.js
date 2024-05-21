document.addEventListener("DOMContentLoaded", () => {
  let exp = "";
  const expression = document.querySelector(".expression");
  const result = document.querySelector(".result");

  function makeExp(char) {
    if (isOperator(char) && isOperator(exp.slice(-1))) {
      return; // If the last character is an operator, don't add another operator
    }
    exp += char;
    expression.textContent = exp;
  }

  function isOperator(char) {
    return ["+", "-", "*", "/", "%", "x"].includes(char);
  }

  function makeResult() {
    try {
      const newresult = eval(exp.replace(/x/g, "*")); // Replace 'x' with '*' for multiplication
      result.textContent = newresult;
    } catch (e) {
      result.textContent = "Not a valid expression";
    }
  }

  function clearAll() {
    exp = "";
    expression.textContent = "_";
    result.textContent = "0";
  }

  function deleteLast() {
    exp = exp.slice(0, -1);
    expression.textContent = exp || "_";
  }

  function calculateSquareRoot() {
    try {
      const newresult = eval(exp.replace(/x/g, "*")); // Replace 'x' with '*' for multiplication
      const squareRoot = Math.sqrt(newresult); // Find the square root
      result.textContent = squareRoot;
    } catch (e) {
      result.textContent = "Not a valid expression";
    }
  }

  function calculatePercentage() {
    try {
      const newresult = eval(exp.replace(/x/g, "*")); // Replace 'x' with '*' for multiplication
      const percentage = newresult / 100; // Calculate percentage
      result.textContent = percentage;
    } catch (e) {
      result.textContent = "Not a valid expression";
    }
  }

  window.makeExp = makeExp;
  window.makeResult = makeResult;
  window.clearAll = clearAll;
  window.deleteLast = deleteLast;
  window.calculateSquareRoot = calculateSquareRoot; // Expose the function globally
  window.calculatePercentage = calculatePercentage; // Expose the function globally
});
