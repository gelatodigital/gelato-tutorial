/* eslint-disable @typescript-eslint/naming-convention */
interface Addresses {
    PokeMe: string;
    IceCreamNFT: string;
    GelatoCredits: string;
  }
  
  export const getAddresses = (network: string): Addresses => {
    switch (network) {
      case "mainnet":
        return {
            PokeMe: '',
            IceCreamNFT: '',
            GelatoCredits: ''
          };
      case "ropsten":
        return {
          PokeMe: '',
          IceCreamNFT: '',
          GelatoCredits: ''
        };
      case "goerli":
        return {
          PokeMe: '0xc1C6805B857Bef1f412519C4A842522431aFed39',
          IceCreamNFT: '0x02386322Ce32020817b57D8843e733c78a8C4Caa',
          GelatoCredits: '0x5BC6722ff0341A19E3d6364683bF3ab53828BFBF'
        };
      default:
        throw new Error(`No addresses for Network: ${network}`);
    }
  };