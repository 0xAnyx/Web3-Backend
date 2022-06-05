///Read balance of ether of wallet address

const {ethers} = require("ethers");
let secret = require("../secrets.json");

//way of talking to a ethereum node
const provider = new ethers.providers.JsonRpcProvider(`https://rinkeby.infura.io/v3/${secret.INFURA_KEY}`);

const address = "0x098f899C222C1C2fB33552862A882fDeAb25a196";

const getBalanceOf = async() =>{
    const balance = await provider.getBalance(address);
    console.log(`Balance of ${address} is: ${ethers.utils.formatEther(balance)}`);
}
getBalanceOf();