import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { ProductCardProps } from "@type/components/molecules";

import { ProductGrid } from "./ProductGrid";

const products = [
  {
    id: "zeb-thunder-pro",
    name: "Zeb-Thunder Pro Wireless Headphones",
    price: 36,
    originalPrice: 40,
    discount: 10,
    rating: 5,
    reviewCount: 2,
  },
  {
    id: "compact-speaker",
    name: "Compact Bluetooth Speaker",
    price: 28,
    rating: 4,
    reviewCount: 18,
  },
  {
    id: "fitness-band",
    name: "Everyday Fitness Band",
    price: 24,
    rating: 4.5,
    reviewCount: 42,
  },
] satisfies ProductCardProps[];

describe("ProductGrid", () => {
  it("renders product cards", () => {
    render(<ProductGrid products={products} />);

    expect(
      screen.getByRole("heading", {
        name: "Zeb-Thunder Pro Wireless Headphones",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Compact Bluetooth Speaker",
      }),
    ).toBeInTheDocument();
  });

  it("renders the loading skeleton grid", () => {
    render(<ProductGrid loading products={[]} skeletonCount={3} />);

    expect(screen.getByRole("region", { busy: true })).toBeInTheDocument();
    expect(screen.getAllByLabelText("Product loading placeholder")).toHaveLength(
      3,
    );
  });

  it("renders the empty state", () => {
    render(<ProductGrid products={[]} />);

    expect(screen.getByText("No products found.")).toBeInTheDocument();
  });

  it("renders a custom empty state", () => {
    render(<ProductGrid emptyMessage="Nothing matches your filters." products={[]} />);

    expect(screen.getByText("Nothing matches your filters.")).toBeInTheDocument();
  });

  it("renders the error state", () => {
    render(<ProductGrid error="Unable to load products." products={products} />);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Unable to load products.",
    );
  });

  it("applies the requested column classes", () => {
    render(<ProductGrid columns={3} products={products} />);

    expect(screen.getByTestId("product-grid")).toHaveClass(
      "md:grid-cols-[repeat(3,minmax(0,20rem))]",
    );
  });

  it("calls the product click handler with the selected product", () => {
    const handleProductClick = vi.fn();

    render(
      <ProductGrid
        onProductClick={handleProductClick}
        products={products}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "View Zeb-Thunder Pro Wireless Headphones",
      }),
    );

    expect(handleProductClick).toHaveBeenCalledWith(products[0]);
  });

  it("calls the favorite handler with the selected product", () => {
    const handleFavorite = vi.fn();

    render(<ProductGrid onFavorite={handleFavorite} products={products} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Compact Bluetooth Speaker to favorites",
      }),
    );

    expect(handleFavorite).toHaveBeenCalledWith(products[1]);
  });

  it("calls the cart handler with the selected product", () => {
    const handleAddToCart = vi.fn();

    render(<ProductGrid onAddToCart={handleAddToCart} products={products} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Zeb-Thunder Pro Wireless Headphones to cart",
      }),
    );

    expect(handleAddToCart).toHaveBeenCalledWith(products[0]);
  });

  it("limits products to the current page", () => {
    render(<ProductGrid products={products} productsPerPage={2} />);

    expect(
      screen.getByRole("heading", {
        name: "Zeb-Thunder Pro Wireless Headphones",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Compact Bluetooth Speaker",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", {
        name: "Everyday Fitness Band",
      }),
    ).not.toBeInTheDocument();
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
  });

  it("moves between product pages", () => {
    render(<ProductGrid products={products} productsPerPage={2} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Go to next product page",
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: "Everyday Fitness Band",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Page 2 of 2")).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole("button", {
        name: "Go to previous product page",
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: "Zeb-Thunder Pro Wireless Headphones",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
  });

  it("can render all products without pagination", () => {
    render(
      <ProductGrid paginated={false} products={products} productsPerPage={2} />,
    );

    expect(
      screen.getByRole("heading", {
        name: "Everyday Fitness Band",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("navigation", {
        name: "Product pagination",
      }),
    ).not.toBeInTheDocument();
  });
});
