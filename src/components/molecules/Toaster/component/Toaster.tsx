import { useEffect } from "react";
import { Button, Cross } from "@components/atoms";
import type { ToasterProps } from "@type/components";
import { cn } from "@utils";

import {
  TOASTER_CLASSNAMES,
  TOASTER_VARIANT_CLASSNAMES,
} from "../constant/Toaster.constants";

export function Toaster({
  message,
  variant,
  onClose,
  autoCloseMs = 3500,
}: ToasterProps) {
  const isSuccess = variant === "success";

  useEffect(() => {
    if (!onClose) {
      return;
    }

    const timeout = window.setTimeout(() => {
      onClose();
    }, autoCloseMs);

    return () => window.clearTimeout(timeout);
  }, [autoCloseMs, onClose]);

  return (
    <div
      aria-live="polite"
      role={isSuccess ? "status" : "alert"}
      className={cn(
        TOASTER_CLASSNAMES.root,
        TOASTER_VARIANT_CLASSNAMES[variant],
      )}
    >
      <span className={TOASTER_CLASSNAMES.message}>{message}</span>

      {onClose ? (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={onClose}
          aria-label="Dismiss toast"
          className={TOASTER_CLASSNAMES.closeButton}
        >
          <Cross aria-hidden="true" className={TOASTER_CLASSNAMES.closeIcon} />
        </Button>
      ) : null}
    </div>
  );
}
