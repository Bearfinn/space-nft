import ERC20_ABI from "constants/abi/ERC20.json";
import SNFT_ABI from "constants/abi/SNFT.json";

enum ChainId {
  AVAX_TESTNET = "43113",
  AVAX_MAINNET = "43114"
}

export const CONTRACTS = {
  SNFT: {
    [ChainId.AVAX_TESTNET]: "0xF65f645e961c50cb62B02A8E671B9FE28c711899" ,
  },
  GRB: {
    [ChainId.AVAX_TESTNET]: "0x1CCB525431A008827dF62fAf70E32894551F86Ba",
  }
}

export const CONTRACT_ABIS = {
  SNFT: SNFT_ABI,
  GRB: ERC20_ABI,
}