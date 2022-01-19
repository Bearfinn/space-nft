import { CONTRACTS } from "constants/contracts";
import { useMemo } from "react";
import { useChain } from "react-moralis";
import SNFTABI from "constants/abi/SNFT.json";

export const useContract = (contractSymbol: keyof typeof CONTRACTS) => {
  const { chainId: chainIdHex } = useChain();
  const chainId = useMemo(
    () => parseInt(chainIdHex || "", 16).toString() as "43113",
    [chainIdHex]
  );
  return {
    contractAddress: CONTRACTS[contractSymbol][chainId],
    abi: SNFTABI,
  };
};
