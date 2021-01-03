// method 'PUSH' +++++++++ MODUL 2 - Example 1 (Repeta Vebinar 1, min: 43:30) +++++++++
const valueInputRef = document.querySelector('.js-value');
const addValueBtn = document.querySelector('.js-add-value');
const calcBtn = document.querySelector('.js-calculate');

const numbers = [];
let total = 0;

addValueBtn.addEventListener('click', function() {
  
  const value = Number(valueInputRef.value);
  // console.log(valueInputRef.value);
  numbers.push(value);
  
  valueInputRef.value = ''; //clear input after adding value
  console.log(numbers);
});

calcBtn.addEventListener('click', function() {
  
  for (const number of numbers) {
    // console.log(number);
    total += number;
  }
  console.log('total: ', total);

});
// +++++++++ END +++++++ MODUL 2 - Example 1 (Repeta Vebinar 1, min: 51:30) +++++++++




