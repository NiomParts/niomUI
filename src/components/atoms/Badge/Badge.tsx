import { BadgeProps } from "./Badge.type";
import { VARIANTS, SIZE } from "@/constant/style";
import { cn } from "@/utils";

export const Badge = ({
  content,
  variant = "primary",
  size = "medium",
  visible = true,
  ...props
}: BadgeProps) => {
  return visible ? (
    <span
      id={props.id}
      ref={props.ref}
      data-testid={props.id}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold",
        VARIANTS[variant || "primary"],
        SIZE[size || "medium"],
        props.className,
      )}
      style={props.style}
      onClick={props.onClick}
    >
      {content}
    </span>
  ) : null;
};
