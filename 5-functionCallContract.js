var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/e3d040930fdc4ae5bd10f6614fa654b9"
);

const account1 = "0xc0fB04d96a3665b4f8670b420f777c66CD8FdB26"; // Your account address 1
const privateKey1 = Buffer.from(
  "8BC5F28570DEAFF5D3AB592F1D72E95571E8020DEE0A6937031C09935C21D80D",
  "hex"
);

const abi = [
  {
    inputs: [],
    name: "getbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const caddress = "0x9a12aa56d82b50cb914e62edf4a4b7a966b4dca5";
const contract = new web3.eth.Contract(abi, caddress);
const data = contract.methods.setBalance(72).encodeABI();
web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: caddress,
    gasLimit: web3.utils.toHex(800000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    data: data,
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
