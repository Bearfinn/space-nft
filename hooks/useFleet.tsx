import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo } from "react";
import {
  useChain,
  useMoralis, useWeb3ExecuteFunction
} from "react-moralis";
import { useExecuteFunction } from "./useExecuteFunction";

export const useFleet = () => {
  const { account, Moralis } = useMoralis();
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );

  const { data: fleetTokenIds, fetch: getFleets } = useWeb3ExecuteFunction({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "getUserFleet",
    abi: SNFTABI,
    params: { _user: account },
  });

  useEffect(() => {
    getFleets()
  }, [account, getFleets])

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
    fleetTokenIds: fleetTokenIds as any[],
    addShipToFleet,
    removeShipFromFleet,
  };
};
