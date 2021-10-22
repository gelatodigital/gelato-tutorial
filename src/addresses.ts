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
          GelatoShop: '0x249e7CE767e213D898B8de99024F0b08b1C42940',
          GelatoCredits: '0x34Ab6024C3e84684F99D6f2904Af490e5B8122b6'
        };
      default:
        throw new Error(`No addresses for Network: ${network}`);
    }
  };