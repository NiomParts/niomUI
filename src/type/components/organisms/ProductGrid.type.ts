import type { ProductCardProps } from "@type/components/molecules";

export interface ProductGridProps {
  /**
   * Collection of products displayed inside the grid.
   */
  products: ProductCardProps[];

  /**
   * Indicates whether product data is currently loading.
   */
  loading?: boolean;

  /**
   * Number of placeholder cards displayed while loading.
   *
   * @default 8
   */
  skeletonCount?: number;

  /**
   * Message displayed when no products are available.
   *
   * @default "No products found."
   */
  emptyMessage?: React.ReactNode;

  /**
   * Optional error message displayed when products cannot be rendered.
   */
  error?: React.ReactNode;

  /**
   * Controls the maximum number of columns.
   *
   * @default 4
   */
  columns?: 2 | 3 | 4 | 5;

  /**
   * Enables client-side pagination.
   *
   * @default true
   */
  paginated?: boolean;

  /**
   * Number of products displayed on each page.
   *
   * @default 8
   */
  productsPerPage?: number;

  /**
   * Additional CSS classes used to extend or override styling.
   */
  className?: string;

  /**
   * Called when a product card is selected.
   */
  onProductClick?: (product: ProductCardProps) => void;

  /**
   * Called when the wishlist action is triggered for a product.
   */
  onFavorite?: (product: ProductCardProps) => void;

  /**
   * Called when the cart action is triggered for a product.
   */
  onAddToCart?: (product: ProductCardProps) => void;
}

export interface ProductGridPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
