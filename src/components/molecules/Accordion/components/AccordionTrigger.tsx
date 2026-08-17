import type { AccordionTriggerProps } from "@type/components";
import { cn } from "@utils";

import { ACCORDION_TRIGGER_VARIANT_CLASSES } from "../constants/Accordion.constants";

export function AccordionTrigger({
  id,
  controls,
  isActive,
  itemIndex,
  disabled,
  variant,
  label,
  icon,
  iconPosition,
  headerPosition,
  className,
  onToggle,
}: AccordionTriggerProps) {
  const iconSlot = icon ? (
    <span className="shrink-0 text-muted-foreground transition-colors group-hover:text-foreground">
      {icon}
    </span>
  ) : null;

  return (
    <button
      id={id}
      type="button"
      disabled={disabled}
      aria-expanded={isActive}
      aria-controls={controls}
      onClick={() => onToggle(itemIndex)}
      className={cn(
        "group flex w-full items-center gap-3 p-3 text-left font-semibold transition outline-none",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        ACCORDION_TRIGGER_VARIANT_CLASSES[variant],
        disabled && "cursor-not-allowed opacity-50",
        iconPosition === "right" && "justify-between",
        iconPosition === "left" && "justify-start",
        className,
      )}
      data-active={isActive}
      data-state={isActive ? "open" : "closed"}
      data-position={headerPosition}
      data-icon-position={icon ? iconPosition : undefined}
    >
      {iconPosition === "left" && iconSlot}
      {label && <span className="flex-1">{label}</span>}
      {iconPosition === "right" && iconSlot}
    </button>
  );
}
