import Link from "next/link";
import { FunctionComponent } from "react";

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
      <div>Connect Wallet</div>
    </div>
  );
};

export default Navbar;
