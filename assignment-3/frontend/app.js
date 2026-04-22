const connectButton = document.getElementById("connectButton");
const setValueButton = document.getElementById("setValueButton");
const incrementButton = document.getElementById("incrementButton");
const setMessageButton = document.getElementById("setMessageButton");
const refreshButton = document.getElementById("refreshButton");

const walletStatus = document.getElementById("walletStatus");
const appStatus = document.getElementById("appStatus");
const valueInput = document.getElementById("valueInput");
const messageInput = document.getElementById("messageInput");
const valueOutput = document.getElementById("valueOutput");
const counterOutput = document.getElementById("counterOutput");
const messageOutput = document.getElementById("messageOutput");

let browserProvider;
let signer;
let contract;

function setStatus(message) {
  appStatus.textContent = message;
}

function ensureEthereum() {
  if (!window.ethereum) {
    throw new Error("MetaMask is not installed.");
  }
}

async function connectWallet() {
  ensureEthereum();

  browserProvider = new ethers.BrowserProvider(window.ethereum);
  await browserProvider.send("eth_requestAccounts", []);
  signer = await browserProvider.getSigner();
  const address = await signer.getAddress();

  contract = new ethers.Contract(
    window.CONTRACT_CONFIG.address,
    window.CONTRACT_CONFIG.abi,
    signer
  );

  walletStatus.textContent = `Connected: ${address}`;
  setStatus("Wallet connected. Reading contract state...");
  await refreshState();
}

async function refreshState() {
  if (!contract) {
    setStatus("Connect MetaMask before reading contract data.");
    return;
  }

  const [storedValue, currentCounter, storedMessage] = await contract.getSummary();
  valueOutput.textContent = storedValue.toString();
  counterOutput.textContent = currentCounter.toString();
  messageOutput.textContent = storedMessage;
  setStatus("Contract state updated.");
}

async function sendTransaction(action) {
  if (!contract) {
    setStatus("Connect MetaMask first.");
    return;
  }

  try {
    const tx = await action();
    setStatus(`Transaction sent: ${tx.hash}`);
    await tx.wait();
    setStatus("Transaction confirmed.");
    await refreshState();
  } catch (error) {
    setStatus(error.shortMessage || error.message);
  }
}

connectButton.addEventListener("click", async () => {
  try {
    await connectWallet();
  } catch (error) {
    setStatus(error.message);
  }
});

setValueButton.addEventListener("click", async () => {
  const newValue = valueInput.value;
  if (newValue === "") {
    setStatus("Enter a number before sending the transaction.");
    return;
  }

  await sendTransaction(() => contract.setValue(newValue));
});

incrementButton.addEventListener("click", async () => {
  await sendTransaction(() => contract.incrementCounter());
});

setMessageButton.addEventListener("click", async () => {
  const newMessage = messageInput.value.trim();
  if (!newMessage) {
    setStatus("Enter a message before sending the transaction.");
    return;
  }

  await sendTransaction(() => contract.setMessage(newMessage));
});

refreshButton.addEventListener("click", async () => {
  try {
    await refreshState();
  } catch (error) {
    setStatus(error.message);
  }
});
