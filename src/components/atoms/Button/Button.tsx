import { forwardRef } from "react";
import type { ButtonProps } from "./Button.type";
import { cn, VARIANTS } from "@/utils";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, as, className, ...props }, forwardedRef) => {
    /**
     * The `as` prop allows the Button component to render as a different HTML element or React component.
     * If `as` is not provided, it defaults to rendering a `<button>` element.
     */
    const Component = (as || "button") as React.ElementType;

    return (
      <Component
        ref={forwardedRef}
        className={cn(
          VARIANTS[props.varaint || "primary"],
          "w-20 p-2 rounded-md",
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Button.displayName = "Button";
