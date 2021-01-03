// Method 'splice' changes a current array
// ================= Remove cards ==================
const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5',];
console.log('cards :>> ', cards);
//f.e. delete 2 cards from index 1(with index 1 = 'card-2', with index 2 = 'card-3')
// cards.splice(1, 2);
// console.log('cards :>> ', cards);

const cardToRemove = 'card-3';
// to find index of an array element
// 'indexOf' works only for primitive types (strings and numbers)
// console.log('Element index:', cards.indexOf('card-3'));

const index = cards.indexOf(cardToRemove);
console.log('index :>> ', index);

cards.splice(index, 1);
console.log('Remove card :>> ', cards);

// to remove all elements from necessary index 
cards.splice(index);
console.log('Remove cards after definite index :>> ', cards);

// ================= Add cards ==================
// Add element somwhere in the middle of an array
// on index 1 add 'card-157', 'card-210', '0' - means NOT delete anything
cards.splice(1, 0, 'card-157', 'card-210');
console.log('Add cards in the middle of an array :>> ', cards);

const cardToInsert = 'card-250';
cards.splice(1, 0, cardToInsert);
console.log('Add one more card in the middle of an array :>> ', cards);

// ================= Remove card and add another one to their place ==================
const cardChanged = 'card-250-changed';
// 1 (card with index 1), 1 (delete card), cardChanged (value)
cards.splice(1, 1, cardChanged);
console.log('Add one more card in the middle of an array :>> ', cards);

