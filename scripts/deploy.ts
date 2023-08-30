import { Account, ec, json, stark, Provider, hash, CallData, RpcProvider } from "starknet";
import fs from "fs";
import axios from "axios";

// connect provider
const provider = new RpcProvider({
  nodeUrl: "https://starknet-testnet.blastapi.io/0974b411-0859-487d-a0c3-8f2513634988/rpc/v0.4",
});

async function main() {
  // new account abstraction
  // Generate public and private key pair.
  //
  const AAprivateKey = "<YOUR PRIVATE KEY";
  console.log("New account :\nprivateKey=", AAprivateKey);
  const AAstarkKeyPub = ec.starkCurve.getStarkKey(AAprivateKey);
  console.log("publicKey=", AAstarkKeyPub);

  // Only if it has not been declared
  // declare the contract
  // const compiledAAaccount = json.parse(
  //   fs.readFileSync("./compiled_contracts/myAccountAbstraction.json").toString("ascii"),
  // );
  // const { transaction_hash: declTH, class_hash: decCH } = await account0.declare({ contract: compiledAAaccount });
  // console.log("Customized account class hash =", decCH);
  // await provider.waitForTransaction(declTH);
  //
  let AAaccountClassHash = "0x5751eba776086d56e9836e2f59edb02613caabaa5bbce1833fd54fd719ec5e7";

  // Calculate future address of the account
  const AAaccountConstructorCallData = CallData.compile({
    // super_admin_address: account0.address,
    publicKey: AAstarkKeyPub,
  });
  const AAcontractAddress = hash.calculateContractAddressFromHash(
    AAstarkKeyPub,
    AAaccountClassHash,
    AAaccountConstructorCallData,
    0,
  );
  console.log("Precalculated account address=", AAcontractAddress);

  // deploy account
  // Notice the 1 is becaues it is cairo 1 account
  const AAaccount = new Account(provider, AAcontractAddress, AAprivateKey, "1");
  const { transaction_hash, contract_address } = await AAaccount.deployAccount({
    classHash: AAaccountClassHash,
    constructorCalldata: AAaccountConstructorCallData,
    addressSalt: AAstarkKeyPub,
  });
  await provider.waitForTransaction(transaction_hash);
  console.log("✅ New customized account created.\n   address =", contract_address);
}

main();
