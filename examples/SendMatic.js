const {ethers} = require("ethers");
let secret = require("../secrets.json");

const receipient = "0xe476564e4cE1dF877D131b2e78d6C66635Fc5Df8";

const provider = new ethers.providers.
JsonRpcProvider(`https://speedy-nodes-nyc.moralis.io/${secret.MORALIS_KEY}/polygon/mumbai`);

const wallet = new ethers.Wallet(secret.PRIVATE_KEY, provider);

const sendMATIC = async() =>{

    //sends Matic
    const tx = await wallet.sendTransaction({
        to: receipient,
        value: ethers.utils.parseEther('0.1')
    });

    // Wait for transaction to be over so to fetch data
    await tx.wait();
    console.log(tx);

    const balanceReceiver = await provider.getBalance(receipient);
    console.log("balance after receiving Matic:", ethers.utils.formatEther(balanceReceiver));
}

sendMATIC();