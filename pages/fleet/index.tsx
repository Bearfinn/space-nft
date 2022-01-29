import FleetCard from "components/Ship/ShipCard";
import { useContract } from "hooks/useContract";
import { useShip } from "hooks/useShip";
import { useNFTs } from "hooks/useNFTs";
import { FunctionComponent, useEffect, useCallback, useState } from "react";
import { useMoralis } from "react-moralis";
import { Ship, IShipMetadata } from "types/Items";

interface FleetPageProps {}

const FleetPage: FunctionComponent<FleetPageProps> = () => {
  const { fleetTokenIds } = useShip();
  const [isLoading, setIsLoading] = useState(false);
  const [fleets, setFleets] = useState<(Ship | null)[]>([]);

  const { contractAddress } = useContract("SNFT");
  const { Moralis } = useMoralis();

  const getFleets = useCallback(async () => {
    let index = 0;
    const fleets: (Ship | null)[] = [null, null, null, null];

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
          shipType: getAttributes("Ship Type"),
          skinId: getAttributes("Skin Id"),
          color: getAttributes("Color"),
        } as Ship;
      } else {
        fleets[index] = null;
      }
      index++;
    }

    return fleets;
  }, [Moralis.Web3API.token, contractAddress, fleetTokenIds]);

  useEffect(() => {
    if (fleetTokenIds) {
      setIsLoading(true);
      getFleets()
        .then((fleets) => setFleets(fleets))
        .then(() => setIsLoading(false));
    }
  }, [fleetTokenIds, getFleets]);

  return (
    <div className="container max-w-2xl mx-auto mb-16">
      <div className="text-4xl font-mono my-8">Fleet</div>

      {!isLoading && (
        <div className="grid grid-cols-2 gap-8">
          {fleets.map((ship, index) => {
            return (
              <FleetCard
                ship={ship}
                key={`ship-${index}`}
                onInspect={() => {}}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default FleetPage;
