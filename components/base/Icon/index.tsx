import Image from "next/image";
import { FunctionComponent } from "react";

interface IconProps {
  type: "CRYSTAL" | "MINERAL" | "FUEL";
  size?: number;
}

const Icon: FunctionComponent<IconProps> = ({ type, size = 24 }) => {
  return (
    <Image
      src={`/assets/${type.toLocaleLowerCase()}.png`}
      width={size}
      height={size}
      alt={type.toLocaleLowerCase()}
    ></Image>
  );
};

export default Icon;
