import type {
  AccordionPadding,
  AccordionShadow,
  AccordionVariant,
} from "@type/components/molecules";

export const ACCORDION_VARIANTS = [
  "primary",
  "secondary",
  "tertiary",
  "none",
  "outline",
  "boxed",
  "accent",
] as const satisfies readonly AccordionVariant[];

export const ACCORDION_VARIANT_CLASSES: Record<AccordionVariant, string> = {
  primary:
    "border-primary bg-primary text-foreground  shadow-sm shadow-primary/20",
  secondary:
    "border-secondary bg-secondary text-foreground  shadow-sm shadow-secondary/20",
  tertiary:
    "border-tertiary bg-tertiary text-foreground  shadow-sm shadow-tertiary/20",
  none:
    "border-transparent bg-transparent text-foreground shadow-none",
  outline:
    "border-border bg-transparent text-foreground shadow-none",
  boxed:
    "border-border bg-surface text-surface-foreground shadow-sm shadow-black/20",
  accent:
    "border-accent bg-accent text-accent-foreground shadow-sm shadow-accent/20",
};

export const ACCORDION_TRIGGER_VARIANT_CLASSES: Record<AccordionVariant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover focus-visible:outline-ring data-[state=open]:bg-primary-hover",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hover focus-visible:outline-secondary data-[state=open]:bg-secondary-hover",
  tertiary:
    "bg-tertiary text-tertiary-foreground hover:bg-tertiary-hover focus-visible:outline-ring data-[state=open]:bg-tertiary-hover",
  none:
    "bg-transparent text-foreground hover:bg-transparent focus-visible:outline-ring data-[state=open]:bg-transparent",
  outline:
    "border-border bg-transparent text-foreground hover:bg-surface-hover focus-visible:outline-ring data-[state=open]:bg-surface-hover",
  boxed:
    "bg-surface text-surface-foreground hover:bg-surface-hover focus-visible:outline-ring data-[state=open]:bg-surface-hover",
  accent:
    "bg-accent text-accent-foreground hover:bg-accent-hover focus-visible:outline-ring data-[state=open]:bg-accent-hover",
};

export const ACCORDION_PANEL_VARIANT_CLASSES: Record<AccordionVariant, string> = {
  primary: "border-primary/30 bg-background/95",
  secondary: "border-secondary/30 bg-background/95",
  tertiary: "border-tertiary/40 bg-background/95",
  none: "border-transparent bg-transparent",
  outline: "border-border bg-background/95",
  boxed: "border-border bg-background/30",
  accent: "border-accent/30 bg-background/95",
};

export const ACCORDION_PADDING_CLASSES: Record<AccordionPadding, string> = {
  none: "p-0",
  small: "p-2",
  medium: "p-3",
  large: "p-6",
};

export const ACCORDION_SHADOW_CLASSES: Record<AccordionShadow, string> = {
  none: "shadow-none",
  small: "shadow-sm",
  medium: "shadow-md",
  large: "shadow-lg",
};
