export interface SkeletonProps {
  id?: string;
  /** the class name for the skeleton component */
  className?: string;
  /** the inline styles for the skeleton component */
  style?: React.CSSProperties;
  /** the ref object for the skeleton component */
  ref?: React.Ref<HTMLDivElement>;
  /** the width of the skeleton */
  width?: string | number;
  /** the height of the skeleton */
  height?: string | number;
  /** the border radius of the skeleton */
  borderRadius?: string | number;
  /** the animation type for the skeleton */
  animation?: "pulse" | "wave" | "none";
  /** the number of skeleton lines to render */
  count?: number;
  /** the gap between skeleton lines when count is greater than 1 */
  gap?: number | string;
  /** is horizon layout when count is greater than 1 */
  horizontal?: boolean;
}
