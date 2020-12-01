const Account = require('./account');

class ATM {
  constructor() {
    this.account = new Account();
  }
}

module.exports = ATM;
