import ShopCard from "components/shop/ShopCard";
import { FunctionComponent } from "react";

interface ShopPageProps {}

const ShopPage: FunctionComponent<ShopPageProps> = () => {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <ShopCard
            title="GRB Token"
            description="GRB token is used for several activities"
            action="Buy with AVAX"
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Fuel"
            description="Fuel drives up your ships"
            action="Buy with GRB"
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Booster Pack"
            description="Get randomized ships"
            action="Buy with Crystal"
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Additional Inventory Slot"
            description="More items!"
            action="Buy with GRB"
          ></ShopCard>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
