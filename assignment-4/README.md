# Assignment 4: IPFS Integration

## Objective

This assignment uploads a file to IPFS using Pinata and prints the generated CID.

## What IPFS Is

IPFS is a distributed storage network. Files are identified by a content identifier called a CID, which changes when the file content changes.

## Service Used

Pinata is used as the upload service because it provides an easy HTTP API for pinning files to IPFS.

## File

- `ipfs.js`: uploads a file and prints the CID and gateway link

## Setup

1. Add `PINATA_JWT` to `.env`.
2. Optionally place a sample file in `assignment-4/`.

## Example Command

```bash
node assignment-4/ipfs.js assignment-4/sample.txt
```

## Expected Output

- A CID such as `bafy...`
- A gateway URL that opens the uploaded file

## What to Screenshot

- Successful upload in terminal
- Gateway page showing the uploaded file
