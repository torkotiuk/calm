// Пример 2 - Дефолтные значения параметров функции
// Напишите функцию greet(name), 
// которая при вызове будет получать имя 
// (например, «Василий») и логировать строку «Привет, <имя>». 
// В случае отсутствующего аргумента выводить «Привет, гость»

const greet = function (name = 'гость') {
  const greeting = `Привет, ${name}!`;
  console.log(greeting);
};

greet('Манго');
greet();