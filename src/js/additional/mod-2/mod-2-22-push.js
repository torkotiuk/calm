// task 22
// Create функция createArrayOfNumbers(min, nax) так, чтобы она
// возвращала массив всех целых чисел от значения min до max.
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34)); //[29, 30, 31, 32, 33, 34]

// task 23
// Напиши функцию filterArray(numbers, value), которая
// принимает массив чисел (параметр numbers) и возвращает
// новый массив, в котором будут только те элементы массива
// numbers, которые больше чем значение параметра value (число).
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(-3);
// console.log(arr);
// console.log(newArr);
// arr[10] = 50;
// console.log(arr);
function filterArray(numbers, value) {
  let newArr = [];
  for (let i = 0; i <= numbers.length; i += 1) {
    if (value < numbers[i]) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41,76]
