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
    <div className="grid grid-cols-2 py-2 text-sm">
      <div className="col-span-1 text-gray-200">{name}</div>
      <div className="col-span-1 text-right">{value}</div>
    </div>
  );
};

export default FleetProperty