// task 20 --- Задача. Общая стоимость товара
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
function calculateTotalPrice(productName) {
  let totalPrice = 0;
  for (let product of products) {
    if (product.name === productName) {
      totalPrice = product.price * product.quantity;
    }
  }
  return totalPrice;
}
console.log(calculateTotalPrice('Сканер')); //8100
console.log(calculateTotalPrice('Бластер')); //0
