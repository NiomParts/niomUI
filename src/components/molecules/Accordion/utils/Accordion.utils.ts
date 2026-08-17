import React from "react";
import type { AccordionItemProps } from "@type/components/molecules";

export function getInitialActiveKeys(defaultActiveKey?: number | number[]) {
  if (defaultActiveKey === undefined || defaultActiveKey === -1) {
    return [];
  }

  return Array.isArray(defaultActiveKey) ? defaultActiveKey : [defaultActiveKey];
}

export function indexAccordionItems(children: React.ReactNode) {
  let itemIndex = 0;

  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (
      typeof child.type !== "string" &&
      "displayName" in child.type &&
      child.type.displayName === "AccordionItem"
    ) {
      const nextChild = React.cloneElement(
        child as React.ReactElement<AccordionItemProps>,
        {
          itemIndex,
        },
      );

      itemIndex += 1;
      return nextChild;
    }

    return child;
  });
}
