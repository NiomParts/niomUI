import {
  forwardRef,
  type ElementType,
  type ForwardedRef,
  type MouseEvent,
} from "react";
import { cn } from "@utils";
import type { ButtonComponent, ButtonProps } from "@type/components/atoms";

import {
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
} from "./Button.constants";

const ButtonImpl = <C extends ElementType = "button">(
  {
    children,
    as,
    className = "",
    variant = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    disabled = false,
    loading = false,
    loadingText = "Loading...",
    onClick,
    ...props
  }: ButtonProps<C>,
  forwardedRef: ForwardedRef<HTMLElement>,
) => {
  const Component = (as || "button") as ElementType;
  const isButton = Component === "button";
  const isDisabled = disabled || loading;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    if (isDisabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    onClick?.(event as never);
  };

  return (
    <Component
      ref={forwardedRef}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition outline-none focus-visible:outline focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
        BUTTON_VARIANT_CLASSES[variant],
        BUTTON_SIZE_CLASSES[size],
        className,
      )}
      {...(isButton ? { type: "button" } : {})}
      aria-busy={loading || undefined}
      aria-disabled={isDisabled || undefined}
      disabled={isButton ? isDisabled : undefined}
      onClick={handleClick}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : leftIcon ? (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {leftIcon}
        </span>
      ) : null}
      <span>{loading ? loadingText : children}</span>
      {!loading && rightIcon ? (
        <span aria-hidden="true" className="inline-flex shrink-0">
          {rightIcon}
        </span>
      ) : null}
    </Component>
  );
};

export const Button = forwardRef(ButtonImpl) as ButtonComponent & {
  displayName?: string;
};

Button.displayName = "Button";
