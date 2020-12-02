## Bank Tech Test

A simple JavaScript Console app that allows users to query their bank balance, as well as make deposits to and withdrawals from their account.

[Link to Challenge](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)

### How to use
1. Have Node installed on your machine
2. Clone this repository: ```git clone git@github.com:kiriarf/bank-tech-test.git && cd bank-tech-test```
3. Run ```npm install``` to install the dependencies
4. In your terminal, run ```node```
5. In Node console, ```require``` the ```ATM``` file and create an instance of ```ATM``` class: 
  ```
  const ATM = require('./js/models/atm');
  const myATM = new ATM();
  ```
6. To deposit £100: ```myATM.deposit(100)```
7. To withdraw £50: ```myATM.withdraw(50)```
8. To check balance: ```myATM.printBalance()```
9. To see a full statement: ```myATM.printStatement()```
10. To run tests: ```npm test```
11. To lint: ```npm run lint```

### Technologies used
| Technology | Use                              |
| ---------- | -------------------------------- |
| Jest       | Testing                          |
| ESLint     | Linting, airBNB style guide used |
| npm        | package management               |


### User Stories

```
As a User,
To know how much money I have,
I want to see my current balance. 
```

```
As a User,
To be able to move my money from under the mattress to somewhere safe,
I want to be able to deposit money to my account.
```

```
As a User,
To be able to take some money out to spend,
I want to be able to withdraw money from my account.
```

```
As a User,
To control my spending habits,
I would like to see my account statement.
```

### Diagrams
#### Class Diagram

| Class          | Responsibilities       | Collaborators   |
| -------------- | ---------------------- | --------------- |
| 1. Transaction | 1. Have a date         |                 | 
|                | 2. Have a type         |                 |
|                | 3. Have an amount      |                 |
|                | 4. Have a balance      |                 |
| 2. Account     | 1. Deposit             | 1. Transaction  |
|                | 2. Withdraw            |                 |
|                | 3. Have balance        |                 |
|                | 4. Stores transactions |                 |
| 3. ATM         | 1. Generate Statement  | 1. Account      |
|                | 2. Print Statement     |                 |
|                | 3. Take money in       |                 |
|                | 4. Give money out      |                 |   