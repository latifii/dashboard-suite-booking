import { ChangeEvent } from "react";

export type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  options: Option[];
  value: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  //   type?: "white" | "default";
};
