import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders badge content", () => {
    render(<Badge>99+</Badge>);

    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  it("renders as a span by default", () => {
    render(<Badge data-testid="badge">3</Badge>);

    expect(screen.getByTestId("badge").tagName).toBe("SPAN");
  });

  it("renders as a different element when requested", () => {
    render(
      <Badge as="div" data-testid="badge">
        New
      </Badge>,
    );

    expect(screen.getByTestId("badge").tagName).toBe("DIV");
  });

  it("applies variant and size classes", () => {
    render(
      <Badge data-testid="badge" size="md" variant="muted">
        12
      </Badge>,
    );

    const badge = screen.getByTestId("badge");

    expect(badge).toHaveClass("bg-muted");
    expect(badge).toHaveClass("h-6");
  });
});
