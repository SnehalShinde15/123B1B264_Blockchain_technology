# Blockchain Lab Assignments

Name: Your Name Here  
Roll Number: Your Roll Number Here  
Course: Blockchain Lab

This repository keeps the lab work intentionally simple. One reusable `SimpleStorage` contract is used across the first three assignments, and a separate minimal DAO contract is added for the fifth assignment.

## Tech Stack

- Solidity
- Hardhat
- Ethers.js
- MetaMask
- Polygon Amoy testnet
- IPFS with Pinata

## Assignment Summary

1. Assignment 1: Wrote and explained the reusable `SimpleStorage` smart contract.
2. Assignment 2: Deployed the same contract using Hardhat on Polygon Amoy.
3. Assignment 3: Built a plain HTML, CSS, and JavaScript frontend that connects with MetaMask.
4. Assignment 4: Uploaded a file to IPFS and printed the resulting CID.
5. Assignment 5: Created a very small DAO contract with proposal creation, voting, and execution.

## Repository Layout

```text
blockchain-lab-assignments/
|-- README.md
|-- package.json
|-- hardhat.config.js
|-- contracts/
|   |-- SimpleStorage.sol
|   `-- SimpleDAO.sol
|-- scripts/
|   `-- deploy.js
|-- test/
|   `-- SimpleStorage.test.js
|-- assignment-1/
|-- assignment-2/
|-- assignment-3/
|-- assignment-4/
`-- assignment-5/
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
copy .env.example .env
```

3. Compile contracts:

```bash
npm run compile
```

## Local Run

Open one terminal:

```bash
npm run node
```

Open a second terminal:

```bash
npm run deploy:local
```

## Polygon Amoy Deployment

Fill `AMOY_RPC_URL` and `PRIVATE_KEY` inside `.env`, then run:

```bash
npm run deploy:amoy
```

After deployment, add the printed contract address to the assignment README and screenshots.

## Notes for Submission

- Use only testnets, not mainnet.
- Keep screenshots inside the relevant `screenshots/` folders.
- Add the final Polygon Amoy contract address inside `assignment-2/README.md`.
- Update the student information before submission.
