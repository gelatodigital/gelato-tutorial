/* eslint-disable @typescript-eslint/naming-convention */
interface Addresses {
    PokeMe: string;
  }
  
  export const getAddresses = (network: string): Addresses => {
    switch (network) {
      case "mainnet":
        return {
            PokeMe: ''
          };
      case "ropsten":
        return {
            PokeMe: ''
          };
      case "goerli":
        return {
          PokeMe: '0xc1C6805B857Bef1f412519C4A842522431aFed39'
        };
      default:
        throw new Error(`No addresses for Network: ${network}`);
    }
  };