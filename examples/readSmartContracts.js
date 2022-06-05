///We will read from a marketplace contract deployed in polygon and use Moralis for the node.

const {ethers} = require("ethers");
let secret = require("../secrets.json");

const maticAddress = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
const maticAbi = require("./matic.json");

const address = "0x78655080b65f42E2ceE5FA5673689CC44D4E1cFC";

const provider = new ethers.providers.
JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/${secret.MORALIS_KEY}/eth/mainnet`);

let matic = new ethers.Contract(maticAddress, maticAbi, provider);

const getBalanceOf = async() =>{
    let balance = await matic.balanceOf(address);
    console.log("Balance of Matic token creator", ethers.utils.formatEther(balance));
}

const getName = async() =>{
    let name = await matic.name();
    console.log("name of token:-", name);
}

const totalSupply = async() =>{
    let supply = await matic.totalSupply();
    console.log("Total Supply of Matic Token:-", ethers.utils.formatEther(supply));
}

getBalanceOf();
getName();
totalSupply();