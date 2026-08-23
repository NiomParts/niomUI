import type { Meta, StoryObj } from "@storybook/react";
import { RadioProps } from "@type";
import { useState } from "react";
import { Radio } from "./Radio";

const meta: Meta<RadioProps> = {
  title: "Atoms/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    value: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    onChange: { action: "changed" },
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "accent"],
    },
    textVariant: {
      control: { type: "select" },
      options: [
        "foreground",
        "muted",
        "primary",
        "secondary",
        "tertiary",
        "accent",
        "danger",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<RadioProps>;

const Template = (args: RadioProps) => {
  const [checked, setChecked] = useState(args.checked || false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    args.onChange?.(event);
  };

  return <Radio {...args} checked={checked} onChange={handleChange} />;
};

export const Primary: Story = {
  render: Template,
  args: {
    id: "primary-radio",
    name: "primary-radio",
    value: "primary",
    checked: false,
    disabled: false,
    children: "Primary Radio",
    variant: "primary",
    textVariant: "foreground",
  },
};

export const Secondary: Story = {
  render: Template,
  args: {
    id: "secondary-radio",
    name: "secondary-radio",
    value: "secondary",
    checked: false,
    disabled: false,
    children: "Secondary Radio",
    variant: "secondary",
    textVariant: "foreground",
  },
};

export const Tertiary: Story = {
  render: Template,
  args: {
    id: "tertiary-radio",
    name: "tertiary-radio",
    value: "tertiary",
    checked: false,
    disabled: false,
    children: "Tertiary Radio",
    variant: "tertiary",
    textVariant: "foreground",
  },
};

export const Accent: Story = {
  render: Template,
  args: {
    id: "accent-radio",
    name: "accent-radio",
    value: "accent",
    checked: false,
    disabled: false,
    children: "Accent Radio",
    variant: "accent",
    textVariant: "foreground",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    id: "disabled-radio",
    name: "disabled-radio",
    value: "disabled",
    checked: false,
    disabled: true,
    children: "Disabled Radio",
    variant: "primary",
    textVariant: "foreground",
  },
};
