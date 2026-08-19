import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { TextArea } from "./TextArea";

describe("TextArea", () => {
  it("renders a native textarea with the provided placeholder", () => {
    render(<TextArea placeholder="Enter your message" />);

    expect(
      screen.getByPlaceholderText("Enter your message"),
    ).toBeInTheDocument();
  });

  it("calls onChange when the value changes", () => {
    const handleChange = vi.fn();
    render(<TextArea onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New value" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("sets aria-invalid when error is true", () => {
    render(<TextArea error />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders a textarea with the provided rows and cols", () => {
    render(<TextArea rows={6} cols={80} />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("rows", "6");
    expect(textarea).toHaveAttribute("cols", "80");
  });

  it("renders a disabled textarea", () => {
    render(<TextArea disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders a read-only textarea", () => {
    render(<TextArea readOnly />);

    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
  });

  it("renders a textarea with the provided maxLength", () => {
    render(<TextArea maxLength={100} />);

    expect(screen.getByRole("textbox")).toHaveAttribute("maxlength", "100");
  });

  it("renders a textarea with the provided id and name", () => {
    render(<TextArea id="my-textarea" name="my-textarea" />);

    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("id", "my-textarea");
    expect(textarea).toHaveAttribute("name", "my-textarea");
  });
});
