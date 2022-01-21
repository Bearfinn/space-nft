import Button from "components/base/Button";
import { FunctionComponent } from "react";

interface FleetPropertyProps {
  name: string;
  value: any;
  onClick: () => void;
}

const FleetProperty: FunctionComponent<FleetPropertyProps> = ({
  name,
  value,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 items-center py-2 text-sm">
      <div className="col-span-3 text-stone-200">{name}</div>
      <div className="col-span-2 text-right">{value}</div>
      <div className="col-span-1">
        <button
          onClick={() => onClick()}
          className="px-2 border-teal-300 border text-center rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FleetProperty;
