import FleetCard from "components/Fleet/FleetCard";
import { useContract } from "hooks/useContract";
import { useFleet } from "hooks/useFleet";
import { useNFTs } from "hooks/useInventory";
import { FunctionComponent, useEffect, useCallback, useState } from "react";
import { useMoralis } from "react-moralis";
import { Fleet, IShipMetadata } from "types/Items";

interface FleetPageProps {}

const fleet: Fleet = {
  tokenId: 1,
  src: "/sprites/battleship1.png",
  hp: 120,
  name: "Fleet",
  type: "A",
  attack: 0,
  travelSpeed: 0,
  miningSpeed: 0,
};

const FleetPage: FunctionComponent<FleetPageProps> = () => {
  const { fleetTokenIds } = useFleet();
  const { nfts } = useNFTs();
  const [fleets, setFleets] = useState<(Fleet | null)[]>([]);

  const { contractAddress } = useContract("SNFT");
  const { account, Moralis } = useMoralis();

  const getFleets = useCallback(async () => {
    let index = 0;
    const fleets: (Fleet | null)[] = [null, null, null, null];

    for (const _ of fleets) {
      const fleetTokenId = fleetTokenIds[index];
      if (!fleetTokenId) {
        index++;
        continue;
      }

      const nft = await Moralis.Web3API.token.getTokenIdMetadata({
        chain: "avalanche testnet",
        address: contractAddress,
        token_id: fleetTokenId.toString(),
      });

      if (!nft.token_uri) {
        index++;
        continue;
      }
      const metadata = await window
        .fetch(nft.token_uri)
        .then((response) => response.json());

      const tokenId = Number(nft.token_id);
      const ship: IShipMetadata = metadata.result;
      const getAttributes = (traitType: string) => {
        const attribute = ship.attributes.find(
          (attribute) => attribute.trait_type === traitType
        );
        return attribute?.value || null;
      };

      if (nft) {
        fleets[index] = {
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
        } as Fleet;
      } else {
        fleets[index] = null;
      }
      index++;
    }

    return fleets;
  }, [Moralis.Web3API.token, contractAddress, fleetTokenIds]);

  useEffect(() => {
    if (fleetTokenIds) {
      getFleets().then((fleets) => setFleets(fleets));
    }
  }, [fleetTokenIds, getFleets, nfts]);

  return (
    <div className="container max-w-2xl mx-auto mb-16">
      <div className="text-4xl font-mono my-8">Fleet</div>

      <div className="grid grid-cols-2 gap-8">
        {fleets.map((ship, index) => {
          return <FleetCard ship={ship} key={`ship-${index}`} />;
        })}
      </div>
    </div>
  );
};

export default FleetPage;
