const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
function getAllPropValues(propName) {
  const newArr = [];
  for (const value of products) {
    for (const key in value) {
      if (propName === key) {
        newArr.push(value[key]);
      }
    }
  }
  return newArr;
}

console.log(getAllPropValues('name'));
console.log(getAllPropValues('price'));
