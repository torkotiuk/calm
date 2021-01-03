// theory
console.log('before: ');
if (5 < 3) {
  // body
  console.log('inside: ');
}
console.log('after: ');

// Ex. 1
const balance = 100; //user money
const payment = 2000; //user have to pay
// const balance123 = balance - payment;
// console.log(balance123);

console.log(`Commont price is ${payment} we are checking your available balance`);

if (balance >= payment) {
  // balanse -= payment;
  const balance1 = balance - payment;
  console.log('Everything is OK, we are taking money and give you the product');
  console.log(`Your balance after operation is ${balance1}`)
} else {
  console.log(`Insufficient balance to do the operation`);  
}

console.log('Goodbye!');

// Ex. 2
// const totalExpences = 150;

// let discount = 0;
// console.log('Ex. 2')
// if (totalExpences >= 100 && totalExpences < 1000) {
//   discount = 2;
//   console.log('Bronz klient, discount 2%');
// } else if (totalExpences >= 1000 && totalExpences < 5000) {
//   discount = 5;
//   console.log('Silver klient, discount 5%');
// } else if (totalExpences >= 5000) {
//   discount = 10;
//   console.log('Gold klient, discount 10%');
// } else {
//   console.log('You haven not discount yet');
// }

// console.log(`We are processing order with discount ${discount}%`);

// Ex. 3 (according Ex. 2 + adding how much klient pay right know)
const totalExpences = 2000;
const payment3 = 500;

let discount = 0;
console.log('Ex. 3')
if (totalExpences >= 100 && totalExpences < 1000) {
  discount = 0.02;
  console.log('Bronz klient, discount 2%');
} else if (totalExpences >= 1000 && totalExpences < 5000) {
  discount = 0.05;
  console.log('Silver klient, discount 5%');
} else if (totalExpences >= 5000) {
  discount = 0.10;
  console.log('Gold klient, discount 10%');
} else {
  console.log('You haven not discount yet');
}

const finalAmount = payment3 - payment3 * discount;

console.log('Final amount to pay: ', finalAmount);

console.log(`We are processing order on ${finalAmount} with discount ${discount*100}%`);

// =======================In plain view or BLOCK PLAIN VIEW =================
const name = 'mango'; //name in general plain view

console.log('Global view name', name);

if (true) {
  const age = 5; 
  const name = 'ifView';
  console.log(age);
  console.log('name in plain view - IF', name); //{other plain view}
}

// console.log(age); --- will get error b/c age in '{other plain view}'

// Ternarnyj operator
// Ex. 4 - A - ususal 'if - else'
let category;
const age = 20;

if (age >= 18) {
  category = 'adult';
} else {
  category = 'child';
}

console.log('Ex. 4 - A', category);

// Ex. 4 - B - the same in ternarnyj operator
const age4B = 20;
const category4B = age4B >= 18 ? 'adult' : 'child';

console.log('Ex. 4 - B', category4B);