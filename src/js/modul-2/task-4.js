const formatString = function(string) {
  // ====
  // const string = 'The quick brown fox jumped over the lazy';

  if (string.length < 41) {
   console.log('string :>> ', string);
  } else {
    const symbols = string.split(''); //['T', 'h', 'e', etc.]
    
    const deletedFrom40 = symbols;
    deletedFrom40.splice(40);
    
    const enoughToJoin = deletedFrom40;
    
    const newSentence = enoughToJoin.join('') + ('...');
    console.log('newSentence :>> ', newSentence);
  }
  // ====
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
formatString('Curabitur ligula sapien, tincidunt non.');
// вернется оригинальная строка

formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
// вернется форматированная строка

formatString('Curabitur ligula sapien.');
// вернется оригинальная строка


formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  );
// вернется форматированная строка