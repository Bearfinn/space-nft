import Button from "components/base/Button";
import { useFleet } from "hooks/useFleet";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Fleet } from "types/Items";
import FleetProperty from "./FleetProperty";

interface FleetCardProps {
  ship: Fleet;
}

const FleetCard: FunctionComponent<FleetCardProps> = ({ ship }) => {
  const { addShipToFleet } = useFleet()

  return ship ? (
    <div className="rounded-lg bg-gray-900 bg-opacity-75 w-72 hover:shadow-lg hover:shadow-teal-300/50 transition opacity-80 hover:opacity-100">
      <div className="rounded-t-lg relative">
        <Image src={ship.src} alt="Spaceship" width={360} height={200}></Image>
        <div className="absolute top-3 right-3">
          <Button>🔍</Button>
        </div>
      </div>
      <div className="px-8">
        <div className="text-xl my-4 uppercase">{ship.name}</div>
        <div className="divide-y divide-slate-700">
          <FleetProperty name="HP" value={ship.hp} />
          <FleetProperty name="Attack" value={ship.attack} />
          <FleetProperty name="Travel Speed" value={ship.travelSpeed} />
          <FleetProperty name="Mining Speed" value={ship.miningSpeed} />
        </div>
      </div>
      <div className="bg-gray-800">
        <div className="flex justify-between mt-6">
          <Button onClick={() => addShipToFleet(ship.tokenId)}>To Fleet</Button>
          <Button>Sell</Button>
        </div>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default FleetCard;
