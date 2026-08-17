export type DrawerSide = "left" | "right";

export type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  side?: DrawerSide;
  className?: string;
  children?: React.ReactNode;
};
