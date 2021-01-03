// Ex. 1 - Add numer before item
// const staff = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const numbers = [1, 2, 3];

// const addSymbols = function(allData) {
//  for (let i = 0; i < allData.length; i++) {
//     console.log(`${i+1} -`, allData[i]);
//   }
// }

// addSymbols(staff);
// addSymbols(numbers);

// Ex. 2 - Slag any sentence
// it was before, without function
// const title = 'Top 10 benefits of React framework';
// const words = title.toLocaleLowerCase().split(' ');
// const slug = words.join('-');
// console.log(slug);
// CREATE FUNCTION
const slugyfy = function (string) {
  const words = string.toLowerCase().split(' ');
  const slug = words.join('-');
  return slug;
};
// const qwe = slugyfy('Who I am?');
// console.log('qwe :>> ', qwe);

// Ex.3. use 'slugyfy' function for any arrays and output slug strings
// const articles = ['Who I am?', 'What are you doung?', 'Books are still reading.'];

// for (const article of articles) {
//   const slug = slugyfy(article);
//   console.log('slug :>> ', slug);
// }

// Ex.4. Organize slug strings to an one array
const articles = [
  'Who I am?',
  'What are you doung?',
  'Books are still reading.',
];

const slugs = [];

for (const article of articles) {
  const slug = slugyfy(article);

  slugs.push(slug);
}

console.log('slugs :>> ', slugs);
/*['who-i-am?',
  'what-are-you-doung?',
  'books-are-still-reading.',
];
*/
