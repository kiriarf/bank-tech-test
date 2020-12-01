const ATM = require('./atm');
const Account = require('./account');

jest.mock('./transaction');
jest.mock('./account');

const testATM = new ATM();
const mockAccount = Account.mock.instances[0];

test('an ATM has an account', () => {
  expect(Account).toHaveBeenCalledTimes(1);
  expect(testATM).toHaveProperty('account', mockAccount);
});

test('you can put money into an ATM to make a deposit', () => {
  testATM.insert(100);
  const mockDepositFunction = mockAccount.deposit;
  expect(mockDepositFunction.mock.calls[0][0]).toEqual(100);
});