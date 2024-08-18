// FormRowVertical.tsx
import React from "react";

interface FormRowVerticalProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const FormRowVertical: React.FC<FormRowVerticalProps> = ({
  label,
  error,
  children,
}) => {
  return (
    <div className="flex flex-col gap-2.5 py-3">
      {label && (
        <label
          className="font-medium"
          htmlFor={(children as React.ReactElement).props.id}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-lg text-error">{error}</span>}
    </div>
  );
};

export default FormRowVertical;
