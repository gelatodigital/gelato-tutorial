import { deployments, getNamedAccounts } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  if (hre.network.name === "mainnet") {
    console.log(
      `!! Deploying IceCreamNFT to mainnet/testnet. Hit ctrl + c to abort`
    );
    await new Promise((r) => setTimeout(r, 20000));
  }

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("IceCreamNFT", {
    from: deployer,
    args: [180], // 3 min
  });
};

func.skip = async (hre: HardhatRuntimeEnvironment) => {
  const shouldSkip = hre.network.name === "mainnet";
  return shouldSkip ? true : false;
};

func.tags = ["IceCreamNFT"];

export default func;
