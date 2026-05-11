import { describe, it, expect, afterEach } from "vitest";
import { Banner } from "./Banner";
import { render, cleanup } from "@testing-library/react";

describe("Banner", () => {
  afterEach(cleanup);

  it("renders the banner with correct image", () => {
    const { getByTestId } = render(
      <Banner image="https://example.com/banner.jpg" />,
    );
    const bannerElement = getByTestId("banner-test-id");
    expect(bannerElement).toBeInTheDocument();
    const imgElement = bannerElement.querySelector("img");
    expect(imgElement).toHaveAttribute("src", "https://example.com/banner.jpg");
  });
  it("renders content in the correct position", () => {
    const { getByText } = render(
      <Banner
        image="https://example.com/banner.jpg"
        content={<h2>Banner Title</h2>}
        textPosition="top-right"
      />,
    );
    const contentElement = getByText("Banner Title");
    expect(contentElement).toBeInTheDocument();
    expect(contentElement.parentElement).toHaveClass("top-0 right-0");
  });

  it("applies hover effects correctly", () => {
    const { getByTestId } = render(
      <Banner
        image="https://example.com/banner.jpg"
        hoverEffect
        shadowOnHover
        innerShadowOnHover
        layerBlurOnHover
      />,
    );
    const bannerElement = getByTestId("banner-test-id");
    expect(bannerElement).toHaveClass("hover:scale-105");
    expect(bannerElement).toHaveClass("hover:shadow-lg");
    const imgElement = bannerElement.querySelector("img");
    expect(imgElement).toHaveClass("hover:blur-sm");
    expect(imgElement).toHaveClass("hover:shadow-inner");
  });

  it("applies dimensions correctly", () => {
    const { getByTestId } = render(
      <Banner image="https://example.com/banner.jpg" dimensions="large" />,
    );
    const bannerElement = getByTestId("banner-test-id");
    expect(bannerElement).toHaveClass("w-128");
  });
});
