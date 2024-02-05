var principal = parseFloat(prompt("Enter the principal amount:"));
var rate = parseFloat(prompt("Enter the rate of interest per annum:"));
var time = parseFloat(prompt("Enter the time period in years:"));
var simpleInterest = (principal * rate * time) / 100;

alert("Principal Amount: Rs" + principal +
    "\nRate of Interest: " + rate + "%" +
    "\nTime Period: " + time + " years" +
    "\nSimple Interest: Rs" + simpleInterest.toFixed(2));
