import Button from "components/base/Button";
import { useRefinery } from "hooks/useRefinery";
import { FunctionComponent } from "react";

interface RefineryPageProps {}

const RefineryPage: FunctionComponent<RefineryPageProps> = () => {
  const { refineryInfo, upgradeRefinery, claimRefinery } = useRefinery()
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-xl">Refinery</div>
      <div>
        <div>The refinery produces Crystals refining minerals</div>
        <div>
          Mineral Consumption: {refineryInfo?.consumePerSecond} MIN/s
        </div>
        <div>
          Mineral Production: {refineryInfo?.productionPerSecond} MIN/s
        </div>
        <div>
          Mined Minerals: {refineryInfo?.waitingToClaim} MIN
        </div>
        <div>
          <Button onClick={() => upgradeRefinery({ upgradeCount: 1 })}>Upgrade</Button>
          <Button onClick={() => claimRefinery({})}>Claim</Button>
        </div>
      </div>
    </div>
  );
};

export default RefineryPage;
