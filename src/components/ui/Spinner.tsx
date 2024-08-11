import React from "react";
import { Variant } from "../../types/variant.type";
import classNames from "classnames";

type SpinnerProps = {
  variant?: Variant;
};

const Spinner: React.FC<SpinnerProps> = ({ variant = "primary" }) => {
  const classes = classNames({
    [`border-${variant}`]: variant,
  });
  return (
    <div
      className={`m-12 h-16 w-16 animate-spin rounded-full border-4 ${classes} border-b-transparent`}
    ></div>
  );
};

export default Spinner;
