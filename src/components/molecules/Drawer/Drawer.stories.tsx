import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@atoms";

import { Drawer } from "./Drawer";
import { DRAWER_SIDES } from "./Drawer.constants";
import type { DrawerProps, DrawerSide } from "@type/components/molecules";

const meta = {
  title: "Molecules/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "select",
      options: DRAWER_SIDES,
    },
  },
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

function DrawerDemo({ side = "left" }: { side?: DrawerSide }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background p-6 text-foreground">
      <Button onClick={() => setIsOpen(true)} type="button">
        Open drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side={side}
      />
    </div>
  );
}

export const Interactive: Story = {
  args: {
    isOpen: false,
    onClose: () => undefined,
    side: "left",
  },
  render: ({ side }: DrawerProps) => <DrawerDemo side={side} />,
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClose: () => undefined,
  },
};

export const Closed: Story = {
  args: {
    isOpen: false,
    onClose: () => undefined,
  },
};
