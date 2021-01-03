const Account = function (login, email) {
  this.login = login;
  this.email = email;

  // this.prototype.getInfo = function () {
  //   console.log(`Login: ${this.login}, e-mail: ${this.email}`);
  // }; //it doesn't work, why???

}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, e-mail: ${this.email}`);
};
console.log(Account.prototype.getInfo); // function

const user1 = new Account('Mangozedog','mango@dog.woof');


// console.log(user1.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });
const mango = new Account('Mangozedog','mango@dog.woof');

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });
const poly = new Account('Poly','poly@mail.com');

poly.getInfo(); // Login: Poly, Email: poly@mail.com