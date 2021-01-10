// task 41
const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(obj) {
    this.potions.push(obj);
  },
  removePotion(potionName) {
    for (let potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      if (potionName === potion.name) {
        this.potions.splice(potionIndex, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      const potionIndex = this.potions.indexOf(potion);
      if (oldName === potion.name) {
        potion.name = newName;
      }
    }
  },
};
console.log(atTheOldToad.addPotion({ name: 'Зелье', price: 200 }));
console.log(atTheOldToad.updatePotionName('Зелье', '22'));
console.table(atTheOldToad.getPotions());

// ================================================================
// ================================================================
// task 35
// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
// };
// bookShelf.updateBook('Мгла', 'Хроники подземелий');
// console.log(bookShelf.books);

// task 38
// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };
// console.log(atTheOldToad.potions);
// atTheOldToad.addPotion('123');
// console.log(atTheOldToad.potions);
