class Transaction {
  constructor(type) {
    this.date = new Date(Date.now()).toLocaleDateString();
    this.type = type;
  }
}

module.exports = Transaction;
