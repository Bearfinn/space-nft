import { useMoralis, useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import SNFTABI from "constants/abi/SNFT.json";
import { CONTRACTS } from "constants/contracts";
import { useEffect } from "react";

export const useFleet = () => {
  const { Moralis, chainId, account } = useMoralis();

  console.log(CONTRACTS["SNFT"][43113], chainId)

  const addShipToFleet = async (tokenId: number) => {
    try {
      const txResponse: any = await Moralis.Web3.executeFunction({
        contractAddress: CONTRACTS["SNFT"][43113],
        functionName: "addShipToFleet",
        abi: SNFTABI,
        params: {
          _tokenId: tokenId,
        },
      });
      const txReceipt = await txResponse.wait();
      console.log(txReceipt)
    } catch (error) {
      console.error(error)
    }
  };

  return {
    addShipToFleet
  }
};
