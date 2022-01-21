import { useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useContract } from "./useContract";
import { useExecuteFunction } from "./useExecuteFunction";

export const useInitialize = () => {
  const { account } = useMoralis();
  const { contractAddress, abi } = useContract("SNFT");

  const { data: isUserInitialized, fetch: getUserInitialized, error } =
    useWeb3ExecuteFunction({
      contractAddress,
      functionName: "userInitialized",
      abi,
      params: { "address": account },
    });

  const initializeUser = useExecuteFunction({
    contractAddress,
    functionName: "initializeUser",
    abi,
  });

  useEffect(() => {
    getUserInitialized();
  }, [getUserInitialized]);

  return {
    isUserInitialized,
    initializeUser,
  };
};
