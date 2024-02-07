function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

function calculator(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}

const operator = prompt("Enter operator (+, -, *, /):");
const number1 = parseFloat(prompt("Enter first number:"));
const number2 = parseFloat(prompt("Enter second number:"));

const result = calculator(operator, number1, number2);

alert("Result:" +result)
console.log("Result:", result);
