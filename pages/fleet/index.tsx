import FleetCard from "components/Fleet/FleetCard";
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
  return (
    <div className="container max-w-2xl mx-auto">
      <div className="text-2xl my-8">Fleets</div>
      <div className="flex flex-wrap justify-between space-y-8">
        {[1, 2, 3, 4].map((val) => {
          return <FleetCard ship={fleet} key={val} />;
        })}
      </div>
    </div>
  );
};

export default FleetPage;
