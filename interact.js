const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

// For Hardhat 
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// Below is an earlier step just to test the connection
// console.log(JSON.stringify(contract.abi));

// interact.js
const ethers = require('ethers');

// Provider
const alchemyProvider = new ethers.providers.JsonRpcProvider(API_URL);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


// this function reads the current contract (originally we just had Hello World!)
// async function main() {
//     const message = await helloWorldContract.message();
//     console.log("The message is: " + message);
//   }
//   main();

// this function is to allow us to update the message in the contract
async function main() {
    const message = await helloWorldContract.message();
    console.log("The message is: " + message); 

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("this is the new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: " + newMessage); 
}

main();