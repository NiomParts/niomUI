import type { SliderThumbProps } from "@type/components/atoms";
import { cn } from "@utils";

import {
  SLIDER_THUMB_BASE_CLASS,
  SLIDER_THUMB_DISABLED_CLASS,
  SLIDER_THUMB_ENABLED_CLASS,
} from "./Slider.constants";

export const SliderThumb = ({
  label,
  min,
  max,
  value,
  orientation,
  disabled,
  style,
  onPointerDown,
  onKeyDown,
}: SliderThumbProps) => {
  return (
    <div
      role="slider"
      tabIndex={disabled ? -1 : 0}
      aria-label={label}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-orientation={orientation}
      aria-disabled={disabled}
      className={cn(
        SLIDER_THUMB_BASE_CLASS,
        disabled ? SLIDER_THUMB_DISABLED_CLASS : SLIDER_THUMB_ENABLED_CLASS,
      )}
      style={style}
      onPointerDown={onPointerDown}
      onKeyDown={onKeyDown}
    />
  );
};
