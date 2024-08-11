import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      className="rounded-md border px-3 py-2 shadow focus:border-primary focus:outline-none focus:ring focus:ring-primary/40 dark:bg-base-25"
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;
