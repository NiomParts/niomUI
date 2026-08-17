import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { describe, expect, it, vi } from "vitest";
import { useToast } from "@hooks";

import { ToastProvider } from "./context/ToastProvider";
import { Toaster } from "./component/Toaster";

function ToastTrigger() {
  const { showToast } = useToast();

  return (
    <button
      type="button"
      onClick={() =>
        showToast({
          message: "Saved from hook",
          variant: "success",
        })
      }
    >
      Show toast
    </button>
  );
}

describe("Toaster", () => {
  it("renders a success toast with status role", () => {
    render(<Toaster message="Saved successfully" variant="success" />);

    const toast = screen.getByRole("status");

    expect(toast).toHaveTextContent("Saved successfully");
    expect(toast).toHaveAttribute("aria-live", "polite");
    expect(
      screen.queryByRole("button", { name: "Dismiss toast" }),
    ).not.toBeInTheDocument();
  });

  it("renders an error toast with alert role", () => {
    render(<Toaster message="Failed to save" variant="error" />);

    const toast = screen.getByRole("alert");

    expect(toast).toHaveTextContent("Failed to save");
    expect(toast).toHaveAttribute("aria-live", "polite");
  });

  it("renders an icon-only dismiss button when closable", () => {
    render(
      <Toaster message="Dismiss me" variant="success" onClose={vi.fn()} />,
    );

    const dismissButton = screen.getByRole("button", {
      name: "Dismiss toast",
    });

    expect(dismissButton).toBeInTheDocument();
    expect(dismissButton).toHaveTextContent("");
    expect(dismissButton.querySelector("svg")).toBeInTheDocument();
  });

  it("calls onClose when the dismiss button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Toaster message="Dismiss me" variant="success" onClose={handleClose} />,
    );

    await user.click(screen.getByRole("button", { name: "Dismiss toast" }));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("auto closes after the configured delay", () => {
    vi.useFakeTimers();
    const handleClose = vi.fn();

    try {
      render(
        <Toaster
          message="Auto close"
          variant="error"
          onClose={handleClose}
          autoCloseMs={2000}
        />,
      );

      act(() => {
        vi.advanceTimersByTime(2000);
      });

      expect(handleClose).toHaveBeenCalledTimes(1);
    } finally {
      vi.useRealTimers();
    }
  });

  it("renders a bottom-positioned toast from the toast provider hook", async () => {
    const user = userEvent.setup();

    render(
      <ToastProvider>
        <ToastTrigger />
      </ToastProvider>,
    );

    await user.click(screen.getByRole("button", { name: "Show toast" }));

    const toast = await screen.findByRole("status");
    const viewport = toast.parentElement;

    expect(toast).toHaveTextContent("Saved from hook");
    expect(viewport).toHaveClass("fixed", "bottom-4");
  });
});
