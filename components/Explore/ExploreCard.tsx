import Button from "components/base/Button";
import Icon from "components/base/Icon";
import Image from "next/image";
import { FunctionComponent } from "react";

interface ExploreCardProps {
  name: string;
  distance: number;
  difficulty: string;
  duration: number;
  onExplore: () => void;
}

const ExploreCard: FunctionComponent<ExploreCardProps> = ({
  name,
  distance,
  difficulty,
  duration,
  onExplore,
}) => {
  return (
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
          <div className="text-xl uppercase">{name}</div>
          <div className="grid grid-cols-3">
            <div className="mt-8">
              <div className="text-stone-500 tracking-widest uppercase text-xs">
                Distance
              </div>
              <div className="mt-1 font-mono">
                {distance} Lightyear{distance > 1 && "s"}
              </div>
            </div>
            <div className="mt-8">
              <div className="text-stone-500 tracking-widest uppercase text-xs">
                Minimum Duration
              </div>
              <div className="mt-1 font-mono">{duration} Seconds</div>
            </div>
            <div className="mt-8">
              <div className="text-stone-500 tracking-widest uppercase text-xs">
                Difficulty
              </div>
              <div className="mt-1 font-mono uppercase">{difficulty}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-4 py-4 bg-stone-900">
        <div className=""></div>
        <div className="flex gap-4 items-center text-right">
          <div className="">
            <Button onClick={() => onExplore()}>Explore</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
