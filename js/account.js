class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (this.balance - amount >= 0) {
      this.balance -= amount;
    } else {
      throw new Error('Insufficient balance for this operation');
    }
  }
}

module.exports = Account;
