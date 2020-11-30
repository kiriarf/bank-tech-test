const Transaction = require('./transaction');
class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    let transaction = new Transaction('credit', amount);
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      let transaction = new Transaction('debit', amount);
      this.balance -= amount;
    } else {
      throw new Error('Insufficient balance for this operation');
    }
  }
}

module.exports = Account;
