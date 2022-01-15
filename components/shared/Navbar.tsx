import Link from "next/link";
import { FunctionComponent, useCallback, useEffect } from "react";
import { useMoralis } from "react-moralis";

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
];

const Navbar: FunctionComponent<NavbarProps> = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const signIn = useCallback(() => {
    authenticate({
      signingMessage: "Sign in to Space NFT",
    });
  }, [authenticate]);

  useEffect(() => {
    if (!isAuthenticated) {
      signIn();
    }
  }, [isAuthenticated, signIn]);

  return (
    <div className="p-4 flex justify-between sticky">
      <div className="space-x-4">
        {menuList.map(({ name, href }) => {
          return (
            <Link href={href} key={name}>
              <a className="hover:underline">{name}</a>
            </Link>
          );
        })}
      </div>
      <button onClick={() => signIn()}>
        Connect Wallet {user?.get("ethAddress")}
      </button>
    </div>
  );
};

export default Navbar;
