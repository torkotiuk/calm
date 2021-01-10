// theory
// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';
// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// task 11 - hasOwnProperty
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log('apartmanet keys', keys);

// task 12 - Задача. Подсчёт свойств
// Напиши функцию countProps(object), которая считает и
// возвращает количество собственных свойств объекта в
// параметре object.
// function countProps(object) {
//   let propCount = 0;
// v-1
// const keyAmount = [];
// Пиши код ниже этой строки
// for (let key in object) {
//   if (object.hasOwnProperty(key)) {
//     keyAmount.push(key);
//   }
// }
// propCount = keyAmount.length;
// v-2
//   propCount = Object.keys(object).length;
//   return propCount;
// }
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); //2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// task 13
// get 'keys' and 'values' in object by Object.keys & for...of
// theory
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
//   genres: ['историческая проза', 'приключения'],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// for (const key of keys) {
//   // Ключ
//   console.log('KEY >>>', key);
//   // Значение свойства
//   console.log('VALUE >>>', book[key]);
// }

// task
// Перебери объект apartment используя метод Object.keys() и цикл for...of.
// Запиши в переменную keys массив ключей собственных свойств объекта apartment,
// и добавь в массив values все значения его свойств.
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// Пиши код ниже этой строки
// v1
// let keys = Object.keys(apartment);
// for (let key of keys) {
//   values.push(apartment[key]);
// }
// v-2
// for (let key of Object.keys(apartment)) {
//   values.push(apartment[key]);
//   // console.log(`${key}: ${apartment[key]}`);
// }

// console.log('Values:', values);

// task 14 - Задача. Подсчёт свойств 2.0 - refactoring with Object.keys() or/& for...of
// function countProps(object) {
//   return Object.keys(object).length;
// }

// task 16 - Object.values() --- total values
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (let value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); //330

// task 17 - Массив объектов
// Перебери массив объектов colors используя цикл for...of.
// Добавь в массив hexColors значения свойств hex, а в массив rgbColors
// значения свойств rgb из всех объектов массива colors.
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];
// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки
// for (let color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// task 18 - Задача. Поиск объекта по значению свойства
// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   for (let obj of products) {
//     if (productName === obj.name) {
//       return obj.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice('Радар'));
// console.log(getProductPrice('1454654654'));
