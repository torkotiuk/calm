// Ex.4.
// for (let i = 0; i < 5; i += 1) {
//   if (i % 2 === 0) {
//     console.log('Even number', i);
//   }
// }

// for (let i = 0; i < 5; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Odd number', i);
// }

//unlimited cycles
//Ex.5-A that 'cancel' inside if
// do {
// let input = prompt('Enter number');

// if (input === null) {
//   break;
// }

// } while (true);

//Ex.5-B that 'cancel' in 'while'
// let input;

// do {
//   input = prompt('Enter number');
//   } while (input !== null);

// Ex.5-C
// let input;

// do {
//   input = prompt('Enter number'); // null
//   input = Number(input); // when number is '0'
//   } while (input !== null);

// Ex. 5-D

// let total = 0;

// do {
// let input = prompt('Enter number');

// if (input === null) {
//   break;
// }

// input = Number(input);
// total += input;

// } while (true);

// console.log(`Common sum is ${total}`);

//Ex. 5-E (works only with numbers)
// let total = 0;

// while (true) {
// let input = prompt('Enter number');

// if (input === null) {
//   break;
// }

// input = Number(input);
// total += input;
// } 

// console.log(`Common sum is ${total}`);

//Ex. 5-F - !!!write remarks if input some text!!!
let total = 0;

while (true) {
let input = prompt('Enter number'); //not null

if (input === null) { //id doesn't work
console.log('Cancaled bu user');
  break;
}

input = Number(input); //get NoN'

const notAnumber = Number.isNaN(input); //true
if (notAnumber) { //works and back us to start
  console.log('You have entered not a number, continue from the beginning, means waiting for inputting next numbers'); 
  continue;       //iteration/cycle, means that it doesn't
}                 //added to total

total += input;
} 

console.log(`Common sum is ${total}`);
