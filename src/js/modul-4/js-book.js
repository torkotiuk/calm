console.log('1. Введение');
// const printMessage = function(message) {
//   console.log(message);
// };

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage); 

// =============
// 1
const add = (callback) => {
  let a = 10;
  let b = 15;
  let c = a + b;
  callback(c);
}

const prin = (output123) => {
  console.log(output123);
}

add(prin);

// 2 - A
console.log('2. Абстрагирование повторения');
const repeatLog = function(n) {
  for (let i = 0; i < n; i += 1) {
    console.log(i);
  }
};

repeatLog(3);

console.log('2. А - print necessary value');
// 2 - B
const printValue = function(value) {
  console.log(value);
};
const prettyPrint = function(value) {
  console.log('Logging value: ', value);
};

const repeat = function(n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

// Передаем printValue как callback-функцию
repeat(3, printValue);
// 0
// 1
// 2

// Передаем prettyPrint как callback-функцию
repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2