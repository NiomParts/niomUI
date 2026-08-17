export interface ImageProps {
  /**
   * Image source URL or path.
   *
   * Can be a local asset or remote image URL.
   */
  src: string;

  /**
   * Alternative text used for accessibility.
   *
   * Should describe meaningful images.
   * Decorative images may use an empty string.
   */
  alt: string;

  /**
   * Optional fallback image displayed when
   * the original image cannot be loaded.
   */
  fallbackSrc?: string;

  /**
   * Controls the browser image loading behaviour.
   *
   * lazy  - Loads when the image approaches the viewport.
   * eager - Loads immediately.
   *
   * @default "lazy"
   */
  loading?: "lazy" | "eager";

  /**
   * Controls how the image fits inside its available space.
   *
   * cover      - Fills the container and may crop the image.
   * contain    - Displays the entire image inside the container.
   * fill       - Stretches the image to fill the container.
   * none       - Keeps the image's original size.
   * scale-down - Uses the smaller result of none or contain.
   *
   * @default "cover"
   */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";

  /**
   * Optional intrinsic width of the image.
   */
  width?: number;

  /**
   * Optional intrinsic height of the image.
   */
  height?: number;

  /**
   * Optional aspect ratio used by the image.
   *
   * Examples:
   * "1/1"
   * "4/3"
   * "16/9"
   */
  aspectRatio?: string;

  /**
   * Additional CSS classes used to extend
   * or override the image styling.
   */
  className?: string;
}
