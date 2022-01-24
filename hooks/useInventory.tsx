import { useEffect, useState } from "react";
import { useMoralis, useNFTBalances } from "react-moralis";
import { IShipMetadata, Ship } from "types/Items";
import { useContract } from "./useContract";

export const useNFTs = () => {
  const [mineral, setMineral] = useState(0);
  const [crystal, setCrystal] = useState(0);
  const [fuel, setFuel] = useState(0);
  const [nfts, setNfts] = useState<any[]>([]);

  const { account, Moralis } = useMoralis();
  const { contractAddress, abi } = useContract("SNFT");

  const { data } = useNFTBalances({
    chain: "avalanche testnet",
    token_addresses: [contractAddress],
  });

  useEffect(() => {
    const getNfts = async () => {
      if (!data || !data.result) return [];

      const avatars: any[] = [];
      const lands: any[] = [];
      const upgradeCards: any[] = [];
      const ships: any[] = [];

      console.log(contractAddress)

      const promises = data?.result
        .filter((nft) => {
          return nft.token_address.toLowerCase() === contractAddress?.toLowerCase()
        })
        .map(async (nft) => {
          let metadata: any = nft.metadata;
          if (!metadata && nft.token_uri) {
            metadata = await window
              .fetch(nft.token_uri)
              .then((response) => response.json());
          }
          const tokenId = Number(nft.token_id);

          // Tokens
          if (tokenId === 0) {
            setMineral(Number(Moralis.Units.FromWei(nft.amount || "0")));
          }
          if (tokenId === 1) {
            setCrystal(Number(Moralis.Units.FromWei(nft.amount || "0")));
          }
          if (tokenId === 2) {
            setFuel(Number(nft.amount || "0"));
          }

          // Avatars
          if (tokenId >= 4 && tokenId <= 11) {
            avatars.push({
              amount: parseInt(nft.amount || "0"),
              name: metadata.result.name,
            });
          }

          // Lands
          if (tokenId >= 12 && tokenId <= 21) {
            lands.push({
              amount: parseInt(nft.amount || "0"),
              name: metadata.result.name,
            });
          }

          // Upgrade cards
          if (tokenId >= 22 && tokenId <= 33) {
            upgradeCards.push({
              amount: parseInt(nft.amount || "0"),
              name: metadata.result.name,
            });
          }

          // Ships
          if (tokenId >= 34) {
            const ship: IShipMetadata = metadata.result;
            const getAttributes = (traitType: string) => {
              const attribute = ship.attributes.find(
                (attribute) => attribute.trait_type === traitType
              );
              return attribute?.value || null;
            };
            ships.push({
              tokenId,
              amount: parseInt(nft.amount || "0"),
              name: ship.name,
              description: ship.description,
              src: ship.image,
              type: "Ship",
              hp: getAttributes("Hit Point"),
              attack: getAttributes("Attack"),
              travelSpeed: getAttributes("Travel Speed"),
              miningSpeed: getAttributes("Mining Speed"),
              shipType: getAttributes("Ship Type"),
              skinId: getAttributes("Skin Id"),
              color: getAttributes("Color"),
            } as Ship);
          }
        });

      await Promise.all(promises);
      setNfts(ships);
    };
    getNfts();
  }, [Moralis.Units, data, account]);

  return {
    nfts,
    crystal,
    mineral,
    fuel,
  };
};
