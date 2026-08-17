import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
  it("renders label with children text", () => {
    render(<Label>User</Label>);
    expect(screen.getByText("User")).toBeInTheDocument();
  });

  it("applies htmlFor correctly", () => {
    render(<Label htmlFor="username">Username</Label>);

    const label = screen.getByText("Username");
    expect(label).toHaveAttribute("for", "username");
  });

  it("shows required asterisk when required is true", () => {
    render(<Label required>Username</Label>);

    const asterisk = screen.getByText("*");
    expect(asterisk).toBeInTheDocument();
    expect(asterisk).toHaveClass("text-red-500");
  });

  it("does not show asterisk when required is false", () => {
    render(<Label>Username</Label>);
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("applies disabled class when disabled is true", () => {
    render(<Label disabled>Username</Label>);

    const label = screen.getByText("Username");
    expect(label).toHaveClass("cursor-not-allowed");
  });

  it("applies custom className", () => {
    render(<Label className="custom-class">Username</Label>);

    const label = screen.getByText("Username");
    expect(label).toHaveClass("custom-class");
  });
});
