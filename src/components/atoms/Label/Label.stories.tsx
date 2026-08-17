import { Label } from "./Label";
import type { LabelProps } from "@type";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The text content of the label.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the label.",
    },
    htmlFor: {
      control: "text",
      description:
        "The id of the input element that the label is associated with.",
    },
    required: {
      control: "boolean",
      description: "Indicates whether the label is for a required field.",
    },
    disabled: {
      control: "boolean",
      description: "Indicates whether the label is for a disabled field.",
    },
  },
} satisfies Meta<LabelProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a label",
  },
};

export const WithCustomColor: Story = {
  args: {
    children: "This is a label with custom color",
    className: "text-primary border \n",
  },
};
