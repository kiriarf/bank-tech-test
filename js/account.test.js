const Account = require('./account');
const Transaction = require('./transaction')

const testAccount = new Account();

// let mockTransactionType = jest.fn();
// jest.mock('./transaction', () => {
//   return jest.fn().mockImplementation(() => {
//     return { type: mockTransactionType };
//   });
// });

jest.mock('./transaction')

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
});


describe('withdrawals', () => {
  test('withdrawing cash decreases the balance', () => {
    testAccount.withdraw(300);
    expect(testAccount.balance).toBe(250);
  });

  test('cannot withdraw below 0', () => {
    expect(() => testAccount.withdraw(251)).toThrow('Insufficient balance for this operation');
  });
});
