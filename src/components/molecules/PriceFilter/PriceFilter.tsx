import type { PriceFilterProps, PriceRange } from "@type/components/molecules";
import { Label, Slider } from "@components/atoms";
import { cn, formatPrice, clamp } from "@utils";

export const PriceFilter = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  label = "Price",
  currency = "USD",
  locale,
  disabled = false,
  onChange,
  className,
}: PriceFilterProps) => {
  const safeMin = Math.min(min, max);
  const safeMax = Math.max(min, max);
  const [rawMinValue, rawMaxValue] = value;
  const selectedMin = Math.min(Math.max(rawMinValue, safeMin), safeMax);
  const selectedMax = Math.min(Math.max(rawMaxValue, selectedMin), safeMax);
  const selectedRange: PriceRange = [selectedMin, selectedMax];

  const handleChange = (nextValue: number | [number, number]) => {
    if (Array.isArray(nextValue)) {
      const [nextMin, nextMax] = nextValue;
      const clampedMin = clamp(nextMin, safeMin, safeMax);
      const clampedMax = clamp(nextMax, clampedMin, safeMax);
      onChange?.([clampedMin, clampedMax]);
    }
  };
  return (
    <div
      className={cn(
        "flex w-64 min-w-0 max-w-full flex-col gap-2",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      <Label className="w-full">{label}</Label>

      <div className="flex min-w-0 items-center gap-1.5 text-sm font-medium tabular-nums">
        <span className="min-w-0 max-w-[45%] truncate">
          {formatPrice(selectedRange[0], { currency, locale })}
        </span>
        <span aria-hidden="true" className="text-muted-foreground">
          -
        </span>
        <span className="min-w-0 max-w-[45%] truncate">
          {formatPrice(selectedRange[1], { currency, locale })}
        </span>
      </div>

      <div className="w-full min-w-0">
        <Slider
          value={selectedRange}
          min={safeMin}
          max={safeMax}
          step={step}
          disabled={disabled}
          ariaLabels={["Min", "Max"]}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
