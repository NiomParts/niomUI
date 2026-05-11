import { ReactNode, RefObject } from "react";

export type BannerTextPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "center";

export interface BannerProps {
  id?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  ref?: RefObject<HTMLDivElement>;
  image?: string;
  imageFit?: "cover" | "contain";
  content?: ReactNode;
  textPosition?: BannerTextPosition;
  hoverEffect?: boolean;
  shadowOnHover?: boolean;
  innerShadowOnHover?: boolean;
  layerBlurOnHover?: boolean;
  dimensions?: "small" | "medium" | "large";
}
