import ShopCard from "components/shop/ShopCard";
import { useShop } from "hooks/useShop";
import { FunctionComponent } from "react";

interface ShopPageProps {}

const ShopPage: FunctionComponent<ShopPageProps> = () => {
  const { buyBoosterPack, buyGRB, buyFuel } = useShop();
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-4xl font-mono mt-8">Shop</div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="col-span-1">
          <ShopCard
            title="GRB Token"
            description="GRB token is used for several activities"
            action="Buy with AVAX"
            onClick={() => buyGRB({ _amountGRB: 100 })}
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Fuel"
            description="Fuel drives up your ships"
            action="Buy with GRB"
            onClick={() => buyFuel({ _amount: 1 })}
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Booster Pack"
            description="Get randomized ships"
            action="Buy with Crystal"
            onClick={() => buyBoosterPack()}
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Additional Inventory Slot"
            description="More items!"
            action="Buy with GRB"
            onClick={() => {}}
          ></ShopCard>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
