const TEXTAREA_BASE_CLASS =
  "w-full rounded-md border bg-background p-3 text-sm text-foreground shadow-sm transition-colors";

const TEXTAREA_STATE_CLASS =
  "placeholder:text-muted-foreground focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

const TEXTAREA_READONLY_CLASS =
  "bg-muted text-muted-foreground focus:border-ring focus:ring-ring/30 cursor-not-allowed focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50";

const TEXTAREA_DEFAULT_CLASS =
  "border-border focus:border-ring focus:ring-ring/30";

const TEXTAREA_ERROR_CLASS = "border-danger focus:ring-danger/30";

export {
  TEXTAREA_BASE_CLASS,
  TEXTAREA_STATE_CLASS,
  TEXTAREA_READONLY_CLASS,
  TEXTAREA_DEFAULT_CLASS,
  TEXTAREA_ERROR_CLASS,
};
