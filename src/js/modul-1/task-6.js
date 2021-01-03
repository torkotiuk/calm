// let number = prompt('Enter number to sum up');
// number = Number(number);

// // let input;
// let total = 0;
// total = total + number;
// console.log('Before cycle:', total);


//   while (number !== null) {
//     total = total + number;
//   }

//   console.log('After cycle:', total);

// ============================================
// Ex.3-B
let total = 0;

while (true) {
  let input = prompt('Enter number'); //not null
  console.log('after prompt:', input);

  if (input === null) { //id doesn't work
    console.log('Cancaled by user');
    break;
  }

  input = Number(input); //get NoN'


  const notAnumber = Number.isNaN(input); //true
  if (notAnumber) { //works and back us to start
    console.log('You have entered not a number, continue from the beginning, means waiting for inputting next numbers'); 
    continue;       //iteration/cycle, means that it doesn't
  }                 //added to total

    total += input;
} 

console.log(`Common sum is ${total}`);