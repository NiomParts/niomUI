import { forwardRef } from "react";
import type { ElementType, ForwardedRef } from "react";
import type { ButtonProps } from "./Button.type";
import { cn } from "@/utils";
import { VARIANTS } from "@/constant";

type ButtonComponent = <C extends ElementType = "button">(
  props: ButtonProps<C> & { ref?: ForwardedRef<HTMLElement> },
) => React.ReactElement | null;

const ButtonImpl = <C extends ElementType = "button">(
  { children, as, className, variant, ...props }: ButtonProps<C>,
  forwardedRef: ForwardedRef<HTMLElement>,
) => {
  const Component = (as || "button") as ElementType;

  return (
    <Component
      ref={forwardedRef}
      className={cn(
        VARIANTS[variant || "primary"],
        "w-fit p-2 rounded-md",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Button = forwardRef(ButtonImpl) as ButtonComponent & {
  displayName?: string;
};
Button.displayName = "Button";
