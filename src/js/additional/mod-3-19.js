// task 19 - Задача. Коллекция значений свойства
// Напиши функцию getAllPropValues(propName) которая принимает один
// параметр propName - имя (ключ) свойства. Функция должна вернуть массив
// всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  for (let obj of products) {
    // console.log(Object.keys(products)); // [0, 1, 2, 3,]
    let arrResult = [];
    console.log(obj.name);
    if (obj.name === propName) {
      arrResult.push(obj.name);
      return arrResult;
    }
  }
}
console.log(getAllPropValues('price')); // [1300,2700,400,1200]
// console.log(getAllPropValues('category')); // []
