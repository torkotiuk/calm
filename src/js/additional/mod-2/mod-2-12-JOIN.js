/* Theory
const words = ['JavaScript', 'это', 'интересно'];
console.log(words.join('')); // 'JavaScriptэтоинтересно'
console.log(words.join(' ')); // 'JavaScript это интересно'
console.log(words.join('*')); // 'JavaScript*это*интересно'
*/

// task 12
// Дополни код функции makeStringFromArray(array, delimeter)
// так, чтобы она возвращала в переменной string результат 
// соединения элементов массива array c разделителем 
// delimeter - строку.
function makeStringFromArray(array, delimeter) {
  let string;
   string = array.join(delimeter);
  return string;
}
console.log(makeStringFromArray(['Манго', 'спешит', 'на', 'поезд'], ' '));
