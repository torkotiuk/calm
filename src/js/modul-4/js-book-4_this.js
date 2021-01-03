const greet = function(guest) {
  return `${guest}, welcome to ${this.name}!`;
};

const hotel = { name: 'Resort Hotel' };
// const hotelGreeter = greet.bind(hotel, 'Mango');
// console.log(hotelGreeter()); // "Mango, wellcome to Resort Hotel!"
// or
console.log(greet.bind(hotel, 'Mango')()); // "Mango, wellcome to Resort Hotel!"

// ---------
// ---------
// const greet = function() {
//   return `Wellcome to ${this.name} hotel!`;
// };

// const hotel = { name: 'Resort Hotel' };

// console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"