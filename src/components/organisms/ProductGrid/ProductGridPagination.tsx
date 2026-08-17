import { ArrowLeft, ArrowRight, Button } from "@atoms";
import type { ProductGridPaginationProps } from "@type/components/organisms";

import {
  PRODUCT_GRID_FIRST_PAGE,
  PRODUCT_GRID_PAGINATION_CLASS_NAME,
  PRODUCT_GRID_PAGINATION_STATUS_CLASS_NAME,
} from "./ProductGrid.constants";

export function ProductGridPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductGridPaginationProps) {
  return (
    <nav
      aria-label="Product pagination"
      className={PRODUCT_GRID_PAGINATION_CLASS_NAME}
    >
      <Button
        aria-label="Go to previous product page"
        disabled={currentPage === PRODUCT_GRID_FIRST_PAGE}
        onClick={() => onPageChange(currentPage - 1)}
        size="sm"
        variant="outline"
      >
        <ArrowLeft aria-hidden="true" className="h-4 w-4" />
      </Button>
      <span
        aria-live="polite"
        className={PRODUCT_GRID_PAGINATION_STATUS_CLASS_NAME}
      >
        Page {currentPage} of {totalPages}
      </span>
      <Button
        aria-label="Go to next product page"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        size="sm"
        variant="outline"
      >
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </Button>
    </nav>
  );
}
