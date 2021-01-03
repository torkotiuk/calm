/* Theory
const planets = ['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'];
console.log(planets.slice(0, 2)); // ['Земля', 'Марс']
console.log(planets.slice(0, 4)); // ['Земля', 'Марс', 'Венера', 'Юпитер']
console.log(planets.slice(1, 3)); // ['Марс', 'Венера']
*/
// TASK 14
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, fruits.length - 1);
const lastThreeEls = fruits.slice(fruits.length - 3 , fruits.length);
console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);