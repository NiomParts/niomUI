import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import type { ButtonProps } from "./Button.type";
import { VARIANTS } from "@/utils/varient";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    varaint: {
      options: Object.keys(VARIANTS),
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonVarients: Story = {
  args: {
    children: "Button",
    varaint: "primary",
  } as ButtonProps,
};
