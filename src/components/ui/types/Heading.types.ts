import { ReactNode } from "react";

export type AsTag = "h1" | "h2" | "h3" | "h4";
export type HeadingProps = {
  as?: AsTag;
  className?: string;
  children: ReactNode;
};
