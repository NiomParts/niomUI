import type { Meta, StoryObj } from "@storybook/react";

import { Toaster } from "./component/Toaster";

const meta = {
  title: "Molecules/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["success", "error"],
    },
    message: {
      control: "text",
    },
    autoCloseMs: {
      control: "number",
    },
    onClose: {
      action: "dismissed",
    },
  },
} satisfies Meta<typeof Toaster>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    message: "Your changes were saved successfully.",
    variant: "success",
  },
};

export const Error: Story = {
  args: {
    message: "Something went wrong. Please try again.",
    variant: "error",
  },
};

export const Dismissible: Story = {
  args: {
    message: "Your cart was updated.",
    variant: "success",
    autoCloseMs: 5000,
    onClose: () => undefined,
  },
};
