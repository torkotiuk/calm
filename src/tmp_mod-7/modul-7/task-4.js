const minusRef = document.querySelector('[data-action="decrement"]');
const plusRef = document.querySelector('[data-action="increment"]');
const spanValueRef = document.querySelector('#value');
// let val = Number(spanValueRef.textContent);
let counterValue = 0;

const increment = () => {
  counterValue += 1;
  spanValueRef.textContent = counterValue;
};
plusRef.addEventListener('click', increment);

const decrement = () => {
  counterValue -= 1;
  spanValueRef.textContent = counterValue;
};
minusRef.addEventListener('click', decrement);
