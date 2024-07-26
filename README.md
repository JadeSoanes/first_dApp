# Hello World! Creating a dApp
Creating a simple 'hello world' decentralised app (dApp) and deploying to the Ethereum blockchain. This project demonstrates the basics of building on the Ethereum blockchain using Hardhat and Solidity. The dApp allows users to send a "Hello World" message to the blockchain and practice writing a smart contract!

![Custom Badge](https://img.shields.io/badge/First_dApp-blue)
![Built with Hardhat](https://img.shields.io/badge/Built_with_Hardhat-yellow)

## Features 📝
- **Smart Contract:** A basic Solidity contract that stores and retrieves a "Hello World" message.
- **Deployment:** Scripts for deploying the contract using Hardhat.
- **Test Net:** Development done using teh Sepolia test network.

## Installation 🧰

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) 
- Ethereum wallet
- [Alchemy account](https://www.alchemy.com/)



### Clone the repository
```bash
git clone https://github.com/yourusername/helloworld-dapp.git
cd helloworld-dapp
```

### Ensure you have the correct file structure
It is important you have the correct file structure! Especially the placement of the .env file
![Example File Structure](images/fileconfig.png)


### Note: keys!
Not included in this repo is the .env file in which I set the variables 'API_URL' and 'PRIVATE_KEY'. You will ahve to follow the guidence in the tutorial below for more information on where to get these.


### Refer to this tutorial
[Ethereum Tutorial](https://ethereum.org/en/developers/tutorials/hello-world-smart-contract/)


## The result ❗
The contract I ran in this project was successful, as evidenced by this little 'Hello World!' which can be found on the block explorer!

**Screenshot 1: Block Explorer**

!['Hello World!' shown as the contract on the block scanner](images/result1.png)



**Screenshot 2: Response from terminal**
![Confirmation of deployment from the terminal](images/result2.png)

## References & credit 🌟
I completed the below tutorial from ethereum.org - thank you to that community for making this information ferely available.

https://ethereum.org/en/developers/tutorials/hello-world-smart-contract/



