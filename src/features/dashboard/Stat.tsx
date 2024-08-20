import React from "react";
import { Variant } from "../../types/variant.type";

interface StatProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  variant: Variant;
}

const Stat: React.FC<StatProps> = ({ icon, title, value, variant }) => {
  return (
    <div className="flex items-center gap-x-4 gap-y-1 rounded-md border bg-white p-4 dark:bg-base-content">
      <div
        className={`flex aspect-square items-center justify-center rounded-full bg-${variant} h-16 w-16 bg-opacity-20`}
      >
        <div className={`text-3xl text-${variant}`}>{icon}</div>
      </div>
      <div className="flex flex-col gap-2">
        <h5 className="self-end text-base font-semibold tracking-wide">
          {title}
        </h5>
        <p className="text-2xl font-medium leading-none">{value}</p>
      </div>
    </div>
  );
};

export default Stat;
