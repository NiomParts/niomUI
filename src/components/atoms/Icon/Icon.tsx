import type { IconProps } from "@type/components/atoms";

export const Icon = ({ icon: IconComponent, ...props }: IconProps) => {
  return <IconComponent {...props} />;
};
