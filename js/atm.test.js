const ATM = require('./atm');

const testATM = new ATM();

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
  expect(testATM.printBalance()).toEqual('Current balance: £50');
});
