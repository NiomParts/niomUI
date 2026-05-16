import { VARIANTS, SIZE } from "@/constant/style";
export interface BadgeProps {
  id?: string;
  /** * The content of the badge. */
  content: string | number | React.ReactNode;
  /** * The color of the badge. */
  variant?: keyof typeof VARIANTS;
  /** * The size of the badge. */
  size?: keyof typeof SIZE;
  /** * Whether the badge is visible. */
  visible?: boolean;
  /** The CSS class name for the badge. */
  className?: string;
  /** The inline styles for the badge. */
  style?: React.CSSProperties;
  /** The ref object for the badge. */
  ref?: React.Ref<HTMLSpanElement>;
  /** * The callback function to be called when the badge is clicked. */
  onClick?: () => void;
}
