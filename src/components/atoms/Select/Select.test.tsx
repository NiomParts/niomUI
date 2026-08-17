import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Select } from "./Select";

const OPTIONS = [
  { label: "All products", value: "all" },
  { label: "Shoes", value: "shoes" },
  { label: "Accessories", value: "accessories" },
];

describe("Select", () => {
  it("renders a closed combobox with the placeholder", () => {
    render(
      <Select
        options={OPTIONS}
        placeholder="Select category"
        aria-label="Category"
      />,
    );

    const select = screen.getByRole("combobox", { name: "Category" });

    expect(select).toHaveTextContent("Select category");
    expect(select).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("opens the dropdown with the provided options", () => {
    render(<Select options={OPTIONS} aria-label="Category" />);

    fireEvent.click(screen.getByRole("combobox", { name: "Category" }));

    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "All products" })).toHaveAttribute(
      "aria-selected",
      "false",
    );
    expect(screen.getByRole("option", { name: "Shoes" })).toBeInTheDocument();
    expect(
      screen.getByRole("option", { name: "Accessories" }),
    ).toBeInTheDocument();
  });

  it("uses controlled value", () => {
    render(<Select options={OPTIONS} value="shoes" aria-label="Category" />);

    expect(screen.getByRole("combobox", { name: "Category" })).toHaveTextContent(
      "Shoes",
    );
  });

  it("uses defaultValue for uncontrolled usage", () => {
    render(
      <Select
        options={OPTIONS}
        defaultValue="accessories"
        aria-label="Category"
      />,
    );

    expect(screen.getByRole("combobox", { name: "Category" })).toHaveTextContent(
      "Accessories",
    );
  });

  it("calls onChange with the selected value and closes the dropdown", () => {
    const handleChange = vi.fn();
    render(
      <Select
        options={OPTIONS}
        onChange={handleChange}
        aria-label="Category"
      />,
    );

    fireEvent.click(screen.getByRole("combobox", { name: "Category" }));
    fireEvent.click(screen.getByRole("option", { name: "Shoes" }));

    expect(handleChange).toHaveBeenCalledWith("shoes");
    expect(screen.getByRole("combobox", { name: "Category" })).toHaveTextContent(
      "Shoes",
    );
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("supports keyboard selection", () => {
    const handleChange = vi.fn();
    render(
      <Select
        options={OPTIONS}
        onChange={handleChange}
        aria-label="Category"
      />,
    );

    const select = screen.getByRole("combobox", { name: "Category" });

    fireEvent.keyDown(select, { key: "ArrowDown" });
    fireEvent.keyDown(select, { key: "ArrowDown" });
    fireEvent.keyDown(select, { key: "Enter" });

    expect(handleChange).toHaveBeenCalledWith("shoes");
  });

  it("applies disabled and required attributes", () => {
    render(<Select options={OPTIONS} disabled required aria-label="Category" />);

    const select = screen.getByRole("combobox", { name: "Category" });

    expect(select).toBeDisabled();
    expect(select).toHaveAttribute("aria-required", "true");
    expect(select).toHaveClass("cursor-not-allowed", "opacity-50");
  });

  it("applies id, name, variant, and custom classes", () => {
    render(
      <Select
        id="category"
        name="category"
        options={OPTIONS}
        variant="outlined"
        className="custom-class"
        dropdownClassName="custom-dropdown"
        optionClassName="custom-option"
        aria-label="Category"
      />,
    );

    const select = screen.getByRole("combobox", { name: "Category" });

    expect(select).toHaveAttribute("id", "category");
    expect(select).toHaveClass("custom-class", "text-foreground");
    expect(document.querySelector('input[name="category"]')).toHaveValue("");

    fireEvent.click(select);

    expect(screen.getByRole("listbox")).toHaveClass("custom-dropdown");
    expect(screen.getByRole("option", { name: "Shoes" })).toHaveClass(
      "custom-option",
    );
  });

  it("disables individual options", () => {
    const handleChange = vi.fn();
    render(
      <Select
        options={[
          ...OPTIONS,
          { label: "Sold out", value: "sold-out", disabled: true },
        ]}
        onChange={handleChange}
        aria-label="Category"
      />,
    );

    fireEvent.click(screen.getByRole("combobox", { name: "Category" }));

    const disabledOption = screen.getByRole("option", { name: "Sold out" });

    expect(disabledOption).toBeDisabled();
    fireEvent.click(disabledOption);
    expect(handleChange).not.toHaveBeenCalled();
  });
});
