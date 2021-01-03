// switch - use switch when value is =, NOT >, <!!!!
// Ex. 5 - A ususal 'if - else'
const stars = 2; //how many hotel stars person choose

if (stars === 1) {
  console.log('Ex. 5 - A', '1');
} else if (stars === 2) {
  console.log('Ex.5-A', '2');
} else if (stars === 3) {
  console.log('Ex.5-A', '3');
} else if (stars === 4) {
  console.log('Ex.5-A', '4');
} else if (stars === 5) {
  console.log('Ex.5-A', '5');
} else {
  console.log('You are eneter incorrect answer');
}

// Ex. 5 - B the same as Ex. 5-A - but with switch
const stars5B = "2 star hotel";
// const stars5B = 1111;
let result = ''; //it is additional
switch (stars5B) {
  case "1 star hotel": {
    console.log('1 star hotel');
    result = "case 1"; //it is additional
    break;
  }
  case "2 star hotel": {
    console.log('2 star hotel');
    result = "case 2"; //it is additional
    break;
  }
  case "3 star hotel": {
    console.log('3 star hotel');
    result = "case 3"; //it is additional
    break;
  }
  case "4 star hotel": {
    console.log('4 star hotel');
    result = "case 4"; //it is additional
    break;
  }
  case "5 star hotel": {
    console.log('5 star hotel');
    result = "case 5"; //it is additional
    break;
  }
  default:
    console.log('You are enter incorrect answer'); //why i can't output console.log????
}
console.log(result); //it is additional

// Ex.5C - ===for myself=== - when don't use braek for adding lines by +=
// const stars5c = "1 star hotel";
// switch (stars5c) {
//   case "1 star hotel": {
//     console.log('5c:', '1 star hotel');
//   }
//   case "2 star hotel": {
//     console.log('5c:', '2 star hotel');
//   }
//   case "3 star hotel": {
//     console.log('5c:', '3 star hotel');
//     break;
//   }
// }
// === END for myself===

// Ex.5-D
const stars5D = 5;
let price = 0;

switch (stars5D) {
  case 1:
    price = 20;
    break;

  case 2:
  case 3:
  case 4:
    price = 50;
    break;
  
  case 5:
    price = 100;
    break;

  default:
    console.log('Ex.5-D:', 'You choose impossibly hotel');
}
console.log('Ex.5-D:', price);