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
    "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-ring",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:outline-secondary",
  tertiary:
    "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover focus-visible:outline-ring",
  outline:
    "border border-border bg-transparent text-foreground hover:bg-surface-hover focus-visible:outline-ring",
  ghost:
    "bg-transparent text-foreground hover:bg-surface-hover focus-visible:outline-ring",
  danger:
    "bg-danger text-danger-foreground hover:bg-danger-hover focus-visible:outline-danger",
  link: "bg-transparent p-0 text-primary underline-offset-4 hover:text-primary-hover hover:underline focus-visible:outline-ring",
};

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};
