// console.log('3. Фильтрация массива');
// const filter = function(array) {
//   for (const element of array) {
//     console.log(element);
//   }
// };
// filter([1, 5, 25, 50, 11]);

// 
const filter = function(array, test) {
  for (const element of array) {
    test(element);
  }
  console.log(element);
};

const test = function(value) {
  console.log(value);
};

filter([1, 5, 25, 50, 11], test);
