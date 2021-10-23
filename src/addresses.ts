/* eslint-disable @typescript-eslint/naming-convention */
interface Addresses {
    PokeMe: string;
    GelatoShop: string;
    GelatoCredits: string;
  }
  
  export const getAddresses = (network: string): Addresses => {
    switch (network) {
      case "mainnet":
        return {
            PokeMe: '',
            GelatoShop: '',
            GelatoCredits: ''
          };
      case "ropsten":
        return {
          PokeMe: '',
          GelatoShop: '',
          GelatoCredits: ''
        };
      case "goerli":
        return {
          PokeMe: '0xc1C6805B857Bef1f412519C4A842522431aFed39',
          GelatoShop: '0x798D01b2b31Ad9439Ff07335CfcbC05B1009cBDe',
          GelatoCredits: '0x5BC6722ff0341A19E3d6364683bF3ab53828BFBF'
        };
      default:
        throw new Error(`No addresses for Network: ${network}`);
    }
  };