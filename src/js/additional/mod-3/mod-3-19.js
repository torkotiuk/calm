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
// console.table(products);

function getAllPropValues(propName) {
  //
  const arr = [];
  for (let obj of products) {
    //
    switch (obj[propName]) {
      case obj.name:
        arr.push(obj.name);
        break;
      case obj.price:
        arr.push(obj.price);
        break;
      case obj.quantity:
        arr.push(obj.quantity);
        break;
    }
    //
  }
  return arr;
}
console.log(getAllPropValues('name')); // [1300,2700,400,1200]
console.log(getAllPropValues('category')); // []
