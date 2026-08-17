import type { ChangeEvent } from "react";
import { useId, useState } from "react";

import { Input, Label } from "@components/atoms";
import type { InputFieldProps } from "@type/components/molecules";
import { cn } from "@utils";

import {
  INPUT_ERROR_MESSAGE_CLASS,
  INPUT_FIELD_CONTROL_CLASS,
  INPUT_FIELD_ROOT_CLASS,
  INPUT_FIELD_STATIC_LABEL_CLASS,
  INPUT_LABEL_ACTIVE_CLASS,
  INPUT_LABEL_BASE_CLASS,
  INPUT_LABEL_DEFAULT_CLASS,
  INPUT_LABEL_DISABLED_CLASS,
  INPUT_LABEL_ERROR_CLASS,
  INPUT_LABEL_FOCUSED_CLASS,
  INPUT_LABEL_INACTIVE_CLASS,
} from "./InputField.constants";

const hasInputValue = (value: InputFieldProps["value"]) => {
  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return value !== undefined && value !== null && String(value).length > 0;
};

export const InputField = ({
  id,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  className,
  forwardedRef,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onKeyUp,
  floatingLabel,
  error = false,
  errorMessage,
  type = "text",
  label,
  required,
  name,
  "aria-describedby": ariaDescribedBy,
  ...inputProps
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [uncontrolledValue, setUncontrolledValue] = useState<
    InputFieldProps["value"]
  >(defaultValue ?? "");
  const generatedInputId = useId();
  const inputId = id ?? generatedInputId;
  const isControlled = value !== undefined;
  const isActive =
    isFocused || hasInputValue(isControlled ? value : uncontrolledValue);
  const errorMessageId = error && errorMessage ? `${inputId}-error` : undefined;
  const describedBy = [ariaDescribedBy, errorMessageId]
    .filter(Boolean)
    .join(" ");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setUncontrolledValue(event.target.value);
    }

    onChange?.(event);
  };

  return (
    <div className={INPUT_FIELD_ROOT_CLASS}>
      <div className={INPUT_FIELD_CONTROL_CLASS}>
        {label && !floatingLabel ? (
          <Label
            htmlFor={inputId}
            className={cn(
              INPUT_FIELD_STATIC_LABEL_CLASS,
              error ? INPUT_LABEL_ERROR_CLASS : INPUT_LABEL_INACTIVE_CLASS,
              disabled && INPUT_LABEL_DISABLED_CLASS,
            )}
            disabled={disabled}
            required={required}
          >
            {label}
          </Label>
        ) : null}
        {floatingLabel ? (
          <Label
            htmlFor={inputId}
            className={cn(
              INPUT_LABEL_BASE_CLASS,
              isActive ? INPUT_LABEL_FOCUSED_CLASS : INPUT_LABEL_DEFAULT_CLASS,
              error
                ? INPUT_LABEL_ERROR_CLASS
                : isActive
                  ? INPUT_LABEL_ACTIVE_CLASS
                  : INPUT_LABEL_INACTIVE_CLASS,
              disabled && INPUT_LABEL_DISABLED_CLASS,
            )}
            disabled={disabled}
            required={required}
          >
            {floatingLabel}
          </Label>
        ) : null}
        <Input
          {...inputProps}
          id={inputId}
          forwardedRef={forwardedRef}
          type={type}
          value={value}
          name={name}
          defaultValue={isControlled ? undefined : defaultValue}
          placeholder={floatingLabel && !isActive ? undefined : placeholder}
          disabled={disabled}
          required={required}
          error={error}
          aria-describedby={describedBy || undefined}
          onChange={handleChange}
          onFocus={(event) => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          onBlur={(event) => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          className={className}
        />
      </div>
      {error && errorMessage ? (
        <p id={`${inputId}-error`} className={INPUT_ERROR_MESSAGE_CLASS}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};
