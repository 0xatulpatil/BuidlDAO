import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// This is the address of our ERC-20 contract printed out in the step before.
const tokenModule = sdk.getTokenModule(
  "0x40EC74613e8da0Ff961EdEb164156619a7bf584B",
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();
    
    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$BUIDL in circulation",
    );
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();

// Your app address is: 0x98A064b14f0b02015E2FF730DC90B7187367b22B
// ✅ There now is 1000000.0 $HOKAGE in circulation