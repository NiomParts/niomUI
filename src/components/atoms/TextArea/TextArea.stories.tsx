import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import { TextareaProps } from "@type";
import { useState } from "react";

const meta = {
  title: "Atoms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
    },
    name: {
      control: "text",
    },
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    onChange: {
      action: "change",
    },
    rows: {
      control: "number",
    },
    cols: {
      control: "number",
    },
    disabled: {
      control: "boolean",
    },
    required: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
    maxLength: {
      control: "number",
    },
    error: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: TextareaProps) => {
    const [value, setValue] = useState(args.value || "");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        placeholder="default"
      />
    );
  },
};

export const Disabled: Story = {
  render: (args: TextareaProps) => {
    const [value, setValue] = useState(args.value || "");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        disabled
        placeholder="disabled"
      />
    );
  },
};

export const ReadOnly: Story = {
  render: (args: TextareaProps) => {
    const [value, setValue] = useState(args.value || "");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        readOnly
        placeholder="read only"
      />
    );
  },
};

export const WithMaxLength: Story = {
  render: (args: TextareaProps) => {
    const [value, setValue] = useState(args.value || "");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        maxLength={50}
        placeholder="max length 50"
      />
    );
  },
};

export const Error: Story = {
  render: (args: TextareaProps) => {
    const [value, setValue] = useState(args.value || "");

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.target.value);
    };

    return (
      <TextArea
        {...args}
        value={value}
        onChange={handleChange}
        error
        placeholder="error state"
      />
    );
  },
};
