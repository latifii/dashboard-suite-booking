import React, { ReactNode } from "react";

type FormRowProps = {
  label?: string;
  error?: string;
  children: ReactNode;
};

const FormRow: React.FC<FormRowProps> = ({ children, error, label }) => {
  const childElement = React.isValidElement(children) ? children : null;

  return (
    <div className="grid grid-cols-1 items-center gap-2 border-b py-3 first:pt-0 last:border-b-0 last:pb-0 md:grid-cols-[10rem_1fr] md:gap-6">
      {label && (
        <label className="font-bold" htmlFor={childElement?.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-sm text-error">{error}</span>}
    </div>
  );
};

export default FormRow;
