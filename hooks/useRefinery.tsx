import SNFTABI from "constants/abi/SNFT.json";
import { REFRESH_TIME } from "constants/config";
import { CONTRACTS } from "constants/contracts";
import { useEffect, useMemo } from "react";
import { useChain, useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { RefineryInfo } from "types/Items";
import { useExecuteFunction } from "./useExecuteFunction";
import { useTrigger } from "./useUpdate";

export const useRefinery = () => {
  const { account, Moralis } = useMoralis();
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );

  const {
    data: refineryInfo,
    fetch: getRefineryInfo,
    error,
  } = useWeb3ExecuteFunction({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "userRefinery",
    abi: SNFTABI,
    params: { "": account },
  });

  const { data: calculatedRefinery, fetch: calculateRefinery } =
    useWeb3ExecuteFunction({
      contractAddress: CONTRACTS["SNFT"][chainId],
      functionName: "calculateRefinery",
      abi: SNFTABI,
      params: { "": account },
    });

  const refinery = useMemo<RefineryInfo | null>(() => {
    if (!refineryInfo) return null;
    if (!calculatedRefinery) return null;
    const [mineralSpenditure, production] = calculatedRefinery as any;

    const {
      consumePerSecond,
      productionPerSecond,
      waitingToClaim,
      lastUpdateTime,
    } = refineryInfo as any;
    return {
      consumePerSecond: Moralis.Units.FromWei(consumePerSecond),
      productionPerSecond: Moralis.Units.FromWei(productionPerSecond),
      waitingToClaim:
        Number(Moralis.Units.FromWei(waitingToClaim)) +
        Number(Moralis.Units.FromWei(production)),
      lastUpdateTime: new Date(Moralis.Units.FromWei(lastUpdateTime, 0)),
      mineralSpenditure: Number(Moralis.Units.FromWei(mineralSpenditure)),
    };
  }, [Moralis.Units, refineryInfo, calculatedRefinery]);

  const { trigger } = useTrigger();

  useEffect(() => {
    const timer = setInterval(() => {
      getRefineryInfo();
      calculateRefinery();
    }, REFRESH_TIME)
    return () => clearInterval(timer)
  }, [Moralis.Units, account, calculateRefinery, getRefineryInfo, trigger]);

  const upgradeRefinery = useExecuteFunction<{ upgradeCount: number }>({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "upgradeRefinery",
    abi: SNFTABI,
  });

  const claimRefinery = useExecuteFunction({
    contractAddress: CONTRACTS["SNFT"][chainId],
    functionName: "claimRefinery",
    abi: SNFTABI,
  });

  return {
    refineryInfo: refinery,
    upgradeRefinery,
    claimRefinery,
  };
};
