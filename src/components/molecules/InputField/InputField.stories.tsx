import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "@atoms";
import { INPUT_TYPES } from "@components/atoms/Input/Input.constants";

import { InputField } from "./InputField";

const meta = {
  title: "Molecules/InputField",
  component: InputField,
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
    label: {
      description:
        "Label text displayed above the input field when floatingLabel is not used.",
      control: { type: "text" },
    },
    floatingLabel: {
      description:
        "Floating label text displayed above the input field when the input is focused or has a value.",
      control: { type: "text" },
    },
    type: {
      description:
        "Type of the input field, e.g., 'text', 'password', 'email', etc.",
      control: {
        type: "select",
      },
      options: INPUT_TYPES,
    },
    className: {
      description: "Additional CSS classes to extend or override styling.",
      control: { type: "text" },
    },
    disabled: {
      description: "Indicates whether the input is disabled.",
      control: { type: "boolean" },
    },
    error: {
      description: "Indicates whether the input is in an error state.",
      control: { type: "boolean" },
    },
    errorMessage: {
      description:
        "Error message displayed below the input field when in an error state.",
      control: { type: "text" },
    },
    onKeyDown: {
      description: "Event handler for key down events in the input.",
      action: "keyDown",
    },
    onKeyUp: {
      description: "Event handler for key up events in the input.",
      action: "keyUp",
    },
    onChange: {
      description: "Event handler for input value changes.",
      action: "change",
    },
    onFocus: {
      description: "Event handler for input focus events.",
      action: "focus",
    },
    onBlur: {
      description: "Event handler for input blur events.",
      action: "blur",
    },
    forwardedRef: {
      description: "Allows passing a forwarded ref to the input element.",
      control: { type: "object" },
    },
    icon: {
      control: false,
    },
    iconPosition: {
      control: "inline-radio",
      options: ["left", "right"],
    },
    onSearch: {
      action: "search",
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter text",
    disabled: false,
    error: false,
    type: "text",
  },
};

export const WithFloatingLabel: Story = {
  args: {
    floatingLabel: "Email address",
    placeholder: "name@example.com",
    disabled: false,
    error: false,
    type: "email",
  },
};

export const WithErrorState: Story = {
  args: {
    floatingLabel: "Email address",
    placeholder: "name@example.com",
    disabled: false,
    error: true,
    errorMessage: "Enter a valid email address.",
    type: "email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Promotion code",
    placeholder: "SUMMER",
    disabled: true,
    error: false,
    type: "text",
  },
};

export const WithDefaultValue: Story = {
  args: {
    floatingLabel: "Search",
    defaultValue: "Serum",
    placeholder: "Search products",
    disabled: false,
    error: false,
    type: "search",
  },
};

export const WithIcon: Story = {
  args: {
    label: "Product",
    icon: <Search size={16} />,
    iconPosition: "left",
    placeholder: "Search by name",
    type: "text",
  },
};

export const SearchField: Story = {
  args: {
    label: "Search",
    placeholder: "Search products",
    searchButtonLabel: "Search products",
    type: "search",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    autoComplete: "current-password",
  },
};

export const Telephone: Story = {
  args: {
    label: "Phone number",
    placeholder: "+230 5255 1234",
    type: "tel",
    autoComplete: "tel",
    inputMode: "tel",
    pattern: "^\\+?[0-9\\s()-]{7,20}$",
  },
};

export const Required: Story = {
  args: {
    label: "Email address",
    placeholder: "name@example.com",
    required: true,
    type: "email",
  },
};
