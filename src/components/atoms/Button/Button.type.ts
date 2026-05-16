import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { VARIANTS } from "@/constant/style";

export interface ButtonOwnProps {
  /** * The content of the button. */
  children?: ReactNode;
  /** * The CSS class name for the button. */
  className?: string;
  /** * The inline styles for the button. */
  variant?: keyof typeof VARIANTS;
}

export type ButtonProps<C extends ElementType = "button"> = ButtonOwnProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | "as">;
