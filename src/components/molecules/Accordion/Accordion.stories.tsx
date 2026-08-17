import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Cart,
  Heart,
  MinusIcon,
  PlusIcon,
  Star,
  StarFilled,
} from "@components/atoms";
import { CheckBoxGroup } from "../CheckboxGroup";

import { ACCORDION_VARIANTS } from "./constants/Accordion.constants";
import { Accordion } from "./components/Accordion";
import { AccordionItem } from "./components/AccordionItem";

const meta: Meta<typeof Accordion> = {
  title: "Molecules/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    multiple: {
      control: "boolean",
    },
    variant: {
      control: "select",
      options: ACCORDION_VARIANTS,
    },
    defaultActiveKey: {
      control: "object",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const checkboxItems = [
  { label: "Graphics", value: "graphics", totalCount: 12 },
  { label: "Audio", value: "audio", totalCount: 8 },
  { label: "Peripherals", value: "peripherals", totalCount: 24 },
  { label: "Accessories", value: "accessories", totalCount: 16 },
];

export const Default: Story = {
  args: {
    defaultActiveKey: 0,
    variant: "primary",
  },
  render: (args) => (
    <Accordion {...args} className="max-w-md space-y-3 rounded-none">
      <AccordionItem
        label="Shop by departments"
        icon={<PlusIcon size={18} />}
        activeIcon={<MinusIcon size={18} />}
      >
        <p>
          Browse focused groups of products without leaving the filter panel.
        </p>
      </AccordionItem>
      <AccordionItem
        label="Today's deals"
        icon={<PlusIcon size={18} />}
        activeIcon={<MinusIcon size={18} />}
      >
        <p>Show products with active discounts and limited-time offers.</p>
      </AccordionItem>
      <AccordionItem
        label="Disabled section"
        disabled
        icon={<PlusIcon size={18} />}
      >
        <p>This content stays closed while disabled.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ACCORDION_VARIANTS.map((variant) => (
        <Accordion
          key={variant}
          defaultActiveKey={0}
          variant={variant}
          className="space-y-3"
        >
          <AccordionItem
            label={`${variant} filter`}
            icon={<PlusIcon size={18} />}
            activeIcon={<MinusIcon size={18} />}
          >
            <p>
              Hover, focus, and open this header to inspect the theme treatment.
            </p>
          </AccordionItem>
          <AccordionItem
            label="Shipping options"
            icon={<ArrowRight size={18} />}
            activeIcon={<ArrowDown size={18} />}
          >
            <p>
              Each variant uses global theme tokens for borders and surfaces.
            </p>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  ),
};

export const NestedAccordion: Story = {
  render: () => (
    <Accordion
      defaultActiveKey={0}
      variant="boxed"
      className="max-w-xl space-y-3"
    >
      <AccordionItem
        label="Product filters"
        icon={<PlusIcon size={18} />}
        activeIcon={<MinusIcon size={18} />}
      >
        <Accordion
          multiple
          defaultActiveKey={[0]}
          variant="outline"
          className="space-y-2"
        >
          <AccordionItem
            label="Departments"
            icon={<Cart size={16} />}
            padding="small"
          >
            <div className="grid gap-2">
              <span>Electronics</span>
              <span>Beauty & care</span>
              <span>Car accessories</span>
            </div>
          </AccordionItem>
          <AccordionItem
            label="Deals"
            icon={<Heart size={16} />}
            padding="small"
          >
            <div className="grid gap-2">
              <span>Up to 25%</span>
              <span>Up to 50%</span>
              <span>Clearance</span>
            </div>
          </AccordionItem>
          <AccordionItem
            label="Ratings"
            icon={<Star size={16} />}
            activeIcon={<StarFilled size={16} />}
            padding="small"
          >
            <div className="grid gap-2">
              <span>4 stars & up</span>
              <span>3 stars & up</span>
              <span>All ratings</span>
            </div>
          </AccordionItem>
        </Accordion>
      </AccordionItem>
      <AccordionItem
        label="Shipping options"
        icon={<ArrowRight size={18} />}
        activeIcon={<ArrowDown size={18} />}
      >
        <p>Outer accordion sections still work independently.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const IconPositions: Story = {
  render: () => (
    <Accordion
      multiple
      defaultActiveKey={[0, 1]}
      variant="accent"
      className="space-y-2"
    >
      <AccordionItem
        label="Left icon"
        icon={<Cart size={18} />}
        iconPosition="left"
      >
        <p>The icon appears before the label.</p>
      </AccordionItem>
      <AccordionItem
        label="Right icon"
        icon={<Heart size={18} />}
        iconPosition="right"
      >
        <p>The icon appears at the far edge.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const HeaderPositions: Story = {
  render: () => (
    <Accordion
      multiple
      defaultActiveKey={[0, 1, 2, 3]}
      variant="outline"
      className="grid max-w-5xl gap-4 md:grid-cols-2"
    >
      <AccordionItem
        label="Header top"
        headerPosition="top"
        icon={<PlusIcon size={18} />}
      >
        <p>Default stacked accordion layout.</p>
      </AccordionItem>
      <AccordionItem
        label="Header bottom"
        headerPosition="bottom"
        icon={<PlusIcon size={18} />}
      >
        <p>The trigger renders below the content.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const HeaderAndFooter: Story = {
  render: () => (
    <Accordion defaultActiveKey={0} variant="boxed" className="max-w-xl space-y-3">
      <AccordionItem
        label="Order summary"
        icon={<Cart size={18} />}
        activeIcon={<MinusIcon size={18} />}
        header={
          <div className="flex items-center justify-between gap-3">
            <span>Current basket</span>
            <span className="rounded-sm bg-accent px-2 py-1 text-xs font-semibold text-accent-foreground">
              3 items
            </span>
          </div>
        }
        footer={
          <div className="flex items-center justify-between gap-3">
            <span>Estimated total</span>
            <span className="font-semibold text-foreground">MUR 12,400</span>
          </div>
        }
      >
        <div className="grid gap-2">
          <span>Wireless keyboard</span>
          <span>USB-C hub</span>
          <span>Protective sleeve</span>
        </div>
      </AccordionItem>
      <AccordionItem
        label="Delivery notes"
        icon={<Heart size={18} />}
        activeIcon={<MinusIcon size={18} />}
        header="Customer preferences"
        footer="These notes are visible to the fulfillment team."
      >
        <p>Leave at reception if the customer is unavailable.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const ContentOptions: Story = {
  render: () => (
    <Accordion
      multiple
      defaultActiveKey={[0, 1, 2]}
      variant="tertiary"
      className="max-w-xl space-y-3"
    >
      <AccordionItem
        label="Header and footer"
        header="Panel header"
        footer="Panel footer"
        icon={<PlusIcon size={18} />}
        activeIcon={<MinusIcon size={18} />}
      >
        <p>The content area can render a header, body, and footer.</p>
      </AccordionItem>
      <AccordionItem
        label="Large padding and shadow"
        padding="large"
        shadow="medium"
        icon={<PlusIcon size={18} />}
        activeIcon={<MinusIcon size={18} />}
      >
        <p>Padding and shadow props adjust the panel density.</p>
      </AccordionItem>
      <AccordionItem
        label="Unbordered item"
        bordered={false}
        icon={<PlusIcon size={18} />}
        activeIcon={<MinusIcon size={18} />}
      >
        <p>This item removes the outer border.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithCheckboxGroup: Story = {
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([
      "graphics",
    ]);

    return (
      <Accordion defaultActiveKey={0} variant="boxed" className="max-w-sm">
        <AccordionItem
          label="Product categories"
          icon={<PlusIcon size={18} />}
          activeIcon={<MinusIcon size={18} />}
        >
          <CheckBoxGroup
            items={checkboxItems}
            value={selectedValues}
            onChange={setSelectedValues}
            orientation="vertical"
          />
        </AccordionItem>
      </Accordion>
    );
  },
};
