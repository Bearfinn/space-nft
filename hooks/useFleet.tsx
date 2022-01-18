import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo, useState } from "react";
import {
  useChain,
  useMoralis,
  useMoralisFile,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { Fleet } from "types/Items";
import { useExecuteFunction } from "./useExecuteFunction";

export const useFleet = () => {
  const { account, Moralis } = useMoralis();
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );

  const { data: fleets, fetch: getFleets, error } = useWeb3ExecuteFunction({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "userFleet",
    abi: SNFTABI,
    params: { address: account, id: 0 },
  });

  useEffect(() => {
    getFleets()
  }, [Moralis.Units, account, getFleets])

  const addShipToFleet = useExecuteFunction<{ _tokenId: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "addShipToFleet",
    abi: SNFTABI,
  });

  const removeShipFromFleet = useExecuteFunction<{ _tokenId: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "removeShipFromFleet",
    abi: SNFTABI,
  });

  return {
    addShipToFleet,
    removeShipFromFleet,
  };
};
