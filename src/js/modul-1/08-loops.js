// for (let i = 0; i < 3; i += 1) {
//   console.log(`Cycle ${i}`);
// }

// for (let i = 3; i >0; i -= 1) {
//   console.log(`Cycle ${i}`);
// }

// Ex.1
// Theory REMEMBER - prompt give us string by default
// v.1 from user
// let userInput1 = prompt('Enter number');
// userInput1 = Number(userInput1);
// v.2 only in console
const userInput1 = 3;
let total1 = 0;
for (let i = 1; i <= userInput1; i += 1) {
  // console.log(`Cycle ${i}`);
  total1 += i;
}
console.log(`Total(Ex.1): ${total1}`);

//Ex.2
const number2 = 3;
let total2 = 0;
let i2 = 2;
while (i2 <= number2) {
total2 += i2;
i2 += 1;
}
console.log(`Total(Ex.2): ${total2}`);

//in Ex.2 if 'i2' higher than 'number2' we will get '0'
// but we need to do this cicle at least one time
// Ex.3-A
// let userInput3;
// do {
//   userInput3 = prompt('Enter 5');
//   userInput3 = Number(userInput3);
// } while (userInput3 !== 5)

// In Ex.3-A user should input '5', 'cancel' back to cycle
//so we should give choose for user to cancel operation
// Ex.3-B
// let userInput3;
// do {
//   userInput3 = prompt('Enter 5');

//   if (userInput3 === null) {
//     break;
//   }
  
//   userInput3 = Number(userInput3);
// } while (userInput3 !== 5)



