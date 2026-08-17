import { cn, clamp } from "@utils";
import { Star, HalfStarFilled, StarFilled } from "@atoms";
import type { RatingProps } from "@type";

export const Rating = ({
  value,
  max = 5,
  precision = 0.5,
  showValue = false,
  className,
  reviewCount,
  size = 20,
  color = "var(--color-highlight)",
  IconClassName
}: RatingProps) => {
  const safeValue = clamp(value, 0, max);

  const fullStars = Math.floor(safeValue);
  const hasHalfStar = safeValue - fullStars >= precision;

  const stars = Array.from({ length: max }, (_, index) => {
    switch (true) {
      case index < fullStars:
        return <StarFilled key={index} size={size} color={color} className={IconClassName}/>;
      case index === fullStars && hasHalfStar:
        return <HalfStarFilled key={index} size={size} color={color} className={IconClassName} />;
      default:
        return <Star key={index} size={size} color={color} className={IconClassName} />;
    }
  });

  return (
    <div className={cn("flex items-center space-x-0", className)}>
      {stars}
      {showValue && (
        <span className="ml-1 text-sm font-medium text-highlight">
          {safeValue.toFixed(1)}
        </span>
      )}
      {reviewCount !== undefined && (
        <span className="ml-1 text-sm">({reviewCount})</span>
      )}
    </div>
  );
};
