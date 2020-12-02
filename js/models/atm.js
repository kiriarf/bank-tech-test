const Account = require('./account');

class ATM {
  constructor() {
    this.account = new Account();
    this.statementHeaders = 'date || credit || debit || balance';
  }

  deposit(amount) {
    this.account.deposit(amount);
  }

  withdraw(amount) {
    this.account.withdraw(amount);
  }

  printBalance() {
    console.log(`Current balance: £${this.account.balance.toFixed(2)}`);
  }

  printStatement() {
    console.log(this.generateStatement());
  }

  generateStatement() {
    let statementBody = '';
    let i;
    for (i = 0; i < this.account.transactions.length; i += 1) {
      const transaction = this.account.transactions[i];
      if (transaction.type === 'credit') {
        statementBody += `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}\n`;
      } else {
        statementBody += `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}\n`;
      }
    }
    return `${this.statementHeaders}\n${statementBody}`;
  }
}

module.exports = ATM;
