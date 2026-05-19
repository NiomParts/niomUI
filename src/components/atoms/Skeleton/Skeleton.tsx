import { SkeletonProps } from "./Skeleton.type";
import { ANIMATION } from "@/constant/style";
import { cn } from "@/utils";
import { p } from "motion/react-client";

export const Skeleton = ({
  className,
  style,
  ref,
  width = "10em",
  height = "10em",
  borderRadius = "none",
  animation = "pulse",
  count = 1,
  gap = 2,
  horizontal = false,
  ...props
}: SkeletonProps) => {
  return (
    <section
      data-testid={`${props.id}-container`}
      className={cn(horizontal ? `flex` : `flex flex-col`)}
      style={{ gap: `${gap}` }}
    >
      {Array.from({ length: count }, (_, index) => (
        <div
          id={`${props.id}-${index}`}
          data-testid={`skeleton-${index}`}
          key={index}
          ref={ref}
          className={cn(`bg-primary/50`, ANIMATION[animation], className)}
          style={{ width, height, borderRadius, ...style }}
        />
      ))}
    </section>
  );
};
