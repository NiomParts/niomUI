import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { ProductCard } from "./ProductCard";

const defaultProps = {
  id: "zeb-thunder-pro",
  name: "Zeb-Thunder Pro Wireless Headphones",
  price: 36,
  originalPrice: 40,
  discount: 10,
  rating: 5,
  reviewCount: 2,
};

afterEach(() => {
  vi.useRealTimers();
});

describe("ProductCard", () => {
  it("renders the product summary", () => {
    render(<ProductCard {...defaultProps} />);

    expect(
      screen.getByRole("article", {
        name: "View Zeb-Thunder Pro Wireless Headphones",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Zeb-Thunder Pro Wireless Headphones",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("$36.00")).toBeInTheDocument();
    expect(screen.getByText("(2)")).toBeInTheDocument();
  });

  it("renders discount, badge, and original price when provided", () => {
    render(<ProductCard {...defaultProps} badge="Hot" />);

    expect(screen.getByText("-10%")).toBeInTheDocument();
    expect(screen.getByText("Hot")).toBeInTheDocument();
    expect(screen.getByText("$40.00")).toHaveClass("line-through");
  });

  it("does not render discount or original price when there is no discount", () => {
    render(
      <ProductCard
        {...defaultProps}
        discount={undefined}
        originalPrice={undefined}
      />,
    );

    expect(screen.queryByText("-10%")).not.toBeInTheDocument();
    expect(screen.queryByText("$40.00")).not.toBeInTheDocument();
  });

  it("calls the card click handler when the product card is selected", () => {
    const handleClick = vi.fn();

    render(<ProductCard {...defaultProps} onClick={handleClick} />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "View Zeb-Thunder Pro Wireless Headphones",
      }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports keyboard selection for clickable cards", () => {
    const handleClick = vi.fn();

    render(<ProductCard {...defaultProps} onClick={handleClick} />);

    fireEvent.keyDown(
      screen.getByRole("button", {
        name: "View Zeb-Thunder Pro Wireless Headphones",
      }),
      { key: "Enter" },
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("keeps favorite clicks separate from product card clicks", () => {
    const handleClick = vi.fn();
    const handleFavorite = vi.fn();

    render(
      <ProductCard
        {...defaultProps}
        onClick={handleClick}
        onFavorite={handleFavorite}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Zeb-Thunder Pro Wireless Headphones to favorites",
      }),
    );

    expect(handleFavorite).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("keeps cart clicks separate from product card clicks", () => {
    const handleClick = vi.fn();
    const handleAddToCart = vi.fn();

    render(
      <ProductCard
        {...defaultProps}
        onAddToCart={handleAddToCart}
        onClick={handleClick}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: "Add Zeb-Thunder Pro Wireless Headphones to cart",
      }),
    );

    expect(handleAddToCart).toHaveBeenCalledTimes(1);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("disables the cart action when the product is out of stock", () => {
    const handleAddToCart = vi.fn();

    render(
      <ProductCard
        {...defaultProps}
        inStock={false}
        onAddToCart={handleAddToCart}
      />,
    );

    const cartButton = screen.getByRole("button", {
      name: "Add Zeb-Thunder Pro Wireless Headphones to cart",
    });

    expect(cartButton).toBeDisabled();
    fireEvent.click(cartButton);
    expect(handleAddToCart).not.toHaveBeenCalled();
  });

  it("renders favorite state labels", () => {
    render(<ProductCard {...defaultProps} favorite />);

    expect(
      screen.getByRole("button", {
        name: "Remove Zeb-Thunder Pro Wireless Headphones from favorites",
      }),
    ).toBeInTheDocument();
  });

  it("renders countdown parts", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-08-12T12:00:00Z"));
    const countdown = new Date("2026-08-13T14:03:04Z");

    render(<ProductCard {...defaultProps} countdown={countdown} />);

    expect(screen.getByText("01")).toBeInTheDocument();
    expect(screen.getByText("02")).toBeInTheDocument();
    expect(screen.getByText("03")).toBeInTheDocument();
    expect(screen.getByText("04")).toBeInTheDocument();

  });
});
