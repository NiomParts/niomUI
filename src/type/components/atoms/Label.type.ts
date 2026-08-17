export interface LabelProps {
  /**
   * Content displayed inside the label.
   */
  children: React.ReactNode;

  /**
   * Associates the label with a form control.
   */
  htmlFor?: string;

  /**
   * Indicates that the associated field is required.
   */
  required?: boolean;

  /**
   * Additional CSS classes to extend or override styling.
   */
  className?: string;

  /**
   * Displays the label in a disabled state.
   */
  disabled?: boolean;

  /**
   * Allows passing a forwarded ref to the label element.
   */
  forwardedRef?: React.ForwardedRef<HTMLLabelElement>;
}
