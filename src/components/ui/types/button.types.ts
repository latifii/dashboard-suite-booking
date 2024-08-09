import { ButtonHTMLAttributes, RefAttributes } from "react";
import { ComponentBase } from "../../../types/component-base.type";
import { LoadingBehavior } from "../../../types/loading-behavior.types";
import { LinkProps } from "react-router-dom";

export type ButtonShape = "default" | "wide" | "full" | "square";
export type Direction = "right" | "center" | "left";
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehavior & {
    isLink?: boolean;
    isOutline?: boolean;
    shape?: ButtonShape;
    animatedIcon?: boolean;
    direction?: Direction;
    link?: string;
  };

export type ButtonLinkProps = LinkProps &
  RefAttributes<HTMLAnchorElement> &
  ComponentBase &
  LoadingBehavior & {
    isLink?: boolean;
    isOutline?: boolean;
    shape?: ButtonShape;
    animatedIcon?: boolean;
    direction?: Direction;
    to?: string;
  };
