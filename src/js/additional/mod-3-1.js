// task 4
// const tags = ['premium', 'promoted', 'top'];
// console.log(tags[tags.length - 1]);

// task - 5
// THEORY
// const book = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл',
// };
// const book1 = {
//   title: 'Последнее королевство',
//   author: 'Бернард Корнуэлл111',
// };
// console.log(book['title']); // 'Последнее королевство'
// const propKey = 'author';
// console.log(book[propKey]); // 'Бернард Корнуэлл'
// console.log(book1[propKey]); // 'Бернард Корнуэлл111'
// TASK
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// task 6
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// // Пиши код ниже этой строки
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');
// //additional
// apartment.tags.splice(2, 0, 'newTag'); //insert element to array
// console.log(apartment.tags);
// //get some array from array in object
// const newArray = apartment.tags.slice(
//   apartment.tags.length - 3,
//   apartment.tags.length,
// );
// console.log(newArray);

// task 8
// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };
// console.log(product.price);

// task 9 - Вычисляемые свойства
//theory
// const propName = 'name';
// const propHobby = 'hobby123';
// const user = {
//   age: 25,
//   // Имя этого свойства будет взято из значения переменной propName
//   [propName]: 'Генри Сибола',
//   [propHobby]: 'Chess',
// };
// console.log(user);
// task
// const emailInputName = 'email';
// const passwordInputName = 'password';
// const credentials = {
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',
// };
// console.log(credentials);

// task 10 --- push keys to one [] and values to another []
// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
