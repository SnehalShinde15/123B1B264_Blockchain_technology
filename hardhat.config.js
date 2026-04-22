try {
  require("@nomicfoundation/hardhat-toolbox");
} catch (error) {
  console.warn("Hardhat toolbox is not installed yet. Run npm install before compiling.");
}

try {
  require("dotenv").config();
} catch (error) {
  console.warn("dotenv is not installed yet. Using process environment only.");
}

const { AMOY_RPC_URL, PRIVATE_KEY } = process.env;

const accounts = PRIVATE_KEY ? [PRIVATE_KEY] : [];

module.exports = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    amoy: {
      url: AMOY_RPC_URL || "https://rpc-amoy.polygon.technology",
      accounts
    }
  }
};
