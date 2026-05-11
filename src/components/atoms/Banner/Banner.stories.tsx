import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  component: Banner,
  title: "Atoms/Banner",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    content: { control: "text" },
    imageFit: { control: { type: "select", options: ["cover", "contain"] } },
    textPosition: {
      control: {
        type: "select",
        options: [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right",
          "center",
        ],
      },
    },
    hoverEffect: { control: "boolean" },
    shadowOnHover: { control: "boolean" },
    innerShadowOnHover: { control: "boolean" },
    layerBlurOnHover: { control: "boolean" },
    dimensions: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
  },
};

export const WithContent: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    content: <h2 className="text-2xl font-bold">Banner Title</h2>,
    textPosition: "bottom-left",
  },
};

export const WithHoverEffect: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    hoverEffect: true,
  },
};

export const WithShadowOnHover: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    shadowOnHover: true,
  },
};

export const WithInnerShadowOnHover: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    innerShadowOnHover: true,
  },
};

export const WithLayerBlurOnHover: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    layerBlurOnHover: true,
  },
};

export const SizeBanner: Story = {
  args: {
    image:
      "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
    dimensions: "large",
  },
};
