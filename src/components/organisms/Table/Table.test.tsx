import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type {
  ColumnProps,
  RowData,
} from "@/type/components/organisms/Table.type";
import { Table } from "./Table";

const columns = [
  { key: "name", title: "Name", dataIndex: "name" },
  { key: "status", title: "Status", dataIndex: "status" },
  {
    key: "total",
    title: "Total",
    dataIndex: "total",
    render: (value) => <strong>{String(value)}</strong>,
  },
] satisfies ColumnProps[];

const data = [
  { id: "row-1", name: "Maya Chen", status: "Paid", total: "MUR 12,400" },
  { id: "row-2", name: "Noah Patel", status: "Packed", total: "MUR 8,250" },
  { id: "row-3", name: "Ava Morel", status: "Pending", total: "MUR 3,980" },
] satisfies RowData[];

describe("Table", () => {
  it("renders column headers and row data", () => {
    render(<Table columns={columns} data={data} id="orders-table" />);

    expect(
      screen.getByRole("columnheader", { name: "Name" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Maya Chen")).toBeInTheDocument();
    expect(screen.getByText("MUR 12,400")).toBeInTheDocument();
  });

  it("applies variant, size, sticky, and selectable classes", () => {
    render(
      <Table
        columns={columns}
        data={data}
        id="orders-table"
        selectable
        size="large"
        stickyColumn
        stickyHeader
        variant="striped"
      />,
    );

    const table = within(screen.getByTestId("orders-table")).getByRole("table");

    expect(table).toHaveClass("table--striped");
    expect(table).toHaveClass("table--large");
    expect(table).toHaveClass("table--sticky-column");
    expect(table).toHaveClass("table--sticky-header");
    expect(table).toHaveClass("table--selectable");
  });

  it("applies a color scheme class", () => {
    render(
      <Table
        colorScheme="accent"
        columns={columns}
        data={data}
        id="orders-table"
      />,
    );

    expect(
      within(screen.getByTestId("orders-table")).getByRole("table"),
    ).toHaveClass("table--scheme-accent");
  });

  it("supports color variants", () => {
    render(
      <Table
        columns={columns}
        data={data}
        id="orders-table"
        variant="secondary"
      />,
    );

    const table = within(screen.getByTestId("orders-table")).getByRole("table");

    expect(table).toHaveClass("table--color-variant");
    expect(table).toHaveClass("table--scheme-secondary");
  });

  it("sets custom striped row colors as CSS variables", () => {
    render(
      <Table
        columns={columns}
        data={data}
        id="orders-table"
        stripedEvenRowColor="#182641"
        stripedOddRowColor="#111c30"
        variant="striped"
      />,
    );

    expect(screen.getByTestId("orders-table")).toHaveStyle({
      "--table-striped-even-bg": "#182641",
      "--table-striped-odd-bg": "#111c30",
    });
  });

  it("renders an empty message", () => {
    render(
      <Table
        columns={columns}
        data={[]}
        emptyMessage="No orders available"
        id="orders-table"
      />,
    );

    expect(screen.getByText("No orders available")).toBeInTheDocument();
  });

  it("applies container dimensions", () => {
    render(
      <Table
        columns={columns}
        data={data}
        height="20rem"
        id="orders-table"
        width="40rem"
      />,
    );

    expect(screen.getByTestId("orders-table")).toHaveStyle({
      height: "20rem",
      width: "40rem",
    });
  });

  it("renders caption, header template, and footer template", () => {
    render(
      <Table
        caption="Recent orders"
        columns={columns}
        data={data}
        footerTemplate={<span>End of orders</span>}
        headerIndex={0}
        headerTemplate={<th colSpan={columns.length}>Custom report header</th>}
        id="orders-table"
      />,
    );

    expect(screen.getByText("Recent orders")).toBeInTheDocument();
    expect(screen.getByText("Custom report header")).toBeInTheDocument();
    expect(screen.getByText("End of orders")).toBeInTheDocument();
  });

  it("calls onRowClick when a selectable row is clicked", () => {
    const handleRowClick = vi.fn();

    render(
      <Table
        columns={columns}
        data={data}
        id="orders-table"
        onRowClick={handleRowClick}
        selectable
      />,
    );

    fireEvent.click(screen.getByText("Maya Chen").closest("tr")!);

    expect(handleRowClick).toHaveBeenCalledWith(data[0]);
  });

  it("selects a row with keyboard interaction", () => {
    render(
      <Table
        columns={columns}
        data={data}
        highlightRowBorder
        id="orders-table"
        selectable
      />,
    );

    const row = screen.getByText("Maya Chen").closest("tr")!;

    expect(row).toHaveClass(
      "niom-focus-ring",
    );
    fireEvent.keyDown(row, { key: "Enter" });

    expect(row).toHaveClass("row--selected");
  });

  it("paginates table rows", () => {
    render(
      <Table
        columns={columns}
        data={data}
        id="orders-table"
        pageSize={1}
        pagination
      />,
    );

    expect(screen.getByText("Maya Chen")).toBeInTheDocument();
    expect(screen.queryByText("Noah Patel")).not.toBeInTheDocument();
    expect(screen.getByText("Page 1 of 3")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Next Page" }));

    expect(screen.getByText("Noah Patel")).toBeInTheDocument();
    expect(screen.queryByText("Maya Chen")).not.toBeInTheDocument();
    expect(screen.getByText("Page 2 of 3")).toBeInTheDocument();
  });
});
