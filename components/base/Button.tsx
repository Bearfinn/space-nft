import { HTMLProps, FunctionComponent, HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

const Button: FunctionComponent<ButtonProps> = (props) => {
  const { children, ...buttonProps } = props;
  return (
    <button
      className="border border-transparent bg-stone-800 shadow-lg hover:border-teal-300 px-4 py-2 rounded text-teal-300"
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
