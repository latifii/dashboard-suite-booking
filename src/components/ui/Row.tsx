import { ReactNode } from "react";

type RowProps = {
  type?: "vertical" | "horizontal";
  className?: string;
  children: ReactNode;
};

const Row: React.FC<RowProps> = ({
  type = "horizontal",
  children,
  className,
}) => {
  return (
    <div
      className={`flex ${type === "horizontal" ? "items-center justify-between" : "flex-col gap-2"} ${className}`}
    >
      {children}
    </div>
  );
};

export default Row;
