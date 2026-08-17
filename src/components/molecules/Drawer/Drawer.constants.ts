import type { DrawerSide } from "@type/components/molecules";

export const DRAWER_SIDES = [
  "left",
  "right",
] as const satisfies readonly DrawerSide[];

export const DRAWER_SIDE_CLASSES: Record<DrawerSide, { panel: string }> = {
  left: {
    panel: "left-0",
  },
  right: {
    panel: "right-0",
  },
};
