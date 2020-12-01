const Transaction = require('./transaction');

class Account {
  constructor() {
    this._balance = 0;
    this.transactions = [];
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    this._balance = newBalance;
  }

  deposit(amount) {
    this.balance += amount;
    this.createTransaction('credit', amount);
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
      this.createTransaction('debit', amount);
    } else {
      throw new Error('Insufficient balance for this operation');
    }
  }

  createTransaction(type, amount) {
    const transaction = new Transaction(type, amount);
    transaction.balance = this.balance;
    this.transactions.push(transaction);
  }
}

module.exports = Account;
