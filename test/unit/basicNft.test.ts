import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { BasicNft } from "../../typechain-types";
import { token } from "../../typechain-types/@openzeppelin/contracts";

describe("BasicNft", function () {
    let basicNft: BasicNft;
    let deployer: SignerWithAddress;
    let otherAccount: SignerWithAddress;

    beforeEach(async () => {
        [deployer, otherAccount] = await ethers.getSigners();

        basicNft = await (await ethers.getContractFactory("BasicNft")).deploy();
    });

    describe("constructor", () => {
        it("initializes the NFT correctly", async () => {
            const name = await basicNft.name();
            const symbol = await basicNft.symbol();
            const tokenCounter = await basicNft.getTokenCounter();

            assert.equal(name, "Blu Panda");
            assert.equal(symbol, "BPM");
            assert.equal(tokenCounter.toString(), "0");
        });
    });

    describe("mintNft", () => {
        beforeEach(async () => {
            const tx = await basicNft.mintNft();

            await tx.wait(1);
        });

        it("allows users to mint and updates appropriately", async () => {
            const tokenCounter = await basicNft.getTokenCounter();
            const tokenUri = await basicNft.tokenURI(0);

            assert.equal(tokenCounter.toString(), "1");
            assert.equal(tokenUri.toString(), await basicNft.TOKEN_URI());
        });

        it("shows the correct balance and owner of an NFT", async () => {
            const deployerBalance = await basicNft.balanceOf(deployer.address);
            const owner = await basicNft.ownerOf(0);

            assert.equal(deployerBalance.toString(), "1");
            assert.equal(owner, deployer.address);
        });
    });
});
