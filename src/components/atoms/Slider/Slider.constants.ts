import type { SliderOrientation } from "@type/components/atoms";

export const SLIDER_DEFAULT_MIN = 0;
export const SLIDER_DEFAULT_MAX = 100;
export const SLIDER_DEFAULT_STEP = 1;
export const SLIDER_DEFAULT_ORIENTATION = "horizontal" as const;

export const SLIDER_SINGLE_LABEL = "Value";
export const SLIDER_MIN_LABEL = "Minimum value";
export const SLIDER_MAX_LABEL = "Maximum value";

export const SLIDER_ROOT_CLASS =
  "relative flex touch-none select-none items-center";

export const SLIDER_ROOT_ORIENTATION_CLASSES: Record<
  SliderOrientation,
  string
> = {
  horizontal: "h-5 w-full",
  vertical: "h-full w-5 flex-col",
};

export const SLIDER_TRACK_CLASS = "relative rounded-full bg-muted";

export const SLIDER_TRACK_ORIENTATION_CLASSES: Record<
  SliderOrientation,
  string
> = {
  horizontal: "h-1.5 w-full",
  vertical: "h-full w-1.5",
};

export const SLIDER_ACTIVE_RANGE_CLASS = "absolute rounded-full";

export const SLIDER_ACTIVE_RANGE_ORIENTATION_CLASSES: Record<
  SliderOrientation,
  string
> = {
  horizontal: "h-full",
  vertical: "w-full",
};

export const SLIDER_THUMB_BASE_CLASS =
  "niom-focus-ring absolute z-10 size-5 rounded-full border-2 border-primary bg-background shadow-md transition-shadow";

export const SLIDER_THUMB_ENABLED_CLASS =
  "cursor-grab hover:shadow-lg active:cursor-grabbing active:shadow-lg";

export const SLIDER_THUMB_DISABLED_CLASS = "cursor-not-allowed opacity-50";
