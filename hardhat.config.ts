import { HardhatUserConfig } from "hardhat/config";

// PLUGINS
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-deploy";

// Process Env Variables
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const PK_MAINNET = process.env.PK_MAINNET;
const ALCHEMY_ID = process.env.ALCHEMY_ID;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",

  // hardhat-deploy
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  networks: {
    hardhat: {
      forking: {
        url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_ID}`,
        blockNumber: 5517628,
      },
    },
    goerli: {
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
      chainId: 5,
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_ID}`,
    },
    mainnet: {
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
      chainId: 1,
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_ID}`,
    },
    matic: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
      chainId: 137,
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
    },
    rinkeby: {
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
      chainId: 4,
      url: `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_ID}`,
    },
    ropsten: {
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
      chainId: 3,
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_ID}`,
    },
    fantom: {
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
      chainId: 250,
      url: `https://rpc.ftm.tools`,
    },
    arbitrum: {
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
      chainId: 42161,
      url: `https://arb1.arbitrum.io/rpc`,
    },
    avalanche: {
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
    },
    gnosis: {
      url: "https://rpc.gnosischain.com",
      chainId: 100,
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
    },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_ID}`,
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_ID}`,
      chainId: 10,
      accounts: PK_MAINNET ? [PK_MAINNET] : [],
    },
  },

  etherscan: {
    apiKey: ETHERSCAN_API_KEY ? ETHERSCAN_API_KEY : "",
  },

  solidity: {
    compilers: [
      {
        version: "0.8.7",
        settings: {
          optimizer: { enabled: true, runs: 200 },
        },
      },
    ],
  },

  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
