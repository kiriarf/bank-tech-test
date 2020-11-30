class Transaction {
  constructor() {
    this.date = new Date(Date.now()).toLocaleDateString();
  }
}

module.exports = Transaction;
