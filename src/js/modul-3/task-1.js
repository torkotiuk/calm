const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,

  // v-1
  // updateHobby(newHobby) {
  //   this.hobby = newHobby;
  // }

};
// console.log('user :>> ', user);

// 1
// user.mood = 'happy';
// console.log('user :>> ', user);

// 2 - заменяет значение hobby на 'skydiving'
// v-1
// user.updateHobby('skydiving');
// console.log('user :>> ', user);
// v-2
const updateUserInfo = function(newMood, newHobby, changePremium) {
  user.mood = newMood;
  user.hobby = newHobby;
  user.premium = changePremium;
}
updateUserInfo('happy', 'skydiving', false);
// console.log('user :>> ', user);

// 3 - заменяет значение premium на false


// 4 - выводит содержимое объекта user 
// в формате ключ:значение используя 
// Object.keys() и for...of
// 4-A
// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }
// 4-B
const keys = Object.keys(user);
let sumOfKeys = 0;
// console.log(keys);
// console.log(keys.length); //object keys amount
for (const key of keys) {
  // console.log(key);
  // console.log(user[key]);
  console.log(`${key}: ${user[key]}`);
  // sumOfKeys += user[key];
}
// console.log(sumOfKeys);
// 4-C
// const values1 = Object.values(user);
// console.log(values1);
// for (const value of values1) {
//   console.log(value);
// }