const calculateEngravingPrice = function(message, pricePerWord) {
  const words = message.split(' ');
  pricePerWord = words.length * pricePerWord;
  return pricePerWord;
};

console.log('Sentence price :>> ', calculateEngravingPrice('One, two, three...', 20));
// const qwe = calculateEngravingPrice('asasas tghfghg gfhfgh', 20);
// console.log(qwe);






