import { cn } from "@utils";
import type { ChangeEvent, FC } from "react";
import { Check, Label } from "@atoms";
import type { CheckboxProps } from "@type/components/atoms";
import {
  CHECKBOX_CLASSNAMES,
  CHECKBOX_TEXT_VARIANT_CLASSNAMES,
  CHECKBOX_VARIANT_CLASSNAMES,
} from "./Checkbox.constants";

export const Checkbox: FC<CheckboxProps> = ({
  children,
  checked,
  defaultChecked,
  disabled = false,
  className,
  variant = "primary",
  textVariant = "foreground",
  onChange,
  ...props
}) => {
  const isControlled = checked !== undefined;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChange?.(event.target.checked);
  };

  return (
    <Label
      className={cn(
        CHECKBOX_CLASSNAMES.root,
        CHECKBOX_VARIANT_CLASSNAMES[variant],
        CHECKBOX_TEXT_VARIANT_CLASSNAMES[textVariant],
        disabled && CHECKBOX_CLASSNAMES.disabled,
      )}
      disabled={disabled}
      {...(isControlled ? { htmlFor: props.id } : {})}
    >
      <input
        {...props}
        type="checkbox"
        className={CHECKBOX_CLASSNAMES.input}
        disabled={disabled}
        onChange={handleChange}
        {...(isControlled ? { checked } : { defaultChecked })}
      />
      <span
        className={cn(CHECKBOX_CLASSNAMES.box, className)}
        aria-hidden="true"
      >
        <Check className={CHECKBOX_CLASSNAMES.checkIcon} />
      </span>
      {children !== undefined && (
        <span className={CHECKBOX_CLASSNAMES.label}>{children}</span>
      )}
    </Label>
  );
};

export default Checkbox;
