import React from "react";
import type { AccordionItemProps } from "@type/components/molecules";
import { cn } from "@utils";

import { ACCORDION_VARIANT_CLASSES } from "../constants/Accordion.constants";
import { useAccordionContext } from "../context/Accordion.context";
import { AccordionPanel } from "./AccordionPanel";
import { AccordionTrigger } from "./AccordionTrigger";

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(
  (
    {
      itemIndex = 0,
      label,
      disabled = false,
      headerPosition = "top",
      header,
      footer,
      padding = "medium",
      bordered = true,
      shadow = "none",
      icon,
      activeIcon,
      iconPosition = "right",
      headerClassName,
      className,
      contentClassName,
      children,
    },
    ref,
  ) => {
    const { activeKeys, toggleItem, variant, idPrefix } = useAccordionContext();
    const isActive = activeKeys.includes(itemIndex);
    const triggerId = `${idPrefix}-header-${itemIndex}`;
    const contentId = `${idPrefix}-content-${itemIndex}`;
    const activeDisplayIcon = isActive && activeIcon ? activeIcon : icon;
    const panel = (
      <AccordionPanel
        id={contentId}
        labelledBy={triggerId}
        isActive={isActive}
        variant={variant}
        padding={padding}
        shadow={shadow}
        bordered={bordered}
        header={header}
        footer={footer}
        className={contentClassName}
      >
        {children}
      </AccordionPanel>
    );
    const trigger = (
      <AccordionTrigger
        id={triggerId}
        controls={contentId}
        isActive={isActive}
        itemIndex={itemIndex}
        disabled={disabled}
        variant={variant}
        label={label}
        icon={activeDisplayIcon}
        iconPosition={iconPosition}
        headerPosition={headerPosition}
        className={headerClassName}
        onToggle={toggleItem}
      />
    );

    return (
      <div
        ref={ref}
        className={cn(
          "overflow-hidden rounded-sm border-border transition-colors",
          bordered && "border",
          ACCORDION_VARIANT_CLASSES[variant],
          className,
        )}
        data-disabled={disabled}
        data-state={isActive ? "open" : "closed"}
      >
        {headerPosition === "bottom" ? (
          <>
            {panel}
            {trigger}
          </>
        ) : (
          <>
            {trigger}
            {panel}
          </>
        )}
      </div>
    );
  },
);

AccordionItem.displayName = "AccordionItem";
