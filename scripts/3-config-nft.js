import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xfe09B84b38BE2Da408bC18dc5A7752652C001A7C",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "BuidlIT DAO",
        description: "This NFT will give you access to BuidlDAO!",
        image: readFileSync("scripts/assets/Buidl.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()