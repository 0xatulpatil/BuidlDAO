import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
  "0x98A064b14f0b02015E2FF730DC90B7187367b22B",
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "Vote for the next Buidl Project",

      
      votingTokenAddress: "0x40EC74613e8da0Ff961EdEb164156619a7bf584B",

      proposalStartWaitTimeInSeconds: 0,

      proposalVotingTimeInSeconds: 24 * 60 * 60,

      votingQuorumFraction: 0,

      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.log("Failed to deploy vote module", err);
  }
})();


// Successfully deployed vote module, address: 0xF3243D56AD9960Dfd95E5EAe1afAEEaC5e
// Af2E1D