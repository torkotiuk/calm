const productName = 'Ремонтный дроид';
console.log(productName.slice(0, 4)); // 'Ремо'
console.log(productName.slice(3, 9)); // 'онтный'
console.log(productName.slice(0, productName.length)); // 'Ремонтный дроид'
console.log(productName.slice(10, productName.length)); // 'дроид'

// ==== TASK 32 ====
function getSubstring(string, length) {
  const substring = string.slice(0, length);; // Дополни эту строку
  return substring;
}
console.log(getSubstring('Hi world', 2));

// ==== TASK 33 ====
// Функция formatMessage(message, maxLength) принимает 
// строку (параметр message) и форматирует её, если длина
// превышает значение в параметре maxLength.
function formatMessage(message, maxLength) {
  let result;
// Пиши код ниже этой строки
console.log(message.length);
if (message.length > maxLength) {
  result = message.slice(0, maxLength) + '...';
  } else {
  result = message;
}
// Пиши код выше этой строки
  return result;
}
console.log(formatMessage('Hi world!', 6)); //Hi world!...
console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 42));
