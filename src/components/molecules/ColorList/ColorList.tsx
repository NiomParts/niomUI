import { ColorListProps } from "@type/components/molecules/ColorList.type";
import { cn } from "@utils";
import { useState } from "react";
import { Check, Badge } from "@components/atoms";

export const ColorList = ({
  title,
  colors,
  onColorSelect,
  canCheck = false,
  orientation,
  className,
  badgeClassName,
}: ColorListProps) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onColorSelect(color);
  };
  return (
    <div
      className={cn(
        "flex flex-wrap gap-1",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className,
      )}
    >
      {title && <legend className="mb-2 font-semibold">{title}</legend>}
      {colors.map((color) => (
        <Badge
          key={color}
          as="button"
          role="button"
          className={cn(
            "h-6 w-6 cursor-pointer rounded-full border border-border",
            canCheck && "flex items-center justify-center",
            badgeClassName,
          )}
          style={{ backgroundColor: color }}
          onClick={() => handleColorSelect(color)}
          aria-label={color}
          aria-pressed={canCheck ? selectedColor === color : undefined}
        >
          {canCheck && selectedColor === color && (
            <Check
              className="h-3 w-3 
              text-foreground"
            />
          )}
        </Badge>
      ))}
    </div>
  );
};
