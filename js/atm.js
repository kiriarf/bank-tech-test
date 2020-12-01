const Account = require('./account');

class ATM {
  constructor() {
    this.account = new Account();
  }

  insert(amount) {
    this.account.deposit(amount);
  }
}

module.exports = ATM;
