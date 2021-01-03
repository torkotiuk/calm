/* THEORY
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10)); // true
*/

// task 29
// function getEvenNumbers(start, end) {
//   const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getEvenNumbers(2, 5)); //[2, 4]
// console.log(getEvenNumbers(3, 12)); //4, 6, 8, 10

// task 30 --- brak in neccesary iteration
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// task 31 --- without braek, to braek use return
// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }
// console.log(findNumber(16, 35, 7)); //21

// task 32
// Напиши функцию includes(array, value), которая делает тоже
// самое, что и метод массива массив.includes(значение) -
// проверяет, есть ли в массиве array значение value,
// возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes()
// нельзя использовать метод массив.includes(значение).
function includes(array, value) {
  for (let item of array) {
    if (item === value) {
      return item === value;
    }
  }
  return false;
}
console.log(includes([1, 2, 3, 4, 5], 3)); //true
console.log(includes([1, 2, 3, 4, 5], 17)); //false
console.log(
  includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер'),
); //true
