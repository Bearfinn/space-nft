import Button from "components/base/Button";
import Image from "next/image";
import { FunctionComponent } from "react";
import { Fleet } from "types/Items";
import FleetProperty from "./FleetProperty";

interface FleetCardProps {
  fleet: Fleet;
}

const FleetCard: FunctionComponent<FleetCardProps> = ({ fleet }) => {
  return (
    <div className="rounded-lg bg-gray-900 bg-opacity-75 w-72 hover:shadow-lg hover:shadow-teal-300/50 transition opacity-80 hover:opacity-100">
      <div className="rounded-t-lg">
        <Image
          src={fleet.src}
          alt="Spaceship"
          width={360}
          height={200}
        ></Image>
      </div>
      <div className="px-8 pb-8">
        <div className="text-xl my-4">
          {fleet.name}
        </div>
        <div className="divide-y divide-slate-700">
          <FleetProperty name="HP" value={fleet.hp} />
          <FleetProperty name="Attack" value={fleet.attack} />
          <FleetProperty name="Travel Speed" value={fleet.travelSpeed} />
          <FleetProperty name="Mining Speed" value={fleet.miningSpeed} />
        </div>
        <div className="flex justify-between mt-6">
          <Button>Upgrade</Button>
          <Button>Add to Fleet</Button>
        </div>
      </div>
    </div>
  );
};

export default FleetCard;
