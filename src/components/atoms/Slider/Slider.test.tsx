import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders a single value slider with accessible value metadata", () => {
    render(
      <Slider
        value={50}
        min={0}
        max={100}
        onChange={() => {}}
        ariaLabel="Price"
      />,
    );

    const slider = screen.getByRole("slider", { name: "Price" });

    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "100");
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  });

  it("renders two thumbs for a range value", () => {
    render(
      <Slider
        value={[20, 80]}
        min={0}
        max={100}
        onChange={() => {}}
        ariaLabels={["Minimum price", "Maximum price"]}
      />,
    );

    expect(screen.getByRole("slider", { name: "Minimum price" })).toHaveAttribute(
      "aria-valuenow",
      "20",
    );
    expect(screen.getByRole("slider", { name: "Maximum price" })).toHaveAttribute(
      "aria-valuenow",
      "80",
    );
  });

  it("calls onChange when a keyboard increment is used", () => {
    const handleChange = vi.fn();

    render(
      <Slider
        value={50}
        min={0}
        max={100}
        step={5}
        onChange={handleChange}
        ariaLabel="Price"
      />,
    );

    fireEvent.keyDown(screen.getByRole("slider", { name: "Price" }), {
      key: "ArrowRight",
    });

    expect(handleChange).toHaveBeenCalledWith(55);
  });

  it("does not call onChange from keyboard when disabled", () => {
    const handleChange = vi.fn();

    render(
      <Slider
        value={50}
        disabled
        onChange={handleChange}
        ariaLabel="Price"
      />,
    );

    fireEvent.keyDown(screen.getByRole("slider", { name: "Price" }), {
      key: "ArrowRight",
    });

    expect(handleChange).not.toHaveBeenCalled();
  });
});
