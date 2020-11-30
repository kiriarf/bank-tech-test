const Account = require('./account');

const testAccount = new Account();

test('has a balance of 0 when created', () => {
  expect(testAccount.balance).toBe(0);
});
