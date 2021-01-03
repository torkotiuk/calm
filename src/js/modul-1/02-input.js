// After next string we will see alert, but with no sence
// confirm('Do you want to renew your subscription?');

// To make sence of prev alert we set "confirm as a constant"
// Ex.1
const shouldRenew = confirm('Do you want to renew your subscription?');
console.log('Example 1', shouldRenew);

// Ex.2
// no sence
// prompt('Enter number 10');
// with sence
const inputEnter = prompt('Enter number 10');
console.log('Example-2-console', inputEnter);
// to know what kind of const we get use "typeof",
// so if we input something we get 'string',
// if we cancel entering we get 'object'
console.log('Example-2-typeof', typeof inputEnter);
// prompt -- give us 'string'

// Ex.3 - we want from user inputing only number 10, NOT text or other numbers
// Ex.3-A
const inputEnter123 = prompt('Enter number 23');
console.log('Ex.3-A-output ', inputEnter123);
console.log('Ex.3-A-typeof ', typeof inputEnter123);
console.log('Ex.3-A-=== ', inputEnter123 === 10);
// After this we will get 'false' all the time,
// b/c 'string' '10' not equal for 'number' '10'
// Ex.3-B
// In this option we have to use "let" instead of "const",
// b/c "let" allows to asign variable
let inputEnter3333 = prompt('Enter number 32');
inputEnter3333 = Number(inputEnter3333);
console.log('Ex.3-B-output', inputEnter3333);
console.log('Ex.3-B-typeof', typeof inputEnter3333);
console.log('Ex.3-B-=== ', inputEnter3333 === 10);
