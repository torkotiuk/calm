// 4 - Вставка элементов через appendChild
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

const olRef = document.querySelector('ol');
const liRef = document.createElement('li');
liRef.textContent = 'пункт';

// === Add to the end new li
// olRef.appendChild(liRef);

// === add in the middle new li
// const oLchildren = olRef.children; //only pseudoArray
// const listMiddleIndex = Math.round(oLchildren.length / 2);
// olRef.insertBefore(liRef, oLchildren[listMiddleIndex]);

// === create array of values from pseudoArray
const textArray = Array.from(olRef.children).map(el => el.textContent);

// === fn that creates new li-s from array of strings
const newLiRefs = textArray.map(text => {
  const itemRef = document.createElement('li');
  itemRef.textContent = text;
  return itemRef;
});

//select ul
const ulRef = document.querySelector('ul');

ulRef.append(...newLiRefs);
// Дан ul. Дан массив.
// Вставьте элементы этого массива в конец ul так,
// чтобы каждый элемент стоял в своем li.
