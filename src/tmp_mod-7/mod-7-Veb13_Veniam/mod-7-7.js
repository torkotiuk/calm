// 7 - Потомки
// Дан элемент #task7.
const elemRef = document.querySelector('#task7');

// Найдите первого потомка этого элемента
// и сделайте его текст красного цвета.
elemRef.firstElementChild.style.color = 'red';

// Найдите последнего потомка этого элемента
// и сделайте его текст синего цвета.
elemRef.lastElementChild.style.color = 'blue';

// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
const childrenRefs = Array.from(elemRef.children);

childrenRefs.forEach(ref => {
  ref.textContent += '!';
});
