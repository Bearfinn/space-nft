import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo } from "react";
import {
  useChain,
  useMoralis, useWeb3ExecuteFunction
} from "react-moralis";
import { useContract } from "./useContract";
import { useExecuteFunction } from "./useExecuteFunction";

export const useShip = () => {
  const { account, Moralis } = useMoralis();
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );
  const nftContract = useContract("SNFT")

  const { data: fleetTokenIds, fetch: getFleets } = useWeb3ExecuteFunction({
    ...nftContract,
    functionName: "getUserFleet",
    params: { _user: account },
  });

  useEffect(() => {
    getFleets()
  }, [account, getFleets])

  const addShipToFleet = useExecuteFunction<{ _tokenId: number }>({
    ...nftContract,
    functionName: "addShipToFleet",
  });

  const removeShipFromFleet = useExecuteFunction<{ _tokenId: number }>({
    ...nftContract,
    functionName: "removeShipFromFleet",
  });

  const upgradeShip = useExecuteFunction<{
    _tokenId: number;
    hpUpgradeCount: number;
    attackUpgradeCount: number;
    miningUpgradeCount: number;
    travelUpgradeCount: number;
  }>({
    ...nftContract,
    functionName: "upgradeShip",
  });

  return {
    fleetTokenIds: fleetTokenIds as any[],
    addShipToFleet,
    removeShipFromFleet,
    upgradeShip,
  };
};
