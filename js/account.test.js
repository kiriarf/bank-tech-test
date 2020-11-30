const Account = require('./account');

const testAccount = new Account();

test('has a balance of 0 when created', () => {
  expect(testAccount.balance).toBe(0);
});

test('depositing cash increases the balance', () => {
  testAccount.deposit(500);
  expect(testAccount.balance).toBe(500);
});

test('withdrawing cash decreases the balance', () => {
  testAccount.withdraw(300);
  expect(testAccount.balance).toBe(200);
});
