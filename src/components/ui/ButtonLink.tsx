import { Link } from "react-router-dom";
import { ButtonLinkProps, ButtonShape } from "./types/button.types";
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

const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = "ghost",
  size = "normal",
  shape = "default",
  className,
  isLink = false,
  to = "/",
  direction = "center",
  children,
}) => {
  const classes = classNames(
    "btn",
    { [`btn-${variant}`]: variant },
    { [`btn-${direction}`]: direction },
    { [`${sizeClasses[size]}`]: size },
    { "btn-link": isLink },
    { [`${shapeClasses[shape]}`]: shape },
    className,
  );
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

export default ButtonLink;
