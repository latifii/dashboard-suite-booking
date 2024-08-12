import React from "react";
import { Variant } from "../../types/variant.type";
import classNames from "classnames";

type SpinnerProps = {
  variant?: Variant;
};

const variantClasses: Record<Variant, string> = {
  primary: "border-primary",
  secondary: "border-secondary",
  error: "border-error",
  success: "border-success",
  accent: "border-",
  ghost: "border-ghost",
  gradient: "border-gradient",
  info: "border-info",
  neutral: "border-neutral",
  warning: "border-warning",
};

const Spinner: React.FC<SpinnerProps> = ({ variant = "primary" }) => {
  const classes = classNames(variantClasses[variant]);

  return (
    <div
      className={`m-12 h-16 w-16 animate-spin rounded-full border-4 border-b-transparent ${classes}`}
    ></div>
  );
};

export default Spinner;
