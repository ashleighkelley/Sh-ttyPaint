import {pinJSONToIPFS} from './pinata.js'
import {rename} from 'fs';

var path = require('path');

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey); 

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const contractABI = require('../artifacts/contracts/ShittyPaint.sol/ShittyPaint.json')


export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = {
        status: "Connected: " + addressArray[0],
        address: addressArray[0],
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              Please install Metamask to connect your wallet.
            </a>
          </p>
        </span>
      ),
    };
  }
};


export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    console.log('address = ' + window.ethereum.selectedAddress);
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return {
          address: addressArray[0],
          status: "Success",
        };
      } else {
        return {
          address: "",
          status: "🦊 Connect to Metamask",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    return {
      address: "",
      status: (
        <span>
          <p>
            {" "}
            🦊{" "}
            <a target="_blank" href={`https://metamask.io/download.html`}>
              Please install Metamask to connect your wallet.
            </a>
          </p>
        </span>
      ),
    };
  }
};

export const mintNFT = async() => {
  //error checks
  if (window.ethereum == null || window.ethereum.selectedAddress == null) {
    console.log('not logged in')
    return {
      success: false,
      status: "🦊 Connect to Metamask",
    }
  }

  /*const edition = Math.floor(Math.random() * process.env.REACT_APP_MINT_AMT);

  
    
    //check if metadata folder is empty


    console.log('../output/metadata/'+edition)
    //make metadata
    const metadata = require('../output/metadata/'+edition);

    try {
      //relocate metadata
      //var fs = require('fs');
      var file = path.basename('../output/metadata/'+edition);
      var dest = path.resolve('../output/claimed/'+edition);
      rename(file.toString, dest.toString, (err)=>{
        if(err) throw err;
        else console.log('Successfully moved');
      });

    } catch (err) {
      console.log("All available NFTs have been allocated - " + err);
      return {
        success: false,
        status: "All available NFTs have been allocated",
      }
    }

    //pinata pin request
    const pinataResponse = await pinJSONToIPFS(metadata);
    if (!pinataResponse.success) {
      return {
          success: false,
          status: "😢 Something went wrong while uploading your tokenURI.",
      }
  } 
  const tokenURI = pinataResponse.pinataUrl;  */

  //load smart contract
  window.contract = await new web3.eth.Contract(contractABI.abi, contractAddress);//loadContract();

  //console.log(window.ethereum.selectedAddress + 'ed: ' + edition + 'token: ' +tokenURI);

  const amount = web3.utils.toWei('0.005', 'ether');
  const value = web3.utils.toHex(amount);

  console.log('address = ' + window.ethereum.selectedAddress);

  //set up your Ethereum transaction
  const transactionParameters = {
      to: contractAddress, // Required except during contract publications.
      from: window.ethereum.selectedAddress, // must match user's active address.
      'data': window.contract.methods.mintNFT().encodeABI(), //make call to NFT smart contract 
      value: value
  };

  //sign transaction via Metamask
  try {
    const txHash = await window.ethereum
        .request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
    return {
        success: true,
        status: "✅ Check out your transaction on Etherscan: https://rinkeby.etherscan.io/tx/" + txHash
    }
} catch (error) {
    return {
        success: false,
        status: "😥 Something went wrong: " + error.message
    }
}

  

  
};