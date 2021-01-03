function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  const normaMessage = message.toLowerCase();
  result = normaMessage.includes('sale') || normaMessage.includes('spam');
  // Пиши код выше этой строки
  return result;
}

console.log(checkForSpam('[SPAM] How to earn fast money?')); //true
console.log(checkForSpam('Latest technology news')); //false


// toLowerCase()
// toUpperCase()