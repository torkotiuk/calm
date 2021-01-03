console.log(Boolean(0)); //false
console.log(Boolean(1)); //everithing else true: 322, 10, dsdsd

// LOGICAL AND ========== $$ =========== 
console.log(5 && 10); //10 - true and true = input last true
console.log(5 && 10 && 22 && 50); //50
console.log(0 && 10); //false and true = if we get false,
// operation done and give us false, NOT try get true 

// Ex.1 - let get > 10 and < 30
const number = 31;
const isInRange = number > 10 && number < 30;
// ------------ true/false --- true/false
console.log('isInRange: ', isInRange);
console.log(`Number ${number} is between 10 and 30`);

// LOGICAL OR ========== || ===========
// Ex.2
const number1 = 20;
const isInRange1 = number1 < 10 || number1 > 30;
console.log('isInRange 1: ', isInRange1);
console.log(`Number ${number1} is till 10 or after 30`);
// Ex.3
console.log('Ex.3: ', false || false || 'asdsdsd'); //'asdsdsd' - b/c at least one is true
// Ex.3 Abillity to open live chat
const isOnline = true;
const isFriend = true;
const isDnd = false; //DND - don't disturb

const canOpenChat = isOnline && isFriend;
// isOnline = true && isFriend = true, to sumUp 'true'
console.log('canOpenChat: ', canOpenChat);

// LOGICAL NOT ========== ! ===========
// ! - inversion operator
// Ex. 4
const isOnline4 = true;
const isFriend4 = true;
const isDnd4 = false;

const canOpenChat4 = isOnline4 && isFriend4 && !isDnd4;
console.log('canOpenChat: ', canOpenChat4);
//If isDnd4 = false --- person could talk, to sum up we get 'true', chat will be opened
//If isDnd4 = true - person could't talk, to sum up we get 'false', chat will NOT be opened

//Ex.6 - Check user subscription in acces to content
const subscription = 'free'; // free || pro || vip

const canAccessContent = subscription === 'pro' || subscription === 'vip';
console.log('canAccessContent: ', canAccessContent);

