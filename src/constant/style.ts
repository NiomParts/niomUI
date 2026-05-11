const VARIANTS = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-secondary text-white hover:bg-secondary/90",
  tertiary: "bg-tertiary text-white hover:bg-tertiary/90",
  warning: "bg-warning text-white hover:bg-warning/90",
  danger: "bg-danger text-white hover:bg-danger/90",
  success: "bg-success text-white hover:bg-success/90",
} as const;

const POSITIONS = {
  "top-left": "absolute top-0 left-0 flex justify-start items-start",
  "top-right": "absolute top-0 right-0 flex justify-end items-start",
  "bottom-left":
    "absolute bottom-0 left-0 flex flex-col justify-end items-start",
  "bottom-right":
    "absolute bottom-0 right-0 flex flex-col justify-end items-end",
  center: "absolute flex flex-col justify-center items-center",
};

const EFFECTS = {
  scale: "hover:scale-105 transition-transform duration-300",
  shadow: "hover:shadow-lg transition-shadow duration-300",
  blur: "hover:blur-sm transition-filter duration-300",
  innerShadow:
    "hover:shadow-inner transition-shadow duration-300 shadow-gray-500/80 ",
};

const DIMENSIONS = {
  small: "w-64",
  medium: "w-96",
  large: "w-128",
};

export { VARIANTS, POSITIONS, EFFECTS, DIMENSIONS };
