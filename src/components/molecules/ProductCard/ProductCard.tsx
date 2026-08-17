import type { KeyboardEvent, MouseEvent } from "react";

import type { ProductCardProps } from "@type/components/molecules";
import { Badge, Button, Card, Cart, Heart, Image, Rating } from "@atoms";
import { Stock } from "@media";
import { cn } from "@utils";

import {
  formatProductCardPrice,
  getProductCardCountdownParts,
  getProductCardDiscountLabel,
  PRODUCT_CARD_ACTION_BUTTON_CLASS_NAME,
  PRODUCT_CARD_ACTION_ICON_CLASS_NAME,
  PRODUCT_CARD_ACTIONS_CLASS_NAME,
  PRODUCT_CARD_BADGE_CLASS_NAME,
  PRODUCT_CARD_CLASS_NAME,
  PRODUCT_CARD_CONTENT_CLASS_NAME,
  PRODUCT_CARD_COUNTDOWN_CLASS_NAME,
  PRODUCT_CARD_COUNTDOWN_ITEM_CLASS_NAME,
  PRODUCT_CARD_DEFAULT_FAVORITE,
  PRODUCT_CARD_DEFAULT_IN_STOCK,
  PRODUCT_CARD_DEFAULT_RATING,
  PRODUCT_CARD_DEFAULT_REVIEW_COUNT,
  PRODUCT_CARD_IMAGE_CLASS_NAME,
  PRODUCT_CARD_ORIGINAL_PRICE_CLASS_NAME,
  PRODUCT_CARD_PRICE_CLASS_NAME,
  PRODUCT_CARD_PRICE_GROUP_CLASS_NAME,
  PRODUCT_CARD_RATING_ICON_CLASS_NAME,
  PRODUCT_CARD_TITLE_CLASS_NAME,
} from "./ProductCard.constants";

export function ProductCard({
  name,
  image,
  price,
  originalPrice,
  discount,
  rating = PRODUCT_CARD_DEFAULT_RATING,
  reviewCount = PRODUCT_CARD_DEFAULT_REVIEW_COUNT,
  inStock = PRODUCT_CARD_DEFAULT_IN_STOCK,
  countdown,
  badge,
  favorite = PRODUCT_CARD_DEFAULT_FAVORITE,
  className,
  onClick,
  onFavorite,
  onAddToCart,
}: ProductCardProps) {
  const discountLabel = getProductCardDiscountLabel(discount);
  const countdownParts = getProductCardCountdownParts(countdown);

  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (!onClick || (event.key !== "Enter" && event.key !== " ")) {
      return;
    }

    event.preventDefault();
    onClick();
  };

  const handleActionClick =
    (action?: () => void) => (event: MouseEvent<HTMLElement>) => {
      event.stopPropagation();
      action?.();
    };

  return (
    <Card
      aria-label={`View ${name}`}
      as="article"
      className={cn(
        PRODUCT_CARD_CLASS_NAME,
        !inStock && "opacity-70",
        className,
      )}
      onClick={onClick}
      onKeyDown={handleCardKeyDown}
      padding="none"
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <Image
          alt={name}
          aspectRatio="1 / 1"
          className={PRODUCT_CARD_IMAGE_CLASS_NAME}
          src={image || Stock}
          fallbackSrc={Stock}
        />

        <div className="absolute left-3 top-3 flex flex-col items-start gap-2">
          {badge && (
            <Badge
              className={PRODUCT_CARD_BADGE_CLASS_NAME}
              variant="secondary"
            >
              {badge}
            </Badge>
          )}
          {discountLabel && (
            <Badge
              className={cn(PRODUCT_CARD_BADGE_CLASS_NAME, "bg-danger")}
              variant="danger"
            >
              {discountLabel}
            </Badge>
          )}
        </div>

        <div className={PRODUCT_CARD_ACTIONS_CLASS_NAME}>
          <Button
            aria-label={
              favorite
                ? `Remove ${name} from favorites`
                : `Add ${name} to favorites`
            }
            className={PRODUCT_CARD_ACTION_BUTTON_CLASS_NAME}
            onClick={handleActionClick(onFavorite)}
            variant="ghost"
          >
            <Heart
              aria-hidden="true"
              className={cn(PRODUCT_CARD_ACTION_ICON_CLASS_NAME, favorite && "text-danger")}
              fill={favorite ? "currentColor" : "none"}
            />
          </Button>

          <Button
            aria-label={`Add ${name} to cart`}
            className={PRODUCT_CARD_ACTION_BUTTON_CLASS_NAME}
            disabled={!inStock}
            onClick={handleActionClick(onAddToCart)}
            variant="ghost"
          >
            <Cart aria-hidden="true" className={PRODUCT_CARD_ACTION_ICON_CLASS_NAME} />
          </Button>
        </div>

        {countdownParts && (
          <div className={PRODUCT_CARD_COUNTDOWN_CLASS_NAME}>
            {countdownParts.map((part, index) => (
              <span
                className={PRODUCT_CARD_COUNTDOWN_ITEM_CLASS_NAME}
                key={`${part}-${index}`}
              >
                {part}
              </span>
            ))}
          </div>
        )}
      </div>

      <section className={PRODUCT_CARD_CONTENT_CLASS_NAME}>
        <h3 className={PRODUCT_CARD_TITLE_CLASS_NAME}>
          {name}
        </h3>

        <Rating
          value={rating}
          reviewCount={reviewCount}
          IconClassName={PRODUCT_CARD_RATING_ICON_CLASS_NAME}
        />

        <div className={PRODUCT_CARD_PRICE_GROUP_CLASS_NAME}>
          {originalPrice && originalPrice > price && (
            <span className={PRODUCT_CARD_ORIGINAL_PRICE_CLASS_NAME}>
              {formatProductCardPrice(originalPrice)}
            </span>
          )}
          <span className={PRODUCT_CARD_PRICE_CLASS_NAME}>
            {formatProductCardPrice(price)}
          </span>
        </div>
      </section>
    </Card>
  );
}
