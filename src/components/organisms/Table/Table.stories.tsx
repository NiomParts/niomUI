import type { Meta, StoryObj } from "@storybook/react";

import type {
  ColumnProps,
  RowData,
} from "@/type/components/organisms/Table.type";
import { Table } from "./Table";

const columns = [
  {
    key: "order",
    title: "Order",
    dataIndex: "order",
    fixed: "left",
    width: "9rem",
  },
  {
    key: "customer",
    title: "Customer",
    dataIndex: "customer",
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
    render: (value) => (
      <span className="rounded-sm bg-primary px-2 py-1 text-xs font-semibold text-primary-foreground">
        {String(value)}
      </span>
    ),
  },
  {
    key: "total",
    title: "Total",
    dataIndex: "total",
    className: "text-right",
    cellClassName: "text-right font-semibold text-accent",
  },
] satisfies ColumnProps[];

const data = [
  {
    id: "ord-1001",
    order: "#1001",
    customer: "Maya Chen",
    status: "Paid",
    total: "MUR 12,400",
  },
  {
    id: "ord-1002",
    order: "#1002",
    customer: "Noah Patel",
    status: "Packed",
    total: "MUR 8,250",
  },
  {
    id: "ord-1003",
    order: "#1003",
    customer: "Ava Morel",
    status: "Pending",
    total: "MUR 3,980",
  },
  {
    id: "ord-1004",
    order: "#1004",
    customer: "Leo Simon",
    status: "Paid",
    total: "MUR 18,100",
  },
] satisfies RowData[];

const paginatedData = Array.from({ length: 18 }, (_, index) => ({
  ...data[index % data.length],
  id: `ord-${index + 1}`,
  order: `#${1001 + index}`,
  total: `MUR ${(4200 + index * 730).toLocaleString("en-US")}`,
})) satisfies RowData[];

const meta = {
  title: "Organisms/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    id: "orders-table",
    caption: "Recent orders",
    columns,
    data,
    colorScheme: "default",
    variant: "default",
    size: "medium",
    hover: true,
    selectable: false,
    pagination: false,
    stickyHeader: false,
    stickyColumn: false,
    emptyMessage: "No orders found.",
  },
  argTypes: {
    columns: {
      control: false,
    },
    data: {
      control: false,
    },
    variant: {
      control: "select",
      options: [
        "default",
        "striped",
        "bordered",
        "borderless",
        "compact",
        "primary",
        "secondary",
        "accent",
        "tertiary",
      ],
    },
    colorScheme: {
      control: "select",
      options: ["default", "primary", "secondary", "accent", "tertiary"],
    },
    size: {
      control: "select",
      options: ["xs", "small", "medium", "large"],
    },
    shadowOnHover: {
      control: "select",
      options: ["none", "small", "medium", "large"],
    },
    selectMode: {
      control: "select",
      options: ["single", "multiple"],
    },
    stripedOddRowColor: {
      control: "text",
      table: {
        type: {
          summary: "CSS color string",
        },
      },
    },
    stripedEvenRowColor: {
      control: "text",
      table: {
        type: {
          summary: "CSS color string",
        },
      },
    },
    onRowClick: {
      table: {
        disable: true,
      },
    },
    onSelectRow: {
      table: {
        disable: true,
      },
    },
    onDeselectRow: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[min(64rem,calc(100vw-2rem))]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Striped: Story = {
  args: {
    variant: "striped",
  },
};

export const CustomStripedColors: Story = {
  args: {
    variant: "striped",
    stripedOddRowColor:
      "color-mix(in srgb, var(--color-primary) 12%, var(--color-surface))",
    stripedEvenRowColor:
      "color-mix(in srgb, var(--color-secondary) 16%, var(--color-surface))",
  },
};

export const AccentScheme: Story = {
  args: {
    colorScheme: "accent",
    headerIndex: 0,
    headerTemplate: <th colSpan={columns.length}>Accent report</th>,
    highlightRowBorder: true,
    selectable: true,
    variant: "striped",
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: "primary",
  },
};

export const SecondaryVariant: Story = {
  args: {
    variant: "secondary",
  },
};

export const AccentVariant: Story = {
  args: {
    variant: "accent",
  },
};

export const TertiaryVariant: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Bordered: Story = {
  args: {
    variant: "bordered",
  },
};

export const Selectable: Story = {
  args: {
    selectable: true,
    highlightRowBorder: true,
  },
};

export const Paginated: Story = {
  args: {
    data: paginatedData,
    pagination: true,
    pageSize: 10,
  },
};

export const StickyColumn: Story = {
  args: {
    stickyColumn: true,
    width: "48rem",
  },
};

export const Empty: Story = {
  args: {
    data: [],
  },
};
