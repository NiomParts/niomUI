import type { Meta, StoryObj } from "@storybook/react";

import { Search as SearchIcon } from "@components/atoms/Icon";

import { Input } from "./Input";
import { INPUT_TYPES } from "./Input.constants";

const meta = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: INPUT_TYPES,
    },
    error: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
    iconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
    },
    icon: {
      control: false,
    },
    onSearch: {
      action: "search",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text",
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "Niom essentials",
    placeholder: "Enter text",
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search products",
    searchButtonLabel: "Search products",
  },
};

export const WithLeftIcon: Story = {
  args: {
    icon: <SearchIcon size={16} />,
    iconPosition: "left",
    placeholder: "Search by product name",
  },
};

export const WithRightIcon: Story = {
  args: {
    icon: <SearchIcon size={16} />,
    iconPosition: "right",
    placeholder: "Search by product name",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password",
    autoComplete: "current-password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Quantity",
    min: 1,
    max: 99,
  },
};

export const Telephone: Story = {
  args: {
    type: "tel",
    placeholder: "+230 5255 1234",
    autoComplete: "tel",
    inputMode: "tel",
    pattern: "^\\+?[0-9\\s()-]{7,20}$",
  },
};

export const Error: Story = {
  args: {
    error: true,
    type: "email",
    placeholder: "Email address",
    defaultValue: "not-an-email",
    "aria-describedby": "email-error",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: "Unavailable",
  },
};
