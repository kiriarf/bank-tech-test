const ATM = require('../models/atm');

const testATM = new ATM();
const consoleSpy = jest.spyOn(console, 'log');

test('you can put money into an ATM to make a deposit', () => {
  const accountDepositFunctionSpy = jest.spyOn(testATM.account, 'deposit');
  testATM.deposit(100);
  expect(accountDepositFunctionSpy).toHaveBeenCalled();
});

test('you can take money from ATM by withdrawing from your account', () => {
  const accountWithdrawFunctionSpy = jest.spyOn(testATM.account, 'withdraw');
  testATM.withdraw(50);
  expect(accountWithdrawFunctionSpy).toHaveBeenCalled();
});

test('ATM can print out the current balance of the account', () => {
  const accountBalanceGetterSpy = jest.spyOn(testATM.account, 'balance', 'get');
  testATM.printBalance();
  expect(accountBalanceGetterSpy).toHaveBeenCalled();
  expect(consoleSpy).toHaveBeenCalledWith('Current balance: £50.00');
});

test('ATM can print a history of transactions', () => {
  const accountTransactionsSpy = jest.spyOn(testATM.account, 'transactions', 'get');
  testATM.printStatement();
  expect(accountTransactionsSpy).toHaveBeenCalled();
  const today = new Date(Date.now()).toLocaleDateString();
  expect(consoleSpy).toHaveBeenCalledWith(`date || credit || debit || balance\n${today} || 100.00 || || 100.00\n${today} || || 50.00 || 50.00\n`);
});
