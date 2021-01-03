let total = 0;

for (let i = 0; true; i++) {
  let input = prompt('Enter a number to sum up');

  if (input === null) {
    alert(`Your sum is ${total}`);
    break;
  } else {
    input = Number(input);

    const notAnumber = Number.isNaN(input);
    if (notAnumber) {
      alert(`You entered NoN, you may add only numbers, NOT letters`);
      continue;
    }
   
    total = total + input;
    console.log(`Total sum is ${total}`);
  }
}

