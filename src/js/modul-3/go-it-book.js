const hotel = {
  name: 'Resort Hotel',
  stars: 5,
  capacity: 100,
};

console.log(hotel); // Resort Hotel

hotel.name = 'Piemont'; //create new/change value
hotel['address'] = '25, Kilinskiego';
// console.log(hotel); // 

delete hotel['address']; //delete key
// console.log(hotel); // 

// ---- from test
const a = { x: 1, y: 2 };
const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c); // {x: 0, y: 2, z: 3}



// const target = {x: 100, y: 333, z: 300};
// const sources = { x: 0, z: 3 };
// Object.assign(target, sources);
// // const d = Object.assign(target, ...sources);
// // console.log(c);
// console.log(target);
// console.log(sources);

// const { name, age, ...props } = { name: 'Poly', age: 3, games: 47, isOnline: false };
// console.log(props);

const target = {
  id: 24,
  isOnline: true,
  ...{name: 'Mango', age: 2},
  ...{age: 7, isOnline: false}
  };

console.log(target);