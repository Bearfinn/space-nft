import Button from "components/base/Button";
import { useRefinery } from "hooks/useRefinery";
import { FunctionComponent, useState } from "react";
import Image from "next/image";
import Icon from "components/base/Icon";
import { useNFTs } from "hooks/useNFTs";
import { formatNumber } from "utils/format";

interface RefineryPageProps {}

const RefineryPage: FunctionComponent<RefineryPageProps> = () => {
  const { mineral } = useNFTs();
  const { refineryInfo, upgradeRefinery, claimRefinery } = useRefinery();
  const [upgradeCount, setUpgradeCount] = useState(1);
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
                -{refineryInfo?.consumePerSecond} <Icon type="MINERAL" />
                /s
              </div>
            </div>
            <div className="mt-8">
              <div className="text-stone-500 tracking-widest uppercase text-xs">
                Crystal Production
              </div>
              <div className="mt-1 font-mono">
                {refineryInfo?.productionPerSecond} <Icon type="CRYSTAL" />
                /s
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between px-4 py-4 bg-stone-900">
          <div className="flex">
            <Button onClick={() => upgradeRefinery({ upgradeCount })}>
              Upgrade
            </Button>
            <div>
              <input
                className="bg-black py-1 w-24 ml-2 text-right"
                type="number"
                value={upgradeCount}
                min={1}
                max={10}
                step={1}
                maxLength={2}
                onChange={(e) => setUpgradeCount(Number(e.target.value))}
              ></input>
              <div className="text-sm text-center mt-2">
                Cost: {upgradeCount}
                <span className="ml-2">
                  <Icon size={16} type="CRYSTAL" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center text-right">
            <div className="">
              <div className="text-stone-500 uppercase text-xs">
                Est. Remaining
              </div>
              <div className="mt-1 font-mono">
                {formatNumber(mineral - (refineryInfo?.mineralSpenditure || 0))}{" "}
                <Icon type="MINERAL" />
              </div>
            </div>
            <div className="">
              <div className="text-stone-500 uppercase text-xs">
                Available for Claim
              </div>
              <div className="mt-1 font-mono">
                {formatNumber(refineryInfo?.waitingToClaim)} <Icon type="CRYSTAL" />
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
