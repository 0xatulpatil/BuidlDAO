import sdk from "./1-initialize-sdk.js";


const app = sdk.getAppModule("0x98A064b14f0b02015E2FF730DC90B7187367b22B");

(async () => {
  try {
    const tokenModule = await app.deployTokenModule({
      
      name: "BUIDL Token",
      symbol: "BUIDL",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();


// Your app address is: 0x98A064b14f0b02015E2FF730DC90B7187367b22B
// ✅ Successfully deployed token module, address: 0x40EC7461
// 3e8da0Ff961EdEb164156619a7bf584B