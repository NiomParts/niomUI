export const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const getDecimalPlaces = (value: number) => {
  const [, decimals = ""] = value.toString().split(".");
  return decimals.length;
};

export type FormatPriceOptions = {
  currency?: string;
  locale?: string;
};

export const formatPrice = (
  price: number,
  { currency = "USD", locale }: FormatPriceOptions = {},
) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
};
