import type { ProductGridProps } from "@type/components/organisms";

export const PRODUCT_GRID_DEFAULT_COLUMNS = 4;
export const PRODUCT_GRID_DEFAULT_SKELETON_COUNT = 8;
export const PRODUCT_GRID_DEFAULT_EMPTY_MESSAGE = "No products found.";
export const PRODUCT_GRID_DEFAULT_PRODUCTS_PER_PAGE = 8;
export const PRODUCT_GRID_DEFAULT_PAGINATED = true;
export const PRODUCT_GRID_FIRST_PAGE = 1;

export const PRODUCT_GRID_CLASS_NAME =
  "grid grid-cols-[repeat(2,minmax(0,20rem))] gap-3";

export const PRODUCT_GRID_COLUMN_CLASSES: Record<
  NonNullable<ProductGridProps["columns"]>,
  string
> = {
  2: "md:grid-cols-[repeat(2,minmax(0,20rem))]",
  3: "md:grid-cols-[repeat(3,minmax(0,20rem))]",
  4: "md:grid-cols-[repeat(3,minmax(0,20rem))] xl:grid-cols-[repeat(4,minmax(0,20rem))]",
  5: "md:grid-cols-[repeat(3,minmax(0,20rem))] xl:grid-cols-[repeat(5,minmax(0,20rem))]",
};

export const PRODUCT_GRID_STATE_CARD_CLASS_NAME = "p-6 text-center";
export const PRODUCT_GRID_ERROR_CARD_CLASS_NAME = "p-6 text-center text-danger";

export const PRODUCT_GRID_SKELETON_CARD_CLASS_NAME = "grid gap-4 p-3";
export const PRODUCT_GRID_SKELETON_IMAGE_CLASS_NAME =
  "aspect-square w-full rounded-lg";
export const PRODUCT_GRID_SKELETON_CONTENT_CLASS_NAME = "grid gap-2";
export const PRODUCT_GRID_SKELETON_TITLE_CLASS_NAME = "h-5 w-4/5";
export const PRODUCT_GRID_SKELETON_META_CLASS_NAME = "h-4 w-3/5";
export const PRODUCT_GRID_SKELETON_PRICE_CLASS_NAME = "h-6 w-24";

export const PRODUCT_GRID_PAGINATION_CLASS_NAME =
  "mt-6 flex items-center justify-center gap-2";

export const PRODUCT_GRID_PAGINATION_STATUS_CLASS_NAME =
  "min-w-24 text-center text-sm font-semibold text-muted-foreground";

export function getProductGridTotalPages(
  totalProducts: number,
  productsPerPage: number,
) {
  return Math.max(
    PRODUCT_GRID_FIRST_PAGE,
    Math.ceil(totalProducts / productsPerPage),
  );
}

export function getProductGridPageItems<T>(
  items: T[],
  currentPage: number,
  productsPerPage: number,
) {
  const startIndex = (currentPage - PRODUCT_GRID_FIRST_PAGE) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  return items.slice(startIndex, endIndex);
}
