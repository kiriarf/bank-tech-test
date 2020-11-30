## Bank Tech Test

A simple JavaScript Console app that allows users to query their bank balance, as well as make deposits to and withdrawals from their account.

[Link to Challenge](https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md)

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

| Class         | Responsibilities      | Collaborators   |
| ------------- | --------------------- | --------------- |
| 1. Account    | 1. Deposit            |                 |
|               | 2. Withdraw           |                 |
|               | 3. Have balance       |                 |
| 2. ATM        | 1. Generate Statement | 1. Account      |
|               | 2. Print Statement    |                 |