import type { ReactNode } from "react";
import type { InputProps } from "@type/components/atoms";

export type InputFieldProps = Omit<InputProps, "error"> & {
  /**
   * Label text displayed above the input when floatingLabel is not used.
   */
  label?: ReactNode;

  /**
   * Label displayed inside the input until the input is focused or has a value.
   */
  floatingLabel?: ReactNode;

  /**
   * Renders the input and label in an invalid state.
   */
  error?: boolean;

  /**
   * Error message displayed below the input when error is true.
   */
  errorMessage?: string;
};
