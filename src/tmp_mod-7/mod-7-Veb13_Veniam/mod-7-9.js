// 9 - Родители
// Дан элемент #task9.
const elemRef = document.querySelector('#task9');

// Найдите его родителя и покрасьте его в teal цвет.
elemRef.parentElement.style.backgroundColor = 'teal';

// Найдите родителя его родителя и покрасьте его в синий цвет.
// elemRef.parentElement.parentElement.style.backgroundColor = 'blue';
// === or === the same
//elemRef.parentNode.parentElement.style.backgroundColor = 'blue';

//take from html only size and value from atribute data-value, data-size
console.log(elemRef.dataset.size);
console.log(elemRef.dataset.value);
