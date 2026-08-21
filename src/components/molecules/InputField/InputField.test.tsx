import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders the input field with the provided value", () => {
    render(<InputField value="Test Value" onChange={() => {}} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("Test Value");
  });

  it("renders the input with the provided defaultValue", () => {
    render(<InputField defaultValue="Default Value" />);

    expect(screen.getByRole("textbox")).toHaveValue("Default Value");
  });

  it("calls onChange when the input value changes", () => {
    const handleChange = vi.fn();

    render(<InputField onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New Value" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("updates the input value after change when uncontrolled", () => {
    const handleChange = vi.fn();

    render(<InputField onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "New Value" },
    });

    expect(input).toHaveValue("New Value");
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("does not update the displayed value internally when controlled", () => {
    const handleChange = vi.fn();

    render(<InputField value="Controlled Value" onChange={handleChange} />);

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "New Value" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input).toHaveValue("Controlled Value");
  });

  it("displays the error message when error is true", () => {
    render(<InputField error errorMessage="This is an error message" />);

    expect(screen.getByText("This is an error message")).toBeInTheDocument();
  });

  it("does not display the error message when error is false", () => {
    render(
      <InputField error={false} errorMessage="This is an error message" />,
    );

    expect(
      screen.queryByText("This is an error message"),
    ).not.toBeInTheDocument();
  });

  it("sets aria-invalid when error is true", () => {
    render(<InputField error />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("connects the error message through aria-describedby", () => {
    render(<InputField id="email" error errorMessage="Email is required" />);

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-describedby",
      "email-error",
    );

    expect(screen.getByText("Email is required")).toHaveAttribute(
      "id",
      "email-error",
    );
  });

  it("preserves an existing aria-describedby value alongside the error message", () => {
    render(
      <InputField
        id="email"
        aria-describedby="email-help"
        error
        errorMessage="Email is required"
      />,
    );

    expect(screen.getByRole("textbox")).toHaveAttribute(
      "aria-describedby",
      "email-help email-error",
    );
  });

  it("disables the input field when disabled is true", () => {
    render(<InputField disabled />);

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders the floating label when provided", () => {
    render(<InputField floatingLabel="Floating Label" />);

    expect(screen.getByText("Floating Label")).toBeInTheDocument();
  });

  it("renders the static label when provided", () => {
    render(<InputField id="username" label="Input Label" />);

    expect(screen.getByText("Input Label")).toBeInTheDocument();
    expect(screen.getByLabelText("Input Label")).toBeInTheDocument();
  });

  it("associates a generated id with the label", () => {
    render(<InputField label="Email" />);

    const input = screen.getByLabelText("Email");

    expect(input).toHaveAttribute("id");
    expect(input.getAttribute("id")).toBeTruthy();
  });

  it("hides the placeholder while an empty floating label is inactive", () => {
    render(
      <InputField floatingLabel="Email" placeholder="email@example.com" />,
    );

    expect(screen.getByRole("textbox")).not.toHaveAttribute("placeholder");
  });

  it("shows the placeholder when a floating-label input receives focus", () => {
    render(
      <InputField floatingLabel="Email" placeholder="email@example.com" />,
    );

    const input = screen.getByRole("textbox");

    fireEvent.focus(input);

    expect(input).toHaveAttribute("placeholder", "email@example.com");
  });

  it("keeps the floating label active when the uncontrolled input has a value", () => {
    render(
      <InputField floatingLabel="Email" placeholder="email@example.com" />,
    );

    const input = screen.getByRole("textbox");

    fireEvent.change(input, {
      target: { value: "test@example.com" },
    });

    fireEvent.blur(input);

    expect(input).toHaveAttribute("placeholder", "email@example.com");
  });

  it("calls onFocus when the input receives focus", () => {
    const handleFocus = vi.fn();

    render(<InputField onFocus={handleFocus} />);

    fireEvent.focus(screen.getByRole("textbox"));

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur when the input loses focus", () => {
    const handleBlur = vi.fn();

    render(<InputField onBlur={handleBlur} />);

    const input = screen.getByRole("textbox");

    fireEvent.focus(input);
    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it.each(["text", "password", "email", "number", "search", "tel"] as const)(
    "renders %s input",
    (type) => {
      render(<InputField type={type} />);

      const input = document.querySelector("input");

      expect(input).toHaveAttribute("type", type);
    },
  );

  it("applies the provided placeholder", () => {
    render(<InputField placeholder="Enter your text here" />);

    expect(
      screen.getByPlaceholderText("Enter your text here"),
    ).toBeInTheDocument();
  });

  it("applies the provided name attribute", () => {
    render(<InputField name="test-input" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("name", "test-input");
  });

  it("uses the provided id", () => {
    render(<InputField id="custom-input" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("id", "custom-input");
  });

  it("generates an id when one is not provided", () => {
    render(<InputField />);

    const input = screen.getByRole("textbox");

    expect(input.getAttribute("id")).toBeTruthy();
  });

  it("applies className to the native input", () => {
    render(<InputField className="custom-class" disabled error />);

    const input = screen.getByRole("textbox");

    expect(input).toHaveClass("custom-class");
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("marks the native input as required", () => {
    render(<InputField label="Email" required />);

    expect(screen.getByLabelText(/Email/)).toBeRequired();
  });
});
