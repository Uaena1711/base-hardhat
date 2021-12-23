import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";


const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
): Promise<void> {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("deployer: ", deployer);

  await deploy("MyArtSale", {
    from: deployer,
    log: true,
    args: [],

  });
};

func.tags = ["MyArtSale"];
export default func;
