import { Fragment, useEffect, useMemo, useState } from "react";

import { ProductGridProps } from "@type";
import { ProductCard } from "@components/molecules";
import { Card } from "@atoms";
import { cn } from "@utils";

import {
  getProductGridPageItems,
  getProductGridTotalPages,
  PRODUCT_GRID_CLASS_NAME,
  PRODUCT_GRID_COLUMN_CLASSES,
  PRODUCT_GRID_DEFAULT_COLUMNS,
  PRODUCT_GRID_DEFAULT_EMPTY_MESSAGE,
  PRODUCT_GRID_DEFAULT_PAGINATED,
  PRODUCT_GRID_DEFAULT_PRODUCTS_PER_PAGE,
  PRODUCT_GRID_DEFAULT_SKELETON_COUNT,
  PRODUCT_GRID_FIRST_PAGE,
  PRODUCT_GRID_ERROR_CARD_CLASS_NAME,
  PRODUCT_GRID_STATE_CARD_CLASS_NAME,
} from "./ProductGrid.constants";
import { ProductGridPagination } from "./ProductGridPagination";
import { ProductGridSkeleton } from "./ProductGridSkeleton";

export const ProductGrid = ({
  products,
  loading = false,
  skeletonCount = PRODUCT_GRID_DEFAULT_SKELETON_COUNT,
  emptyMessage = PRODUCT_GRID_DEFAULT_EMPTY_MESSAGE,
  error,
  columns = PRODUCT_GRID_DEFAULT_COLUMNS,
  paginated = PRODUCT_GRID_DEFAULT_PAGINATED,
  productsPerPage = PRODUCT_GRID_DEFAULT_PRODUCTS_PER_PAGE,
  className,
  onProductClick,
  onFavorite,
  onAddToCart,
}: ProductGridProps) => {
  const [currentPage, setCurrentPage] = useState(PRODUCT_GRID_FIRST_PAGE);
  const safeProductsPerPage = Math.max(
    PRODUCT_GRID_FIRST_PAGE,
    productsPerPage,
  );
  const totalPages = getProductGridTotalPages(
    products.length,
    safeProductsPerPage,
  );
  const shouldPaginate = paginated && products.length > safeProductsPerPage;
  const visibleProducts = useMemo(
    () =>
      shouldPaginate
        ? getProductGridPageItems(products, currentPage, safeProductsPerPage)
        : products,
    [currentPage, products, safeProductsPerPage, shouldPaginate],
  );

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  if (error) {
    return (
      <Card className={PRODUCT_GRID_ERROR_CARD_CLASS_NAME} role="alert">
        {error}
      </Card>
    );
  }

  if (loading) {
    return (
      <section
        aria-busy="true"
        aria-label="Products loading"
        className={cn(
          PRODUCT_GRID_CLASS_NAME,
          PRODUCT_GRID_COLUMN_CLASSES[columns],
          className,
        )}
        role="region"
      >
        {Array.from({ length: skeletonCount }, (_, index) => (
          <ProductGridSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <Card className={PRODUCT_GRID_STATE_CARD_CLASS_NAME}>{emptyMessage}</Card>
    );
  }

  return (
    <>
      <section
        className={cn(
          PRODUCT_GRID_CLASS_NAME,
          PRODUCT_GRID_COLUMN_CLASSES[columns],
          className,
        )}
        data-testid="product-grid"
      >
        {visibleProducts.map((product) => (
          <Fragment key={product.id}>
            <ProductCard
              {...product}
              onAddToCart={() => onAddToCart?.(product)}
              onClick={
                onProductClick ? () => onProductClick(product) : undefined
              }
              onFavorite={() => onFavorite?.(product)}
            />
          </Fragment>
        ))}
      </section>
      {shouldPaginate && (
        <ProductGridPagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          totalPages={totalPages}
        />
      )}
    </>
  );
};
