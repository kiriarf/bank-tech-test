const Transaction = require('./transaction');

const testCreditTransaction = new Transaction('credit', 500);

test('transaction has a date in local format (DD/MM/YYYY for Europe)', () => {
  const today = new Date(Date.now());
  expect(testCreditTransaction.date).toEqual(today.toLocaleDateString());
});

describe('transaction types:', () => {
  test('a credit transaction has a type credit', () => {
    expect(testCreditTransaction.type).toBe('credit');
  });

  test('a debit transaction has a type debit', () => {
    const testDebitTransaction = new Transaction('debit', 300);
    expect(testDebitTransaction.type).toBe('debit');
  });
});

test('a transaction has an amount', () => {
  expect(testCreditTransaction.amount).toBe(500);
});

test('a transaction has a balance 0 by default', () => {
  expect(testCreditTransaction.balance).toBe(0);
});
