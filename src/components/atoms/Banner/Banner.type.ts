import { ReactNode, RefObject } from "react";

export type BannerTextPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export interface BannerProps {
  /** * The unique identifier for the banner. */
  id?: string;
  /** * The alternative text for the banner image. */
  alt?: string;
  /** * The CSS class name for the banner. */
  className?: string;
  /** * The inline styles for the banner. */
  style?: React.CSSProperties;
  /** * The ref object for the banner. */
  ref?: RefObject<HTMLDivElement>;
  /** * The source URL of the banner image. */
  image?: string;
  /** * The fit mode of the banner image. cover or contain. */
  imageFit?: "cover" | "contain";
  /** * The content to be displayed on the banner. */
  content?: ReactNode;
  /** * The position of the text on the banner. */
  textPosition?: BannerTextPosition;
  /** * The callback function to be called when the banner is clicked. */
  onClick?: () => void;
  /** * The callback function to be called when the banner is hovered. */
  hoverEffect?: boolean;
  /** * The shadow effect on hover. */
  shadowOnHover?: boolean;
  /** * The inner shadow effect on hover. */
  innerShadowOnHover?: boolean;
  /** * The blur effect on hover. */
  layerBlurOnHover?: boolean;
  /** * The dimension of the banner. */
  dimensions?: "small" | "medium" | "large";
}
