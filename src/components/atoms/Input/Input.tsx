import type { ForwardedRef } from "react";
import { forwardRef, useState } from "react";
import { Eye, EyeOff, Search, Button } from "@atoms";
import type { InputProps } from "@type/components/atoms";
import { cn } from "@utils";

import {
  INPUT_AFFIX_CLASS,
  INPUT_BASE_CLASS,
  INPUT_DEFAULT_CLASS,
  INPUT_ERROR_CLASS,
  INPUT_LEFT_AFFIX_CLASS,
  INPUT_ACTION_CLASS,
  INPUT_RIGHT_AFFIX_CLASS,
  INPUT_STATE_CLASS,
  INPUT_WITH_LEFT_ICON_CLASS,
  INPUT_WITH_RIGHT_ACTION_CLASS,
} from "./Input.constants";

const assignRef = (
  forwardedRef: ForwardedRef<HTMLInputElement> | undefined,
  node: HTMLInputElement | null,
) => {
  if (!forwardedRef) return;

  if (typeof forwardedRef === "function") {
    forwardedRef(node);
    return;
  }

  forwardedRef.current = node;
};

const InputImpl = (
  {
    className = "",
    name,
    disabled = false,
    error = false,
    forwardedRef,
    type = "text",
    "aria-invalid": ariaInvalid,
    icon,
    iconPosition = "left",
    searchButtonLabel = "Search",
    onSearch,
    ...props
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const isSearch = type === "search";
  const isPassword = type === "password";

  const renderedType = isPassword && showPassword ? "text" : type;

  const hasLeftIcon = Boolean(icon) && iconPosition === "left";
  const hasRightIcon = Boolean(icon) && iconPosition === "right";
  const hasRightAction = isSearch || isPassword;

  const invalid = error ? true : ariaInvalid;

  const inputClassName = cn(
    INPUT_BASE_CLASS,
    INPUT_STATE_CLASS,
    error ? INPUT_ERROR_CLASS : INPUT_DEFAULT_CLASS,
    hasLeftIcon && INPUT_WITH_LEFT_ICON_CLASS,
    ((hasRightIcon && !hasRightAction) || hasRightAction) &&
      INPUT_WITH_RIGHT_ACTION_CLASS,
    className,
  );

  const input = (
    <input
      ref={(node) => {
        assignRef(ref, node);
        assignRef(forwardedRef, node);
      }}
      type={renderedType}
      name={name}
      disabled={disabled}
      aria-invalid={invalid}
      className={inputClassName}
      {...props}
    />
  );

  if (!hasRightAction && !hasLeftIcon && !hasRightIcon) {
    return <div className="w-full">{input}</div>;
  }

  return (
    <div className={cn("w-full relative")}>
      {hasLeftIcon ? (
        <span className={cn(INPUT_AFFIX_CLASS, INPUT_LEFT_AFFIX_CLASS)}>
          {icon}
        </span>
      ) : null}

      {input}

      {hasRightIcon && !hasRightAction ? (
        <span className={cn(INPUT_AFFIX_CLASS, INPUT_RIGHT_AFFIX_CLASS)}>
          {icon}
        </span>
      ) : null}

      {isSearch ? (
        <Button
          type="button"
          variant="ghost"
          aria-label={searchButtonLabel}
          className={INPUT_ACTION_CLASS}
          disabled={disabled}
          onClick={onSearch}
        >
          <Search size={16} />
        </Button>
      ) : null}

      {isPassword ? (
        <Button
          type="button"
          variant="ghost"
          aria-label={showPassword ? "Hide password" : "Show password"}
          className={INPUT_ACTION_CLASS}
          disabled={disabled}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </Button>
      ) : null}
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, InputProps>(InputImpl);

Input.displayName = "Input";
