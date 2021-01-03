// task 15
// const firstArray = ['Меркурий', 'Венера', 'Земля'];
// const secondArray = ['Марс', 'Юпитер'];
// const thirdArray = ['Сатурн', 'Уран', 'Нептун'];
// const allPlanets = firstArray.concat(secondArray, thirdArray);
// console.log(allPlanets); // ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];

// task-16
// Напиши функцию makeArray(firstArray, secondArray, maxLength)
// для создания нового массива со всеми элементами двух исходных
// firstArray и secondArray. Параметр maxLength содержит
// максимально допустимую длину нового массива.
// Если количество элементов нового массива больше maxLength,
// функция должна вернуть копию массива длиной maxLength 
// элементов.
// В противном случае функция должна вернуть новый массив 
// целиком.
function makeArray(firstArray, secondArray, maxLength) {
const newArray = firstArray.concat(secondArray).slice(0, maxLength);
return newArray;
}



console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3)); // ['Манго', 'Поли', 'Аякс'].
console.log(makeArray(['Манго', 'Поли', 'Хьюстон'], ['Аякс', 'Челси'], 4));  // возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
console.log(makeArray(['Манго'], ['Аякс', 'Челси', 'Поли', 'Хьюстон'], 3));  // возвращает ['Манго', 'Аякс', 'Челси'].
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 0)); // []
console.log(makeArray(['Земля', 'Юпитер'], ['Нептун', 'Уран', 'Венера'], 10)); // []