import { describe, it, expect, afterEach, vi } from "vitest";
import { Badge } from "./Badge";
import { render, cleanup } from "@testing-library/react";

describe("Badge", () => {
  afterEach(cleanup);

  it("renders the badge with correct content", () => {
    const { getByText } = render(<Badge content={["New"]} size="medium" />);
    const badgeElement = getByText("New");
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies variant and size classes correctly", () => {
    const { getByTestId } = render(
      <Badge
        id="badge-test-id"
        content={["New"]}
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
      <Badge content={["Hidden Badge"]} visible={false} />,
    );
    const badgeElement = queryByText("Hidden Badge");
    expect(badgeElement).toBeNull();
  });

  it("applies if badge has been clicked", () => {
    const handleClick = vi.fn();
    const { getByTestId } = render(
      <Badge
        id="badge-click-test-id"
        content={["Clickable Badge"]}
        onClick={handleClick}
      />,
    );
    const badgeElement = getByTestId("badge-click-test-id");
    badgeElement.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("it should render multiple badges when content is an array", () => {
    const { getByText } = render(
      <Badge content={["Badge 1", "Badge 2", "Badge 3"]} horizontal={true} />,
    );
    expect(getByText("Badge 1")).toBeInTheDocument();
    expect(getByText("Badge 2")).toBeInTheDocument();
    expect(getByText("Badge 3")).toBeInTheDocument();
  });

  it("applies horizontal layout and gap correctly", () => {
    const { getByTestId } = render(
      <Badge
        id="badge-horizontal-test-id"
        content={["Badge 1", "Badge 2", "Badge 3"]}
        horizontal={true}
        gap={'4px'}
      />,
    );
    const containerElement = getByTestId("badge-horizontal-test-id-container");
    expect(containerElement).toHaveClass("flex");
    expect(containerElement).toHaveStyle("gap: 4px");
  });
});
