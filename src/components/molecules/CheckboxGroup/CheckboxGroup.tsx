import { CheckboxGroupProps } from "@type";
import { Checkbox } from "@atoms";
import { cn } from "@utils";
import { useState, useEffect, Fragment } from "react";

export const CheckBoxGroup = ({
  items,
  value = [],
  onChange,
  label,
  orientation = "vertical",
  disabled = false,
  className = "",
  variant,
  textVariant,
}: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(value || []);

  useEffect(() => {
    setSelectedValues(value || []);
  }, [value]);

  const handleChange = (newValue: string) => {
    let updatedValues: string[];
    if (selectedValues.includes(newValue)) {
      updatedValues = selectedValues.filter((val) => val !== newValue);
    } else {
      updatedValues = [...selectedValues, newValue];
    }
    setSelectedValues(updatedValues);
    onChange && onChange(updatedValues);
  };

  return (
    <fieldset
      className={cn(
        "flex",
        orientation === "horizontal"
          ? "flex-row flex-wrap gap-4"
          : "flex-col gap-2",
        className,
      )}
      disabled={disabled}
    >
      {label && <legend className="mb-2 font-semibold">{label}</legend>}

      {items.map((item, index) => (
        <Fragment key={item.value + "-" + index}>
          <Checkbox
            value={item.value}
            variant={variant}
            textVariant={textVariant}
            disabled={item.disabled || disabled}
            onChange={() => handleChange(item.value)}
            checked={selectedValues.includes(item.value)}
          >
            {item.label}
            {item.totalCount !== undefined && ` (${item.totalCount})`}
          </Checkbox>
        </Fragment>
      ))}
    </fieldset>
  );
};
