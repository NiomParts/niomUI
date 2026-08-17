import type { InputType } from "@type/components/atoms";

export const INPUT_TYPES = [
  "text",
  "password",
  "email",
  "number",
  "search",
  "tel",
  "url",
] as const satisfies readonly InputType[];

export const INPUT_BASE_CLASS =
  "h-11 w-full rounded-md border bg-background px-3 text-sm text-foreground shadow-sm transition-colors";

export const INPUT_STATE_CLASS =
  "niom-focus-ring placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50";

export const INPUT_DEFAULT_CLASS =
  "border-border focus:border-ring";

export const INPUT_ERROR_CLASS = "border-danger focus:border-danger";

export const INPUT_WITH_LEFT_ICON_CLASS = "pl-10";

export const INPUT_WITH_RIGHT_ACTION_CLASS = "pr-12";

export const INPUT_AFFIX_CLASS =
  "pointer-events-none absolute inset-y-0 flex items-center text-muted-foreground";

export const INPUT_LEFT_AFFIX_CLASS = "left-3";

export const INPUT_RIGHT_AFFIX_CLASS = "right-3";

export const INPUT_ACTION_CLASS =
  "absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md p-0 text-muted-foreground transition hover:bg-surface-hover hover:text-foreground disabled:pointer-events-none disabled:opacity-50";
