import type { ButtonSize, ButtonVariant } from "@type/components/atoms";

export const BUTTON_VARIANTS = [
  "primary",
  "secondary",
  "outline",
  "ghost",
  "danger",
  "link",
  "tertiary",
] as const satisfies readonly ButtonVariant[];

export const BUTTON_SIZES = [
  "sm",
  "md",
  "lg",
] as const satisfies readonly ButtonSize[];

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
  tertiary:
    "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover",
  outline:
    "border-border bg-transparent text-foreground hover:bg-surface-hover",
  ghost:
    "bg-transparent text-foreground hover:bg-surface-hover",
  danger:
    "bg-danger text-danger-foreground hover:bg-danger-hover",
  link: "border-0 bg-transparent p-0 text-primary underline-offset-4 hover:text-primary-hover hover:underline",
};

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};
