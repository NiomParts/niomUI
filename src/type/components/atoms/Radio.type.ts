export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** The id of the radio input */
  id?: string;
  /** The name of the radio input */
  name: string;
  /** The value of the radio input */
  value: string;
  /** Whether the radio input is checked */
  checked?: boolean;
  /** Whether the radio input is disabled */
  disabled?: boolean;
  /** The onChange event handler for the radio input */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** The children to be rendered inside the label */
  children?: React.ReactNode;
  /** The className to be applied to the label */
  className?: string;
  /** Varients of the radio input */
  variant?: RadioVariant;

  /** Varients of the radio input text */
  textVariant?: RadioTextVariant;
}

export type RadioVariant = "primary" | "secondary" | "tertiary" | "accent";

export type RadioTextVariant =
  | "foreground"
  | "muted"
  | "primary"
  | "secondary"
  | "tertiary"
  | "accent"
  | "danger";
