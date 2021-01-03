const animal = { eats: true };
const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog.barks); // true
console.log(dog.eats); // true

// 2. Свойство Function.prototype
const Guest = function(name, room) {
  this.name = name;
  this.room = room;
};

const mango = new Guest('Mango', 28);

console.log(mango);