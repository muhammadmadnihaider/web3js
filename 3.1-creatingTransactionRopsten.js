var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/e3d040930fdc4ae5bd10f6614fa654b9"
);

const account1 = "0xc0fB04d96a3665b4f8670b420f777c66CD8FdB26"; // Your account address 1
const account2 = "0xB2b436EA950babF69DEdF5588Dd3b0EC6819c12d"; // Your account address 2

const privateKey1 = Buffer.from(
  "8BC5F28570DEAFF5D3AB592F1D72E95571E8020DEE0A6937031C09935C21D80D",
  "hex"
);
const privateKey2 = Buffer.from(
  "1353512450A24FC45C02091412C70477CD3E3E6047DA8402A7DA69E7D6C13258",
  "hex"
);

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("0.5", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };

  // Sign the transaction
  const tx = new Tx.Transaction(txObject, { chain: "ropsten" });
  tx.sign(privateKey1);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
    console.log(err);
    // Now go check etherscan to see the transaction!
  });
});
