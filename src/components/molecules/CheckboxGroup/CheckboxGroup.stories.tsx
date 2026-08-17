import type { Meta, StoryObj } from "@storybook/react";
import { CheckBoxGroup } from "./CheckboxGroup";
import type { CheckboxGroupProps, CheckboxGroupItem } from "@type";
import { useState } from "react";

const meta: Meta<CheckboxGroupProps> = {
  title: "Molecules/CheckboxGroup",
  component: CheckBoxGroup,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    items: {
      control: { type: "object" },
    },
    label: {
      control: { type: "text" },
    },
    className: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "accent", "danger", "muted", "tertiary"],
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
type Story = StoryObj<CheckboxGroupProps>;

const checkboxItems: CheckboxGroupItem[] = [
  {
    label: "Football",
    value: "football",
    totalCount: 245,
  },
  {
    label: "Basketball",
    value: "basketball",
    totalCount: 182,
  },
  {
    label: "Tennis",
    value: "tennis",
    disabled: true,
    totalCount: 97,
  },
  {
    label: "Cricket",
    value: "cricket",
    className: "text-success",
    totalCount: 154,
  },
  {
    label: "Formula 1",
    value: "formula-1",
    totalCount: 1,
  },
];

const Template = (args: CheckboxGroupProps) => {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  const handleChange = (newValues: string[]) => {
    setSelectedValues(newValues);
  };

  return (
    <CheckBoxGroup {...args} value={selectedValues} onChange={handleChange} />
  );
};

export const Default: Story = {
  render: Template,
  args: {
    items: checkboxItems,
    label: "Select your favorite sports",
    orientation: "vertical",
    disabled: false,
  },
};

export const Horizontal: Story = {
  render: Template,
  args: {
    items: checkboxItems,
    label: "Select your favorite sports",
    orientation: "horizontal",
    disabled: false,
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    items: checkboxItems,
    label: "Select your favorite sports",
    orientation: "vertical",
    disabled: true,
  },
};

export const WithVariant: Story = {
  render: Template,
  args: {
    items: checkboxItems,
    label: "Select your favorite sports",
    orientation: "vertical",
    disabled: false,
    variant: "primary",
    textVariant: "secondary",
  },
};
