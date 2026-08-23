import type { RadioTextVariant, RadioVariant } from "@type";

export const RADIO_VARIANTS_CLASSNAMES: Record<RadioVariant, string> = {
  primary: "group-has-checked:border-primary",
  secondary: "group-has-checked:border-secondary",
  tertiary: "group-has-checked:border-tertiary",
  accent: "group-has-checked:border-accent",
};

export const RADIO_HOVER_VARIANTS_CLASSNAMES: Record<RadioVariant, string> = {
  primary: "group-hover:border-primary",
  secondary: "group-hover:border-secondary",
  tertiary: "group-hover:border-tertiary",
  accent: "group-hover:border-accent",
};

export const RADIO_DOT_VARIANTS_CLASSNAMES: Record<RadioVariant, string> = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  tertiary: "bg-tertiary",
  accent: "bg-accent",
};

export const RADIO_TEXT_VARIANTS_CLASSNAMES: Record<RadioTextVariant, string> =
  {
    foreground: "text-foreground",
    muted: "text-muted-foreground",
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    accent: "text-accent",
    danger: "text-danger",
  };

export const RADIO_INPUTBOX_CLASSNAMES = "sr-only";
