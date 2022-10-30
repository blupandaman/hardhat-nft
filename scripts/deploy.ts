import { ethers } from "hardhat";

const main = async () => {
  const contractFactory = await ethers.getContractFactory("Contract"); // Enter contract name
  const contract = await contractFactory.deploy(); // Enter contract name

  await contract.deployed(); // Enter contract name

  
  console.log(`Contract deployed to ${contract.address}`); // Enter contract name
} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
