const inputRef = document.getElementById('name-input');
const nameOutputRef = document.getElementById('name-output');
// console.log(nameOutputRef.textContent);

inputRef.addEventListener('input', event => {
  nameOutputRef.textContent = event.target.value;

  console.log(nameOutputRef.textContent);
});

// inputRef.addEventListener('input', e => {
//   if (nameOutputRef.textContent === '') {
//     nameOutputRef.textContent = '';
//   }
// });
