import { ReactNode } from "react";
import classNames from "classnames";
// import { Variant } from "../../types/variant.type";

// type Color = Extract<Variant, "success" | "info" | "error">;

type TagProps = {
  children: ReactNode;
  color: string;
  className?: string;
};

// const colorClass: Record<Color, string> = {
//   info: "bg-info",
//   error: "bg-error",
//   success: "bg-success",
// };

// const textColorClass: Record<Color, string> = {
//   info: "text-info",
//   error: "text-error",
//   success: "text-success",
// };

const Tag: React.FC<TagProps> = ({ children, color, className }) => {
  const classes = classNames(
    {
      [`bg-${color}`]: color,
    },
    className,
  );
  return (
    <div
      className={`${classes} rounded-full bg-opacity-50 p-1 text-center text-sm`}
    >
      {children}
    </div>
  );
};

export default Tag;
