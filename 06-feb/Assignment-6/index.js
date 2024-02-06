alert("Calculator Menu:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide");

let choice = parseInt(prompt("Enter your choice (1-4):"));
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let result;
switch (choice) {
    case 1:
        result = num1 + num2;
        break;
    case 2:
        result = num1 - num2;
        break;
    case 3:
        result = num1 * num2;
        break;
    case 4:
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            alert("Error: Division by zero");
        }
        break;
    default:
        alert("Invalid choice");
}

if (result !== undefined) {
    alert("Result: " + result);
}
