import { useMemo } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@atoms";
import { useTableOnRowClick, useTablePageControl } from "@hooks";
import { cn } from "@utils";

import type {
  PrimitiveValue,
  RowData,
  TableProps,
} from "@type/components/organisms/Table.type";

export const Table = ({
  id,
  headerIndex,
  className = "",
  headerClassName = "",
  colClassName = "",
  rowClassName = "",
  colorScheme = "default",
  variant = "default",
  hover = false,
  shadowOnHover = "none",
  pagination = false,
  pageSize = 10,
  stickyHeader = false,
  stickyColumn = false,
  stripedOddRowColor,
  stripedEvenRowColor,
  size = "medium",
  columns,
  data,
  width,
  height,
  selectable = false,
  selectMode = "single",
  emptyMessage,
  onSelectRow,
  onDeselectRow,
  onRowClick,
  headerTemplate,
  caption,
  footerTemplate,
  expandableHeader = true,
  selectedRowId,
  highlightRowBorder,
}: TableProps) => {
  const resolvedColorScheme =
    variant === "primary" ||
    variant === "secondary" ||
    variant === "accent" ||
    variant === "tertiary"
      ? variant
      : colorScheme;

  const { selectedRows, handleOnRowClick } = useTableOnRowClick({
    selectMode,
    onSelectRow,
    onRowClick,
    onDeselectRow,
    highlightRowBorder,
  });

  const {
    handlePrevPage,
    currentPage,
    currentPageSize,
    handleNextPage,
    handlePageSizeChange,
  } = useTablePageControl({
    totalPages: Math.ceil(data.length / pageSize),
    pageSize,
  });

  const totalPages = Math.max(1, Math.ceil(data.length / currentPageSize));
  const indexOfLastRow = currentPage * currentPageSize;
  const indexOfFirstRow = indexOfLastRow - currentPageSize;
  const currentData = data.slice(indexOfFirstRow, indexOfLastRow);
  const tableContainerStyle = {
    width,
    height,
    "--table-striped-odd-bg": stripedOddRowColor,
    "--table-striped-even-bg": stripedEvenRowColor,
  } as CSSProperties;

  const tableClasses = cn(
    "table",
    {
      "table--hover transition duration-200 ease-in-out": hover,
      "shadow-none": shadowOnHover === "none",
      "shadow-sm": shadowOnHover === "small",
      "shadow-md": shadowOnHover === "medium",
      "shadow-lg": shadowOnHover === "large",
      "table--sticky-header": stickyHeader,
      "table--sticky-column": stickyColumn,
      "table--small": size === "small",
      "table--medium": size === "medium",
      "table--large": size === "large",
      "table--xs": size === "xs",
      "table--default": variant === "default",
      "table--striped": variant === "striped",
      "table--bordered": variant === "bordered",
      "table--borderless": variant === "borderless",
      "table--compact": variant === "compact",
      "table--color-variant":
        variant === "primary" ||
        variant === "secondary" ||
        variant === "accent" ||
        variant === "tertiary",
      "table--selectable": selectable,
      "table--selected": selectedRows.length > 0,
      "table--deselected": selectedRows.length === 0,
      "table--scheme-default": resolvedColorScheme === "default",
      "table--scheme-primary": resolvedColorScheme === "primary",
      "table--scheme-secondary": resolvedColorScheme === "secondary",
      "table--scheme-accent": resolvedColorScheme === "accent",
      "table--scheme-tertiary": resolvedColorScheme === "tertiary",
    },
    className,
  );

  const handleRowKeyDown = (
    event: KeyboardEvent<HTMLTableRowElement>,
    rowData: RowData,
    rowIndex: number,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOnRowClick(rowData, rowIndex);
    }
  };

  const renderCellValue = (value: PrimitiveValue) => {
    if (value === null || value === undefined) return value;
    return typeof value === "object" && !("type" in value)
      ? JSON.stringify(value)
      : value;
  };

  const renderTableBody = useMemo(() => {
    if (!currentData.length) {
      return (
        <tbody>
          <tr>
            <td colSpan={columns.length} className="text-center">
              {emptyMessage || "No data available"}
            </td>
          </tr>
        </tbody>
      );
    }

    return (
      <tbody>
        {currentData.map((rowData, rowIndex) => (
          <tr
            key={`tr-${rowData.id ?? rowIndex}`}
            tabIndex={selectable ? 0 : undefined}
            aria-selected={selectedRows.includes(rowIndex)}
            aria-disabled={!selectable}
            onKeyDown={(event) => handleRowKeyDown(event, rowData, rowIndex)}
            onClick={
              selectable ? () => handleOnRowClick(rowData, rowIndex) : undefined
            }
            className={cn(
              "niom-focus-ring",
              {
                "row--clickable": selectable,
                "row--selected":
                  selectedRows.includes(rowIndex) ||
                  (selectable && selectedRowId && selectedRowId === rowData.id),
              },
              `row_${rowData.id}`,
              rowClassName,
            )}
          >
            {columns.map((col, index) => {
              const cellProps = col.onCell ? col.onCell(rowData, rowIndex) : {};
              const cellValue = rowData[col.dataIndex];

              return (
                <td
                  key={`td-${col.key}-${index}`}
                  className={cn(
                    {
                      [`table--sticky-column-${col.fixed}`]:
                        stickyColumn && col.fixed,
                    },
                    colClassName,
                    col.className,
                    col.cellClassName,
                  )}
                  {...cellProps}
                >
                  {col.render
                    ? col.render(cellValue, rowIndex)
                    : renderCellValue(cellValue)}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    );
  }, [
    columns,
    colClassName,
    currentData,
    emptyMessage,
    handleOnRowClick,
    rowClassName,
    selectable,
    selectedRowId,
    selectedRows,
    stickyColumn,
  ]);

  const renderTableHead = () => (
    <thead>
      {headerTemplate && headerIndex !== undefined && headerIndex !== 1 && (
        <tr className="header-caption">
          {typeof headerTemplate === "function"
            ? headerTemplate()
            : headerTemplate}
        </tr>
      )}
      <AnimatePresence initial={false}>
        {expandableHeader && (
          <motion.tr
            key="header-row"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15, ease: [0.3, 0.6, 0.3, 1] }}
            layout
            className={cn(rowClassName, "table_head_row overflow-hidden")}
          >
            {columns.map((col) =>
              col.colSpan !== 0 ? (
                <th
                  key={`th-${col.key}`}
                  style={{ width: col.width }}
                  className={cn(
                    {
                      [`table--sticky-column-${col.fixed}`]:
                        stickyColumn && col.fixed,
                    },
                    headerClassName,
                    colClassName,
                    col.className,
                  )}
                  colSpan={col.colSpan || 1}
                  rowSpan={col.rowSpan || 1}
                >
                  {col.title}
                </th>
              ) : null,
            )}
          </motion.tr>
        )}
      </AnimatePresence>
    </thead>
  );

  const renderPagination = () => {
    if (!pagination) return null;

    return (
      <div className="paginator-wrapper">
        <nav className="paginator-controls" aria-label="Pagination">
          <Button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            variant="outline"
            size="sm"
            aria-label="Previous Page"
          >
            Prev
          </Button>
          <span className="paginator-status">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            variant="outline"
            size="sm"
            aria-label="Next Page"
          >
            Next
          </Button>
        </nav>

        <label htmlFor="page-size" className="page-size-selector">
          Rows per page:
          <select
            id="page-size"
            value={currentPageSize}
            onChange={(event) => handlePageSizeChange(event.target.value)}
          >
            {[10, 20, 50, 100].map((sizeOption) => (
              <option key={sizeOption} value={sizeOption}>
                {sizeOption}
              </option>
            ))}
          </select>
        </label>
      </div>
    );
  };

  return (
    <div
      id={id}
      data-testid={id}
      className={cn("table-container", variant, size, className)}
      style={tableContainerStyle}
    >
      <table className={tableClasses}>
        {caption && (
          <caption>
            {typeof caption === "function" ? caption() : caption}
          </caption>
        )}
        {renderTableHead()}
        {renderTableBody}
      </table>
      {footerTemplate && (
        <div className="table-footer">
          {typeof footerTemplate === "function"
            ? footerTemplate()
            : footerTemplate}
        </div>
      )}
      {renderPagination()}
    </div>
  );
};

export default Table;
