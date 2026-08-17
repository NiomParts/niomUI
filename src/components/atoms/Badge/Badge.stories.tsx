import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";
import { BADGE_SIZES, BADGE_VARIANTS } from "./Badge.constants";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: BADGE_SIZES,
    },
    variant: {
      control: "select",
      options: BADGE_VARIANTS,
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "3",
  },
};

export const Overflow: Story = {
  args: {
    children: "99+",
  },
};

export const Muted: Story = {
  args: {
    children: "New",
    variant: "muted",
  },
};
