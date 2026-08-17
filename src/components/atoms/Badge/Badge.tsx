import {
  forwardRef,
  type ElementType,
  type ForwardedRef,
} from "react";

import { cn } from "@utils";
import type { BadgeComponent, BadgeProps } from "@type/components/atoms";

import { BADGE_SIZE_CLASSES, BADGE_VARIANT_CLASSES } from "./Badge.constants";

const BadgeImpl = <C extends ElementType = "span">(
  {
    as,
    children,
    className = "",
    size = "sm",
    variant = "primary",
    ...props
  }: BadgeProps<C>,
  forwardedRef: ForwardedRef<HTMLElement>,
) => {
  const Component = (as || "span") as ElementType;

  return (
    <Component
      ref={forwardedRef}
      className={cn(
        "niom-focus-ring inline-grid appearance-none place-items-center rounded-full border-0 font-black leading-none",
        BADGE_VARIANT_CLASSES[variant],
        BADGE_SIZE_CLASSES[size],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Badge = forwardRef(BadgeImpl) as BadgeComponent & {
  displayName?: string;
};

Badge.displayName = "Badge";
