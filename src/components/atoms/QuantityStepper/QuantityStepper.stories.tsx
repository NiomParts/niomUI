import { QuantityStepper } from "./QuantityStepper";
import type { QuantityStepperProps } from "@type";
import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "storybook/preview-api";
import { fn } from "storybook/test";

const meta = {
  title: "Atoms/QuantityStepper",
  component: QuantityStepper,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: {
    value: 1,
    min: 1,
    max: 10,
    disabled: false,
    onChange: fn(),
  },

  argTypes: {
    value: {
      control: {
        type: "number",
      },
      description: "The current quantity value.",
    },

    onChange: {
      description: "Callback function called when the quantity changes.",
    },

    min: {
      control: {
        type: "number",
      },
      description: "The minimum quantity allowed.",
    },

    max: {
      control: {
        type: "number",
      },
      description: "The maximum quantity allowed.",
    },

    disabled: {
      control: {
        type: "boolean",
      },
      description: "Indicates whether the stepper is disabled.",
    },

    className: {
      control: {
        type: "text",
      },
      description: "Additional CSS classes for the stepper container.",
    },
    size: {
      control: {
        type: "select",
      },
      options: ["sm", "md", "lg"],
      description: "Size of the stepper buttons and value display.",
    },
  },
} satisfies Meta<QuantityStepperProps>;

export default meta;

type Story = StoryObj<typeof meta>;

function Template(args: QuantityStepperProps) {
  const [, updateArgs] = useArgs<QuantityStepperProps>();

  const handleChange = (newValue: number) => {
    updateArgs({
      value: newValue,
    });

    args.onChange(newValue);
  };

  return <QuantityStepper {...args} onChange={handleChange} />;
}

export const Default: Story = {
  render: Template,
  args: {
    size: "sm",
  },
};

export const Disabled: Story = {
  render: Template,

  args: {
    disabled: true,
    size: "lg",
  },
};

export const WithCustomClass: Story = {
  render: Template,

  args: {
    className: "bg-primary p-2 rounded-lg",
    iconClassName: "text-tertiary size-5",
  },
};

export const WithDifferentRange: Story = {
  render: Template,

  args: {
    value: 5,
    min: 5,
    max: 20,
  },
};

export const WithoutMaximum: Story = {
  render: Template,

  args: {
    value: 1,
    min: 1,
    max: undefined,
  },
};

export const AtMinimum: Story = {
  render: Template,

  args: {
    value: 1,
    min: 1,
    max: 10,
  },
};

export const AtMaximum: Story = {
  render: Template,

  args: {
    value: 10,
    min: 1,
    max: 10,
  },
};
