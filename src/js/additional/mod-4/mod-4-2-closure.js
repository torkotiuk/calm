const makeSheff = function (name) {
  return function (dish) {
    console.log(`${name} makes a ${dish}`);
  };
};

makeSheff('Poly')('tea');
//or
const poly = makeSheff('Poly');
poly('cofee');

console.dir(poly);
//[[Scopes]] - shows closure that include definite lexical environment

/*
Ex. from JS Book
*/
const createCounter = function () {
  /*
   * Локальная переменная privateValue доступна только в замыкании.
   * Получить к ней доступ во внешнем коде невозможно.
   */
  let privateValue = 0;

  const increment = function () {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
