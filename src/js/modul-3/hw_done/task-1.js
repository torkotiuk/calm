const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const updateUserInfo = function(newMood, newHobby, changePremium) {
  user.mood = newMood;
  user.hobby = newHobby;
  user.premium = changePremium;
}
updateUserInfo('happy', 'skydiving', false);

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}