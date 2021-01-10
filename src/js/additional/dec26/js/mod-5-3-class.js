// refactoring from 'mod-5-2-constructor.js'
class Hero {
  static dedcription = 'This is heroes description'; 

  static showStats () {
    console.log(hero222);
  }

  constructor (name, xp) {
    this.name = name;
    this.xp = xp;
  }

  changeName() {
    this.name = name;
  }

  geinXp(amount) {
    console.log(`${this.name} gained ${amount} of experience`);
    this.xp += amount;
  }
}

// static methods coud work as in mod-5-2-constructor.js,
// but we write here in newest syntaxis inside class
// static methods don't have 'this' in 'Hero copy' - экемпляр

const hero222 = new Hero('hero222', 200);
console.log(hero222);

hero222.geinXp(500);
console.log(hero222);