import GeneralCard from "components/Ship/GeneralCard";
import ShipCard from "components/Ship/ShipCard";
import ShipModal from "components/Ship/ShipModal";
import { useNFTs } from "hooks/useNFTs";
import { FunctionComponent, useState } from "react";
import { Ship } from "types/Items";

interface FleetPageProps {}

const FleetPage: FunctionComponent<FleetPageProps> = () => {
  const { nfts, lands, avatars, upgradeCards, boosterPacks } = useNFTs();

  const [showShipInspector, setShowShipInspector] = useState(false);
  const [shipName, setShipName] = useState<string | null>(null);
  const inspect = (ship: Ship) => {
    const shipName = `${ship.name}${ship.skinId}`;
    setShipName(shipName);
    setShowShipInspector(true);
  };

  return (
    <>
      <div className="container max-w-2xl mx-auto pb-16">
        <div className="text-4xl font-mono my-8">Inventory</div>

        <div className="my-4 text-xl">Spaceships</div>
        <div className="grid grid-cols-2">
          {nfts.map((nft) => {
            return <ShipCard ship={nft} key={nft.name} onInspect={inspect} />;
          })}
        </div>

        {boosterPacks.length > 0 && (
          <>
            <div className="mt-12 mb-4 text-xl">boosterPacks</div>
            <div className="grid grid-cols-2">
              {boosterPacks.map((boosterPack) => {
                return <GeneralCard item={boosterPack} key={boosterPack.name} />;
              })}
            </div>
          </>
        )}

        {avatars.length > 0 && (
          <>
            <div className="mt-12 mb-4 text-xl">Avatars</div>
            <div className="grid grid-cols-2">
              {avatars.map((avatar) => {
                return <GeneralCard item={avatar} key={avatar.name} />;
              })}
            </div>
          </>
        )}

        {lands.length > 0 && (
          <>
            <div className="mt-12 mb-4 text-xl">Lands</div>
            <div className="grid grid-cols-2">
              {lands.map((land) => {
                return <GeneralCard item={land} key={land.name} />;
              })}
            </div>
          </>
        )}

        {upgradeCards.length > 0 && (
          <>
            <div className="mt-12 mb-4 text-xl">Upgrade Cards</div>
            <div className="grid grid-cols-2">
              {upgradeCards.map((upgradeCard) => {
                return (
                  <GeneralCard item={upgradeCard} key={upgradeCard.name} />
                );
              })}
            </div>
          </>
        )}
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
