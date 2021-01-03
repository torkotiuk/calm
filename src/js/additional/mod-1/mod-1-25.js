function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  
message = ordered > available ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';

// const biggerNumber = num1 > num2 ? num1 : num2;

  // Пиши код выше этой строки
  return message;
}

console.log(checkStorage(100, 99));