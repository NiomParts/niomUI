import {
  fireEvent,
  render,
  screen,
  within,
  cleanup,
} from "@testing-library/react";
import { describe, it, expect, vi, afterEach } from "vitest";
import Table from "./Table";

const columns = [
  { key: "1", title: "Column 1", dataIndex: "col1" },
  { key: "2", title: "Column 2", dataIndex: "col2" },
];

const data = [
  { key: 1, col1: "Data 1", col2: "Data 2" },
  { key: 2, col1: "Data 3", col2: "Data 4" },
];

describe("Table Component", () => {
  afterEach(() => {
    cleanup();
  });
  it("should apply the correct variant class", () => {
    render(
      <Table id="test-table" columns={columns} data={data} variant="striped" />,
    );
    const tableContainer = screen.getByTestId("test-table");
    expect(within(tableContainer).getByRole("table")).toHaveClass(
      "table--striped",
    );
  });

  it("should have sticky header", () => {
    render(
      <Table id="test-table" columns={columns} data={data} stickyHeader />,
    );
    const tableContainer = screen.getByTestId("test-table");
    expect(within(tableContainer).getByRole("table")).toHaveClass(
      "table--sticky-header",
    );
  });

  it("should have sticky column", () => {
    render(
      <Table id="test-table" columns={columns} data={data} stickyColumn />,
    );
    const tableContainer = screen.getByTestId("test-table");
    expect(within(tableContainer).getByRole("table")).toHaveClass(
      "table--sticky-column",
    );
  });

  it("should apply the correct size class", () => {
    render(
      <Table id="test-table" columns={columns} data={data} size="large" />,
    );
    const tableContainer = screen.getByTestId("test-table");
    expect(within(tableContainer).getByRole("table")).toHaveClass(
      "table--large",
    );
  });

  it("should display the empty message if no data is passed", () => {
    render(
      <Table
        id="test-table"
        columns={columns}
        data={[]}
        emptyMessage="No records found"
      />,
    );
    expect(screen.getByText("No records found")).toBeInTheDocument();
  });

  it("should apply correct width and height", () => {
    const width = "500px";
    const height = "300px";

    render(
      <Table
        id="test-table"
        columns={columns}
        data={data}
        width={width}
        height={height}
      />,
    );

    const tableContainer = screen.getByTestId("test-table");

    expect(tableContainer).toHaveStyle(`width: ${width}`);
    expect(tableContainer).toHaveStyle(`height: ${height}`);
  });

  it("should handle pagination controls correctly", () => {
    render(
      <Table
        id="test-table"
        columns={columns}
        data={data}
        pagination
        pageSize={1}
      />,
    );
    const prevButton = screen.getByText("Prev");
    const nextButton = screen.getByText("Next");
    expect(prevButton).toBeDisabled();
    fireEvent.click(nextButton);
    expect(screen.getByText("Page 2 of 2")).toBeInTheDocument();
  });

  it("should render custom header and footer templates", () => {
    const headerTemplate = <div>Custom Header</div>;
    const footerTemplate = <div>Custom Footer</div>;
    render(
      <Table
        id="test-table"
        columns={columns}
        data={data}
        headerTemplate={headerTemplate}
        footerTemplate={footerTemplate}
        headerIndex={0}
      />,
    );
    expect(screen.getByText("Custom Header")).toBeInTheDocument();
    expect(screen.getByText("Custom Footer")).toBeInTheDocument();
  });

  it("should apply selectable class when selectable prop is true", () => {
    render(<Table id="test-table" columns={columns} data={data} selectable />);
    const tableContainer = screen.getByTestId("test-table");
    expect(within(tableContainer).getByRole("table")).toHaveClass(
      "table--selectable",
    );
  });

  it("should call onRowClick when a row is clicked", () => {
    const mockOnRowClick = vi.fn();

    render(
      <Table
        id="test-table"
        columns={columns}
        data={data}
        selectable
        onRowClick={mockOnRowClick}
      />,
    );

    const tableContainer = screen.getByTestId("test-table");
    const row = within(tableContainer).getByText("Data 1").closest("tr");
    expect(row).not.toBeNull();

    if (row) {
      fireEvent.click(row);
      expect(mockOnRowClick).toHaveBeenCalledTimes(1);
      expect(mockOnRowClick).toHaveBeenCalledWith(data[0]);
    }
  });
});
