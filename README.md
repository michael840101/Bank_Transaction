# Bank_Transaction
## Context

This is a project that refact the bank account tansaction API from old framework to **NodeJS**

## Structure

The bank employs this DB structure:

```
TABLE transactions
  - reference (unique)
  - amount
  - account nr
```
The **Transactions** table registers any transaction in an account
(ie. today I paid 20$ for a movie with my credit card).

```
TABLE balances
  - account nr (unique)
  - balance
```
The **Balances** table represents the account balance of customers
(ie. I have $5k in my bank account).

## Functionalities

- Implemented the **/transfer** API which transfers X amount of money from account A to account B.
- The request is be a `POST` request to the method **/transfer** with the payload: `{from:account, to:account, amount:money}`.
- The response will return the following payload: `{id:transaction_id, from:{id:account, balance:current_balance},to:{id:account,balance:current_balance}, transfered:transfer_amount}`
- Implemented the function that prevent one customer might tap on the "pay/transfer" button twice by accident.
