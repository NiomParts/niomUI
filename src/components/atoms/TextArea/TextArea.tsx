import { TextareaProps } from "@type";
import {
  TEXTAREA_BASE_CLASS,
  TEXTAREA_STATE_CLASS,
  TEXTAREA_READONLY_CLASS,
  TEXTAREA_DEFAULT_CLASS,
  TEXTAREA_ERROR_CLASS,
} from "./TextArea.constants";
import { cn } from "@utils";

export const TextArea = ({
  id,
  name,
  placeholder,
  value,
  onChange,
  rows = 4,
  disabled = false,
  required = false,
  readOnly = false,
  maxLength,
  className,
  cols = 50,
  error,
  ...props
}: TextareaProps) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      maxLength={maxLength}
      aria-invalid={error ? "true" : undefined}
      className={cn(
        TEXTAREA_BASE_CLASS,
        TEXTAREA_STATE_CLASS,
        readOnly ? TEXTAREA_READONLY_CLASS : TEXTAREA_DEFAULT_CLASS,
        error ? TEXTAREA_ERROR_CLASS : "",
        className,
      )}
      cols={cols}
      {...props}
    />
  );
};
