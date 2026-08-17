export type PriceRange = [number, number];

export interface PriceFilterProps {
  /**
   * Currently selected minimum and maximum prices.
   */
  value: PriceRange;

  /**
   * Lowest available price.
   *
   * @default 0
   */
  min?: number;

  /**
   * Highest available price.
   *
   * @default 100
   */
  max?: number;

  /**
   * Increment used when changing the selected price range.
   *
   * @default 1
   */
  step?: number;

  /**
   * Callback fired when the selected price range changes.
   */
  onChange: (value: PriceRange) => void;

  /**
   * Label displayed above the selected range.
   *
   * @default "Price"
   */
  label?: React.ReactNode;

  /**
   * Currency code used when formatting prices.
   *
   * @default "USD"
   */
  currency?: string;

  /**
   * Locale used when formatting prices.
   */
  locale?: string;

  /**
   * Prevents user interaction and applies disabled styling.
   */
  disabled?: boolean;

  /**
   * Additional CSS classes used to extend or override styling.
   */
  className?: string;
}
