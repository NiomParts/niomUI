import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";
import { SkeletonProps } from "./Skeleton.type";

const meta: Meta<SkeletonProps> = {
  component: Skeleton,
  title: "Atoms/Skeleton",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    animation: "pulse",
    borderRadius: "0.5em",
    count: 1,
  },
};

export const WithMultipleLines: Story = {
  args: {
    animation: "wave",
    borderRadius: "0.5em",
    count: 3,
    gap: 4,
  },
};

export const Circle: Story = {
  args: {
    animation: "pulse",
    width: "5em",
    height: "5em",
    borderRadius: "100%",
    count: 1,
  },
};
