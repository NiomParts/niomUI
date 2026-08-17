import type {
  ComponentPropsWithoutRef,
  ForwardedRef,
  MouseEventHandler,
  ReactNode,
} from "react";

export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "search"
  | "tel"
  | "url";

export interface InputOwnProps {
  /**
   * Renders the input with invalid state styling.
   */
  error?: boolean;

  /**
   * Allows passing a forwarded ref to the input element.
   */
  forwardedRef?: ForwardedRef<HTMLInputElement>;

  /**
   * Supported input type.
   */
  type?: InputType;

  /**
   * Optional decorative icon rendered inside the input field.
   */
  icon?: ReactNode;

  /**
   * Position of the custom icon inside the input field.
   */
  iconPosition?: "left" | "right";

  /**
   * Accessible label for the search action button.
   */
  searchButtonLabel?: string;

  /**
   * Called when the search action button is clicked.
   */
  onSearch?: MouseEventHandler<HTMLButtonElement>;
}

export type InputProps = InputOwnProps &
  Omit<ComponentPropsWithoutRef<"input">, keyof InputOwnProps | "type">;
