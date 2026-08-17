import React, {
  useCallback,
  useId,
  useMemo,
  useState,
} from "react";
import type {
  AccordionContextType,
  AccordionProps,
} from "@type/components/molecules";
import { cn } from "@utils";

import { AccordionProvider } from "../context/Accordion.context";
import {
  getInitialActiveKeys,
  indexAccordionItems,
} from "../utils/Accordion.utils";

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      id,
      className,
      children,
      defaultActiveKey,
      multiple = false,
      variant = "primary",
      onChange,
    },
    ref,
  ) => {
    const generatedId = useId();
    const idPrefix = id ?? `accordion-${generatedId}`;
    const [activeKeys, setActiveKeys] = useState<number[]>(() =>
      getInitialActiveKeys(defaultActiveKey),
    );

    const toggleItem = useCallback(
      (index: number) => {
        setActiveKeys((currentKeys) => {
          const nextKeys = currentKeys.includes(index)
            ? currentKeys.filter((key) => key !== index)
            : multiple
              ? [...currentKeys, index]
              : [index];

          onChange?.(nextKeys);
          return nextKeys;
        });
      },
      [multiple, onChange],
    );

    const value = useMemo<AccordionContextType>(
      () => ({ activeKeys, toggleItem, multiple, variant, idPrefix }),
      [activeKeys, toggleItem, multiple, variant, idPrefix],
    );

    return (
      <AccordionProvider value={value}>
        <div ref={ref} id={id} className={cn("w-full", className)}>
          {indexAccordionItems(children)}
        </div>
      </AccordionProvider>
    );
  },
);

Accordion.displayName = "Accordion";
