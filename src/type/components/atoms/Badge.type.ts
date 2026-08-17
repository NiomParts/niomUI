import type {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  ReactNode,
} from "react";

export type BadgeVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "muted"
  | "success"
  | "danger"
  | "warning";
export type BadgeSize = "sm" | "md";

export interface BadgeOwnProps {
  as?: ElementType;
  children?: ReactNode;
  className?: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
}

export type BadgeProps<C extends ElementType = "span"> = BadgeOwnProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof BadgeOwnProps | "as">;

export type BadgeComponent = <C extends ElementType = "span">(
  props: BadgeProps<C> & { ref?: ForwardedRef<HTMLElement> },
) => ReactElement | null;
