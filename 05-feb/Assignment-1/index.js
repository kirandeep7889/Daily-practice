let firstNumber = prompt("Enter the first number:");
let secondNumber = prompt("Enter the second number:");

firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

let additionResult = firstNumber + secondNumber;
let subtractionResult = firstNumber - secondNumber;
let multiplicationResult = firstNumber * secondNumber;
let divisionResult = firstNumber / secondNumber;


console.log("Addition result: " + additionResult);
console.log("Subtraction result: " + subtractionResult);
console.log("Multiplication result: " + multiplicationResult);
console.log("Division result: " + divisionResult);

alert(
    "Addition result: " + additionResult + "\n" +
    "Subtraction result: " + subtractionResult + "\n" +
    "Multiplication result: " + multiplicationResult + "\n" +
    "Division result: " + divisionResult
);


