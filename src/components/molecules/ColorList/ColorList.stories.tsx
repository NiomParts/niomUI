import type { Meta, StoryObj } from "@storybook/react";
import { ColorList } from "./ColorList";

const meta = {
  title: "Molecules/ColorList",
  component: ColorList,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    colors: {
      control: "object",
    },
    onColorSelect: {
      action: "color selected",
    },
    canCheck: {
      control: "boolean",
    },
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof ColorList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Select a color",
    colors: [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
      "var(--color-danger)",
    ],
    canCheck: false,
    orientation: "horizontal",
    onColorSelect: (color: string) => {
      console.log(`Selected color: ${color}`);
    },
  },
};

export const WithCheck: Story = {
  args: {
    title: "Select a color",
    colors: [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
      "var(--color-danger)",
    ],
    canCheck: true,
    orientation: "horizontal",
    onColorSelect: (color: string) => {
      console.log(`Selected color: ${color}`);
    },
  },
};

export const VerticalOrientation: Story = {
  args: {
    title: "Select a color",
    colors: [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
      "var(--color-danger)",
    ],
    canCheck: true,
    orientation: "vertical",
    onColorSelect: (color: string) => {
      console.log(`Selected color: ${color}`);
    },
  },
};
