const fs = require("fs");
const path = require("path");

async function main() {
  const factory = await ethers.getContractFactory("SimpleStorage");
  const contract = await factory.deploy();
  await contract.waitForDeployment();

  const address = await contract.getAddress();
  console.log(`SimpleStorage deployed to: ${address}`);

  const artifactPath = path.join(
    __dirname,
    "..",
    "artifacts",
    "contracts",
    "SimpleStorage.sol",
    "SimpleStorage.json"
  );
  const frontendDir = path.join(__dirname, "..", "assignment-3", "frontend");
  const artifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

  fs.writeFileSync(
    path.join(frontendDir, "contract-config.js"),
    `window.CONTRACT_CONFIG = ${JSON.stringify(
      {
        address,
        abi: artifact.abi
      },
      null,
      2
    )};\n`
  );

  console.log("Frontend contract config updated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
