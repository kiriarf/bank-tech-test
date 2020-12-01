const ATM = require('./atm');
const Account = require('./account');

const testATM = new ATM();

jest.mock('./transaction');
jest.mock('./account');

test('an ATM has an account', () => {
  expect(testATM).toHaveProperty('account', Account.mock.instances[0]);
});
