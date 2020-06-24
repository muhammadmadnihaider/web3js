const Web3 = require("web3");
const web3 = new Web3(
  "https://ropsten.infura.io/v3/e3d040930fdc4ae5bd10f6614fa654b9"
);

// OMG Token Contract
const abi = [
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "shout",
    type: "event",
  },
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
];
const address = "0x641Bdc44283FD5795418fa46Ba305541E63234Ac";

const contract = new web3.eth.Contract(abi, address);

// don't know why it's giving an empty array and trying to solve it
contract.getPastEvents(
  "allEvents",
  {
    fromBlock: 0,
    toBlock: "latest",
  },
  (err, events) => {
    console.log(events.length);
    console.log(err);
  }
);
