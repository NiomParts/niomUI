import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Radio } from "./Radio";

describe("Radio", () => {
  it("renders label content", () => {
    render(
      <Radio name="options" value="option1">
        Option 1
      </Radio>,
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("renders as a radio input", () => {
    render(
      <Radio name="options" value="option1">
        Option 1
      </Radio>,
    );

    expect(screen.getByRole("radio", { name: "Option 1" })).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(
      <Radio name="options" value="option1">
        Option 1
      </Radio>,
    );

    expect(screen.getByRole("radio")).not.toBeChecked();
  });

  it("starts checked when defaultChecked is true", () => {
    render(
      <Radio name="options" value="option1" defaultChecked>
        Option 1
      </Radio>,
    );

    expect(screen.getByRole("radio")).toBeChecked();
  });

  it("calls onChange when clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Radio name="options" value="option1" onChange={onChange}>
        Option 1
      </Radio>,
    );

    await user.click(screen.getByRole("radio"));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("does not call onChange when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <Radio name="options" value="option1" disabled onChange={onChange}>
        Option 1
      </Radio>,
    );

    await user.click(screen.getByRole("radio"));

    expect(onChange).not.toHaveBeenCalled();
  });

  it("disables the radio when disabled is true", () => {
    render(
      <Radio name="options" value="option1" disabled>
        Option 1
      </Radio>,
    );

    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("does not apply hover variant styles when disabled", () => {
    render(
      <Radio name="options" value="option1" variant="primary" disabled>
        Option 1
      </Radio>,
    );

    const radio = screen.getByRole("radio");

    // input is after the visual radio span
    const visualRadio = radio.previousElementSibling;

    expect(visualRadio).not.toHaveClass("group-hover:border-primary");
    expect(visualRadio).toHaveClass("group-has-checked:border-primary");
  });

  it("applies hover variant styles when enabled", () => {
    render(
      <Radio name="options" value="option1" variant="primary">
        Option 1
      </Radio>,
    );

    const radio = screen.getByRole("radio");
    const visualRadio = radio.previousElementSibling;

    expect(visualRadio).toHaveClass("group-hover:border-primary");
  });
});
