# Assignment 3: Web Interface with MetaMask

## Objective

This assignment provides a very small frontend for interacting with the deployed `SimpleStorage` contract using MetaMask and Ethers.js.

## Frontend Files

- `frontend/index.html`: user interface layout
- `frontend/style.css`: styling
- `frontend/app.js`: wallet connection and contract interaction logic
- `frontend/contract-config.js`: deployed address and ABI

## Features

- Connect MetaMask wallet
- Set a number value
- Increment the counter
- Set a text message
- Refresh and display the latest contract data

## How MetaMask Connects

The frontend uses `window.ethereum` exposed by MetaMask. After the user approves wallet access, Ethers.js creates a signer and sends transactions through the selected account.

## ABI Usage

The ABI describes the contract functions so the frontend knows how to call `setValue`, `incrementCounter`, `setMessage`, and `getSummary`.

## How to Use

1. Deploy the contract first.
2. Open `frontend/contract-config.js`.
3. Replace `PASTE_DEPLOYED_ADDRESS_HERE` with the deployed contract address, or run the deploy script to auto-update it.
4. Open `frontend/index.html` in a browser with MetaMask installed.
5. Connect the wallet and interact with the contract.

## What to Screenshot

- Wallet connected in the browser
- A transaction being confirmed
- Updated contract state on the page
