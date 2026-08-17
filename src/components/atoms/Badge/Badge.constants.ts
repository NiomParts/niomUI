import type { BadgeSize, BadgeVariant } from "@type/components/atoms";

export const BADGE_VARIANTS = [
  "primary",
  "secondary",
  "muted",
  "tertiary",
  "success",
  "danger",
  "warning",
] as const satisfies readonly BadgeVariant[];

export const BADGE_SIZES = ["sm", "md"] as const satisfies readonly BadgeSize[];

export const BADGE_VARIANT_CLASSES: Record<BadgeVariant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  tertiary: "bg-tertiary text-tertiary-foreground",
  success: "bg-accent text-accent-foreground",
  danger: "bg-danger text-danger-foreground",
  warning: "bg-highlight text-highlight-foreground",
  muted: "bg-muted text-foreground",
};

export const BADGE_SIZE_CLASSES: Record<BadgeSize, string> = {
  sm: "h-5 min-w-5 px-1 text-[0.65rem]",
  md: "h-6 min-w-6 px-1.5 text-xs",
};
