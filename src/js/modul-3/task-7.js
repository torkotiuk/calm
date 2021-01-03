/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
let id = 0;
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
      id += 1;
      return {
          id, amount, type
      }
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
      // this.createTransaction(amount, 'deposit');
      this.transactions.push(this.createTransaction(amount, 'deposit'));
      this.balance += amount;
      console.log(this.balance);
      return this.transactions;
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount <= this.balance) {
      this.transactions.push(this.createTransaction(amount, 'withdraw'));
      this.balance -= amount;
      console.log(this.balance);
      return this.transactions;
    } else {
      return 'снятие такой суммы не возможно, недостаточно средств';
    }
   
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {},
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {},
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {},
};
console.log(account.createTransaction(100, 'deposit'))
console.log(account.createTransaction(200, 'deposit'))
console.log(account.deposit(400));
console.log(account.deposit(500));
console.log(account.withdraw(100));
console.log(account.withdraw(300));
console.log(account.withdraw(500));