// task 31
// function addOverNum(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// }
// console.log(addOverNum(1, 2, 3));

// task 32 - add numbers > from first number
// function addOverNum(firstNum, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstNum) {
//       total += arg;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51

//task 33
function findMatches(array, ...args) {
  const matches = []; // Не изменяй эту строку
  for (let arg of args) {
    for (let arr of array) {
      if (arr === arg) {
        matches.push(arg);
      }
    }
  }
  return matches;
}
console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); //1, 2
