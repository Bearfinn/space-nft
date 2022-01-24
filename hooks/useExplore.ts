import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { EncounterType, ExplorationType } from "utils/text";
import { useContract } from "./useContract";
import { useExecuteFunction } from "./useExecuteFunction";

interface IExplorationStatus {
  currentEncounterType: EncounterType;
  currentExplorationDistance: number;
  currentExplorationType: ExplorationType;
  currentMissionFailed: boolean;
  mineralsFound: number;
  damageTaken: number;
  exploreCompleteTime: Date;
  fleetOnExplore: boolean;
}

export const useExplore = () => {
  const { account } = useMoralis();
  const nftContract = useContract("SNFT");

  const { data: rawExplorationStatus, fetch: getExplorationStatus }: any =
    useWeb3ExecuteFunction({
      functionName: "userExplorationStatus",
      params: { "": account },
      ...nftContract,
    });

  const explorationStatus = useMemo(() => {
    if (!rawExplorationStatus) return null;
    return {
      currentEncounterType: rawExplorationStatus.currentEncounterType,
      currentExplorationDistance:
        rawExplorationStatus.currentExplorationDistance.toNumber(),
      currentExplorationType: rawExplorationStatus.currentExplorationType,
      currentMissionFailed: rawExplorationStatus.currentMissionFailed,
      mineralsFound: rawExplorationStatus.mineralsFound?.toNumber() || 0,
      damageTaken: rawExplorationStatus.damageTaken.toNumber() || 0,
      exploreCompleteTime: new Date(
        rawExplorationStatus.exploreCompleteTime.toNumber() * 1000
      ),
      fleetOnExplore: rawExplorationStatus.fleetOnExplore,
    } as IExplorationStatus;
  }, [rawExplorationStatus]);

  useEffect(() => {
    getExplorationStatus();
  }, [getExplorationStatus]);

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
    explore: async ({ _distance }: any) => {
      await explore({ _distance })
      await getExplorationStatus()
    },
    claimExploration: async () => {
      await claimExploration()
      await getExplorationStatus()
    },
  };
};
