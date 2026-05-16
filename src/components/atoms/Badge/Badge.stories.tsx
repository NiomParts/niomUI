import type { Meta, StoryObj } from "@storybook/react";
import { VARIANTS } from "@/constant/style";
import { Badge } from "./Badge";
import { BadgeProps } from "./Badge.type";

const meta: Meta<BadgeProps> = {
  component: Badge,
  title: "Atoms/Badge",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: Object.keys(VARIANTS),
      control: { type: "select" },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: "Default Badge",
  },
};

export const WithVariant: Story = {
  args: {
    content: "Primary Badge",
    variant: "primary",
  },
};

export const WithSize: Story = {
  args: {
    content: "Large Badge",
    size: "large",
  },
};

export const WithVisibility: Story = {
  args: {
    content: "Visible Badge",
    visible: true,
  },
};

export const HiddenBadge: Story = {
  args: {
    content: "Hidden Badge",
    visible: false,
  },
};

export const WithCustomStyles: Story = {
  args: {
    content: "Custom Styled Badge",
    className: "bg-green-500 text-white",
    style: { fontSize: "18px", padding: "10px 20px" },
  },
};

export const WithOnClick: Story = {
  args: {
    content: "Clickable Badge",
    onClick: () => alert("Badge clicked!"),
  },
};
