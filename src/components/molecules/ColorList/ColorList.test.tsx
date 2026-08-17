import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { ColorList } from "./ColorList";

describe("ColorList", () => {
  const mockColors = ["#FF0000", "#00FF00", "#0000FF"];

  it("renders all color items", () => {
    render(
      <ColorList
        title="Select a color"
        colors={mockColors}
        onColorSelect={() => {}}
      />,
    );

    mockColors.forEach((color) => {
      const colorItem = screen.getByRole("button", { name: color });
      expect(colorItem).toBeInTheDocument();
    });
  });

  it("calls onColorSelect when a color is clicked", async () => {
    const user = userEvent.setup();
    const handleColorSelect = vi.fn();

    render(
      <ColorList
        title="Select a color"
        colors={mockColors}
        onColorSelect={handleColorSelect}
      />,
    );

    const colorItem = screen.getByRole("button", { name: mockColors[0] });
    await user.click(colorItem);

    expect(handleColorSelect).toHaveBeenCalledWith(mockColors[0]);
  });
});
