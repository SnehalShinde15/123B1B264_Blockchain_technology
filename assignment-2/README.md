# Assignment 2: Polygon Amoy Deployment

## Objective

This assignment deploys the same `SimpleStorage` contract to the Polygon Amoy testnet using Hardhat.

## Why Reuse the Same Contract

Using one contract across assignments keeps the project clear and avoids unnecessary code duplication. It also makes the frontend work in Assignment 3 much easier because the ABI and contract behavior remain the same.

## Required Setup

Install dependencies:

```bash
npm install
```

Create `.env` from `.env.example` and fill:

- `AMOY_RPC_URL`
- `PRIVATE_KEY`

## Deploy Command

```bash
npm run deploy:amoy
```

## Important Submission Detail

Contract Address: `PASTE_DEPLOYED_ADDRESS_HERE`

Explorer Link: `PASTE_POLYGON_AMOY_EXPLORER_LINK_HERE`

## What to Screenshot

- Successful Amoy deployment in terminal
- Polygon explorer showing the transaction or contract page

## Notes

Only testnets are used in this repository. If Polygon Mumbai is no longer accepted, use Polygon Amoy.
