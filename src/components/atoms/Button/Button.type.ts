import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { VARIANTS } from "@/utils/varient";

export interface ButtonOwnProps {
  children?: ReactNode;
  className?: string;
  variant?: keyof typeof VARIANTS;
}

export type ButtonProps<C extends ElementType = "button"> = ButtonOwnProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as">;
