// task 2 - Проверка пароля (ранний возврат)
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }
//   return 'Доступ запрещен, неверный пароль!';
// }
// console.log(checkPassword('123'));

//task - 3
function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'В заказе еще нет товаров';}
  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  }
  return 'Заказ оформлен, с вами свяжется менеджер';
}
console.log(checkStorage(50, 20));