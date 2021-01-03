const numbers = [];
let input;

if (input === null) {
  console.log(typeof input);
} else {
  const input = prompt('Enter a number');
  numbers.push(input);
  console.log('numbers inside for:>> ', numbers);
}

console.log('numbers at the end:>> ', numbers);
