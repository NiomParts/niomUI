import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import { render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("renders the button with correct text", () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();
  });

  it("checks if variants are applied correctly", () => {
    const { getByText } = render(
      <Button variant="primary">Primary Button</Button>,
    );
    const buttonElement = getByText("Primary Button");
    expect(buttonElement).toHaveClass("bg-primary");
  });
  it("handles click events", () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    const buttonElement = getByText("Click");
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("checks if the button can render as a different element", () => {
    const { getByText } = render(
      <Button as="a" href="https://example.com">
        Link Button
      </Button>,
    );
    const buttonElement = getByText("Link Button");
    expect(buttonElement.tagName).toBe("A");
    expect(buttonElement).toHaveAttribute("href", "https://example.com");
  });
});
