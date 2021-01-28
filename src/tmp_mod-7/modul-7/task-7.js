const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');
// const computedStyles = getComputedStyle(spanRef);
// console.log(computedStyles.fontSize);

inputRef.addEventListener('input', e => {
  // e.preventDefault();
  spanRef.style.fontSize = `${e.target.value}px`;
});
