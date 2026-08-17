export interface RatingProps {
  /**
   * Current rating value to display.
   *
   * Example:
   * 4.5 displays four full stars and one half-filled star.
   */
  value: number;

  /**
   * Maximum possible rating.
   *
   * @default 5
   */
  max?: number;

  /**
   * Controls the size of the star icons.
   *
   * @default 20
   */
  size?: number;

  /**
   * Determines the supported rating precision.
   *
   * 1   - Only full stars.
   * 0.5 - Full and half-filled stars.
   *
   * @default 0.5
   */
  precision?: 1 | 0.5;

  /**
   * Displays the numeric rating next to the stars.
   *
   * Example:
   * 4.5
   */
  showValue?: boolean;

  /**
   * Optional number of reviews displayed next to the rating.
   *
   * Example:
   * (128)
   */
  reviewCount?: number;

  /**
   * Additional CSS classes used to extend or override styling.
   */
  className?: string;

  /**
   * Controls the color of the star icons.
   *
   * @default 'text-highlight'
   */
  color?: string;

  /**
   * Additional CSS classes used to extend or override styling of the star icons.
   */
  IconClassName?: string;
}
