const number = prompt("Enter a number:");
const num = parseInt(number);
console.log(`Multiplication table for ${num}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
