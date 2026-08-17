import type { Meta, StoryObj } from "@storybook/react";

import { Stock } from "@media";
import type { ProductCardProps } from "@type/components/molecules";

import { ProductCard } from "./ProductCard";

const dealEndsAt = new Date("2026-09-30T18:30:00Z");

const baseProduct = {
  id: "zeb-thunder-pro",
  name: "Zeb-Thunder Pro Wireless Headphones",
  image: Stock,
  price: 36,
  originalPrice: 40,
  discount: 10,
  rating: 5,
  reviewCount: 2,
  countdown: dealEndsAt,
  inStock: true,
  onClick: () => undefined,
  onFavorite: () => undefined,
  onAddToCart: () => undefined,
} satisfies ProductCardProps;

function ProductCardFrame(args: ProductCardProps) {
  return (
    <div className="w-[min(20rem,calc(100vw-2rem))]">
      <ProductCard {...args} />
    </div>
  );
}

function ProductCardGrid(args: ProductCardProps) {
  return (
    <div className="grid w-[min(44rem,calc(100vw-2rem))] grid-cols-2 gap-4">
      <ProductCard {...args} />
      <ProductCard
        {...args}
        id="compact-speaker"
        name="Compact Bluetooth Speaker"
        price={28}
        originalPrice={35}
        discount={20}
        rating={4}
        reviewCount={18}
        badge="Hot"
      />
    </div>
  );
}

const meta = {
  title: "Molecules/ProductCard",
  component: ProductCard,
  render: ProductCardFrame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: baseProduct,
  argTypes: {
    price: {
      control: {
        type: "number",
        min: 0,
      },
    },
    originalPrice: {
      control: {
        type: "number",
        min: 0,
      },
    },
    discount: {
      control: {
        type: "number",
        min: 0,
        max: 100,
      },
    },
    rating: {
      control: {
        type: "number",
        min: 0,
        max: 5,
        step: 0.5,
      },
    },
    reviewCount: {
      control: {
        type: "number",
        min: 0,
      },
    },
    countdown: {
      control: false,
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    onFavorite: {
      table: {
        disable: true,
      },
    },
    onAddToCart: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ProductCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const MobileDeal: Story = {
  name: "Mobile deal",
};

export const DesktopGrid: Story = {
  name: "Desktop grid",
  render: ProductCardGrid,
};

export const Favorite: Story = {
  args: {
    favorite: true,
  },
};

export const WithBadge: Story = {
  args: {
    badge: "Hot",
  },
};

export const NoDiscount: Story = {
  args: {
    originalPrice: undefined,
    discount: undefined,
    countdown: undefined,
  },
};

export const OutOfStock: Story = {
  args: {
    inStock: false,
  },
};

export const LongProductName: Story = {
  args: {
    name: "Zeb-Thunder Pro Wireless Headphones With Noise Isolation And Deep Bass",
    reviewCount: 124,
  },
};
