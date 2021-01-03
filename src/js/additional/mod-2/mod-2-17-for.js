//task 17 --- output numbers
// const start = 3;
// const end = 7;
// for (let i = start; i <= end; i += 1 ) {
//   console.log(i);
// }

// task 18 --- calculate total
// function calculateTotal(number) {
// let total = 0;
// for (let i = 1; i <= number; i += 1) {
//   total += i;
//   console.log(i);
// }
//   return total;
// }
// console.log('total:', calculateTotal(3));

// task 19 --- output array elements
// const planets = ['Земля', 'Марс', 'Венера'];
// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// task 20 --- sum up array elements
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     console.log(order[i]);
//     total += order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// task 21 --- find longest word from string
function findLongestWord(string) {
  // Пиши код ниже этой строки
  let words = string.split(' ');
  let lettersInWord = 0;
  let longestWord = '';
  for (let i = 0; i < words.length; i += 1) {
    if(words[i].length > lettersInWord){
      lettersInWord = words[i].length;
      longestWord = words[i];
    }
  }
  return longestWord;
  // Пиши код выше этой строки
}
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord("quick brown fox TheQWEqweQ jumped over the lazy dog"));

// function findLongestWord1(str) {
//   var strSplit = str.split(' ');
//   var longestWord1 = 0;
//   for(var i = 0; i < strSplit.length; i++){
//     if(strSplit[i].length > longestWord1){
// 	longestWord1 = strSplit[i].length;
//      }
//   }
//   return longestWord1;
// }
// console.log(findLongestWord1("The quick brown fox jumped over the lazy dog"));