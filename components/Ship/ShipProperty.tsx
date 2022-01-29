import Button from "components/base/Button";
import { FunctionComponent } from "react";

interface FleetPropertyProps {
  name: string;
  value: any;
  showUpgradeButton?: boolean;
  onClick: () => void;
}

const FleetProperty: FunctionComponent<FleetPropertyProps> = ({
  name,
  value,
  showUpgradeButton = true,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-6 gap-2 items-center py-2 text-sm">
      <div className="col-span-3 text-stone-200">{name}</div>
      <div className="col-span-2 text-right">{value}</div>
      <div className="col-span-1">
        <button
          disabled={!showUpgradeButton}
          onClick={() => showUpgradeButton && onClick()}
          className={`${
            showUpgradeButton
              ? "border-teal-300 border cursor-pointer"
              : "border border-stone-700 text-stone-700 cursor-not-allowed"
          } px-2  text-center rounded-lg`}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default FleetProperty;
