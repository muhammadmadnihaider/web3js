var Web3 = require("web3");
var urlMainNet =
  "https://ropsten.infura.io/v3/e3d040930fdc4ae5bd10f6614fa654b9";

// var addressAcc = "0x1D3D135012f1De76a3A1A35F9370a3Ef4Bb6044C";
var web3 = new Web3(urlMainNet);
var abi = [
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
var address = "0xbc0c9F8A540EB028aabF52faA4d2360015614E7f";
const contract = new web3.eth.Contract(abi, address);
// console.log(contract.methods);
contract.methods.getbalance().call((err, result) => {
  console.log(result);
  console.log(err);
});
