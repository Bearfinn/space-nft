import Button from "components/base/Button";
import { FunctionComponent } from "react";

interface ShopCardProps {
  title: string;
  description: string;
  action: string;
}

const ShopCard: FunctionComponent<ShopCardProps> = ({
  title,
  description,
  action,
}) => {
  return (
    <div className="rounded-lg text-center bg-stone-900 bg-opacity-75 h-[300px] p-8 hover:shadow-lg hover:shadow-teal-300/50 transition opacity-80 hover:opacity-100">
      <div className="text-center flex flex-col items-center h-full">
        <div className="flex-grow">
          <div className="font-mono">{title}</div>
          <div className="mt-4 font-light">{description}</div>
        </div>

        <div className="mt-4">
          <Button>{action}</Button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
