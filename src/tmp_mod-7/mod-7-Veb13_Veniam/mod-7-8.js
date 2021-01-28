// 8 - Соседи
// Дан элемент #elem.
const elemRef = document.querySelector('#task8');

// Найдите его соседа сверху и добавьте ему в конец текст '!'.
elemRef.previousElementSibling.textContent += '!';

// Найдите его соседа снизу и добавьте ему в конец текст '?'.
elemRef.nextElementSibling.textContent += '?';

// Найдите его соседа снизу его соседа снизу
// (следующий элемент за соседним) и добавьте ему в конец текст '#'.
elemRef.nextElementSibling.nextElementSibling.textContent += '#';
