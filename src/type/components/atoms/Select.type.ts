import type { ComponentPropsWithoutRef } from "react";

export type SelectValue = string | number;
type SelectChangeHandler = {
  bivarianceHack(value: SelectValue): void;
}["bivarianceHack"];

export interface SelectOption {
  /**
   * Text displayed to the user.
   */
  label: React.ReactNode;

  /**
   * Value associated with the option.
   */
  value: SelectValue;

  /**
   * Prevents this specific option from being selected.
   */
  disabled?: boolean;
}

export interface SelectOwnProps {
  /**
   * Collection of options displayed inside the select.
   */
  options: SelectOption[];

  /**
   * Currently selected value.
   */
  value?: SelectValue;

  /**
   * Initial selected value for uncontrolled usage.
   */
  defaultValue?: SelectValue;

  /**
   * Text displayed when no value is selected.
   *
   * Example:
   * "Select category"
   */
  placeholder?: string;

  /**
   * Callback fired whenever the selected value changes.
   */
  onChange?: SelectChangeHandler;

  /**
   * Prevents interaction with the select.
   */
  disabled?: boolean;

  /**
   * Marks the select as required when used inside a form.
   */
  required?: boolean;

  /**
   * Name used when the component participates in form submission.
   */
  name?: string;

  /**
   * Unique identifier used to associate the select with a Label.
   */
  id?: string;

  /**
   * Additional CSS classes used to extend or override styling.
   */
  className?: string;

  /**
   * Additional CSS classes for the dropdown panel.
   */
  dropdownClassName?: string;

  /**
   * Additional CSS classes for each dropdown option.
   */
  optionClassName?: string;

  /**
   * Variant of the select component used to apply different styles.
   */
  variant?: "outlined" | "primary" | "secondary" | "tertiary";
}

export type SelectProps = SelectOwnProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    keyof SelectOwnProps | "onChange" | "children" | "value"
  >;
