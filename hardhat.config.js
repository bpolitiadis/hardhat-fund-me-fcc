require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;
const DEV_PRIVATE_KEY = process.env.DEV_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
const CMC_API_KEY = process.env.CMC_API_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    defaultNetwork: "hardhat",
    // solidity: "0.8.8",
    solidity: {
        compilers: [{ version: "0.8.8" }, { version: "0.6.6" }],
    },
    networks: {
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [DEV_PRIVATE_KEY],
            chainId: 5,
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [DEV_PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
            gas: 2100000,
            gasPrice: 8000000000,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            chainId: 31337,
            //acounts : already in
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: CMC_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        users: {
            default: 1,
        },
    },
};
