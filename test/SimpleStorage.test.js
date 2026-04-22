const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
  async function deployFixture() {
    const Factory = await ethers.getContractFactory("SimpleStorage");
    const contract = await Factory.deploy();
    await contract.waitForDeployment();
    return contract;
  }

  it("stores value and increments the counter", async function () {
    const contract = await deployFixture();

    await contract.setValue(42);
    await contract.incrementCounter();

    expect(await contract.value()).to.equal(42n);
    expect(await contract.counter()).to.equal(1n);
  });

  it("updates the message", async function () {
    const contract = await deployFixture();

    await contract.setMessage("Assignment 3 ready");

    expect(await contract.message()).to.equal("Assignment 3 ready");
  });
});
