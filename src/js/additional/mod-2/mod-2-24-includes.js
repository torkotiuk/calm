// task 24 --- get true/false
// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
//   return fruits.includes(fruit); // Дополни эту строку
// }
// console.log(checkFruit('яблоко'));

// task 25
//Напиши функцию getCommonElements(array1, array2) которая
// получает два массива произвольной длины в параметры array1
// и array2, и возвращает новый массив, состоящий из тех
// элементов, которые присутствуют в обоих исходных массивах.
function getCommonElements(array1, array2) {
  let newArr = [];
  for (let i = 0; i < array1.length; i += 1) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
}

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[2, 1]
// console.log(getCommonElements([10, 20, 30, 40], [1, 4, 30, 17, 10, 40])); // [10,30,40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// TASK - 27 --- refactor next fn to 'for...of'
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Пиши код выше этой строки
}
console.log(filterArray([12, 24, 8, 41, 76], 38)); //41, 76
