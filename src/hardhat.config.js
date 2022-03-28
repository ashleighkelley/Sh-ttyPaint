/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require("@nomiclabs/hardhat-ethers");
require('dotenv').config();

const { REACT_APP_ALCHEMY_KEY, REACT_APP_RINKEBY_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  defaultNetwork:'rinkeby',
  networks: {
    rinkeby: {
      url: REACT_APP_ALCHEMY_KEY, 
      accounts: [`0x${REACT_APP_RINKEBY_KEY}`]
    }
  },
};
