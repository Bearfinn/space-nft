import Button from "components/base/Button";
import { FunctionComponent } from "react";

interface FleetPropertyProps {
  name: string;
  value: any;
}

const FleetProperty: FunctionComponent<FleetPropertyProps> = ({
  name,
  value,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 items-center py-2 text-sm">
      <div className="col-span-3 text-gray-200">{name}</div>
      <div className="col-span-2 text-right">{value}</div>
      <div className="col-span-1">
        <button className="px-2 border-teal-300 border text-center rounded-lg">+</button>
      </div>
    </div>
  );
};

export default FleetProperty;
