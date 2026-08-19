import type { ReactNode } from "react";
import type { TextareaProps } from "@components";

export type TextAreaFieldProps = Omit<TextareaProps, "error"> & {
  /**
   * Label text displayed above the textarea when floatingLabel is not used.
   */
  label?: ReactNode;

  /**
   * show count of characters in textarea
   */
  showCount?: boolean;

  /**
   * clear button to clear the textarea value
   */
  clearButton?: boolean;

  /**
   * Renders the input and label in an invalid state.
   */
  error?: boolean;

  /**
   * Error message displayed below the input when error is true.
   */
  errorMessage?: string;
};
