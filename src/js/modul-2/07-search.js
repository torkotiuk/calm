// const numbers = [11, 35, 2, 27, 56, 152];
// let smallestNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   // console.log('numbers[i] :>> ', numbers[i]);
//   // console.log('smallestNumbers :>> ', smallestNumber);

//   // if the first number smaller, assign it to numbers[i]
//   if (numbers[i] < smallestNumber) {
//     smallestNumber = numbers[i];
//   }
// }

// console.log('smallestNumber :>> ', smallestNumber);

// ======================='1. Create fn. 2. Input data.'==============================
//create function
const findSmallestNumber = function(items) {
  let smallestNumber = items[0];
  for (let i = 1; i < items.length; i++) {
    if (items[i] < smallestNumber) {
      smallestNumber = items[i];
    }
  }
  return smallestNumber;
}
// function is ready

// input some array with numbers to find out smallest number
// v-1.
// const minNumb = findSmallestNumber([1, -5, 10, 11]);
// console.log('minNumb :>> ', minNumb);
// v-2.
console.log('Min :>> ', findSmallestNumber([1, -5, 10, 11]));
// ======================= END - '1. Create fn. 2. Input data.'==============================

