const inputRef = document.getElementById('validation-input');

const dataLengthRef = inputRef.getAttribute('data-length');

inputRef.addEventListener('change', e => {
  if (e.target.value.length < dataLengthRef) {
    // inputRef.style.borderColor = 'red';
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
  } else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
    // inputRef.style.borderColor = 'green';
  }
});
