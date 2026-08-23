import { QuantityStepperProps } from "@type/components/atoms/QuantityStepper.type";

export const QUANTITY_STEPPER_SIZE = {
  sm: {
    button: "h-8 w-8",
    value: "w-8 text-sm",
    icon: "h-3.5 w-3.5",
  },
  md: {
    button: "h-10 w-10",
    value: "w-10 text-base",
    icon: "h-4 w-4",
  },
  lg: {
    button: "h-12 w-12",
    value: "w-12 text-lg",
    icon: "h-5 w-5",
  },
} satisfies Record<
  NonNullable<QuantityStepperProps["size"]>,
  {
    button: string;
    value: string;
    icon: string;
  }
>;
