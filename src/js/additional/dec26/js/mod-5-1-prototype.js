const objA = {
  q: 5,
  z: 6,
};

// objB has link to objA
const objB = Object.create(objA);

// x, y - own proprties of objB
objB.x = 1;
objB.y = 2;
// q, z - inherited proprties of objB

// 'for ... in' takes as own as inherited properties, 
// it is NOT very good
for (const key in objB) {
  console.log('own & inher. keys: ', key);
};

console.log('== == ==');
// only own properties obj - get true or false
console.log(objB.hasOwnProperty('x')); //true
console.log(objB.hasOwnProperty('z')); //false

console.log('== == ==');
// for using for...in only for own properties do if() - OLD method
for (const key in objB) {
  if(objB.hasOwnProperty(key)) {
    console.log('own keys: ', key);
  };
}

console.log('== == ==');
// to show only own obj prop use next
console.log('own keys to array: ', Object.keys(objB));

// 
class Student {
  constructor (){}
};

	
console.log(typeof Student === 'function');

console.log(Object.create(null));
