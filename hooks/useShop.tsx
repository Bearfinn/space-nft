import { ethers } from "ethers";
import { useMemo } from "react";
import {
  useChain,
  useMoralis
} from "react-moralis";
import { useContract } from "./useContract";
import { handleTransaction, useExecuteFunction } from "./useExecuteFunction";

export const useShop = () => {
  const { Moralis } = useMoralis()
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );
  const nftContract = useContract("SNFT");

  const buyBoosterPack = useExecuteFunction<{ upgradeCount: number }>({
    functionName: "buyBoosterPackGRB",
    ...nftContract,
  });

  const buyGRB = useExecuteFunction<{ _amountGRB: number }>({
    functionName: "buyGRB",
    ...nftContract,
  });

  const buyFuel = useExecuteFunction<{ _amount: number }>({
    functionName: "buyFuel",
    ...nftContract,
  });

  const getFreeShip = async () => {
    const web3Provider = await Moralis.enableWeb3();
    const signer = web3Provider.getSigner();
    const contract = new ethers.Contract(nftContract.contractAddress, nftContract.abi, signer);
    handleTransaction(() => contract.createTestShipForFree({ gasLimit: 400000 }));
  }

  return {
    buyBoosterPack,
    buyGRB,
    buyFuel,
    getFreeShip,
  };
};
