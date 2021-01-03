const country = prompt('Type your country.');
let price;
let message;

if (country === null) {
  // console.log('Cancelled by user');
} else {
  const normalizedCountry = country.toLocaleLowerCase();
  switch (normalizedCountry) {
    case 'китай':
      price = 100;
      message = `Delivery to ${country} will be cost ${price} credits`;
      break;
    case 'чили':
      price = 250;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'австралия':
      price = 170;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'индия':
      price = 80;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    case 'ямайка':
      price = 120;
      console.log(`Delivery to ${country} will be cost ${price} credits`);
      break;
    default:
     alert('Delivery is not available in your country.');
  }
}

// only for message 'китай'
// console.log(message);