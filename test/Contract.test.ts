import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert, expect } from "chai";
import { ethers } from "hardhat";
import { Contract } from "../typechain-types"; // Enter contract name

describe("Contract", function () { // Enter contract name
  let ourToken: OurToken; // Enter contract name
  let deployer: SignerWithAddress;
  let otherAccount: SignerWithAddress;

  beforeEach(async () => {
    // Contracts are deployed using the first signer/account by default
    [deployer, otherAccount] = await ethers.getSigners();

    const ourTokenFactory = await ethers.getContractFactory("OurToken"); // Enter contract name
    ourToken = await ourTokenFactory.deploy(); // Enter contract name
  });

  describe("function", () => { // Enter function name
    it("", async () => {});
  });