import { ReactNode } from "react";

type FormProps = {
  type?: "regular" | "modal";
  children: ReactNode;
};

const Form: React.FC<FormProps> = ({ type = "regular", children }) => {
  const formClass = type === "regular" ? "p-6 md:p-10 lg:w-3/4" : "w-[55rem]";
  return (
    <form
      className={`${formClass} mx-auto overflow-hidden rounded border bg-white text-sm dark:bg-base-50`}
    >
      {children}
    </form>
  );
};

export default Form;
