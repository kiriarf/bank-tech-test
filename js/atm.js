const Account = require('./account');

class ATM {
  constructor() {
    this.account = new Account();
  }

  deposit(amount) {
    this.account.deposit(amount);
  }

  withdraw(amount) {
    this.account.withdraw(amount);
  }
}

module.exports = ATM;
