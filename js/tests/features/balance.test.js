const ATM = require('../../models/atm');

const testATM = new ATM();
const testAccount = testATM.account;

test('user can deposit £100, take £20 of it back, and his account balance would be £80', () => {
  testATM.deposit(100);
  testATM.withdraw(20);
  expect(testAccount.balance).toBe(80);
});
