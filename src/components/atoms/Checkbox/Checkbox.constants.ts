import type {
  CheckboxTextVariant,
  CheckboxVariant,
} from "@type/components/atoms";

export const CHECKBOX_VARIANTS = [
  "primary",
  "secondary",
  "accent",
  "danger",
  "muted",
  "tertiary",
] as const satisfies readonly CheckboxVariant[];

export const CHECKBOX_TEXT_VARIANTS = [
  "foreground",
  "muted",
  "primary",
  "secondary",
  "accent",
  "danger",
  "tertiary",
] as const satisfies readonly CheckboxTextVariant[];

const CHECKBOX_CLASSNAMES = {
  root: "checkbox",
  input: "input",
  box: "box",
  checkIcon: "checkIcon",
  label: "label",
  disabled: "disabled",
};

export const CHECKBOX_VARIANT_CLASSNAMES: Record<CheckboxVariant, string> = {
  primary: "checkboxVariantPrimary",
  secondary: "checkboxVariantSecondary",
  tertiary: "checkboxVariantTertiary",
  accent: "checkboxVariantAccent",
  danger: "checkboxVariantDanger",
  muted: "checkboxVariantMuted",
};

export const CHECKBOX_TEXT_VARIANT_CLASSNAMES: Record<
  CheckboxTextVariant,
  string
> = {
  foreground: "checkboxTextForeground",
  muted: "checkboxTextMuted",
  primary: "checkboxTextPrimary",
  secondary: "checkboxTextSecondary",
  accent: "checkboxTextAccent",
  danger: "checkboxTextDanger",
  tertiary: "checkboxTextTertiary",
};

export { CHECKBOX_CLASSNAMES };
