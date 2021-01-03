// Find worker in list of workers
// V-1
// const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// const query = 'Kiwi';
// let result = '';
// for (const employee of staff) {
// //  console.log(employee);
//  if (query === employee) {
//    result = 'Employee is at the Job';
//    break;
//  } else {
//   result = 'Employee is out of the JOB';
//  }
// }
// console.log(result);

// V-2 - the same as V-1, but by default employee is out of Job
// const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
// const query = 'Kiwi';
// let result = 'Employee is out of the JOB';
// for (const employee of staff) {
//  if (query === employee) {
//    result = 'Employee is at the Job';
//    break;
//  }
// }
// console.log(result);

// V-3 - to find an element in array we can use 'includes method'
// 'includes' works ONLY with primitive types (strings, numbers...)
const staff = ['Mango', 'Poly', 'Ajax', 'Kiwi'];
const query = 'Kiwi11';
// console.log(staff.includes('Poly')); //true
const result = staff.includes(query) 
  ? 'Employee is at the Job' 
  : 'Employee is out of the JOB';
console.log(result);