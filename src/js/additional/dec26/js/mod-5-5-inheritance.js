class Hero {
   constructor (name, xp) {
    this._name = name;
    this._xp = xp;
  }

  get name() {
    return this._name;
  }
  set name(newName) {
    this._name = newName;
  }

  geinXp(amount) {
    console.log(`${this.name} gained ${amount} of experience`);
    this.xp += amount;
  }
}

class Warrior extends Hero{
  constructor (name, xp, weapon) {
    super(name, xp); //link to Hero constructor
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this._name} attacks with ${this.weapon}`);
  }
}

// Heros
const max = new Hero('max', 200);
console.log(max);


// Warriors
const gal = new Warrior('Gal', 500, 'Alibarda');
console.log(gal);
gal.attack(); //Gal attacks with Alibarda
console.log(Warrior.prototype.__proto__ === Hero.prototype);
gal.geinXp(350);


class Alladins extends Warrior{
  constructor(name, xp, weapon, spell) {
    super(name, xp, weapon);
    this.spell = spell;
  }

  post() {
    console.log(`${this.name} tells ${this.spell}`);
  }
}
const hispaniol = new Alladins('Hispaniol', 250, 'catapult', 'Ascendio la vista');
console.log(hispaniol);
hispaniol.geinXp(40);
hispaniol.post();