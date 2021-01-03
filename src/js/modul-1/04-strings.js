const firstName = 'Den';
const lastName = 'Boyd';
const room = 216;
const type = 'VIP';

// const fullName = firstName + ' ' + lastName;
// console.log('Fullname: ', fullName);

// OLD school
// const message = 'Guest' + ' ' + firstName + ' ' + lastName + 
// ' check in ' + type + ' '  + 'number ' + room;
// console.log(message);

//шаблонная строка
const message = `Guest ${firstName} ${lastName} check in ${type} cabin ${room}`;
console.log(message);
console.log(message .length);

// methods to know smth., f.e how many elements
// Attention!!! Numbers don't have lenght
// Every type of data has own methods
console.log('Hello' .length);

// 3. Свойства и методы строк
// Examlpl.
const superPass = 'qwerty';
// user input some info
const userInput = prompt('Enter info');
console.log('userInput: ', userInput);
// Check superPass with userInput
console.log(superPass === userInput);
//In technical task we should allow user to input 
// big and low letters of this pass, f.e Qwerty or qwerTY
const normalizedInput = userInput.toLocaleLowerCase();
// userInput doesn't change
console.log('userInput: ', userInput );
console.log('normalizedInput: ', normalizedInput);
console.log(superPass === normalizedInput);


