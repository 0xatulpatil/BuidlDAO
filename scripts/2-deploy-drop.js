import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x98A064b14f0b02015E2FF730DC90B7187367b22B");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "BuidlDAO Membership",
      description: "A DAO for Build",
      image: readFileSync("scripts/assets/Buidl.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()