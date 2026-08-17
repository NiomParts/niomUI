import { CheckboxVariant, CheckboxTextVariant } from "@type";
export interface CheckboxGroupItem {
  /**
   * Text or content displayed next to the checkbox.
   */
  label: React.ReactNode;

  /**
   * Unique value used to identify the option.
   */
  value: string;

  /**
   * Prevents interaction with this specific option.
   */
  disabled?: boolean;

  /**
   * additional css option
   * */
  className?: string;

  /**
   * total number of values we have on the data source, this is used to show the count of the checkbox option
   */
  totalCount?: number;
}

export interface CheckboxGroupProps {
  /**
   * Collection of checkbox options displayed in the group.
   */
  items: CheckboxGroupItem[];

  /**
   * Currently selected values.
   */
  value: string[];

  /**
   * Called whenever the selected values change.
   */
  onChange?: (values: string[]) => void;

  /**
   * Optional label or title displayed above the group.
   */
  label?: React.ReactNode;

  /**
   * Controls the visual direction of the checkbox group.
   *
   * vertical   - Displays options in a column.
   * horizontal - Displays options in a row.
   */
  orientation?: "vertical" | "horizontal";

  /**
   * Disables all checkbox options in the group.
   */
  disabled?: boolean;

  /**
   * Additional CSS classes used to extend or override styling.
   */
  className?: string;

  /**
   * variant of the checkbox option
   */
  variant?: CheckboxVariant;

  /**
   * variant of the checkbox text
   * */
  textVariant?: CheckboxTextVariant;
}
