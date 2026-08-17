import type { Meta, StoryObj } from "@storybook/react";

import { Image } from "./Image";
import { OBJECT_FIT } from "./Image.constants";
import { Stock, Logo } from "@media";

const PRODUCT_IMAGE = Stock;
const FALLBACK_IMAGE = Logo;

const meta = {
  title: "Atoms/Image",
  component: Image,
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
    objectFit: {
      control: "select",
      options: Object.keys(OBJECT_FIT),
    },
    loading: {
      control: "inline-radio",
      options: ["lazy", "eager"],
    },
    fallbackSrc: {
      control: "text",
    },
    aspectRatio: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: PRODUCT_IMAGE,
    alt: "Skincare product bottle",
    width: 320,
    height: 240,
    aspectRatio: "4/3",
    className: "rounded-md",
  },
};

export const SquareCover: Story = {
  args: {
    src: PRODUCT_IMAGE,
    alt: "Skincare product bottle cropped square",
    width: 320,
    height: 320,
    aspectRatio: "1/1",
    objectFit: "cover",
    className: "rounded-md",
  },
};

export const Contain: Story = {
  args: {
    src: PRODUCT_IMAGE,
    alt: "Skincare product bottle contained",
    width: 320,
    height: 240,
    aspectRatio: "4/3",
    objectFit: "contain",
    className: "rounded-md bg-muted",
  },
};

export const WithFallback: Story = {
  args: {
    src: "/missing-image.jpg",
    fallbackSrc: FALLBACK_IMAGE,
    alt: "Fallback skincare product",
    width: 320,
    height: 240,
    aspectRatio: "4/3",
    className: "rounded-md",
  },
};

export const Eager: Story = {
  args: {
    src: PRODUCT_IMAGE,
    alt: "Eagerly loaded skincare product",
    loading: "eager",
    width: 320,
    height: 240,
    aspectRatio: "4/3",
    className: "rounded-md",
  },
};
