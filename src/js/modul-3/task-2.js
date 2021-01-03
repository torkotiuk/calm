const countProps = function(obj) {
return  Object.keys(obj).length;

};


// const countProps = function(obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// }

console.log(countProps({ name: 'Mango', age: 2, we: 111, fgfgfggf: 'sdfsffd'}));
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3