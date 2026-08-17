import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import { SelectVariants } from "./Select.constants";

const meta = {
  title: "Atoms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(SelectVariants),
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    placeholder: "Select an option",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    placeholder: "Select an option",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    placeholder: "Select an option",
    variant: "tertiary",
  },
};

export const Outlined: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
    placeholder: "Select an option",
    variant: "outlined",
  },
};

export const Disabled: Story = {
    args: {
        options: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        variant: "primary",
        disabled: true,
    },
};
