import FleetCard from "components/Ship/ShipCard";
import { useNFTs } from "hooks/useInventory";
import { FunctionComponent } from "react";

interface FleetPageProps {}

const FleetPage: FunctionComponent<FleetPageProps> = () => {
  const { nfts } = useNFTs();

  return (
    <div className="container max-w-2xl mx-auto">
      <div className="text-4xl font-mono my-8">Inventory</div>
      <div className="grid grid-cols-2">
        {nfts.map((nft) => {
          return <FleetCard ship={nft} key={nft.name} />;
        })}
      </div>
    </div>
  );
};

export default FleetPage;
