import { describe, it, expect, afterEach, vi } from "vitest";
import { Badge } from "./Badge";
import { render, cleanup } from "@testing-library/react";

describe("Badge", () => {
  afterEach(cleanup);

  it("renders the badge with correct content", () => {
    const { getByText } = render(<Badge content="New" size="medium" />);
    const badgeElement = getByText("New");
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies variant and size classes correctly", () => {
    const { getByTestId } = render(
      <Badge
        id="badge-test-id"
        content="New"
        variant="primary"
        size="medium"
      />,
    );
    const badgeElement = getByTestId("badge-test-id");
    expect(badgeElement).toHaveClass("bg-primary");
    expect(badgeElement).toHaveClass("text-sm");
  });

  it("handles visibility correctly", () => {
    const { queryByText } = render(
      <Badge content="Hidden Badge" visible={false} />,
    );
    const badgeElement = queryByText("Hidden Badge");
    expect(badgeElement).toBeNull();
  });

  it("applies if badge has been clicked", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <Badge
        id="badge-click-test-id"
        content="Clickable Badge"
        onClick={handleClick}
      />,
    );
    const badgeElement = getByTestId("badge-click-test-id");
    badgeElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
