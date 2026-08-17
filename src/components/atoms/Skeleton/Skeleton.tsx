import type { SkeletonProps } from "@type/components/atoms/Skeleton.type";
import { cn } from "@utils";
import { ROUNDED } from "./Skeleton.constants";

export function Skeleton({
  className,
  animated = true,
  rounded = "md",
  ...props
}: SkeletonProps) {
  return (
    <div
      {...props}
      aria-hidden="true"
      className={cn(
        "bg-muted",
        animated && "animate-pulse",
        ROUNDED[rounded],
        className,
      )}
    />
  );
}
