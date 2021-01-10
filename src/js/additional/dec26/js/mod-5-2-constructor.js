const Hero = function(name, xp) {
  this.name = name;
  this.xp = xp;
}

// f.e. create static method in __proto__/constructor
// here staic method is NOT allow to a future 'Hero copy' - экемпляр
Hero.dedcription = 'This is hero description';

Hero.showStats = function (hero) {
  console.log(hero);
}

console.dir(Hero);

Hero.prototype.changeName = function(name) {
  this.name = name;
}

const hero111 = new Hero('hero111', 100);
console.log(hero111);

//call static method, shown only for constructor
Hero.showStats(hero111);

// == == == THEORY == == ==
// Math $ Number --- constructor functions
// Math.pow() - static method
// Math.PI - static property
// pow, PI, parseInt - are inside constructors
// console.log(Math.PI);
// console.log(Math.pow(2,5));
// console.log(Number.parseInt('45dfgdfgdfg'));