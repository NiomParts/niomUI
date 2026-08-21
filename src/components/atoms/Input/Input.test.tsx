import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Input } from "./Input";
import { Search } from "../Icon";

describe("Input", () => {
  it("renders a native input with the provided placeholder", () => {
    render(<Input placeholder="Email address" />);

    expect(screen.getByPlaceholderText("Email address")).toBeInTheDocument();
  });

  it("calls onChange when the value changes", () => {
    const handleChange = vi.fn();

    render(<Input onChange={handleChange} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "New value" },
    });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("sets aria-invalid when error is true", () => {
    render(<Input error />);

    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders a search action button and calls onSearch", () => {
    const handleSearch = vi.fn();

    render(
      <Input
        type="search"
        placeholder="Search products"
        onSearch={handleSearch}
      />,
    );

    const searchButton = screen.getByRole("button", {
      name: "Search",
    });

    fireEvent.click(searchButton);

    expect(screen.getByPlaceholderText("Search products")).toHaveAttribute(
      "type",
      "search",
    );

    expect(searchButton).toBeInTheDocument();
    expect(handleSearch).toHaveBeenCalledTimes(1);
  });

  it("renders a custom icon in the requested position", () => {
    render(
      <Input
        icon={<Search data-testid="custom-icon" size={16} />}
        iconPosition="right"
        placeholder="Product name"
      />,
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Product name")).toHaveClass("pr-12");
  });

  it("toggles password visibility", () => {
    render(<Input type="password" placeholder="Password" />);

    const input = screen.getByPlaceholderText("Password");

    expect(input).toHaveAttribute("type", "password");

    const showPasswordButton = screen.getByRole("button", {
      name: "Show password",
    });

    expect(showPasswordButton).toBeInTheDocument();

    fireEvent.click(showPasswordButton);

    expect(input).toHaveAttribute("type", "text");

    expect(
      screen.getByRole("button", {
        name: "Hide password",
      }),
    ).toBeInTheDocument();
  });

  it("applies className to the native input", () => {
    render(<Input className="max-w-72" placeholder="Email address" />);

    expect(screen.getByPlaceholderText("Email address")).toHaveClass(
      "max-w-72",
    );
  });
});
