import { useEffect, useId, useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { SelectProps, SelectValue } from "@type";
import { DropDown } from "@components/atoms/Icon";
import { cn } from "@utils";
import { SelectContainer, SelectVariants } from "./Select.constants";

export const Select = ({
  id,
  name,
  options,
  value,
  defaultValue,
  placeholder = "Select",
  onChange,
  onBlur,
  disabled,
  required,
  className,
  dropdownClassName,
  optionClassName,
  variant = "primary",
  "aria-label": ariaLabel,
  ...props
}: SelectProps) => {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const listboxId = `${selectId}-listbox`;
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState<SelectValue | undefined>(
    defaultValue,
  );
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dropdownWidth, setDropdownWidth] = useState<number>();
  const selectedValue = isControlled ? value : internalValue;

  const enabledOptions = useMemo(
    () => options.filter((option) => !option.disabled),
    [options],
  );
  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  );
  const activeOption = options[activeIndex];

  useEffect(() => {
    if (!isOpen) return;

    const selectedIndex = options.findIndex(
      (option) => option.value === selectedValue && !option.disabled,
    );
    const firstEnabledIndex = options.findIndex((option) => !option.disabled);

    setActiveIndex(
      selectedIndex >= 0 ? selectedIndex : Math.max(firstEnabledIndex, 0),
    );
  }, [isOpen, options, selectedValue]);

  useEffect(() => {
    const trigger = buttonRef.current;
    if (!trigger) return;

    const updateDropdownWidth = () => {
      setDropdownWidth(trigger.offsetWidth);
    };

    updateDropdownWidth();

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(updateDropdownWidth);
    observer.observe(trigger);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  const selectOption = (nextValue: SelectValue) => {
    if (!isControlled) {
      setInternalValue(nextValue);
    }

    onChange?.(nextValue);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const moveActiveOption = (direction: 1 | -1) => {
    if (enabledOptions.length === 0) return;

    setActiveIndex((currentIndex) => {
      const currentEnabledIndex = enabledOptions.findIndex(
        (option) => option.value === options[currentIndex]?.value,
      );
      const safeIndex = currentEnabledIndex >= 0 ? currentEnabledIndex : 0;
      const nextEnabledIndex =
        (safeIndex + direction + enabledOptions.length) % enabledOptions.length;
      const nextOption = enabledOptions[nextEnabledIndex];

      return options.findIndex((option) => option.value === nextOption.value);
    });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          return;
        }
        moveActiveOption(1);
        break;
      case "ArrowUp":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          return;
        }
        moveActiveOption(-1);
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          return;
        }
        if (activeOption && !activeOption.disabled) {
          selectOption(activeOption.value);
        }
        break;
      case "Escape":
        if (isOpen) {
          event.preventDefault();
          setIsOpen(false);
        }
        break;
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {name && (
        <input
          type="hidden"
          name={name}
          value={selectedValue === undefined ? "" : String(selectedValue)}
        />
      )}
      <button
        {...props}
        ref={buttonRef}
        id={selectId}
        type="button"
        role="combobox"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-required={required || undefined}
        aria-activedescendant={
          isOpen && activeOption
            ? `${selectId}-option-${activeIndex}`
            : undefined
        }
        aria-label={ariaLabel}
        onBlur={onBlur}
        onClick={() => setIsOpen((current) => !current)}
        onKeyDown={handleKeyDown}
        className={cn(
          SelectContainer,
          SelectVariants[variant],
          "flex items-center justify-between gap-2 text-left",
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <span
          className={cn(
            "min-w-0 truncate ml-1",
            !selectedOption && "opacity-70",
          )}
        >
          {selectedOption?.label ?? placeholder}
        </span>
        <DropDown
          aria-hidden="true"
          className={cn(
            "h-4 w-4 shrink-0 transition-transform",
            isOpen && "rotate-180",
          )}
        />
      </button>

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={ariaLabel ? undefined : selectId}
          className={cn(
            "absolute left-0 top-full z-50 mt-1 max-h-64 overflow-auto rounded-md border border-border bg-background py-1 text-foreground shadow-lg outline-none",
            dropdownClassName,
          )}
          style={{ width: dropdownWidth }}
        >
          {options.map((option, index) => {
            const isSelected = option.value === selectedValue;
            const isActive = index === activeIndex;

            return (
              <button
                key={option.value}
                id={`${selectId}-option-${index}`}
                type="button"
                role="option"
                aria-selected={isSelected}
                disabled={option.disabled}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => selectOption(option.value)}
                className={cn(
                  "flex w-full items-center px-3 py-2 text-left text-sm outline-none transition",
                  isActive && "bg-surface-hover",
                  isSelected && "font-semibold",
                  option.disabled && "cursor-not-allowed opacity-50",
                  !option.disabled && "cursor-pointer",
                  optionClassName,
                )}
              >
                <span className="min-w-0 truncate">{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
