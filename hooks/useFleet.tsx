import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useExecuteFunction } from "./useExecuteFunction";

export const useFleet = () => {
  const addShipToFleet = useExecuteFunction<{ _tokenId: number }>({
    contractAddress: CONTRACTS["SNFT"][43113],
    functionName: "addShipToFleet",
    abi: SNFTABI,
  });

  return {
    addShipToFleet,
  };
};