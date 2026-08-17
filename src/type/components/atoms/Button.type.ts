import type {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  ReactElement,
  ReactNode,
} from 'react';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'ghost'
  | 'danger'
  | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonOwnProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  as?: ElementType;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
}

export type ButtonProps<C extends ElementType = 'button'> = ButtonOwnProps & {
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof ButtonOwnProps | 'as'>;

export type ButtonComponent = <C extends ElementType = "button">(
  props: ButtonProps<C> & { ref?: ForwardedRef<HTMLElement> },
) => ReactElement | null;
