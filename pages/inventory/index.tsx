import ShipCard from "components/Ship/ShipCard";
import ShipModal from "components/Ship/ShipModal";
import { useNFTs } from "hooks/useInventory";
import { FunctionComponent, useState } from "react";
import { Ship } from "types/Items";

interface FleetPageProps {}

const FleetPage: FunctionComponent<FleetPageProps> = () => {
  const { nfts } = useNFTs();

  const [showShipInspector, setShowShipInspector] = useState(false);
  const [shipName, setShipName] = useState<string | null>(null);
  const inspect = (ship: Ship) => {
    const shipName = `${ship.name}${ship.skinId}`;
    setShipName(shipName);
    setShowShipInspector(true);
  };

  return (
    <>
      <div className="container max-w-2xl mx-auto">
        <div className="text-4xl font-mono my-8">Inventory</div>
        <div className="grid grid-cols-2">
          {nfts.map((nft) => {
            return <ShipCard ship={nft} key={nft.name} onInspect={inspect} />;
          })}
        </div>
      </div>

      <ShipModal
        show={showShipInspector}
        shipName={shipName}
        onClose={() => setShowShipInspector(false)}
      />

    </>
  );
};

export default FleetPage;
