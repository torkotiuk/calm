// task 21
// theory - - - destrukturyzacija object data
const book = {
  title: 'Последнее королевство',
  author: 'Бернард Корнуэлл',
  genres: ['историческая проза', 'приключения'],
  public1: true,
  rating: 8.38,
};

// Деструктуризируем - Объявим переменные и присвоим им значения из объекта
const { title, author, public1, rating, coverImage } = book;
console.log(coverImage); // undefined

const accessType = public1 ? 'публичном' : 'закрытом';
const message = `Книга ${title} автора ${author} с рейтингом ${rating} находится в ${accessType} доступе.`;
console.log(message);
