// +++++++++ MODUL 2 - Example 1 (Repeta Vebinar 1, min: 51:00) +++++++++
// ==================Theory===================
// const title = 'Top 10 benefits of React framework';
// console.log(title.split(' ')); //["Top", "10", "benefits", "of", "React", "framework"]

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join('')); //12345
// ================END==Theory===================

// Example - way 1
// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);
// methods split and join +++++++++ MODUL 2 - Example 1 (Repeta Vebinar 1, min: 58:20) +++++++++

// Example - way 2
// const title = 'Top 10 benefits of React framework';

// const slug = title.toLocaleLowerCase().split(' ').join('-');
// console.log(slug);

// Example - way 3
// const title = 'Top 10 benefits of React framework';
// const words = title.toLocaleLowerCase().split(' ');
// const slug = words.join('-');
// console.log(slug);

//!!! Every of 3 ways are correct, BUT easiest code to undeerstand in way 3.
//MODUL 2 - Example 1 (Repeta Vebinar 1, min: 01:02:40) 
// +++++++++ END +++ MODUL 2 - Example 1 (Repeta Vebinar 1, min: 01:02:40) +++++++++

// Example 4-a, 4-b, 4-c are for training!!!
// Example 4 - A - way 4 with 'for' for training (the best way was 'Way 3')
// const title = 'Top 10 benefits of React framework';
// const words = title.toLocaleLowerCase().split(' ');
// console.log(words);
// console.log(words.length);
// let slug = '';
// for (let i = 0; i < words.length; i++) {
//   console.log(words[i]);
//   if (i !== words.length - 1) {
//     slug += words[i] + '-';
//   } else {
//     slug += words[i];
//   }
// }
// console.log(slug);

// Example 4 - B - the same as 'Example 4 - B' but with 'ternar oparator'
// const title = 'Top 10 benefits of React framework';
// const words = title.toLocaleLowerCase().split(' ');
// let slug = '';
// for (let i = 0; i < words.length; i++) {
//   slug += i !== words.length - 1 ? words[i] + '-' : words[i];
// }
// console.log(slug);
// it works OK, but Not really readible for other developers, so try to
// explain it better in the next example

// Example 4 - C
const title = 'Top 10 benefits of React framework';
const words = title.toLocaleLowerCase().split(' ');
let slug = '';
for (let i = 0; i < words.length; i++) {
  const isNotLastValue = i !== words.length - 1;
  slug += isNotLastValue ? words[i] + '-' : words[i];
}
console.log(slug);


