import { describe, it, expect, afterEach } from "vitest";
import { Skeleton } from "./Skeleton";
import { render, cleanup } from "@testing-library/react";

describe("Skeleton", () => {
  afterEach(cleanup);
  it("renders the skeleton component", () => {
    const { getByTestId } = render(
      <Skeleton id="skeleton-test-id" width="100px" height="20px" />,
    );

    const skeletonElement = getByTestId("skeleton-0");
    expect(skeletonElement).toBeInTheDocument();
    expect(skeletonElement).toHaveStyle("width: 100px");
    expect(skeletonElement).toHaveStyle("height: 20px");
  });

  it('applies the correct animation class based on the "animation" prop', () => {
    const { getByTestId } = render(
      <Skeleton id="skeleton-animation-test-id-0" animation="wave" />,
    );

    const skeletonElement = getByTestId("skeleton-0");
    expect(skeletonElement).toHaveClass("animate-wave");
  });

  it("renders multiple skeleton lines when count prop is greater than 1", () => {
    const { getByTestId } = render(
      <Skeleton id="skeleton-multiple-test-id-0" count={3} />,
    );

    const skeletonLine1 = getByTestId("skeleton-0");
    const skeletonLine2 = getByTestId("skeleton-1");
    const skeletonLine3 = getByTestId("skeleton-2");

    expect(skeletonLine1).toBeInTheDocument();
    expect(skeletonLine2).toBeInTheDocument();
    expect(skeletonLine3).toBeInTheDocument();
  });

  it("applies horizontal layout and gap correctly when horizontal prop is true", () => {
    const { getByTestId } = render(
      <Skeleton
        id="skeleton-horizontal-test-id-0"
        count={3}
        horizontal={true}
        gap={"4px"}
      />,
    );

    const skeletonContainer = getByTestId(
      "skeleton-horizontal-test-id-0-container",
    );
    expect(skeletonContainer).toHaveClass("flex");
    expect(skeletonContainer).toHaveStyle("gap: 4px");
  });
});
