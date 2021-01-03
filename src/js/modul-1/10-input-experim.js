// let number = prompt('Enter number');
// number = Number(number);

// let power = prompt('Enter power');
// power = Number(power);

// console.log(number);
// console.log(power);

// const result = Math.pow(number, power);
// console.log(result);

const numberInputRef = document.querySelector('input[name="number"]');
const powerInputRef = document.querySelector('input[name="power"]');
const buttonRef = document.querySelector('button');

// '''''() =>'''' ----- in old school '''''function()'''''
buttonRef.addEventListener('click', () => {
  console.log('numberInputRef', numberInputRef.value);
  console.log('powerInputRef', powerInputRef.value);
  
  const number = Number(numberInputRef.value);
  const power = Number(powerInputRef.value);

  const result = Math.pow(number, power);
  console.log(result);
})

// ================= use in HW ====================
// const numberInputRef = document.querySelector('input[name="number"]');
// const powerInputRef = document.querySelector('input[name="power"]');
// const buttonRef = document.querySelector('button');

// buttonRef.addEventListener('click', () => {
 
// })

// ====================================================