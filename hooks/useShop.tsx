import { BigNumber, ethers } from "ethers";
import { useEffect, useMemo } from "react";
import { useChain, useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { useContract } from "./useContract";
import { handleTransaction, useExecuteFunction } from "./useExecuteFunction";

export const useShop = () => {
  const { Moralis, account } = useMoralis();
  const nftContract = useContract("SNFT");
  const grbContract = useContract("GRB");

  const buyBoosterPack = useExecuteFunction({
    functionName: "buyBoosterPackGRB",
    ...nftContract,
  });

  const buyGRB = useExecuteFunction<{ _amountGRB: number }>({
    functionName: "buyGRB",
    ...nftContract,
  });

  const buyFuel = useExecuteFunction<{ _amount: number }>({
    functionName: "buyFuel",
    ...nftContract,
  });

  const approveGRBToken = useExecuteFunction<{
    spender: string;
    amount: BigNumber;
  }>({
    functionName: "approve",
    ...grbContract,
  });

  const approveGRB = async () => {
    if (account) {
      return approveGRBToken({
        spender: nftContract.contractAddress,
        amount: ethers.constants.MaxUint256,
      });
    }
  };

  const { data: allowance, fetch: getAllowance }: any = useWeb3ExecuteFunction({
    functionName: "allowance",
    params: { "owner": account, "spender": nftContract.contractAddress },
    ...grbContract,
  });

  console.log(account, nftContract.contractAddress, allowance)

  const { data: balance, fetch: getBalance }: any = useWeb3ExecuteFunction({
    functionName: "balanceOf",
    params: { "account": account },
    ...grbContract,
  });

  useEffect(() => {
    getAllowance();
    getBalance()
  }, [getAllowance, getBalance]);

  const getFreeShip = async () => {
    const web3Provider = await Moralis.enableWeb3();
    const signer = web3Provider.getSigner();
    const contract = new ethers.Contract(
      nftContract.contractAddress,
      nftContract.abi,
      signer
    );
    handleTransaction(() =>
      contract.createTestShipForFree({ gasLimit: 400000 })
    );
  };

  return {
    buyBoosterPack,
    buyGRB,
    buyFuel,
    getFreeShip,
    approveGRB,
    allowance,
    balance,
  };
};
