import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";
import {
  CHECKBOX_TEXT_VARIANTS,
  CHECKBOX_VARIANTS,
} from "./Checkbox.constants";

const meta = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    checked: {
      control: "boolean",
    },
    defaultChecked: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: CHECKBOX_VARIANTS,
    },
    textVariant: {
      control: "select",
      options: CHECKBOX_TEXT_VARIANTS,
    },
    onChange: {
      action: "change",
    },
  },
  args: {
    children: "Accept terms",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
    variant: "primary",
    children: "Email me product updates",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Unavailable option",
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
    children: "Selected and unavailable",
  },
};

export const Controlled: Story = {
  args: {
    checked: true,
    children: "Controlled checked state",
  },
};

export const CustomBox: Story = {
  args: {
    className: "border-accent",
    children: "Custom visual box",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="grid gap-3">
      {CHECKBOX_VARIANTS.map((variant) => (
        <Checkbox key={variant} defaultChecked variant={variant}>
          {variant}
        </Checkbox>
      ))}
    </div>
  ),
};

export const TextVariants: Story = {
  render: () => (
    <div className="grid gap-3">
      {CHECKBOX_TEXT_VARIANTS.map((textVariant) => (
        <Checkbox key={textVariant} defaultChecked textVariant={textVariant}>
          {textVariant}
        </Checkbox>
      ))}
    </div>
  ),
};

export const Danger: Story = {
  args: {
    defaultChecked: true,
    variant: "danger",
    textVariant: "danger",
    children: "Delete saved payment method",
  },
};
