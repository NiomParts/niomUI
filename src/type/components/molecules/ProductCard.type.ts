export interface ProductCardProps {
  /**
   * Unique product identifier.
   */
  id: string;

  /**
   * Product name.
   */
  name: string;

  /**
   * Product image.
   */
  image?: string;

  /**
   * Product price.
   */
  price: number;

  /**
   * Original price before discount.
   */
  originalPrice?: number;

  /**
   * Discount percentage.
   *
   * Example:
   * -10%
   */
  discount?: number;

  /**
   * Average product rating.
   */
  rating?: number;

  /**
   * Number of reviews.
   */
  reviewCount?: number;

  /**
   * Product category.
   */
  category?: string;

  /**
   * Indicates whether the product is in stock.
   */
  inStock?: boolean;

  /**
   * Displays a countdown timer.
   */
  countdown?: Date;

  /**
   * Optional product badge.
   *
   * Examples:
   * New
   * Sale
   * Hot
   * Featured
   */
  badge?: React.ReactNode;

  /**
   * Displays wishlist state.
   */
  favorite?: boolean;

  /**
   * Additional CSS classes.
   */
  className?: string;

  /**
   * Called when the card is selected.
   */
  onClick?: () => void;

  /**
   * Wishlist action.
   */
  onFavorite?: () => void;

  /**
   * Add to cart action.
   */
  onAddToCart?: () => void;
}
