class Transaction {
  constructor(type, amount) {
    this.amount = amount;
    this.balance = 0;
    this.date = new Date(Date.now()).toLocaleDateString();
    this.type = type;
  }
}

module.exports = Transaction;
