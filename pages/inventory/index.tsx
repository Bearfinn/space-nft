import FleetCard from "components/Fleet/FleetCard";
import { useNFTs } from "hooks/useInventory";
import { Fleet } from "pages/fleet";
import { FunctionComponent } from "react";

interface FleetPageProps {}

const fleet: Fleet = {
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
          return <FleetCard fleet={nft} key={nft.name} />;
        })}
      </div>
    </div>
  );
};

export default FleetPage;
