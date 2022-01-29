import { useEffect } from "react";
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useContract } from "./useContract";
import { useExecuteFunction } from "./useExecuteFunction";

export const useInitialize = () => {
  const { account } = useMoralis();
  const nftContract = useContract("SNFT");

  const { data: isUserInitialized, fetch: getUserInitialized } =
    useWeb3ExecuteFunction({
      functionName: "userInitialized",
      params: { "address": account },
      ...nftContract
    });

  const initializeUser = useExecuteFunction({
    functionName: "initializeUser",
    ...nftContract,
  });

  useEffect(() => {
    getUserInitialized();
  }, [getUserInitialized]);

  return {
    isUserInitialized: isUserInitialized || true,
    initializeUser,
  };
};
