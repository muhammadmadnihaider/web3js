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

const data =
  "0x6080604052600a60005534801561001557600080fd5b5060c7806100246000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80634d9b3d5d146037578063fb1669ca146053575b600080fd5b603d607e565b6040518082815260200191505060405180910390f35b607c60048036036020811015606757600080fd5b81019080803590602001909291905050506087565b005b60008054905090565b806000819055505056fea2646970667358221220d15ccb271df401d1c9979dfdddb7ff1a413fc604bd396023bb0abedea88a412364736f6c63430006060033";
web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    gasLimit: web3.utils.toHex(1000000),
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
