import { ethers } from "hardhat";

export interface networkConfigInfo {
    [key: string]: {
        blockConfirmations?: number;
    };
}

export const networkConfig: networkConfigInfo = {
    hardhat: {
        blockConfirmations: 1,
    },
    goerli: {
        blockConfirmations: 3,
    },
};

export const developmentChains = ["hardhat", "localhost"];
