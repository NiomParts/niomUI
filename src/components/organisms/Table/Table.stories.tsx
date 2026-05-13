import { Meta, StoryFn } from "@storybook/react";
import { TableProps, ColumnProps, PrimitiveValue } from "./Table.type";
import Table from "./Table";

export default {
  title: "Organisms/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    className: { control: "text" },
    colClassName: { control: "text" },
    rowClassName: { control: "text" },
    width: { control: "text" },
    height: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "striped", "bordered", "borderless", "compact"],
    },
    hover: { control: "boolean" },
    shadowOnHover: {
      control: "select",
      options: ["none", "small", "medium", "large"],
    },
    pagination: { control: "boolean" },
    pageSize: { control: "number" },
    stickyHeader: { control: "boolean" },
    stickyColumn: { control: "boolean" },
    size: { control: "select", options: ["small", "medium", "large"] },
    selectable: { control: "boolean" },
    selectMode: { control: "select", options: ["single", "multiple"] },
    headerTemplate: { control: "text" },
    footerTemplate: { control: "text" },
  },
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

const columns: ColumnProps[] = [
  {
    key: "user",
    title: "Name",
    dataIndex: "user",
    fixed: "left",
    render: (value: PrimitiveValue) => (
      <a href="/" className="">
        {value as React.ReactNode}
      </a>
    ),
  },
  {
    key: "age",
    title: "Age",
    dataIndex: "age",
  },
  {
    key: "address",
    title: "Address",
    dataIndex: "address",
  },
  {
    key: "telephone",
    title: "Telephone",
    dataIndex: "telephone",
  },
];

const data = [
  {
    user: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    telephone: "123-456-7890",
  },
  {
    user: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    telephone: "123-456-7890",
  },
  {
    user: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    telephone: "123-456-7890",
  },
];

// variant args
export const Default = Template.bind({});
Default.args = {
  id: "table",
  columns: columns,
  data: data,
};

export const Striped = Template.bind({});
Striped.args = {
  ...Default.args,
  variant: "striped",
};

export const Bordered = Template.bind({});
Bordered.args = {
  ...Default.args,
  variant: "bordered",
};

export const Borderless = Template.bind({});
Borderless.args = {
  ...Default.args,
  variant: "borderless",
};

// hover props

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
  hover: true,
};

// size props

export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: "medium",
};
export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: "large",
};

// sticky props

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  ...Default.args,
  stickyHeader: true,
};

export const StickyColumn = Template.bind({});
StickyColumn.args = {
  ...Default.args,
  stickyColumn: true,
};

// paginations props

export const Pagination = Template.bind({});
Pagination.args = {
  ...Default.args,
  pagination: true,
};

export const PageSize = Template.bind({});
PageSize.args = {
  ...Default.args,
  pageSize: 10,
};

// click event props
export const Selectable = Template.bind({});
Selectable.args = {
  ...Default.args,
  selectable: true,
};
