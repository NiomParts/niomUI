import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Drawer } from "./Drawer";

describe("Drawer", () => {
  it("does not render the drawer panel when closed", () => {
    render(<Drawer isOpen={false} onClose={() => undefined} />);

    expect(screen.queryByRole("dialog", { name: "Menu drawer" })).not.toBeInTheDocument();
  });

  it("renders an empty drawer panel when open", () => {
    render(<Drawer isOpen onClose={() => undefined} />);

    expect(screen.getByRole("dialog", { name: "Menu drawer" })).toBeInTheDocument();
  });

  it("calls onClose when the overlay is clicked", () => {
    const handleClose = vi.fn();

    render(<Drawer isOpen onClose={handleClose} />);

    fireEvent.click(screen.getByRole("button", { name: "Close drawer overlay" }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when the close button is clicked", () => {
    const handleClose = vi.fn();

    render(<Drawer isOpen onClose={handleClose} />);

    fireEvent.click(screen.getByRole("button", { name: "Close drawer" }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape is pressed", () => {
    const handleClose = vi.fn();

    render(<Drawer isOpen onClose={handleClose} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
