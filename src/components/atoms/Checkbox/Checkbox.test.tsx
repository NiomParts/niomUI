import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Checkbox } from "./Checkbox";
import {
  CHECKBOX_CLASSNAMES,
  CHECKBOX_TEXT_VARIANT_CLASSNAMES,
  CHECKBOX_VARIANT_CLASSNAMES,
} from "./Checkbox.constants";

describe("Checkbox", () => {
  it("renders label content", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("renders as a checkbox input", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    expect(
      screen.getByRole("checkbox", { name: "Accept terms" }),
    ).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it("starts checked when defaultChecked is true", () => {
    render(<Checkbox defaultChecked>Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  it("toggles when clicked", () => {
    render(<Checkbox>Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it("calls onChange with the new value", () => {
    let receivedValue: boolean | undefined;
    render(
      <Checkbox onChange={(checked) => (receivedValue = checked)}>
        Accept terms
      </Checkbox>,
    );
    fireEvent.click(screen.getByRole("checkbox"));
    expect(receivedValue).toBe(true);
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    render(<Checkbox disabled>Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    await user.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it("does not call onChange when disabled", async () => {
    const user = userEvent.setup();
    let receivedValue: boolean | undefined;
    render(
      <Checkbox disabled onChange={(checked) => (receivedValue = checked)}>
        Accept terms
      </Checkbox>,
    );
    await user.click(screen.getByRole("checkbox"));
    expect(receivedValue).toBeUndefined();
  });

  it("applies the disabled class to the wrapper", () => {
    render(<Checkbox disabled>Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.closest("label")).toHaveClass(CHECKBOX_CLASSNAMES.disabled);
  });

  it("applies a custom className to the visual checkbox box", () => {
    render(<Checkbox className="my-custom-class">Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.nextElementSibling).toHaveClass("my-custom-class");
  });

  it("applies the checkbox color variant to the wrapper", () => {
    render(<Checkbox variant="danger">Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.closest("label")).toHaveClass(
      CHECKBOX_VARIANT_CLASSNAMES.danger,
    );
  });

  it("applies the text color variant to the wrapper", () => {
    render(<Checkbox textVariant="muted">Accept terms</Checkbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.closest("label")).toHaveClass(
      CHECKBOX_TEXT_VARIANT_CLASSNAMES.muted,
    );
  });
});
