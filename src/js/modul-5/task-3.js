// Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
// При вызове будет получать один аргумент - начальный массив товаров, и записывать 
// его в свойство items.
// Добавь методы класса:

class Storage {
  constructor (items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }

  // removeItem(item) {
  //   for (let i = 0; i < this.items.lenght; i = item) {
  //     delete this.items[i];
  //   }
  // }

  removeItem = function (item) {
    const removeIndex = this.items.indexOf(item);
    this.items.splice(removeIndex, 1);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
storage.addItem('Пролонгер');
storage.addItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]