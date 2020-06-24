var Web3 = require("web3");
var urlMainNet =
  "https://mainnet.infura.io/v3/e3d040930fdc4ae5bd10f6614fa654b9";
var urlLocalGanache = "";

// main net ethereum account to check it's balance

var address = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
// var web3 = new Web3(urlMainNet);

// local ganache address

var addressGanahe = "http://127.0.0.1:7545";
var web3 = new Web3(addressGanahe);
// var balance1;
var accountBalance;
web3.eth.getBalance(address, (err, bal) => {
  web3.eth.getBalance(
    "0x93FBe7f1d0Ec6A42b45b59d1d50422843AA39296",
    (err, bal) => {
      console.log(web3.utils.fromWei(bal, "ether"));
    }
  );
});
