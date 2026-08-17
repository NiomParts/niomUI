import type { ReactNode } from "react";
import type {
  AccordionPadding,
  AccordionShadow,
  AccordionVariant,
} from "@type/components/molecules";
import { cn } from "@utils";

import {
  ACCORDION_PADDING_CLASSES,
  ACCORDION_PANEL_VARIANT_CLASSES,
  ACCORDION_SHADOW_CLASSES,
} from "../constants/Accordion.constants";

type AccordionPanelProps = {
  id: string;
  labelledBy: string;
  isActive: boolean;
  variant: AccordionVariant;
  padding: AccordionPadding;
  shadow: AccordionShadow;
  bordered: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export function AccordionPanel({
  id,
  labelledBy,
  isActive,
  variant,
  padding,
  shadow,
  bordered,
  header,
  footer,
  className,
  children,
}: AccordionPanelProps) {
  return (
    <div
      id={id}
      role="region"
      aria-labelledby={labelledBy}
      aria-hidden={!isActive}
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: isActive ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "min-h-0 text-sm leading-6 text-muted-foreground",
            ACCORDION_PADDING_CLASSES[padding],
            ACCORDION_SHADOW_CLASSES[shadow],
            bordered && "border-t",
            ACCORDION_PANEL_VARIANT_CLASSES[variant],
            className,
          )}
        >
          {header && <div className="mb-3 font-medium text-foreground">{header}</div>}
          {children}
          {footer && <div className="mt-3 text-xs text-muted-foreground">{footer}</div>}
        </div>
      </div>
    </div>
  );
}
