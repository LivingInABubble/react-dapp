require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    // ropsten: {
    //   url: "https://eth-ropsten.alchemyapi.io/v2/l_FWaHhe2QFTgu0bZDzr1NWH07H5ZNZJ",
    //   accounts: [`0xcec445819b631e313f0919b7419fddb6535df3c188fb916536da94c08ca248c1`]
    // }
  },
  solidity: "0.8.4",
};
