import { Size } from "./size.type";
import { Variant } from "./types/variant.type";

export type ComponentBase = {
  variant?: Variant;
  size?: Size;
  isDisabled?: boolean;
  className?: string;
};
