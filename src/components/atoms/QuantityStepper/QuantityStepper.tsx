import { QuantityStepperProps } from "@type";
import { Button } from "@components/atoms/Button";
import { PlusIcon, MinusIcon } from "@components/atoms/Icon";
import { cn } from "@utils";
import { QUANTITY_STEPPER_SIZE } from "./QuantityStepper.constants";

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  max,
  disabled = false,
  className,
  iconClassName,
  size = "sm",
}: QuantityStepperProps) {
  const canDecrease = !disabled && value > min;
  const canIncrease = !disabled && (max === undefined || value < max);

  const sizeClasses = QUANTITY_STEPPER_SIZE[size];

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border w-fit",
        className,
      )}
    >
      <Button
        type="button"
        variant="ghost"
        className={cn("rounded-l-md p-0", sizeClasses.button)}
        disabled={!canDecrease}
        aria-label="Decrease quantity"
        onClick={() => canDecrease && onChange(value - 1)}
      >
        <MinusIcon className={cn(sizeClasses.icon, iconClassName)} />
      </Button>

      <span className={cn("text-center", sizeClasses.value)} aria-live="polite">
        {value}
      </span>

      <Button
        type="button"
        variant="ghost"
        className={cn("rounded-r-md p-0", sizeClasses.button)}
        disabled={!canIncrease}
        aria-label="Increase quantity"
        onClick={() => canIncrease && onChange(value + 1)}
      >
        <PlusIcon className={cn(sizeClasses.icon, iconClassName)} />
      </Button>
    </div>
  );
}
