import { useEffect, useMemo, useState } from "react";
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from "react-moralis";
import { Fleet, IShipMetadata } from "types/Items";

export const useNFTs = () => {
  const Web3Api = useMoralisWeb3Api();
  const [mineral, setMineral] = useState("0");
  const [crystal, setCrystal] = useState("0");
  const [fuel, setFuel] = useState("0");
  const [nfts, setNfts] = useState<any[]>([]);

  const { data, error, fetch, isFetching, isLoading } = useMoralisWeb3ApiCall(
    Web3Api.account.getNFTsForContract,
    {
      chain: "avalanche testnet",
      address: "0xc437F7d1Ba3f0479A67E3198e2ce7f66d6cAeD25",
      token_address: "0x7158f977a8fE672e026C8c69a82CD2935aF055Ac",
    }
  );

  useEffect(() => {
    const getNfts = async () => {
      if (!data || !data.result) return [];

      const avatars: any[] = [];
      const lands: any[] = [];
      const upgradeCards: any[] = [];
      const ships: any[] = [];

      const promises = data?.result.map(async (nft) => {
        let metadata: any = nft.metadata;
        if (!metadata && nft.token_uri) {
          metadata = await window
            .fetch(nft.token_uri)
            .then((response) => response.json());
        }
        const tokenId = Number(nft.token_id);

        // Tokens
        if (tokenId === 0) {
          setMineral(nft.amount || "0");
        }
        if (tokenId === 1) {
          setCrystal(nft.amount || "0");
        }
        if (tokenId === 2) {
          setFuel(nft.amount || "0");
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
          const ship: IShipMetadata = metadata.result
          const getAttributes = (traitType: string) => {
            const attribute = ship.attributes.find((attribute) => attribute.trait_type === traitType)
            return attribute?.value || null
          }
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
            miningSpeed: getAttributes("Mining Speed")
          } as Fleet);
        }
      });

      await Promise.all(promises);
      setNfts(ships);
    };
    getNfts();
  }, [data]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return {
    nfts,
  };
};
