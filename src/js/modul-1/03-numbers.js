// ======= Theory explanation ========
// remember to asign for constant "number"
const value1 = '555';
const numb1 = Number(value1);
console.log('Ex.1-typeof', typeof numb1);

// but it also works for letters and this is NOT ok, and make nosence
const value2 = 'qwerty';
const numb2 = Number(value2);
console.log('Ex.2-typeof', typeof numb2);
// so typeof in this case works not really correctly

// next string is much better and means that string with
// letters coudn't assigned to number and JS give us type "Not a Number" (NaN),
console.log('Ex.2-A-value', numb2);
// value works correctly

// =========== PRAСTIСE ==============
const blockWidth = '360px';
// We need to take only '360', NOT '360px'
// In constructer Number call the method parseInt,
// that try to assign possibly symbols to numbers,
// in other words looking for numbers from given symbols
const width = Number.parseInt(blockWidth);
console.log('Ex.3-value', width);
console.log('Ex.3-typeof', typeof width);
// Ex.4 for not only integ. numb. use parseFloat
const blockWidth1 = '360.5px';
const width1 = Number.parseFloat(blockWidth1);
console.log('Ex.4-value', width1);
console.log('Ex.4-typeof', typeof width1);
// Ex.5
console.log('Ex.5-A', 0.1 + 0.2 === 0.3); // false
console.log('Ex.5-B', 0.1 + 0.2); // 0.30000000000000004
// Сделать их целыми, умножив на 10, сложить, а результат разделить на 10
console.log('Ex.5-C', (0.1 * 10 + 0.2 * 10) / 10);

// Math theory
console.log(Math.ceil(2.7)); // 2
// Math.pow(base, exponent) - возведение в степень
console.log('Ex.6-Math', Math.pow(2, 4)); // 16
// ====== Math practice ========
let number = prompt('Enter number');
number = Number(number);
let power = prompt('Enter power');
power = Number(power);

console.log('Ex.6-A=numb', number);
console.log('Ex.6-A=power', power);

const result = Math.pow(number, power);
console.log('Result: ', result);
