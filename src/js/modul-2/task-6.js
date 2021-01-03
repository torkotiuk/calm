const numbers = [];

for (let i = 0; true; i++) {
let total = 0;
let input = prompt('Enter a number');

  if (input === null) {
    break; 
  } else {
      input = Number(input);
      numbers.push(input);
      console.log('numbers :>> ', numbers);
  }

  for (const number of numbers) {
    total += number;
    }

  console.log('total: ', total);
}
