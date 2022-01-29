import { FunctionComponent } from "react";
import { GeneralNFT } from "types/Items";

interface GeneralCardProps {
  item: GeneralNFT | null;
}

const GeneralCard: FunctionComponent<GeneralCardProps> = ({ item }) => {
  /* eslint-disable @next/next/no-img-element */
  return item ? (
    <div className="rounded-lg bg-stone-900 flex flex-col justify-between bg-opacity-75 w-72 hover:shadow-lg hover:shadow-teal-300/50 transition opacity-80 hover:opacity-100">
      <div>
        <div className="rounded-t-lg relative">
          <img src={item.src} alt={item.name} width={360} height={200}></img>
        </div>
        <div className="px-8">
          <div className="text-xl my-4 text-center uppercase">
            {item.name}
          </div>
        </div>
      </div>
      </div>
  ) : (
    <div></div>
  );
};

export default GeneralCard;
