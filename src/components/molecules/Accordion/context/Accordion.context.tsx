import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import type { AccordionContextType } from "@type/components/molecules";

const AccordionContext = createContext<AccordionContextType | null>(null);

export function AccordionProvider({
  children,
  value,
}: {
  children: ReactNode;
  value: AccordionContextType;
}) {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
}

export function useAccordionContext() {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error("AccordionItem must be used within an Accordion");
  }

  return context;
}
