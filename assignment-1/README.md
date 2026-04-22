# Assignment 1: Smart Contract

## Objective

This assignment introduces the reusable `SimpleStorage` contract. The same contract is used again in Assignment 2 and Assignment 3 to keep the lab work consistent and easy to review.

## Contract Features

- `setValue(uint256 _value)`: stores a number on chain.
- `incrementCounter()`: increases the counter by 1.
- `setMessage(string memory _message)`: stores a text message.
- `getSummary()`: returns the current number, counter, and message.

## Source Files

- `contracts/SimpleStorage.sol`: canonical contract used across assignments.
- `assignment-1/contract.sol`: mirror import kept for assignment-wise submission structure.

## How to Compile

```bash
npm run compile
```

## How to Deploy Locally

```bash
npm run node
npm run deploy:local
```

## What to Screenshot

- Successful contract compilation
- Successful local deployment log

## Explanation

The contract is intentionally minimal. It demonstrates state variables, write functions, read functions, and event emission without adding extra complexity that is not needed for a basic blockchain lab.
