import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useMemo } from "react";
import {
  useChain,
  useMoralis
} from "react-moralis";
import { useExecuteFunction } from "./useExecuteFunction";

export const useShop = () => {
  const { account, Moralis } = useMoralis();
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );

  const buyBoosterPack = useExecuteFunction<{ upgradeCount: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "buyBoosterPackAVAX",
    abi: SNFTABI,
  });

  const buyGRB = useExecuteFunction<{ _amountGRB: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "buyGRB",
    abi: SNFTABI,
  });

  const buyFuel = useExecuteFunction<{ _amount: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "buyFuel",
    abi: SNFTABI,
  });

  const getFreeShip = useExecuteFunction<{ _amount: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "createTestShipForFree",
    abi: SNFTABI,
  });

  return {
    buyBoosterPack,
    buyGRB,
    buyFuel,
    getFreeShip,
  };
};
