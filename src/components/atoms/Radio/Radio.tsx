import { Label } from "@atoms";
import { cn } from "@utils";
import type { RadioProps } from "@type/components/atoms";

import {
  RADIO_DOT_VARIANTS_CLASSNAMES,
  RADIO_HOVER_VARIANTS_CLASSNAMES,
  RADIO_INPUTBOX_CLASSNAMES,
  RADIO_TEXT_VARIANTS_CLASSNAMES,
  RADIO_VARIANTS_CLASSNAMES,
} from "./Radio.constants";

export const Radio = ({
  id,
  name,
  value,
  checked,
  disabled,
  onChange,
  children,
  className,
  variant = "primary",
  textVariant = "foreground",
  defaultChecked,
}: RadioProps) => {
  const isControlled = checked !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    onChange?.(event);
  };

  return (
    <Label
      disabled={disabled}
      className={cn(
        "group flex items-center gap-3",
        "cursor-pointer",
        RADIO_TEXT_VARIANTS_CLASSNAMES[textVariant],
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
      {...(isControlled ? { htmlFor: id } : {})}
    >
      <span
        className={cn(
          "grid size-5 shrink-0 place-items-center rounded-full border-2",
          "border-foreground bg-none",
          "transition-colors",
          RADIO_VARIANTS_CLASSNAMES[variant],
          !disabled && RADIO_HOVER_VARIANTS_CLASSNAMES[variant],
        )}
      >
        <span
          className={cn(
            "size-2.5 scale-0 rounded-full opacity-0",
            "transition-all duration-150",
            "group-has-checked:scale-100 group-has-checked:opacity-100",
            RADIO_DOT_VARIANTS_CLASSNAMES[variant],
          )}
        />
      </span>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={RADIO_INPUTBOX_CLASSNAMES}
        {...(isControlled ? { checked } : { defaultChecked })}
      />
      {children}
    </Label>
  );
};
