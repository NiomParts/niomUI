import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { CheckBoxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  const mockItems = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders all checkbox items", () => {
    render(<CheckBoxGroup items={mockItems} value={[]} onChange={() => {}} />);

    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 3")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(
      <CheckBoxGroup
        items={mockItems}
        value={[]}
        label="Select Options"
        onChange={() => {}}
      />,
    );

    const label = screen.getByText("Select Options");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("font-semibold");
  });

  it("does not render label when not provided", () => {
    render(<CheckBoxGroup items={mockItems} value={[]} onChange={() => {}} />);

    const label = screen.queryByText("Select Options");
    expect(label).not.toBeInTheDocument();
  });

  it("calls onChange when checkbox is clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <CheckBoxGroup items={mockItems} value={[]} onChange={handleChange} />,
    );

    const checkbox = screen.getByLabelText("Option 1");
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(["option1"]);
  });

  it("handles multiple checkbox selections", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <CheckBoxGroup items={mockItems} value={[]} onChange={handleChange} />,
    );

    const checkbox1 = screen.getByLabelText("Option 1");
    const checkbox2 = screen.getByLabelText("Option 2");

    await user.click(checkbox1);
    await user.click(checkbox2);

    expect(handleChange).toHaveBeenLastCalledWith(["option1", "option2"]);
  });

  it("deselects checkbox when clicked again", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <CheckBoxGroup items={mockItems} value={[]} onChange={handleChange} />,
    );

    const checkbox = screen.getByLabelText("Option 1");

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(["option1"]);

    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith([]);
  });

  it("reflects initial value prop", () => {
    render(
      <CheckBoxGroup
        items={mockItems}
        value={["option1", "option2"]}
        onChange={() => {}}
      />,
    );

    const checkbox1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    const checkbox2 = screen.getByLabelText("Option 2") as HTMLInputElement;
    const checkbox3 = screen.getByLabelText("Option 3") as HTMLInputElement;

    expect(checkbox1.checked).toBe(true);
    expect(checkbox2.checked).toBe(true);
    expect(checkbox3.checked).toBe(false);
  });

  it("applies vertical orientation by default", () => {
    const { container } = render(
      <CheckBoxGroup items={mockItems} value={[]} onChange={() => {}} />,
    );

    const fieldset = container.querySelector("fieldset");
    expect(fieldset).toHaveClass("flex-col");
  });

  it("applies horizontal orientation when specified", () => {
    const { container } = render(
      <CheckBoxGroup
        items={mockItems}
        value={[]}
        orientation="horizontal"
        onChange={() => {}}
      />,
    );

    const fieldset = container.querySelector("fieldset");
    expect(fieldset).toHaveClass("flex-row", "flex-wrap");
  });

  it("disables all checkboxes when disabled is true", () => {
    render(
      <CheckBoxGroup
        items={mockItems}
        value={[]}
        disabled
        onChange={() => {}}
      />,
    );

    const checkbox1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    const checkbox2 = screen.getByLabelText("Option 2") as HTMLInputElement;
    const checkbox3 = screen.getByLabelText("Option 3") as HTMLInputElement;

    expect(checkbox1.disabled).toBe(true);
    expect(checkbox2.disabled).toBe(true);
    expect(checkbox3.disabled).toBe(true);
  });

  it("respects individual item disabled state", () => {
    const itemsWithDisabled = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
    ];

    render(
      <CheckBoxGroup
        items={itemsWithDisabled}
        value={[]}
        onChange={() => {}}
      />,
    );

    const checkbox1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    const checkbox2 = screen.getByLabelText("Option 2") as HTMLInputElement;
    const checkbox3 = screen.getByLabelText("Option 3") as HTMLInputElement;

    expect(checkbox1.disabled).toBe(false);
    expect(checkbox2.disabled).toBe(true);
    expect(checkbox3.disabled).toBe(false);
  });

  it("displays totalCount when provided", () => {
    const itemsWithCount = [
      { value: "option1", label: "Option 1", totalCount: 5 },
      { value: "option2", label: "Option 2", totalCount: 10 },
    ];

    render(
      <CheckBoxGroup items={itemsWithCount} value={[]} onChange={() => {}} />,
    );

    expect(screen.getByText("Option 1 (5)")).toBeInTheDocument();
    expect(screen.getByText("Option 2 (10)")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <CheckBoxGroup
        items={mockItems}
        value={[]}
        className="custom-class"
        onChange={() => {}}
      />,
    );

    const fieldset = container.querySelector("fieldset");
    expect(fieldset).toHaveClass("custom-class");
  });

  it("handles onChange as optional", () => {
    const user = userEvent.setup();

    render(<CheckBoxGroup items={mockItems} value={[]} onChange={() => {}} />);

    const checkbox = screen.getByLabelText("Option 1") as HTMLInputElement;

    expect(() => {
      user.click(checkbox);
    }).not.toThrow();
  });

  it("combines group disabled state with individual item disabled state", () => {
    const itemsWithDisabled = [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
    ];

    render(
      <CheckBoxGroup
        items={itemsWithDisabled}
        value={[]}
        disabled
        onChange={() => {}}
      />,
    );

    const checkbox1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    const checkbox2 = screen.getByLabelText("Option 2") as HTMLInputElement;

    expect(checkbox1.disabled).toBe(true);
    expect(checkbox2.disabled).toBe(true);
  });
});
