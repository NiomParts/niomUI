import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Slider } from "./Slider";

const meta = {
  title: "Atoms/Slider",
  component: Slider,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="h-64 w-80">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    disabled: {
      control: "boolean",
    },
    onChange: {
      action: "change",
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState(50);

    return <Slider {...args} value={value} onChange={(next) => setValue(next as number)} />;
  },
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    ariaLabel: "Price",
    onChange: () => {},
  },
};

export const Range: Story = {
  render: (args) => {
    const [value, setValue] = useState<[number, number]>([25, 75]);

    return (
      <Slider
        {...args}
        value={value}
        onChange={(next) => setValue(next as [number, number])}
      />
    );
  },
  args: {
    value: [25, 75],
    min: 0,
    max: 100,
    step: 5,
    ariaLabels: ["Minimum price", "Maximum price"],
    onChange: () => {},
  },
};

export const Vertical: Story = {
  render: (args) => {
    const [value, setValue] = useState(40);

    return <Slider {...args} value={value} onChange={(next) => setValue(next as number)} />;
  },
  args: {
    value: 40,
    min: 0,
    max: 100,
    orientation: "vertical",
    ariaLabel: "Volume",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    value: 35,
    min: 0,
    max: 100,
    disabled: true,
    ariaLabel: "Disabled slider",
    onChange: () => {},
  },
};
