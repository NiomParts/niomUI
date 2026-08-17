import { StoryObj, Meta } from "@storybook/react";
import { Rating } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Atoms/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "number", min: 0, max: 5, step: 0.1 },
      description: "The current rating value.",
    },
    max: {
      control: { type: "number", min: 1, max: 10, step: 1 },
      description: "The maximum rating value.",
    },
    precision: {
      control: { type: "number", min: 0.1, max: 1, step: 0.1 },
      description:
        "The precision of the rating value. Determines the increment for half stars.",
    },
    showValue: {
      control: { type: "boolean" },
      description:
        "Whether to display the numeric rating value next to the stars.",
    },
    reviewCount: {
      control: { type: "number", min: 0 },
      description:
        "The number of reviews associated with the rating. Displayed next to the rating value.",
    },
    size: {
      control: { type: "number", min: 10, max: 50, step: 1 },
      description: "The size of the star icons.",
    },
    color: {
      control: { type: "text" },
      description: "The color of the star icons.",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the rating component.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    value: 3,
    max: 5,
  },
};

export const WithHalfStar: Story = {
  args: {
    value: 3.5,
    max: 5,
  },
};

export const WithValueAndReviewCount: Story = {
  args: {
    value: 4.2,
    max: 5,
    showValue: true,
    reviewCount: 128,
  },
};

export const CustomSizeAndColor: Story = {
  args: {
    value: 4.5,
    max: 5,
    size: 10,
    color: "text-primary",
  },
};
