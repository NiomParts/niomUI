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
    <div className={cn("fixed inset-0 z-50 flex items-start justify-start")}>
      <button
        type="button"
        tabIndex={-1}
        className="absolute inset-0 bg-black/60 outline-none"
        aria-label="Close drawer overlay"
        onClick={closeDrawer}
      />

      <aside
        className={cn(
          "absolute top-0 h-full w-[min(82vw,320px)] border-r border-border bg-surface shadow-2xl transition-transform duration-300",
          sideClasses.panel,
          "translate-x-0",
          className,
        )}
        aria-label="Menu drawer"
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-end p-4">
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
        <div className="flex h-full flex-col px-4">{children}</div>
      </aside>
    </div>
  );
}
