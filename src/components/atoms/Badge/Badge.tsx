import { BadgeProps } from "./Badge.type";
import { VARIANTS, SIZE } from "@/constant/style";
import { cn } from "@/utils";

export const Badge = ({
  content,
  variant = "primary",
  size = "medium",
  visible = true,
  horizontal = false,
  gap = 2,
  ...props
}: BadgeProps) => {
  return visible ? (
    <section
      className={cn(horizontal ? "flex" : "flex flex-col")}
      style={{ gap: `${gap}` }}
      data-testid={`${props.id}-container`}
    >
      {content.map((item, index) => (
        <span
          id={props.id}
          key={index}
          ref={props.ref}
          data-testid={props.id}
          className={cn(
            "inline-flex items-center justify-center rounded-full font-semibold w-fit h-fit",
            VARIANTS[variant || "primary"],
            SIZE[size || "medium"],
            props.className,
          )}
          style={props.style}
          onClick={props.onClick}
        >
          {item}
        </span>
      ))}
    </section>
  ) : null;
};
