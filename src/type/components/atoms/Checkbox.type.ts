import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CheckboxVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "danger"
  | "muted";

export type CheckboxTextVariant =
  | "foreground"
  | "muted"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "danger";

export interface CheckboxOwnProps {
  /**
   * Label content displayed beside the checkbox.
   */
  children?: ReactNode;

  /**
   * Additional CSS classes applied to the visual checkbox box.
   */
  className?: string;

  /**
   * Color variant for the visual checkbox control.
   */
  variant?: CheckboxVariant;

  /**
   * Color variant for the label text.
   */
  textVariant?: CheckboxTextVariant;

  /**
   * Called with the checked state whenever the checkbox changes.
   */
  onChange?: (checked: boolean) => void;
}

export type CheckboxProps = CheckboxOwnProps &
  Omit<
    ComponentPropsWithoutRef<"input">,
    keyof CheckboxOwnProps | "type" | "onChange"
  >;
