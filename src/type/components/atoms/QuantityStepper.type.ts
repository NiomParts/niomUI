export interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;

  min?: number;
  max?: number;

  disabled?: boolean;
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md" | "lg";
}
