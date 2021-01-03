function getShippingCost(country) {
  let message;
  let price;
  // Пиши код ниже этой строки
  
switch (country) {
  case 'Китай':
    price = 100;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    console.log(message);
    break;
    
  case 'Чили':
    price = 250;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
        console.log(message);
    break;
    
  case 'Австралия':
    price: 170;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
        console.log(message);
    break;
    
  case 'Ямайка':
    price: 120;
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    console.log(message);
    break;
    
  default:
    message = 'Извините, в вашу страну доставки нет';
        console.log(message);
}
  // Пиши код выше этой строки
  return message;
}

// console.log(getShippingCost('Китай2'));
getShippingCost('Китай');
getShippingCost('Чили');