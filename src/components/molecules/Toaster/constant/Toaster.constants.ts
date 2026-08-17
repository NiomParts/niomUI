import type { ToastVariant } from "@type/components";

export const TOASTER_CLASSNAMES = {
  viewport:
    "pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6 sm:justify-end sm:px-6",
  root: "pointer-events-auto flex w-full max-w-sm items-start justify-between gap-3 rounded-lg border px-4 py-3 text-sm shadow-sm",
  message: "min-w-0 flex-1",
  closeButton:
    "size-6 shrink-0 rounded p-0 text-current/70 hover:bg-transparent hover:text-current focus-visible:outline-current",
  closeIcon: "size-3.5",
} as const;

export const TOASTER_VARIANT_CLASSNAMES: Record<ToastVariant, string> = {
  success: "border-accent/60 bg-accent/60 text-accent",
  error: "border-danger/60 bg-danger/60 text-danger",
};
