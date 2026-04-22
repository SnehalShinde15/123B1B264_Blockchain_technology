# Assignment 5: Simple DAO Contract

## Objective

This assignment implements a very small DAO-style governance contract. The goal is to demonstrate proposal creation, voting, and execution without adding token logic or complex quorum rules.

## Core Workflow

1. Create a proposal with a short description.
2. Vote yes or no on the proposal.
3. Execute the proposal after voting is complete.

## Contract Features

- `createProposal(string description)`: adds a new proposal.
- `vote(uint256 proposalId, bool support)`: casts a yes or no vote.
- `executeProposal(uint256 proposalId)`: marks the proposal as executed.
- `getProposal(uint256 proposalId)`: reads proposal details.

## Source Files

- `contracts/SimpleDAO.sol`: canonical DAO contract
- `assignment-5/dao.sol`: assignment entry file for submission structure

## What to Screenshot

- Proposal creation
- Voting transaction
- Proposal execution

## Notes

This DAO is intentionally simple. It is suitable for a lab assignment because the full governance flow is easy to explain and demonstrate.
