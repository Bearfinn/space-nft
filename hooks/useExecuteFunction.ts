import { useCallback } from "react";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

interface ExecuteFunctionDefinition {
  contractAddress: string;
  functionName: string;
  abi: object;
}

export const handleTransaction = async (callback: () => Promise<any>) => {
  const toastId = "transaction";

  try {
    toast.info("Please approve transaction", {
      toastId,
      isLoading: true,
    });
    const txResponse: any = await callback()
    toast.update(toastId, {
      render: "Confirming...",
      isLoading: true,
    });
    const txReceipt = await txResponse.wait();
    toast.update(toastId, {
      type: "success",
      render: "Transaction successful 🚀",
      isLoading: false,
      autoClose: 5000,
    });
  } catch (error: any) {
    toast.update(toastId, {
      type: "error",
      render: error?.data?.message || error.message,
      isLoading: false,
      autoClose: 5000,
    });
    console.error(error);
  }
}

export const useExecuteFunction = <ExecuteFunctionParams>({
  contractAddress,
  functionName,
  abi,
}: ExecuteFunctionDefinition) => {
  const { Moralis } = useMoralis();

  const executeFunction = useCallback(
    async (params?: ExecuteFunctionParams, value?: string) => {
      const toastId = "transaction";

      try {
        toast.info("Please approve transaction", {
          toastId,
          isLoading: true,
        });
        const txResponse: any = await Moralis.executeFunction({
          contractAddress,
          functionName,
          abi,
          params,
          msgValue: value,
        });
        toast.update(toastId, {
          render: "Confirming...",
          isLoading: true,
        });
        const txReceipt = await txResponse.wait();
        toast.update(toastId, {
          type: "success",
          render: "Transaction successful 🚀",
          isLoading: false,
          autoClose: 5000,
        });
      } catch (error: any) {
        toast.update(toastId, {
          type: "error",
          render: error?.data?.message || error.message,
          isLoading: false,
          autoClose: 5000,
        });
        console.error(error);
      }
    },
    [Moralis.Web3, abi, contractAddress, functionName]
  );

  return executeFunction;
};
