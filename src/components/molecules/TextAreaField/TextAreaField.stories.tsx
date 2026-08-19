import type { Meta, StoryObj } from "@storybook/react";

import { TextAreaField } from "./TextAreaField";
import { TextAreaFieldProps } from "@type";

const meta = {
  title: "Molecules/TextAreaField",
  component: TextAreaField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    showCount: {
      control: "boolean",
    },
    clearButton: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
    errorMessage: {
      control: "text",
    },
  },
} satisfies Meta<typeof TextAreaField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Description",
  } as TextAreaFieldProps,
};

export const WithError: Story = {
  args: {
    label: "Description",
    error: true,
    errorMessage: "This field is required.",
  } as TextAreaFieldProps,
};

export const WithClearButton: Story = {
  args: {
    label: "Description",
    value: "This is a sample text.",
    clearButton: true,
  } as TextAreaFieldProps,
};

export const WithCharacterCount: Story = {
  args: {
    label: "Description",
    value: "This is a sample text.",
    showCount: true,
  } as TextAreaFieldProps,
};
