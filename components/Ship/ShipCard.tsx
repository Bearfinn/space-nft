import Button from "components/base/Button";
import { useShip } from "hooks/useShip";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useMemo, useState } from "react";
import { Ship } from "types/Items";
import FleetProperty from "./ShipProperty";

interface ShipCardProps {
  ship: Ship | null;
}

const ShipCard: FunctionComponent<ShipCardProps> = ({ ship }) => {
  const { addShipToFleet, upgradeShip } = useShip();

  const initialStats = useMemo(() => {
    return [0, 0, 0, 0];
  }, []);
  const [stats, setStats] = useState(initialStats);

  const updateStats = (index: number, amount: number) => {
    setStats((prevStats) => {
      const newStats = { ...prevStats };
      newStats[index] = amount;
      return newStats;
    });
  };

  const isChanged = useMemo(() => {
    return !initialStats.every((stat, index) => stat === stats[index]);
  }, [initialStats, stats]);

  return ship ? (
    <div className="rounded-lg bg-stone-900 flex flex-col justify-between bg-opacity-75 w-72 hover:shadow-lg hover:shadow-teal-300/50 transition opacity-80 hover:opacity-100">
      <div>
        <div className="rounded-t-lg relative">
          <Image
            src={ship.src}
            alt="Spaceship"
            width={360}
            height={200}
          ></Image>
          <div className="absolute top-3 right-3">
            <Button>🔍</Button>
          </div>
        </div>
        <div className="px-8">
          <div className="text-xl my-4 uppercase">{ship.name}</div>
          <div className="divide-y divide-slate-700">
            <FleetProperty
              name="HP"
              value={(ship?.hp || 0) + stats[0]}
              onClick={() => updateStats(0, stats[0] + 1)}
            />
            <FleetProperty
              name="Attack"
              value={(ship?.attack || 0) + stats[1]}
              onClick={() => updateStats(1, stats[1] + 1)}
            />
            <FleetProperty
              name="Travel Speed"
              value={(ship?.travelSpeed || 0) + stats[2]}
              onClick={() => updateStats(2, stats[2] + 1)}
            />
            <FleetProperty
              name="Mining Speed"
              value={(ship?.miningSpeed || 0) + stats[3]}
              onClick={() => updateStats(3, stats[3] + 1)}
            />
          </div>
        </div>
      </div>
      <div className="bg-stone-800 mt-6">
        {isChanged && (
          <div className="bg-teal-300">
            <div className="flex justify-between">
              <Button
                className="px-4 py-2 text-black"
                onClick={() =>
                  upgradeShip({
                    _tokenId: ship.tokenId,
                    hpUpgradeCount: stats[0],
                    attackUpgradeCount: stats[1],
                    miningUpgradeCount: stats[2],
                    travelUpgradeCount: stats[3],
                  })
                }
              >
                Upgrade
              </Button>
              <Button
                className="px-4 py-2 text-black"
                onClick={() => setStats(initialStats)}
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
        <div className="flex justify-between">
          <Button onClick={() => addShipToFleet({ _tokenId: ship.tokenId })}>
            To Fleet
          </Button>
          <Button>Sell</Button>
        </div>
      </div>
    </div>
  ) : (
    <Link href="/inventory" passHref>
      <div className="rounded-lg bg-stone-900 cursor-pointer bg-opacity-75 w-72 h-[420px] hover:shadow-lg hover:shadow-teal-300/50 transition opacity-80 hover:opacity-100">
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-teal-300">
            <div className="text-4xl">+</div>
            <div>Add ship to fleet</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShipCard;
