export const PRODUCT_CARD_DEFAULT_RATING = 4.5;
export const PRODUCT_CARD_DEFAULT_REVIEW_COUNT = 0;
export const PRODUCT_CARD_DEFAULT_IN_STOCK = true;
export const PRODUCT_CARD_DEFAULT_FAVORITE = false;

export const PRODUCT_CARD_CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const PRODUCT_CARD_SECONDS_PER_DAY = 86_400;
export const PRODUCT_CARD_SECONDS_PER_HOUR = 3_600;
export const PRODUCT_CARD_SECONDS_PER_MINUTE = 60;

export const PRODUCT_CARD_CLASS_NAME =
  "niom-focus-ring group grid w-full max-w-80 cursor-pointer gap-2 overflow-hidden rounded-lg bg-surface p-2 text-left transition hover:border-primary/60 hover:bg-surface-hover sm:gap-4 sm:p-3";

export const PRODUCT_CARD_IMAGE_CLASS_NAME =
  "h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-105";

export const PRODUCT_CARD_BADGE_CLASS_NAME =
  "h-5 w-fit rounded-sm px-2 text-xs sm:h-6 sm:px-3 sm:text-sm";

export const PRODUCT_CARD_ACTIONS_CLASS_NAME =
  "absolute right-1 top-1 flex flex-col gap-1.5 opacity-100 transition sm:right-3 sm:top-3 sm:gap-2 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100";

export const PRODUCT_CARD_ACTION_BUTTON_CLASS_NAME =
  "h-8 w-8 rounded-full bg-background/95 p-0 shadow-md hover:bg-surface-hover sm:h-10 sm:w-10";

export const PRODUCT_CARD_ACTION_ICON_CLASS_NAME = "h-4 w-4 sm:h-5 sm:w-5";

export const PRODUCT_CARD_COUNTDOWN_ITEM_CLASS_NAME =
  "grid h-6 min-w-7 place-items-center bg-background px-1.5 text-xs font-black text-foreground shadow-sm sm:h-8 sm:min-w-9 sm:px-2 sm:text-sm";

export const PRODUCT_CARD_COUNTDOWN_CLASS_NAME =
  "absolute inset-x-2 bottom-3 flex justify-center gap-1 sm:inset-x-3 sm:bottom-4 sm:gap-1.5";

export const PRODUCT_CARD_CONTENT_CLASS_NAME = "grid gap-0 sm:gap-2";

export const PRODUCT_CARD_TITLE_CLASS_NAME =
  "line-clamp-2 text-sm font-bold leading-tight text-foreground sm:text-lg";

export const PRODUCT_CARD_RATING_ICON_CLASS_NAME = "size-4.5 sm:size-5.5";

export const PRODUCT_CARD_PRICE_GROUP_CLASS_NAME =
  "flex flex-wrap items-baseline gap-1";

export const PRODUCT_CARD_ORIGINAL_PRICE_CLASS_NAME =
  "text-xs font-semibold text-muted-foreground line-through sm:text-sm";

export const PRODUCT_CARD_PRICE_CLASS_NAME =
  "text-base font-black text-accent sm:text-xl";

export function formatProductCardPrice(price: number) {
  return PRODUCT_CARD_CURRENCY_FORMATTER.format(price);
}

export function getProductCardDiscountLabel(discount?: number) {
  if (!discount) {
    return null;
  }

  return `-${Math.abs(discount)}%`;
}

export function getProductCardCountdownParts(countdown?: Date) {
  if (!countdown) {
    return null;
  }

  const remaining = Math.max(0, countdown.getTime() - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);
  const days = Math.floor(totalSeconds / PRODUCT_CARD_SECONDS_PER_DAY);
  const hours = Math.floor(
    (totalSeconds % PRODUCT_CARD_SECONDS_PER_DAY) /
      PRODUCT_CARD_SECONDS_PER_HOUR,
  );
  const minutes = Math.floor(
    (totalSeconds % PRODUCT_CARD_SECONDS_PER_HOUR) /
      PRODUCT_CARD_SECONDS_PER_MINUTE,
  );
  const seconds = totalSeconds % PRODUCT_CARD_SECONDS_PER_MINUTE;

  return [days, hours, minutes, seconds].map((value) =>
    value.toString().padStart(2, "0"),
  );
}
