const taskTwoRef = document.querySelector('#task2');

// =============== change some styles ===================
//make taskTwoRef to red color
// taskTwoRef.style.backgroundColor = 'red';
//change width
// taskTwoRef.style.width = '25px';
// taskTwoRef.style.border = '10px solid grey';
// ------------------- OR --------------------------------
const cssText = 'background-color: red; width = 30px; border: 10px solid grey';
taskTwoRef.style.cssText = cssText;
