// import classNames from "classnames";
import { ButtonProps, ButtonShape } from "./types/button.types";
import { Size } from "../../types/size.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "btn-xs",
  small: "btn-sm",
  normal: "",
  large: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};
const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "normal",
  shape = "default",
  className,
  isLoading = false,
  isDisabled = false,
  loadingText = "ارسال...",
  loadingType = "spinner",
  isOutline = false,
  type = "button",
  isLink = false,
  direction = "center",
  children,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    { [`btn-${variant}`]: variant },
    { [`btn-${direction}`]: direction },
    { [`${sizeClasses[size]}`]: size },
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { [`${shapeClasses[shape]}`]: shape },
    { "pointer-events-none opacity-70": isLoading },
    className,
  );
  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
