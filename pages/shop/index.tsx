import ShopCard from "components/shop/ShopCard";
import { useShop } from "hooks/useShop";
import { FunctionComponent } from "react";
import { useMoralis } from "react-moralis";

interface ShopPageProps {}

const ShopPage: FunctionComponent<ShopPageProps> = () => {
  const { Moralis } = useMoralis()
  const {
    buyBoosterPack,
    buyGRB,
    buyFuel,
    getFreeShip,
    allowance,
    balance,
    approveGRB,
  } = useShop();

  return (
    <div className="container mx-auto max-w-4xl">
      <div className="text-4xl font-mono mt-8">Shop</div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="col-span-1">
          <ShopCard
            title="100 GRB Token"
            description="GRB token is used for several activities (Price: 1 AVAX)"
            action="Buy with AVAX"
            onClick={() => buyGRB({ _amountGRB: Moralis.Units.ETH(100) }, Moralis.Units.ETH(1))}
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="1 Fuel"
            description="Fuel is required to power your spaceships in exploration (Price: 0.3 CRYSTAL)"
            action="Buy with CRYSTAL"
            onClick={() => buyFuel({ _amount: 1 })}
          ></ShopCard>
        </div>
        <div className="col-span-1">
          <ShopCard
            title="Booster Pack"
            description={`Get randomized spaceships (Price: 1 GRB, Your balance: ${
              Moralis.Units.FromWei(balance || 0)
            } GRB)`}
            action="Buy with GRB"
            onClick={() => {
              if (allowance.gt("0")) {
                buyBoosterPack();
              } else {
                approveGRB().then(() => buyBoosterPack());
              }
            }}
          ></ShopCard>
        </div>
        {/* <div className="col-span-1">
          <ShopCard
            title="Additional Inventory Slot"
            description="More items!"
            action="Buy with GRB"
            onClick={() => {}}
          ></ShopCard>
        </div> */}
        <div className="col-span-1">
          <ShopCard
            title="Free Ship!"
            description="(Testnet Only)"
            action="Get for free"
            onClick={() => getFreeShip()}
          ></ShopCard>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
