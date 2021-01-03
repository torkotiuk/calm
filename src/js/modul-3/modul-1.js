const friends = [
{name: 'Mango', online: false},
{name: 'Kiwi', online: true},
{name: 'Poly', online: true},
{name: 'Ajax', online: false},
];
// console.table(friends);

// 1 - find friend by name
const findFriendByName = function(allFriends, name) {
  for (const friend of allFriends) {
    if (friend.name === name) {
      return 'We find him/her!!!'
    }
  }
  return `We didn't find him/her :(`
}
// console.log(findFriendByName(friends, 'Poly'));

// 2 - find name if online: true
const getOnlineFriends = function(allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log('friend :>> ', friend);
    if (friend.online) {
      names.push(friend.name);
    }
  }

  return names;
}
console.log(getOnlineFriends(friends));