let inputValue = prompt("Enter the value to convert:");
let fromUnit = prompt("Enter the unit you are converting from (km or kg):").toLowerCase();
let toUnit = prompt("Enter the unit you are converting to (meters or grams):").toLowerCase();
let result;

if (fromUnit === "km" && toUnit === "meters") {
    result = parseFloat(inputValue) * 1000;
} else if (fromUnit === "kg" && toUnit === "grams") {
    result = parseFloat(inputValue) * 1000;
} else {
    alert("Invalid unit conversion. Please enter valid units (km, meters, kg, or grams).");
}

if (result !== undefined) {
    alert(`Result: ${result.toFixed(2)} ${toUnit}`);
}
