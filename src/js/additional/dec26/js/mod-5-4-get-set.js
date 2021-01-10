class Hero {
  static dedcription = 'This is heroes description'; 

  static showStats () {
    console.log(hero222);
  }

  constructor (name, xp) {
    this._name = name;
    this._xp = xp;
  }

  get name() {
    return this._name;
    // return [this._name, this._xp];
    // return {1: this._name, 2: this._xp};
  }
  // geter name (get 'name') and name of key (this.'name') MUST BE different
  // so usually name of key do '_name'

  set name(newName) {
    this._name = newName;
  }

  // changeName() {
  //   this.name = name;
  // }

  // geinXp(amount) {
  //   console.log(`${this.name} gained ${amount} of experience`);
  //   this.xp += amount;
  // }
}

const hero222 = new Hero('hero222', 200);
console.log(hero222);

// === getter explanation ===
console.log(hero222.name); //we call getter method, NOT 'get name()'
// method geter is special, and call him only objName.name

// console.log(hero222._name); //usually dosn't do like this
// === END getter explanation ===

// === setter explanation ===
// getter and setter 'name' must be the same
console.log(hero222.name = 'heroTHEbest');
// === END setter explanation ===
