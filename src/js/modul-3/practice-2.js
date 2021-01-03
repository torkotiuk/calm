// Напишите ф-цию которая принимает 
// массив чисел  и возвращает массив
//  в котором останутся только уникальные числа

// v-1
// const numbers = [1, 10, 1, 25, 3, 10, 254];

// const getUniqueNumber = function(arrNum) {
//   const newArr = [];
//   for (let i = 0; i < arrNum.length; i++) {
//     if (!newArr.includes(arrNum[i])){
//       newArr.push(arrNum[i]);
//     }
//   }

//   return newArr;  
// }

// console.log(getUniqueNumber(numbers));

// v-2
const getUniqueNumber = function(arrNum) {
  const newArr = [];
  for (let i = 0; i < arrNum.length; i++) {
// console.log('arrNum[i] :>>>>>>> ', arrNum[i], 'index :>> ', arrNum.indexOf(arrNum[i]));
    if (arrNum.indexOf(arrNum[i]) === i){
      newArr.push(arrNum[i]);
    }
  }
  return newArr;  
}

console.log(getUniqueNumber([1, 10, 1, 25, 3, 10, 254]));