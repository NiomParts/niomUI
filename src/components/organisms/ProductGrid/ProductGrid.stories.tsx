import type { Meta, StoryObj } from "@storybook/react";

import { Stock } from "@media";
import type { ProductCardProps } from "@type/components/molecules";

import { ProductGrid } from "./ProductGrid";

const products = [
  {
    id: "zeb-thunder-pro",
    name: "Zeb-Thunder Pro Wireless Headphones",
    image: Stock,
    price: 36,
    originalPrice: 40,
    discount: 10,
    rating: 5,
    reviewCount: 2,
    countdown: new Date("2026-09-30T18:30:00Z"),
    inStock: true,
  },
  {
    id: "compact-speaker",
    name: "Compact Bluetooth Speaker",
    image: Stock,
    price: 28,
    originalPrice: 35,
    discount: 20,
    rating: 4,
    reviewCount: 18,
    badge: "Hot",
    inStock: true,
  },
  {
    id: "fitness-band",
    name: "Everyday Fitness Band",
    image: Stock,
    price: 24,
    rating: 4.5,
    reviewCount: 42,
    badge: "New",
    favorite: true,
    inStock: true,
  },
  {
    id: "portable-camera",
    name: "Portable Action Camera",
    image: Stock,
    price: 89,
    originalPrice: 120,
    discount: 26,
    rating: 3.5,
    reviewCount: 9,
    inStock: false,
  },
] satisfies ProductCardProps[];

const paginatedProducts = Array.from({ length: 10 }, (_, index) => ({
  ...products[index % products.length],
  id: `product-${index + 1}`,
  name: `Product ${index + 1}`,
  price: 20 + index * 4,
})) satisfies ProductCardProps[];

const meta = {
  title: "Organisms/ProductGrid",
  component: ProductGrid,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    products,
    columns: 4,
    paginated: true,
    productsPerPage: 8,
    skeletonCount: 8,
    emptyMessage: "No products found.",
    onProductClick: () => undefined,
    onFavorite: () => undefined,
    onAddToCart: () => undefined,
  },
  argTypes: {
    columns: {
      control: "select",
      options: [2, 3, 4, 5],
    },
    skeletonCount: {
      control: {
        type: "number",
        min: 1,
      },
    },
    productsPerPage: {
      control: {
        type: "number",
        min: 1,
      },
    },
    products: {
      control: false,
    },
    onProductClick: {
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
  decorators: [
    (Story) => (
      <div className="w-[min(72rem,calc(100vw-2rem))]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProductGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
  },
};

export const Paginated: Story = {
  args: {
    products: paginatedProducts,
    productsPerPage: 4,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    skeletonCount: 6,
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};

export const Error: Story = {
  args: {
    error: "Products could not be loaded.",
  },
};
