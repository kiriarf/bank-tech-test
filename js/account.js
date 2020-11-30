const Transaction = require('./transaction');

class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    const transaction = new Transaction('credit', amount);
    this.balance += amount;
    transaction.balance = this.balance;
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      const transaction = new Transaction('debit', amount);
      this.balance -= amount;
      transaction.balance = this.balance;
    } else {
      throw new Error('Insufficient balance for this operation');
    }
  }
}

module.exports = Account;
