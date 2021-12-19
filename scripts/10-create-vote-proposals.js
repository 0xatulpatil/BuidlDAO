import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

// Our voting contract.
const voteModule = sdk.getVoteModule(
  "0xF3243D56AD9960Dfd95E5EAe1afAEEaC5eAf2E1D",
);

// Our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  "0x40EC74613e8da0Ff961EdEb164156619a7bf584B",
);

(async () => {
  try {
    const amount = 420_000;
    
    await voteModule.propose(
      "Should we transfer 10000 $BUIDL to 🦄Buildspace for helping us build awesome Projects?",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [
              voteModule.address,
              ethers.utils.parseUnits(amount.toString(), 18),
            ]
          ),
         
          toAddress: tokenModule.address,
        },
      ]
    );

    console.log("✅ Successfully created proposal to mint tokens");
  } catch (error) {
    console.error("failed to create first proposal", error);
    process.exit(1);
  }

//   try {
//     const amount = 6_900;
//     // Create proposal to transfer ourselves 6,900 token for being awesome.
//     await voteModule.propose(
//       "Should the DAO transfer " +
//       amount + " tokens from the treasury to " +
//       process.env.WALLET_ADDRESS + " for being awesome?",
//       [
//         {
          
//           nativeTokenValue: 0,
//           transactionData: tokenModule.contract.interface.encodeFunctionData(
            
//             "transfer",
//             [
//               process.env.WALLET_ADDRESS,
//               ethers.utils.parseUnits(amount.toString(), 18),
//             ]
//           ),

//           toAddress: tokenModule.address,
//         },
//       ]
//     );

//     console.log(
//       "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
//     );
//   } catch (error) {
//     console.error("failed to create first proposal", error);
//   }
})();
