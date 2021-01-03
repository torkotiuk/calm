const Hero = function(name, xp) {
  this.name = name;
  this.xp = xp;
};

Hero.prototype.gainXp = function(amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);
console.log(mango);

// Так как mango это экземпляр Hero, то ему доступны методы из Hero.prototype
mango.gainXp(500); 
console.log(mango);

// =========
// Warrior
console.log('=================');
console.log('==== WARRIOR ====');
console.log('=================');
// -=======
const Warrior = function(name, xp, weapon) {
  /*
   * Во время выполнения функции Warrior вызываем функцию Hero
   * в контексте объекта создающегося в Warrior, а так же передаем
   * аргументы для инициализации полей this.name и this.xp
   *
   * this это будущий экземпляр Warrior
   */
  Hero.call(this, name, xp);

  // Тут добавляем новое свойство - оружие
  this.weapon = weapon;
};

// =====
// ДЛЯ ТОГО ЧТОБ ОБЪЕКТЫ Warrior ИСПОЛЬЗОВАЛИ МЕТОДЫ (f.e. gainXp) Hero
// поля из Hero.prototype не добавляются в цепочку прототипов 
// по умолчанию. Необходимо явно укзать связь поля Warrior.prototype
// и Hero.prototype
Warrior.prototype = Object.create(Hero.prototype);
Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function() {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const poly = new Warrior('Poly', 200, 'sword');
console.log(poly); // Warrior {name: "Poly", xp: 200, weapon: "sword"}
poly.attack(); // Poly attacks with sword
poly.gainXp(300);

// const im = new Warrior('Immm', 100, 'fire');
// console.log(im);
// im.attack();
// im.gainXp(150);
// console.log(im);

console.log('=================');
console.log('====== TEST =====');
console.log('=================');

