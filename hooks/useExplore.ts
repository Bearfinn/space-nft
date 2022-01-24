import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo } from "react";
import {
  useChain,
  useMoralis, useWeb3ExecuteFunction
} from "react-moralis";
import { useContract } from "./useContract";
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
  const { account } = useMoralis();
  const nftContract = useContract("SNFT")

  const { data: rawExplorationStatus, fetch: getExplorationStatus }: any = useWeb3ExecuteFunction({
    functionName: "userExplorationStatus",
    params: { "": account },
    ...nftContract,
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
    functionName: "explore",
    ...nftContract,
  });

  const claimExploration = useExecuteFunction<{}>({
    functionName: "claimExploration",
    ...nftContract,
  });

  return {
    explorationStatus,
    explore,
    claimExploration,
  };
};
