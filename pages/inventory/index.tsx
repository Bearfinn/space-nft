import FleetCard from "components/Fleet/FleetCard";
import { useFleet } from "hooks/useFleet";
import { useNFTs } from "hooks/useInventory";
import { FunctionComponent } from "react";
import { Fleet } from "types/Items";

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
  const { nfts } = useNFTs()
  console.log(nfts)

  return (
    <div className="container max-w-2xl mx-auto">
      <div className="text-2xl my-8">Inventory</div>
      <div className="flex flex-wrap justify-between space-y-8">
        {nfts.map((nft) => {
          return <FleetCard ship={nft} key={nft.name} />;
        })}
      </div>
    </div>
  );
};

export default FleetPage;
