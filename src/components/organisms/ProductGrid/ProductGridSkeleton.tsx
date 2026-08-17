import { Card, Skeleton } from "@atoms";

import {
  PRODUCT_GRID_SKELETON_CARD_CLASS_NAME,
  PRODUCT_GRID_SKELETON_CONTENT_CLASS_NAME,
  PRODUCT_GRID_SKELETON_IMAGE_CLASS_NAME,
  PRODUCT_GRID_SKELETON_META_CLASS_NAME,
  PRODUCT_GRID_SKELETON_PRICE_CLASS_NAME,
  PRODUCT_GRID_SKELETON_TITLE_CLASS_NAME,
} from "./ProductGrid.constants";

export function ProductGridSkeleton() {
  return (
    <Card
      aria-label="Product loading placeholder"
      className={PRODUCT_GRID_SKELETON_CARD_CLASS_NAME}
    >
      <Skeleton className={PRODUCT_GRID_SKELETON_IMAGE_CLASS_NAME} />
      <div className={PRODUCT_GRID_SKELETON_CONTENT_CLASS_NAME}>
        <Skeleton className={PRODUCT_GRID_SKELETON_TITLE_CLASS_NAME} />
        <Skeleton className={PRODUCT_GRID_SKELETON_META_CLASS_NAME} />
        <Skeleton className={PRODUCT_GRID_SKELETON_PRICE_CLASS_NAME} />
      </div>
    </Card>
  );
}
