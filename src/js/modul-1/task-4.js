let credits = 23500;
let pricePerDroid = 3000;
let droidAmount = prompt('How many droids you wanna to buy');
let totalPrice = 0;


// console.log(typeof totalPrice);
// console.log(typeof droidAmount);

if (droidAmount === null) {
  console.log('Cancelled by user');
} else {
totalPrice = pricePerDroid * droidAmount;
console.log(totalPrice);
  if (totalPrice >= credits) {
    console.log('You have insufficient funds!!!');
  } else {
    credits = credits - totalPrice;
    console.log(`You have bought ${droidAmount} droids, your account balance is ${credits} credits`);
  }
}