//find out name of tag, in a beginning we have id = 'task3'
const elemRef = document.querySelector('#task3');
console.log(elemRef);
console.log(elemRef.tagName);

const item3Ref = document.querySelectorAll('.item3');
console.log(item3Ref);
item3Ref.forEach(ref => {
  ref.textContent += ref.tagName;
});
