import React from "react";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  id: string;
  children: React.ReactNode;
  className?: string;
}

const CheckBox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  disabled = false,
  id,
  children,
  className,
}) => {
  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={`h-6 w-6 accent-primary outline-offset-2 disabled:accent-base-50 ${className}`}
      />
      <label
        htmlFor={!disabled ? id : ""}
        className="flex flex-1 items-center gap-2"
      >
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
