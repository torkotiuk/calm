const oldStaff = ['Mango', 'Poly', 'Ajax'];
const newStaff = ['Chelsy', 'Kiwi'];
const guests = ['Anna', 'John'];
// Create new array with two another
const staff = oldStaff.concat(newStaff);
console.log(staff);
// Create new array with any count of arrays
const staff123 = oldStaff.concat(newStaff, guests);
console.log(staff123);


// ---- now we shouldn't use next ----
// the same way to 'concat' arrays is next
// console.log([...oldStaff, ...newStaff]);
//concat two arrays to one string
// console.log(...oldStaff, ...newStaff);
