import { DeployFunction } from "hardhat-deploy/dist/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";


const func: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
): Promise<void> {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log("deployer: ", deployer);

  const fixedToken = await deploy("FixedToken", {
    from: deployer,
    log: true,
    args: [],

  });

  /**
    * keccak256(initialize()) = 0x8129fc1c
    * @dev run initialize() function one time when deploy proxy contract
  */

  await deploy("Proxy", {
    from: deployer,
    log: true,
    args: [fixedToken.address, "0x8129fc1c"]
  })
};

func.tags = ["FixedToken"];
export default func;
