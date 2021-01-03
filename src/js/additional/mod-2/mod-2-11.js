// TASK 11
// Create function calculating words in sentence and total
// price using amount of words
function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(' ');
  return words.length * pricePerWord;
}
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 10));
