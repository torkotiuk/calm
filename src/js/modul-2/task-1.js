// const clients = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
// const logItems = function() {
//   for (let i = 0; i < clients.length; i++) {
//     console.log(`${i+1} -`,clients[i]);
//   }
// };
// logItems();
// ========================
// const logItems = function(array) {
//   console.log('array :>> ', array);
//   for (let i = 0; i < logItems.length; i++) {
//     console.log(`${i} -`,logItems[i]);
//   }
//   return logItems;
// };

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// =================
// =================
const staff = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
const numbers = [1, 2, 3];

const addSymbols = function(allData) {
 for (let i = 0; i < allData.length; i++) {
    console.log(`${i+1} -`, allData[i]);
  }
}

addSymbols(staff);
addSymbols(numbers);