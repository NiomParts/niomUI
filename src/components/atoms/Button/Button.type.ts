import { ButtonHTMLAttributes, ReactNode } from "react";
import { VARIANTS } from "@/utils/varient";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  as?: React.ElementType;
  className?: string;
  varaint?: keyof typeof VARIANTS;
}
