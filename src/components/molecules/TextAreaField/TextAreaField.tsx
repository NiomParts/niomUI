import type { TextAreaFieldProps } from "@type/components/molecules";
import { cn } from "@utils";
import { useState } from "react";
import { Label, TextArea, Cross } from "@components/atoms";
import {
  TEXTAREAFIELD_ROOT_CLASS,
  TEXTAREAFIELD_STATIC_LABEL_CLASS,
  TEXTAREAFIELD_LABEL_ERROR_CLASS,
  TEXTAREAFIELD_LABEL_DISABLED_CLASS,
  TEXTAREAFIELD_ERROR_MESSAGE_CLASS,
  TEXTAREAFIELD_CLEAR_BUTTON_CLASS,
} from "./TextAreaField.constants";

export const TextAreaField = (props: TextAreaFieldProps) => {
  const {
    label,
    showCount = false,
    clearButton = false,
    error = false,
    errorMessage,
    ...textareaProps
  } = props;

  const [value, setValue] = useState(textareaProps.value || "");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    textareaProps.onChange?.(e);
  };

  const handleClear = () => {
    setValue("");
    textareaProps.onChange?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLTextAreaElement>);
  };

  return (
    <div className={cn(TEXTAREAFIELD_ROOT_CLASS, props.className)}>
      {label && (
        <Label
          htmlFor={textareaProps.id}
          className={cn(
            TEXTAREAFIELD_STATIC_LABEL_CLASS,
            error ? TEXTAREAFIELD_LABEL_ERROR_CLASS : "",
            textareaProps.disabled && TEXTAREAFIELD_LABEL_DISABLED_CLASS,
          )}
          disabled={textareaProps.disabled}
          required={textareaProps.required}
        >
          {label}
        </Label>
      )}
      <TextArea {...textareaProps} value={value} onChange={handleChange} />
      {clearButton && value && (
        <button
          type="button"
          onClick={handleClear}
          className={TEXTAREAFIELD_CLEAR_BUTTON_CLASS}
        >
          <Cross className="h-4 w-4" />
        </button>
      )}
      {showCount && (
        <span className="text-xs text-muted-foreground">
          {value.length} / {textareaProps.maxLength || "∞"}
        </span>
      )}
      {error && errorMessage && (
        <span className={cn(TEXTAREAFIELD_ERROR_MESSAGE_CLASS)}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextAreaField;
