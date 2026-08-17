import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Rating } from "./Rating";

const getStars = (container: HTMLElement) => container.querySelectorAll("svg");

describe("Rating", () => {
  it("renders one star icon for each max value", () => {
    const { container } = render(<Rating value={3} max={5} />);

    expect(getStars(container)).toHaveLength(5);
  });

  it("renders a half star when the value matches the configured precision", () => {
    const { container } = render(<Rating value={3.5} max={5} />);

    expect(container.querySelectorAll("linearGradient")).toHaveLength(1);
    expect(container.querySelectorAll("svg#star")).toHaveLength(1);
  });

  it("does not render a half star when precision is one", () => {
    const { container } = render(<Rating value={3.5} max={5} precision={1} />);

    expect(container.querySelectorAll("linearGradient")).toHaveLength(0);
    expect(container.querySelectorAll("svg#star")).toHaveLength(2);
  });

  it("shows the clamped rating value when showValue is true", () => {
    render(<Rating value={8} max={5} showValue />);

    expect(screen.getByText("5.0")).toBeInTheDocument();
  });

  it("clamps negative values to zero", () => {
    const { container } = render(<Rating value={-2} max={5} showValue />);

    expect(screen.getByText("0.0")).toBeInTheDocument();
    expect(container.querySelectorAll("svg#star")).toHaveLength(5);
  });

  it("shows the review count when provided", () => {
    render(<Rating value={4.5} reviewCount={128} />);

    expect(screen.getByText("(128)")).toBeInTheDocument();
  });

  it("does not show the numeric value by default", () => {
    render(<Rating value={4.5} />);

    expect(screen.queryByText("4.5")).not.toBeInTheDocument();
  });

  it("applies custom className to the wrapper", () => {
    const { container } = render(
      <Rating value={4} className="custom-rating-class" />,
    );

    expect(container.firstElementChild).toHaveClass("custom-rating-class");
  });

  it("passes size and color to star icons", () => {
    const { container } = render(
      <Rating value={1} max={1} size={32} color="currentColor" />,
    );

    const star = container.querySelector("svg");

    expect(star).toHaveAttribute("width", "32");
    expect(star).toHaveAttribute("height", "32");
    expect(star).toHaveAttribute("fill", "currentColor");
  });
});
