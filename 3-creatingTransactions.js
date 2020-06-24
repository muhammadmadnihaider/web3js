var Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

const account1 = "0x93FBe7f1d0Ec6A42b45b59d1d50422843AA39296";
const account2 = "0xFcc04F27F025ec67e7E196174631C7486B6d093C";

web3.eth.sendTransaction({
  from: account1,
  to: account2,
  value: web3.utils.toWei("1", "ether"),
});
