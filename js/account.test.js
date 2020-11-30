const Account = require('./account');

const testAccount = new Account();

test('has a balance of 0 when created', () => {
  expect(testAccount.balance).toBe(0);
});

test('depositing £500 changes the balance by 500', () => {
  testAccount.deposit(500);
  expect(testAccount.balance).toBe(500);
});
