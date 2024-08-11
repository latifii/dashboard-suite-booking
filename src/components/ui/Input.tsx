import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="rounded-md border px-3 py-2 shadow focus:border-primary focus:outline-none focus:ring focus:ring-primary/40 dark:bg-base-25"
      {...props}
    />
  );
};

export default Input;
