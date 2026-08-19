export interface TextareaProps {
  /**
   * Current controlled value.
   */
  value?: string;

  /**
   * Initial value for uncontrolled usage.
   */
  defaultValue?: string;

  /**
   * Placeholder displayed when the textarea is empty.
   */
  placeholder?: string;

  /**
   * Number of visible text columns.
   *
   * @default 50
   */
  cols?: number;

  /**
   * Number of visible text rows.
   *
   * @default 4
   */
  rows?: number;

  /**
   * Prevents user interaction.
   */
  disabled?: boolean;

  /**
   * Marks the textarea as required.
   */
  required?: boolean;

  /**
   * Prevents the value from being edited
   * while keeping the content readable.
   */
  readOnly?: boolean;

  /**
   * Maximum number of characters allowed.
   */
  maxLength?: number;

  /**
   * Unique identifier used to associate
   * the textarea with a Label.
   */
  id?: string;

  /**
   * Name used during form submission.
   */
  name?: string;

  /**
   * Additional CSS classes used to extend
   * or override styling.
   */
  className?: string;

  /**
   * Called when the textarea value changes.
   */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;

  /**
   * error state of the textarea
   */
  error?: boolean;
}
