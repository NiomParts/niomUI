import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { TextAreaField } from "./TextAreaField";

describe("TextAreaField", () => {
  it("renders the textarea with the provided label", () => {
    render(<TextAreaField label="Description" onChange={() => {}} />);

    const labelElement = screen.getByText("Description");
    expect(labelElement).toBeInTheDocument();
  });

  it("calls onChange when the textarea value changes", () => {
    const handleChange = vi.fn();
    render(<TextAreaField onChange={handleChange} />);

    const textareaElement = screen.getByRole("textbox") as HTMLTextAreaElement;
    fireEvent.change(textareaElement, { target: { value: "New Value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("displays the error message when error is true", () => {
    render(
      <TextAreaField
        onChange={() => {}}
        error={true}
        errorMessage="This is an error message"
      />,
    );

    const errorMessageElement = screen.getByText("This is an error message");
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("disables the textarea when disabled is true", () => {
    render(<TextAreaField onChange={() => {}} disabled={true} />);

    const textareaElement = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(textareaElement).toBeDisabled();
  });
});
