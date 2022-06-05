const {ethers} = require("ethers");
let secret = require("../secrets.json");

const receipient = "0xe476564e4cE1dF877D131b2e78d6C66635Fc5Df8";

const provider = new ethers.providers.JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/${secret.MORALIS_KEY}/eth/rinkeby`);
const sender = new ethers.Wallet(secret.PRIVATE_KEY, provider);

const chainlinkAddress = "0x01BE23585060835E02B77ef475b0Cc51aA1e0709";
const chainlinkABI = require("./linkToken.json");

const chainlink = new ethers.Contract(chainlinkAddress, chainlinkABI, provider);

const sendLINKTo = async() =>{
    const walletConnected = chainlink.connect(sender);
    // const balanceBeforeTransfer = await provider.getBalance(receipient);
    // console.log("Balance Before Transfer of reciepient:-", ethers.utils.formatEther(balanceBeforeTransfer));
    const tx = await walletConnected.transfer(receipient, ethers.utils.parseEther('10'));
    await tx.wait();
    console.log(tx);
    const balanceAfterTransfer = await chainlink.balanceOf(receipient);
    console.log("Balance After Transfer of reciepient:-", ethers.utils.formatEther(balanceAfterTransfer));
}

sendLINKTo();