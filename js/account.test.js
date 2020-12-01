const Account = require('./account');
const Transaction = require('./transaction');

const testAccount = new Account();

// let mockTransactionType = jest.fn();
// jest.mock('./transaction', () => {
//   return jest.fn().mockImplementation(() => {
//     return { type: mockTransactionType };
//   });
// });

jest.mock('./transaction');

beforeEach(() => {
  Transaction.mockClear();
});

test('has a balance of 0 when created', () => {
  expect(testAccount.balance).toBe(0);
});

describe('deposits', () => {
  test('depositing cash increases the balance', () => {
    testAccount.deposit(500);
    expect(testAccount.balance).toBe(500);
  });

  test('generates a transaction', () => {
    testAccount.deposit(50);
    // Check if a transaction is created
    expect(Transaction).toHaveBeenCalledTimes(1);
    // Check if the transaction created has type credit
    const creditType = 'credit';
    expect(Transaction.mock.calls[0][0]).toEqual(creditType);
  });

  test('sets a transaction\'s balance to be equal to the Account balance', () => {
    testAccount.deposit(1);
    expect(Transaction.mock.instances[0].balance).toEqual(testAccount.balance);
  });
});

describe('withdrawals', () => {
  test('withdrawing cash decreases the balance', () => {
    testAccount.withdraw(300);
    expect(testAccount.balance).toBe(251);
  });

  test('generates a debit transaction', () => {
    testAccount.withdraw(1);
    // Check if a transaction is created
    expect(Transaction).toHaveBeenCalledTimes(1);
    // Check if the transaction created has type debit
    const debitType = 'debit';
    expect(Transaction.mock.calls[0][0]).toEqual(debitType);
  });

  test('sets a transaction\'s balance to be equal to the Account balance', () => {
    testAccount.withdraw(1);
    expect(Transaction.mock.instances[0].balance).toEqual(testAccount.balance);
  });

  test('cannot withdraw below 0', () => {
    expect(() => testAccount.withdraw(250)).toThrow('Insufficient balance for this operation');
  });
});

test('an account has an array of transactions', () => {
  const newTestAccount = new Account();
  newTestAccount.deposit(2);
  newTestAccount.withdraw(1);
  expect(newTestAccount.transactions.length).toBe(2);
});
