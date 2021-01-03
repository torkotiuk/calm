// ----- create array from pseudo arguments -----
// v-1 - new method
const add = function (...args) {
  console.log(args);
  console.log(arguments);
};
console.log(add(1, 2, 3));

// v-2 - OLD SCHOOL method
// const add = function () {
//   const args = Array.from(arguments);
//   console.log(args);
//   // console.log(arguments);
// };
// console.log(add(1, 2, 3));
