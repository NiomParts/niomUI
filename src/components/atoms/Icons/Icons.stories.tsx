import type { Meta, StoryObj, StoryFn } from "@storybook/react";
import { Menu, Cross } from "./Icons";
import type { SVGprops } from "./Icons.type";

const meta = {
  title: "Atoms/Icons",
  component: Menu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const createTemplate = (IconComponent: React.FC<SVGprops>) => {
  const Template: StoryFn<SVGprops> = (args) => <IconComponent {...args} />;
  return Template;
};

export const MenuIcon: Story = {
  render: createTemplate(Menu),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};

export const CrossIcon: Story = {
  render: createTemplate(Cross),
  args: {
    color: "black",
    size: 24,
  } as SVGprops,
};
