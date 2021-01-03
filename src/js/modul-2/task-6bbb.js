let input;
const numbers = [];
let total = 0;

input = prompt('Enter a number');
input = Number(input);
numbers.push(input);
console.log('numbers :>> ', numbers);

for (const number of numbers) {
  total += number;
  console.log('total :>> ', total);
}
