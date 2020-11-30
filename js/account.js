const Transaction = require('./transaction');

class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
    this.#createTransaction('credit', amount);
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
      this.#createTransaction('debit', amount);
    } else {
      throw new Error('Insufficient balance for this operation');
    }
  }

  #createTransaction(type, amount) {
    const transaction = new Transaction(type, amount);
    transaction.balance = this.balance;
  }

}

module.exports = Account;
