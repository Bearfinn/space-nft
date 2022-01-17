import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

export const useFleet = () => {
  const { Moralis, chainId, account } = useMoralis();

  console.log(CONTRACTS["SNFT"][43113], chainId)

  const addShipToFleet = async (tokenId: number) => {
    const toastId = "transaction";

    try {
      toast("Please approve transaction", {
        toastId,
        isLoading: true
      })
      const txResponse: any = await Moralis.Web3.executeFunction({
        contractAddress: CONTRACTS["SNFT"][43113],
        functionName: "addShipToFleet",
        abi: SNFTABI,
        params: {
          _tokenId: tokenId,
        },
      });
      toast.update(toastId, {
        render: "Confirming...",
        isLoading: true
      })
      const txReceipt = await txResponse.wait();
      toast.update(toastId, {
        type: "success",
        render: "Done",
        isLoading: false,
      })
      console.log(txReceipt)
    } catch (error: any) {
      toast.update(toastId, {
        type: "error",
        render:  error.data.message,
        isLoading: false,
      })
      console.error(error)
    }
  };

  return {
    addShipToFleet
  }
};
