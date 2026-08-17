import {
  forwardRef,
  type ElementType,
  type ForwardedRef,
} from "react";

import { cn } from "@utils";
import type { CardComponent, CardProps } from "@type/components/atoms";

import { CARD_PADDING_CLASSES, CARD_VARIANT_CLASSES } from "./Card.constants";

const CardImpl = <C extends ElementType = "article">(
  {
    as,
    children,
    className = "",
    padding = "md",
    variant = "default",
    ...props
  }: CardProps<C>,
  forwardedRef: ForwardedRef<HTMLElement>,
) => {
  const Component = (as || "article") as ElementType;

  return (
    <Component
      ref={forwardedRef}
      className={cn(
        "rounded-lg border shadow-sm",
        CARD_VARIANT_CLASSES[variant],
        CARD_PADDING_CLASSES[padding],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Card = forwardRef(CardImpl) as CardComponent & {
  displayName?: string;
};

Card.displayName = "Card";
