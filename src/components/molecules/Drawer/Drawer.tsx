import { useEffect, useRef } from "react";
import { Button, Cross } from "@atoms";
import { cn } from "@utils";
import type { DrawerProps } from "@type/components/molecules";
import { DRAWER_SIDE_CLASSES } from "./Drawer.constants";

function CloseIcon() {
  return <Cross className="h-7 w-7" aria-hidden="true" />;
}

export function Drawer({
  isOpen,
  onClose,
  side = "left",
  className,
  children,
}: DrawerProps) {
  const sideClasses = DRAWER_SIDE_CLASSES[side];

  const closeButtonRef = useRef<HTMLElement>(null);

  const closeDrawer = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-999 flex items-start justify-start">
      <button
        type="button"
        className="absolute inset-0 bg-primary-foreground/60"
        aria-label="Close drawer overlay"
        onClick={closeDrawer}
      />

      <aside
        className={cn(
          "absolute top-0 flex h-full w-[min(82vw,320px)] flex-col overflow-hidden border-r border-border bg-surface shadow-2xl transition-transform duration-300",
          sideClasses.panel,
          "translate-x-0",
          className,
        )}
        aria-label="Menu drawer"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex shrink-0 justify-end p-4">
          <Button
            aria-label="Close drawer"
            className="h-10 w-10 rounded-full p-0"
            onClick={closeDrawer}
            ref={closeButtonRef}
            variant="ghost"
          >
            <CloseIcon />
          </Button>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden px-4">{children}</div>
      </aside>
    </div>
  );
}
