import Image from "next/image";
import { FunctionComponent } from "react";

interface IconProps {
  type: "CRYSTAL" | "MINERAL" | "FUEL";
}

const Icon: FunctionComponent<IconProps> = ({ type }) => {
  return (
    <Image
      src={`/assets/${type.toLocaleLowerCase()}.png`}
      width={24}
      height={24}
      alt={type.toLocaleLowerCase()}
    ></Image>
  );
};

export default Icon;
