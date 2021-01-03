// Ex.1 ==========================
// Переменная lang может принимать 2 значения: 'ru' 'en'. 
// Если она имеет значение 'ru', то в переменную arr запишем строку 
// из дней недели на русском языке, а если имеет значение 'en' – то на 
// английском. Решите задачу через 2 if, через switch-case.
// 
// const daysRu = "пн, вт, ср, чт, пт, сб, вс";
// const daysEn = "mn, ts, wd, th, fr, st, sn";
// let lang = '11`23', arr = '';

// switch (lang) {
//   case 'ru':
//     arr = daysRu;
//   break;
//   case 'en':
//     arr = daysEn;
//     break;
//   default:
//   console.log('We do not have any language like this');
// }

// console.log(arr);

// Ex.2====================================
// Sum of odd numbers selected from min to max
// const min = 25;
// const max = 30;
// let total = 0;

// for (let i = min; i <= max; i++) {
//   if (i % 2 === 1) {
//     total = total + i;
//   }
// }

// console.log(total);

// Ex.3 ===========================
// Пользователь вводит диапазон нужно 
// вывести на экран все простые числа из 
// этого диапазона. Простыми числами называются 
// числа, которые имеют всего 2 делителя, то есть
// делятся только на 1 и на самого себя!

// const firstNum = 1;
// const lastNum = 36;
// let simpleNums = '';
// for(let i = firstNum; i <= lastNum; i += 1){
//     if(i <= 2){
//         simpleNums = simpleNums + i + ' '
//     } else {
//         const halfNum = Math.ceil(i / 2); 
//         for(let dev = 2; dev < i; dev += 1){
//             if(i % dev === 0){
//                 break;
//             } else {
//                 if(dev === i - 1){
//                     simpleNums = simpleNums + i + ' ';
//                 }
//                 continue;
//             }
//         }
//     }   
// }
// console.log('simpleNums :>> ', simpleNums);


// Ex.4 ===========================
// Дано произвольное целое число n. Написать программу, 
// которая
// разбивает число n на цифры и выводит их на экран;
// подсчитывает сколько цифр в числе n;
// находит сумму цифр числа n;
// меняет порядок цифр числа n на обратный.
// Пример: ввожу число 123
// цифр в числе = 3
// сумма = 6(это значение получили следующим образом 1+2+3)
// обратный порядок = 321

// const n = 329;
// const str = n.toString();

// let total = 0;
// let reverse = '';

// // length of string
// console.log(str.length);
// // asign number to string
// console.log(n.toString()[0]);

// for (let i = 0; i < str.length; i++) {
//   total += Number(str[i]);
// }

// console.log(total);


// for (let i = str.length - 1; i >=0 ; i-= 1) {
//   reverse += str[i];
// }
// console.log(reverse);

// ================ Ex. 5 =====================
// Палиндром — слово, предложение или 
// последовательность символов, которая 
// абсолютно одинаково читается как в привычном 
// направлении, так и в обратном. К примеру, "Anna" — это 
// палиндром, а "table" и "John" — нет

// const word = 'anna';
// let newWord = '';
// for (let i = word.length - 1; i >= 0 ; i -= 1) {
//   newWord += word[i];
// }
// if (word === newWord) {
// console.log(`The word '${word}' is a palindrom`);
// } else {
//   console.log(`The word '${word}' is NOT a palindrom`);
// }

// console.log(newWord);








