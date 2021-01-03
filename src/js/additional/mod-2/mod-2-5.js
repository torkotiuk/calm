// task 4, 5 - Доступ к элементам по индексу
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
fruits[0];
// set variable for some index element
const firstElement = fruits[0];
// Переопределение значения элемента
fruits[3] = 'банан';
// Длина массива
const fruitsArrayLength = fruits.length;
//Индекс последнего элемента
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];
// task - 9
//Крайние элементы массива
// Напиши функцию getExtremeElements(array) которая принимает
// один параметр array - массив элементов произвольной длины.
// Функция должна возвращать массив из двух элементов - 
// первого и последнего элемента параметра array.
function getExtremeElements(array) {
  const firstElement = array[0];
  const lastElementIndex = array.length - 1;
  const lastElement = array[lastElementIndex];
  return array = [firstElement, lastElement];
}
// task - 10 - Метод строк split() === create array from string
/* Theory
const message = 'JavaScript это интересно';
console.log(message.split(' ')); // ['JavaScript', 'это', 'интересно']
*/
function splitMessage(message, delimeter) {
  let words = message.split(delimeter);
  console.log('Words:', words);
  console.log('Amount of words:', words.length);
  return words;
}
// console.log(splitMessage('лучшее_за_неделю', '_')); //['лучшее', 'за', 'неделю'].
console.log(splitMessage('Манго спешит на поезд', ' '));
// console.log(splitMessage('Манго', ''));
