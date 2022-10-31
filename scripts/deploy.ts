import { ethers, network } from "hardhat";
import { developmentChains, networkConfig } from "../helper-hardhat-config";
import { verify } from "../utils/verify";

const main = async () => {
    const [deployer] = await ethers.getSigners();

    const basicNft = await (await ethers.getContractFactory("BasicNft")).deploy();

    await basicNft.deployed();

    console.log(`Contract deployed to ${basicNft.address}`);

    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        await basicNft.deployTransaction.wait(networkConfig[network.name].blockConfirmations);

        await verify(basicNft.address, []);
    }
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
