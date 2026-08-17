import {
  useCallback,
  useMemo,
  useRef,
  type CSSProperties,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { clamp, cn, getDecimalPlaces } from "@utils";
import type { SliderProps, SliderThumbType } from "@type/components/atoms";

import {
  SLIDER_ACTIVE_RANGE_CLASS,
  SLIDER_ACTIVE_RANGE_ORIENTATION_CLASSES,
  SLIDER_DEFAULT_MAX,
  SLIDER_DEFAULT_MIN,
  SLIDER_DEFAULT_ORIENTATION,
  SLIDER_DEFAULT_STEP,
  SLIDER_MAX_LABEL,
  SLIDER_MIN_LABEL,
  SLIDER_ROOT_CLASS,
  SLIDER_ROOT_ORIENTATION_CLASSES,
  SLIDER_SINGLE_LABEL,
  SLIDER_TRACK_CLASS,
  SLIDER_TRACK_ORIENTATION_CLASSES,
} from "./Slider.constants";
import { SliderThumb } from "./SliderThumb";

const getActiveRangeStyle = ({
  isRange,
  isVertical,
  lowPercent,
  highPercent,
}: {
  isRange: boolean;
  isVertical: boolean;
  lowPercent: number;
  highPercent: number;
}): CSSProperties => {
  if (isVertical) {
    return {
      bottom: isRange ? `${lowPercent}%` : "0%",
      top: isRange ? `${100 - highPercent}%` : `${100 - lowPercent}%`,
    };
  }

  return {
    left: isRange ? `${lowPercent}%` : "0%",
    right: isRange ? `${100 - highPercent}%` : `${100 - lowPercent}%`,
  };
};

const getThumbStyle = ({
  isVertical,
  percent,
}: {
  isVertical: boolean;
  percent: number;
}): CSSProperties => {
  if (isVertical) {
    return {
      bottom: `${percent}%`,
      left: "50%",
      transform: "translate(-50%, 50%)",
    };
  }

  return {
    left: `${percent}%`,
    top: "50%",
    transform: "translate(-50%, -50%)",
  };
};

export function Slider({
  value,
  min = SLIDER_DEFAULT_MIN,
  max = SLIDER_DEFAULT_MAX,
  step = SLIDER_DEFAULT_STEP,
  onChange,
  disabled = false,
  orientation = SLIDER_DEFAULT_ORIENTATION,
  ariaLabel,
  ariaLabels,
  className,
}: SliderProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const isRange = Array.isArray(value);
  const isVertical = orientation === "vertical";

  const precision = useMemo(
    () => Math.max(getDecimalPlaces(step), getDecimalPlaces(min)),
    [step, min],
  );

  const normalize = useCallback(
    (value: number) => Number(value.toFixed(precision)),
    [precision],
  );

  const snap = useCallback(
    (value: number) => {
      const snapped = Math.round((value - min) / step) * step + min;

      return normalize(snapped);
    },
    [min, step, normalize],
  );

  const toPercent = useCallback(
    (value: number) => {
      if (max === min) return 0;

      return clamp(((value - min) / (max - min)) * 100, 0, 100);
    },
    [min, max],
  );

  const valueFromPointer = useCallback(
    (event: PointerEvent | ReactPointerEvent) => {
      const track = trackRef.current;

      if (!track || max === min) {
        return min;
      }

      const rect = track.getBoundingClientRect();

      let percentage: number;

      if (isVertical) {
        percentage = 1 - (event.clientY - rect.top) / rect.height;
      } else {
        percentage = (event.clientX - rect.left) / rect.width;
      }

      percentage = clamp(percentage, 0, 1);

      const rawValue = min + percentage * (max - min);

      return clamp(snap(rawValue), min, max);
    },
    [isVertical, min, max, snap],
  );

  const updateThumb = useCallback(
    (thumb: SliderThumbType, nextValue: number) => {
      const next = clamp(snap(nextValue), min, max);

      if (!isRange) {
        onChange(next);
        return;
      }

      const [low, high] = value as [number, number];

      if (thumb === "min") {
        onChange([clamp(next, min, high - step), high]);
        return;
      }

      if (thumb === "max") {
        onChange([low, clamp(next, low + step, max)]);
      }
    },
    [isRange, value, min, max, step, snap, onChange],
  );

  const startDrag = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>, thumb: SliderThumbType) => {
      if (disabled) return;

      event.preventDefault();

      const target = event.currentTarget;
      const pointerId = event.pointerId;

      target.setPointerCapture(pointerId);

      const move = (event: PointerEvent) => {
        updateThumb(thumb, valueFromPointer(event));
      };

      const stop = (event: PointerEvent) => {
        move(event);

        if (target.hasPointerCapture(pointerId)) {
          target.releasePointerCapture(pointerId);
        }

        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", stop);
        window.removeEventListener("pointercancel", stop);
      };

      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", stop);
      window.addEventListener("pointercancel", stop);
    },
    [disabled, updateThumb, valueFromPointer],
  );

  const handleTrackPointerDown = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (disabled) return;

      const clickedValue = valueFromPointer(event);

      if (!isRange) {
        updateThumb("single", clickedValue);
        return;
      }

      const [low, high] = value as [number, number];

      const distanceFromLow = Math.abs(clickedValue - low);

      const distanceFromHigh = Math.abs(clickedValue - high);

      const thumb: SliderThumbType =
        distanceFromLow <= distanceFromHigh ? "min" : "max";

      updateThumb(thumb, clickedValue);
    },
    [disabled, isRange, value, updateThumb, valueFromPointer],
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>, thumb: SliderThumbType) => {
      if (disabled) return;

      let currentValue: number;

      if (isRange) {
        const [low, high] = value as [number, number];

        currentValue = thumb === "min" ? low : high;
      } else {
        currentValue = value as number;
      }

      const largeStep = step * 10;

      let nextValue: number | undefined;

      switch (event.key) {
        case "ArrowRight":
        case "ArrowUp":
          nextValue = currentValue + (event.shiftKey ? largeStep : step);
          break;

        case "ArrowLeft":
        case "ArrowDown":
          nextValue = currentValue - (event.shiftKey ? largeStep : step);
          break;

        case "PageUp":
          nextValue = currentValue + largeStep;
          break;

        case "PageDown":
          nextValue = currentValue - largeStep;
          break;

        case "Home":
          nextValue = min;
          break;

        case "End":
          nextValue = max;
          break;

        default:
          return;
      }

      event.preventDefault();

      updateThumb(thumb, nextValue);
    },
    [disabled, isRange, value, step, min, max, updateThumb],
  );

  const lowValue = isRange ? (value as [number, number])[0] : (value as number);

  const highValue = isRange
    ? (value as [number, number])[1]
    : (value as number);

  const lowPercent = toPercent(lowValue);
  const highPercent = toPercent(highValue);

  return (
    <div
      data-disabled={disabled || undefined}
      data-orientation={orientation}
      className={cn(
        SLIDER_ROOT_CLASS,
        SLIDER_ROOT_ORIENTATION_CLASSES[orientation],
        className,
      )}
    >
      <div
        ref={trackRef}
        className={cn(
          SLIDER_TRACK_CLASS,
          !disabled && "cursor-pointer",
          SLIDER_TRACK_ORIENTATION_CLASSES[orientation],
        )}
        onPointerDown={handleTrackPointerDown}
      >
        <div
          aria-hidden="true"
          className={cn(
            SLIDER_ACTIVE_RANGE_CLASS,
            disabled ? "bg-muted-foreground/40" : "bg-primary",
            SLIDER_ACTIVE_RANGE_ORIENTATION_CLASSES[orientation],
          )}
          style={getActiveRangeStyle({
            isRange,
            isVertical,
            lowPercent,
            highPercent,
          })}
        />

        <SliderThumb
          label={
            isRange
              ? (ariaLabels?.[0] ?? SLIDER_MIN_LABEL)
              : (ariaLabel ?? SLIDER_SINGLE_LABEL)
          }
          min={min}
          max={isRange ? highValue - step : max}
          value={lowValue}
          orientation={orientation}
          disabled={disabled}
          style={getThumbStyle({ isVertical, percent: lowPercent })}
          onPointerDown={(event) => {
            event.stopPropagation();

            startDrag(event, isRange ? "min" : "single");
          }}
          onKeyDown={(event) =>
            handleKeyDown(event, isRange ? "min" : "single")
          }
        />

        {isRange && (
          <SliderThumb
            label={ariaLabels?.[1] ?? SLIDER_MAX_LABEL}
            min={lowValue + step}
            max={max}
            value={highValue}
            orientation={orientation}
            disabled={disabled}
            style={getThumbStyle({ isVertical, percent: highPercent })}
            onPointerDown={(event) => {
              event.stopPropagation();
              startDrag(event, "max");
            }}
            onKeyDown={(event) => handleKeyDown(event, "max")}
          />
        )}
      </div>
    </div>
  );
}
