import { FormHTMLAttributes, ReactNode } from "react";

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  type?: "regular" | "modal";
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ type = "regular", children, ...rest }) => {
  const formClass =
    type === "regular"
      ? "p-6 md:p-10 lg:w-3/4 border"
      : "w-[18rem] md:w-[45rem] ";
  return (
    <form
      className={`${formClass} mx-auto overflow-hidden rounded bg-white text-sm dark:bg-base-50`}
      {...rest}
    >
      {children}
    </form>
  );
};

export default Form;
