import type {
  CSSProperties,
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";

export type SliderValue = number | [number, number];

export type SliderOrientation = "horizontal" | "vertical";

export type SliderThumbType = "single" | "min" | "max";

export interface SliderProps {
  /**
   * Current value of the slider.
   *
   * Single value:
   * value={50}
   *
   * Range value:
   * value={[20, 80]}
   */
  value: SliderValue;

  /**
   * Minimum selectable value.
   *
   * @default 0
   */
  min?: number;

  /**
   * Maximum selectable value.
   *
   * @default 100
   */
  max?: number;

  /**
   * Step increment.
   *
   * @default 1
   */
  step?: number;

  /**
   * Callback fired whenever the value changes.
   */
  onChange: (value: SliderValue) => void;

  /**
   * Prevents user interaction.
   */
  disabled?: boolean;

  /**
   * Slider orientation.
   *
   * horizontal - Left to right.
   * vertical   - Bottom to top.
   */
  orientation?: SliderOrientation;

  /**
   * Accessible label for a single thumb slider.
   */
  ariaLabel?: string;

  /**
   * Accessible labels for a range slider.
   */
  ariaLabels?: [string, string];

  /**
   * Additional CSS classes.
   */
  className?: string;
}

export interface SliderThumbProps {
  label: string;
  min: number;
  max: number;
  value: number;
  orientation: SliderOrientation;
  disabled: boolean;
  style: CSSProperties;
  onPointerDown: (event: ReactPointerEvent<HTMLDivElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLDivElement>) => void;
}
