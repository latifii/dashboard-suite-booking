import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "../../../types/component-base.type";
import { LoadingBehavior } from "../../../types/loading-behavior.types";

export type ButtonShape = "default" | "wide" | "full " | "square";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isLink?: boolean;
    isOutline?: boolean;
    shape?: ButtonShape;
    animatedIcon?: boolean;
  };
