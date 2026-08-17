export interface ColorListProps extends React.HTMLAttributes<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> {
  colors: string[];
  title: string;
  canCheck?: boolean;
  orientation?: "horizontal" | "vertical";
  onColorSelect: (color: string) => void;
  className?: string;
  badgeClassName?: string;
}
