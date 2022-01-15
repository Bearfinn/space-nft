import { HTMLProps, FunctionComponent } from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children } = props;
  return (
    <button className="border border-transparent bg-gray-900 shadow-lg hover:border-teal-300 px-4 py-2 rounded text-teal-300">
      {children}
    </button>
  );
};

export default Button;