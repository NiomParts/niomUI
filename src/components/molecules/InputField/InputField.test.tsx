import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders the input field with the provided value", () => {
    render(<InputField value="Test Value" onChange={() => {}} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.value).toBe("Test Value");
  });

  it("calls onChange when the input value changes", () => {
    const handleChange = vi.fn();
    render(<InputField onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays the error message when error is true", () => {
    render(
      <InputField
        onChange={() => {}}
        error={true}
        errorMessage="This is an error message"
      />,
    );

    const errorMessageElement = screen.getByText("This is an error message");
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("disables the input field when disabled is true", () => {
    render(<InputField onChange={() => {}} disabled={true} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement).toBeDisabled();
  });

  it("renders the floating label when provided", () => {
    render(<InputField onChange={() => {}} floatingLabel="Floating Label" />);

    const floatingLabelElement = screen.getByText("Floating Label");
    expect(floatingLabelElement).toBeInTheDocument();
  });

  it("renders the label when provided", () => {
    render(<InputField onChange={() => {}} label="Input Label" />);

    const labelElement = screen.getByText("Input Label");
    expect(labelElement).toBeInTheDocument();
  });

  it.each(["text", "password", "email", "number", "search", "tel"] as const)(
    "renders %s input",
    (type) => {
      render(<InputField onChange={() => {}} type={type} />);

      const input = document.querySelector("input") as HTMLInputElement;

      expect(input.type).toBe(type);
    },
  );

  it("checks if the input has the correct placeholder", () => {
    render(
      <InputField onChange={() => {}} placeholder="Enter your text here" />,
    );

    const inputElement = screen.getByPlaceholderText(
      "Enter your text here",
    ) as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
  });

  it("checks if the input has the correct name attribute", () => {
    render(<InputField onChange={() => {}} name="test-input" />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.name).toBe("test-input");
  });

  it("checks if the input has the correct id attribute", () => {
    render(<InputField onChange={() => {}} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    expect(inputElement.id).toBeTruthy();
  });

  it("updates the input value after change when uncontrolled", () => {
    const handleChange = vi.fn();
    render(<InputField onChange={handleChange} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("New Value");
  });

  it("checks if class names are applied correctly", () => {
    const { container } = render(
      <InputField
        onChange={() => {}}
        className="custom-class"
        disabled={true}
        error={true}
      />,
    );

    const inputElement = screen.getByRole("textbox");
    expect(container.querySelector(".custom-class")).toBeInTheDocument();
    expect(inputElement).not.toHaveClass("custom-class");
    expect(inputElement).toBeDisabled();
    expect(inputElement).toHaveAttribute("aria-invalid", "true");
  });
});
