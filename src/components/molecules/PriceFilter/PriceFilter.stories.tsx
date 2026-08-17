import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PriceFilter } from "./PriceFilter";

const meta = {
  title: "Molecules/PriceFilter",
  component: PriceFilter,

  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  // Default required props
  args: {
    value: [20, 70] as [number, number],
    onChange: () => {},
  },
} satisfies Meta<typeof PriceFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

// =========================================================
// DEFAULT
// =========================================================

export const Default: Story = {
  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>(
      args.value,
    );

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// CUSTOM LIMITS
// =========================================================

export const CustomLimits: Story = {
  args: {
    min: 0,
    max: 5000,
    step: 100,
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      500, 2500,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// MAURITIAN RUPEES
// =========================================================

export const MauritianRupees: Story = {
  args: {
    min: 0,
    max: 100000,
    step: 500,
    currency: "MUR",
    locale: "en-MU",
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      500, 50000,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// CUSTOM LABEL
// =========================================================

export const CustomLabel: Story = {
  args: {
    label: "Budget Range",
    min: 20,
    max: 500,
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      20, 70,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// DISABLED
// =========================================================

export const Disabled: Story = {
  args: {
    value: [20, 70] as [number, number],
    disabled: true,
  },

  render: (args) => {
    return <PriceFilter {...args} onChange={() => {}} />;
  },
};

// =========================================================
// LARGE PRICE VALUES
// =========================================================

export const LargePriceValues: Story = {
  args: {
    min: 0,
    max: 5000000,
    step: 50000,
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      500000, 1500000,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// DECIMAL PRICE VALUES
// =========================================================

export const DecimalPriceValues: Story = {
  args: {
    min: 0,
    max: 100,
    step: 0.01,
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      10.99, 99.99,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// EURO CURRENCY
// =========================================================

export const EuroCurrency: Story = {
  args: {
    currency: "EUR",
    locale: "en-GB",
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      20, 70,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// BRITISH POUNDS
// =========================================================

export const BritishPounds: Story = {
  args: {
    currency: "GBP",
    locale: "en-GB",
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      20, 70,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};

// =========================================================
// MAXIMUM RANGE SELECTED
// =========================================================

export const MaximumRangeSelected: Story = {
  args: {
    min: 0,
    max: 1000,
  },

  render: (args) => {
    const [priceRange, setPriceRange] = React.useState<[number, number]>([
      0, 1000,
    ]);

    return (
      <PriceFilter {...args} value={priceRange} onChange={setPriceRange} />
    );
  },
};
