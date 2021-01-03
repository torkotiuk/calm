console.log('========= ! ===========');
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку
  return isNotInRange;
}
console.log(isNumberNotInRange(1, 100, 150));

console.log('========= && ==========');
// function isNumberInRange(start, end, number) {
//   const isInRange = number;
//   return isInRange>= start && isInRange<= end;
// }
// console.log(isNumberInRange(10, 100, 156)); //false
function isNumberInRange(start, end, number) {
  const isInRange = number && number >= start && number <= end;
  return isInRange;
}
console.log(isNumberInRange(10, 100, 156)); //false

console.log('========= || ==========');
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType;
//   return canAccessContent === 'pro' || canAccessContent === 'vip';
// }
// console.log(checkIfCanAccessContent('vip')); //true
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType  && subType === 'pro' || subType === 'vip'; // дополни эту строку
  return canAccessContent;
}
console.log(checkIfCanAccessContent('pro'));