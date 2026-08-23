import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { QuantityStepper } from "./QuantityStepper";

describe("QuantityStepper", () => {
  it("renders the component with initial value", () => {
    render(<QuantityStepper value={5} onChange={() => {}} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("calls onChange when increment button is clicked", () => {
    const handleChange = vi.fn();
    render(<QuantityStepper value={5} onChange={handleChange} />);
    const incrementButton = screen.getByLabelText("Increase quantity");
    incrementButton.click();
    expect(handleChange).toHaveBeenCalledWith(6);
  });

  it("calls onChange when decrement button is clicked", () => {
    const handleChange = vi.fn();
    render(<QuantityStepper value={5} onChange={handleChange} />);
    const decrementButton = screen.getByLabelText("Decrease quantity");
    decrementButton.click();
    expect(handleChange).toHaveBeenCalledWith(4);
  });

  it("does not call onChange when at minimum value", () => {
    const handleChange = vi.fn();
    render(<QuantityStepper value={1} min={1} onChange={handleChange} />);
    const decrementButton = screen.getByLabelText("Decrease quantity");
    decrementButton.click();
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("does not call onChange when at maximum value", () => {
    const handleChange = vi.fn();
    render(<QuantityStepper value={10} max={10} onChange={handleChange} />);
    const incrementButton = screen.getByLabelText("Increase quantity");
    incrementButton.click();
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("disables buttons when disabled prop is true", () => {
    render(<QuantityStepper value={5} onChange={() => {}} disabled />);
    const incrementButton = screen.getByLabelText("Increase quantity");
    const decrementButton = screen.getByLabelText("Decrease quantity");
    expect(incrementButton).toBeDisabled();
    expect(decrementButton).toBeDisabled();
  });
});
