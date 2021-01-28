const elemRef = document.querySelector('#elem');
// elemRef.classList.add('www');
// elemRef.classList.remove('www');
// console.log(elemRef.classList.contains('www'));

//BOM method
// setInterval(() => {
//   elemRef.classList.toggle('www');
// }, 1000);

const classesOfElemRef = elemRef.classList.value; //first second third
console.log(classesOfElemRef.split(' ')); //["first", "second", "third", "www"]
console.log(classesOfElemRef.split(' ').length); // 3
