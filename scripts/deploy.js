
const hre = require("hardhat");

const fs = require("fs");

async function main() {

  const To_Do_List = await hre.ethers.getContractFactory("To_Do_List");
  const to_do_list = await To_Do_List.deploy();

  await to_do_list.deployed();

  console.log("To_Do_List deployed to:", to_do_list.address);

  // Writing In File
  fs.writeFileSync(
    "./config.js",
    `
  export const to_do_listAddress = "${to_do_list.address}"
  `
  );

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
