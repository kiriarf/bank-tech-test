const ATM = require('../../models/atm');

const testATM = new ATM();
const testAccount = testATM.account;

test('user can deposit £100, which will be recorded in his account as a credit transaction of £100 today, total balance is £100', () => {
  testATM.deposit(100);
  const debitTransaction = testAccount.transactions[0];
  const today = new Date(Date.now());
  expect(debitTransaction.amount).toBe(100);
  expect(debitTransaction.balance).toBe(100);
  expect(debitTransaction.date).toBe(today.toLocaleDateString());
  expect(debitTransaction.type).toBe('credit');
});

test('then when user takes £10 back, it will be recorded in his account as a debit transaction of £10 today, total balance is £90', () => {
  testATM.withdraw(10);
  const debitTransaction = testAccount.transactions[1];
  const today = new Date(Date.now());
  expect(debitTransaction.amount).toBe(10);
  expect(debitTransaction.balance).toBe(90);
  expect(debitTransaction.date).toBe(today.toLocaleDateString());
  expect(debitTransaction.type).toBe('debit');
});
