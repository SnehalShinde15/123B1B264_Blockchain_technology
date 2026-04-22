try {
  require("dotenv").config();
} catch (error) {
  console.warn("dotenv is not installed yet. Using process environment only.");
}

const fs = require("fs");
const path = require("path");

async function uploadFileToPinata(filePath) {
  if (!process.env.PINATA_JWT) {
    throw new Error("PINATA_JWT is missing in .env");
  }

  const resolvedPath = path.resolve(filePath);
  const fileName = path.basename(resolvedPath);

  if (!fs.existsSync(resolvedPath)) {
    throw new Error(`File not found: ${resolvedPath}`);
  }

  const fileBuffer = fs.readFileSync(resolvedPath);
  const data = new FormData();
  const fileBlob = new Blob([fileBuffer]);
  data.append("file", fileBlob, fileName);

  const response = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.PINATA_JWT}`
    },
    body: data
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Pinata upload failed: ${errorText}`);
  }

  const result = await response.json();
  console.log(`CID: ${result.IpfsHash}`);
  console.log(`Gateway URL: https://gateway.pinata.cloud/ipfs/${result.IpfsHash}`);
}

const targetFile = process.argv[2] || path.join(__dirname, "sample.txt");
uploadFileToPinata(targetFile).catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
