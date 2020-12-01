const ATM = require('./atm');
const Account = require('./account');

jest.mock('./transaction');
jest.mock('./account');

const testATM = new ATM();
const mockAccount = Account.mock.instances[0];
const mockAccountDepositFunction = mockAccount.deposit;
const mockAccountWithdrawFunction = mockAccount.withdraw;

test('an ATM has an account', () => {
  expect(Account).toHaveBeenCalledTimes(1);
  expect(testATM).toHaveProperty('account', mockAccount);
});

test('you can put money into an ATM to make a deposit', () => {
  testATM.deposit(100);
  expect(mockAccountDepositFunction.mock.calls[0][0]).toBe(100);
});


test('you can take money from ATM by withdrawing from your account', () => {
  testATM.withdraw(50);
  expect(mockAccountWithdrawFunction.mock.calls[0][0]).toBe(50);
});
