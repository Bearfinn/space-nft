import Button from "components/base/Button";
import { useRefinery } from "hooks/useRefinery";
import { FunctionComponent } from "react";
import Image from "next/image";
import Icon from "components/base/Icon";

interface RefineryPageProps {}

const RefineryPage: FunctionComponent<RefineryPageProps> = () => {
  const { refineryInfo, upgradeRefinery, claimRefinery } = useRefinery();
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-4xl font-mono mt-8">Refinery</div>
      <div className="bg-stone-900 bg-opacity-75 mt-8">
        <div className="grid grid-cols-12 p-8 items-center">
          <div className="col-span-3">
            <Image
              className="animate-pulse"
              src="/assets/oil-refinery.png"
              alt="Refinery"
              width={160}
              height={160}
            ></Image>
          </div>
          <div className="col-span-9">
            <div className="font-light">
              Refinery is the source for the crystal production. It has a fixed
              production rate and produces crystal as long as the player has
              enough minerals. If the player has no minerals, the production
              returns 0. The refinery itself can be upgraded using crystals.
            </div>
            <div className="mt-8">
              <div className="text-stone-500 tracking-widest uppercase text-xs">
                Mineral Consumption
              </div>
              <div className="mt-1 font-mono">
                -{refineryInfo?.consumePerSecond} <Icon type="MINERAL" />/s
              </div>
            </div>
            <div className="mt-8">
              <div className="text-stone-500 tracking-widest uppercase text-xs">
                Crystal Production
              </div>
              <div className="mt-1 font-mono">
                {refineryInfo?.productionPerSecond} <Icon type="CRYSTAL" />/s
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4 py-4 bg-stone-900">
          <div className="">
            <Button onClick={() => upgradeRefinery({ upgradeCount: 1 })}>
              Upgrade
            </Button>
          </div>
          <div className="flex gap-4 items-center text-right">
            <div className="">
              <div className="text-stone-500 uppercase text-xs">
                Available for Claim
              </div>
              <div className="mt-1 font-mono">
                {refineryInfo?.waitingToClaim} <Icon type="CRYSTAL" />
              </div>
            </div>
            <div className="">
              <Button onClick={() => claimRefinery({})}>Claim</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefineryPage;
