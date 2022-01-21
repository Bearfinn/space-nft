import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo } from "react";
import {
  useChain,
  useMoralis, useWeb3ExecuteFunction
} from "react-moralis";
import { useExecuteFunction } from "./useExecuteFunction";

interface IExplorationStatus {
  currentEncounterType: number;
  currentExplorationDistance: number;
  currentExplorationType: number;
  currentMissionFailed: boolean;
  damageTaken: number;
  exploreCompleteTime: Date;
  fleetOnExplore: boolean;
}

export const useExplore = () => {
  const { account, Moralis } = useMoralis();
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );

  const { data: rawExplorationStatus, fetch: getExplorationStatus }: any = useWeb3ExecuteFunction({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "userExplorationStatus",
    abi: SNFTABI,
    params: { "": account },
  });

  const explorationStatus = useMemo(() => {
    if (!rawExplorationStatus) return null;
    return {
      currentEncounterType: rawExplorationStatus.currentEncounterType,
      currentExplorationDistance: rawExplorationStatus.currentExplorationDistance.toNumber(),
      currentExplorationType: rawExplorationStatus.currentExplorationType,
      currentMissionFailed: rawExplorationStatus.currentMissionFailed,
      damageTaken: rawExplorationStatus.damageTaken.toNumber(),
      exploreCompleteTime: new Date(rawExplorationStatus.exploreCompleteTime.toNumber() * 1000),
      fleetOnExplore: rawExplorationStatus.fleetOnExplore
    }
  }, [rawExplorationStatus])

  useEffect(() => {
    getExplorationStatus()
  }, [getExplorationStatus])

  const explore = useExecuteFunction<{ _distance: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "explore",
    abi: SNFTABI,
  });

  const claimExploration = useExecuteFunction<{}>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "claimExploration",
    abi: SNFTABI,
  });

  return {
    explorationStatus,
    explore,
    claimExploration,
  };
};
