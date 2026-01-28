const hre = require("hardhat");

async function main() {
  const [owner] = await hre.ethers.getSigners();

  // 1. Deploy Two Tokens
  const ERC20Mock = await hre.ethers.getContractFactory("ERC20Mock");
  const tokenA = await ERC20Mock.deploy("Token A", "TKNA");
  const tokenB = await ERC20Mock.deploy("Token B", "TKNB");
  await tokenA.waitForDeployment();
  await tokenB.waitForDeployment();

  console.log(`Token A: ${tokenA.target}`);
  console.log(`Token B: ${tokenB.target}`);

  // 2. Deploy CPAMM
  const CPAMM = await hre.ethers.getContractFactory("CPAMM");
  const cpamm = await CPAMM.deploy(tokenA.target, tokenB.target);
  await cpamm.waitForDeployment();

  console.log(`CPAMM DEX deployed to: ${cpamm.target}`);

  // 3. Approve and Add Initial Liquidity
  const amount = hre.ethers.parseEther("1000");
  await tokenA.approve(cpamm.target, amount);
  await tokenB.approve(cpamm.target, amount);
  
  await cpamm.addLiquidity(amount, amount);
  console.log("Initial liquidity added (1000 TKNA + 1000 TKNB)");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
