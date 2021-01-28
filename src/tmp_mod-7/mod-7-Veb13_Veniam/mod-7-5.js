// 5 - Вставка элементов через insertBefore
// Дан элемент ul, а в нем li #elem.
// Вставьте перед элементом #elem новую li с текстом '!!!'.
const ulRef = document.querySelector('ul');
const elemRef = document.querySelector('#elem5');

//new elem that we should to insert
const liRef = document.createElement('li');
liRef.textContent = '!!!';

// === insert liRef before elemRef
ulRef.insertBefore(liRef, elemRef);
