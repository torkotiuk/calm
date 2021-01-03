// Example 1 - using "let"
let hobby = 'Fish';
console.log(hobby);
// it is possibly to assign "let" method
hobby = 'Chess';
console.log(hobby);

// Example 2 - using "const"
const message = 'Welkow to Hawai';
console.log(message);
// it is NOT possibly to assign "message" method
// message = 'Chess';

// In general we will use "const" method,
// we will use "let" only when we should
// assign value

// Serious mode - USE STRICT
// When you asign new variable
// DON't do like hobby = 'Chess';
// but DO like this const message = 'Welkow to Hawai';

// we have to USE STRICT, if we
// assign for scrypt in html type='module',
// it works by dafault from browsers,
// so if we do like hobby = 'Chess';
// in type="module" scripts, wi will get error
