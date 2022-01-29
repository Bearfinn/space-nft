import Button from "components/base/Button";
import Icon from "components/base/Icon";
import { useNFTs } from "hooks/useInventory";
import Link from "next/link";
import { useRouter } from "next/router";
import { FunctionComponent, useCallback, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import { shortenAddress } from "utils/format";

interface NavbarProps {}

const menuList = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explore",
    href: "/explore",
  },
  {
    name: "Fleet",
    href: "/fleet",
  },
  {
    name: "Inventory",
    href: "/inventory",
  },
  {
    name: "Refinery",
    href: "/refinery",
  },
  {
    name: "Shop",
    href: "/shop",
  },
];

const Navbar: FunctionComponent<NavbarProps> = () => {
  const router = useRouter();

  const [hasLoggedOut, setHasLoggedOut] = useState(false);
  const { crystal, mineral, fuel } = useNFTs();

  const {
    authenticate,
    isInitialized,
    isAuthenticated,
    user,
    logout,
    enableWeb3,
  } = useMoralis();

  const signIn = useCallback(() => {
    authenticate({
      signingMessage: "Sign in to the Game",
    });
  }, [authenticate]);

  useEffect(() => {
    if (isInitialized && !isAuthenticated && !hasLoggedOut) {
      signIn();
    }
  }, [hasLoggedOut, isAuthenticated, isInitialized, signIn]);

  useEffect(() => {
    if (isInitialized) {
      enableWeb3();
    }
  }, [enableWeb3, isInitialized]);

  return (
    <div className="p-8 bg-black bg-opacity-75 h-24 flex justify-between items-center sticky">
      <div className="space-x-8">
        {menuList.map(({ name, href }) => {
          return (
            <Link href={href} key={name}>
              <a
                className={`hover:border-b font-mono ${
                  router.pathname === href ? "border-b" : ""
                }`}
              >
                {name}
              </a>
            </Link>
          );
        })}
      </div>

      <div className="flex gap-4 items-center">
        {user && (
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              {crystal} <Icon type="CRYSTAL" />
            </div>
            <div className="flex gap-2 items-center">
              {mineral} <Icon type="MINERAL" />
            </div>
            <div className="flex gap-2 items-center">
              {fuel} <Icon type="FUEL" />
            </div>
          </div>
        )}

        {(user && isAuthenticated) ? (
          <div className="group">
            <Button
              className="hidden group-hover:block bg-teal-300 px-4 py-2 h-12 rounded text-black"
              onClick={() => {
                setHasLoggedOut(true)
                logout()
              }}
            >
              Disconnect
            </Button>
            <Button className="group-hover:hidden h-12 text-teal-300">
              {shortenAddress(user?.get("ethAddress"))}
            </Button>
          </div>
        ) : (
          <Button onClick={() => signIn()}>Connect Wallet</Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
