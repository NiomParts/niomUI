import type { ReactElement, ReactNode } from "react";

export type AccordionVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "none"
  | "outline"
  | "boxed"
  | "accent";

export type AccordionHeaderPosition = "top" | "bottom";
export type AccordionIconPosition = "left" | "right";
export type AccordionPadding = "none" | "small" | "medium" | "large";
export type AccordionShadow = "none" | "small" | "medium" | "large";

export type AccordionContextType = {
  activeKeys: number[];
  toggleItem: (index: number) => void;
  multiple: boolean;
  variant: AccordionVariant;
  idPrefix: string;
};

export type AccordionProps = {
  id?: string;
  className?: string;
  headerClassName?: string;
  children: ReactNode;
  defaultActiveKey?: number | number[];
  multiple?: boolean;
  variant?: AccordionVariant;
  onChange?: (activeKeys: number[]) => void;
};

export type AccordionItemProps = {
  itemIndex?: number;
  label?: ReactNode | null;
  disabled?: boolean;
  headerPosition?: AccordionHeaderPosition;
  header?: ReactNode;
  footer?: ReactNode;
  padding?: AccordionPadding;
  bordered?: boolean;
  shadow?: AccordionShadow;
  icon?: ReactNode | ReactElement<AccordionIconProps> | null;
  activeIcon?: ReactNode | ReactElement<AccordionIconProps> | null;
  iconPosition?: AccordionIconPosition;
  headerClassName?: string;
  className?: string;
  contentClassName?: string;
  children?: ReactNode;
};

export type AccordionHeaderProps = {
  label?: ReactNode | null;
  onClick: (index: number) => void;
  disabled?: boolean;
  headerPosition?: AccordionHeaderPosition;
};

export type AccordionCardProps = {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  padding?: AccordionPadding;
  bordered?: boolean;
  shadow?: AccordionShadow;
};

export type AccordionIconProps = {
  icon?: ReactNode;
  activeIcon?: ReactNode;
  iconPosition?: AccordionIconPosition;
};

export type AccordionTriggerProps = {
  id: string;
  controls: string;
  isActive: boolean;
  itemIndex: number;
  disabled: boolean;
  variant: AccordionVariant;
  label?: ReactNode | null;
  icon?: ReactNode;
  iconPosition: AccordionIconPosition;
  headerPosition: AccordionHeaderPosition;
  className?: string;
  onToggle: (index: number) => void;
};
