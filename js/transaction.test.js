const Transaction = require('./transaction');

const testCreditTransaction = new Transaction('credit', 500);

test('transaction has a date in local format (DD/MM/YYYY for Europe)', () => {
  const today = new Date(Date.now());
  expect(testCreditTransaction.date).toEqual(today.toLocaleDateString());
});
