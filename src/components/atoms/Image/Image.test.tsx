import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Image } from "./Image";

describe("Image", () => {
  it("renders an image with the provided src and alt text", () => {
    render(<Image src="/product.jpg" alt="Niom product" />);

    const image = screen.getByRole("img", { name: "Niom product" });

    expect(image).toHaveAttribute("src", "/product.jpg");
    expect(image).toHaveAttribute("alt", "Niom product");
  });

  it("uses lazy loading by default", () => {
    render(<Image src="/product.jpg" alt="Niom product" />);

    expect(screen.getByRole("img")).toHaveAttribute("loading", "lazy");
  });

  it("allows eager loading", () => {
    render(<Image src="/product.jpg" alt="Niom product" loading="eager" />);

    expect(screen.getByRole("img")).toHaveAttribute("loading", "eager");
  });

  it("applies the selected object fit class", () => {
    render(
      <Image src="/product.jpg" alt="Niom product" objectFit="contain" />,
    );

    expect(screen.getByRole("img")).toHaveClass("object-contain");
  });

  it("applies custom className", () => {
    render(
      <Image
        src="/product.jpg"
        alt="Niom product"
        className="rounded-md"
      />,
    );

    expect(screen.getByRole("img")).toHaveClass("rounded-md");
  });

  it("sets width, height, and aspect ratio when provided", () => {
    render(
      <Image
        src="/product.jpg"
        alt="Niom product"
        width={320}
        height={240}
        aspectRatio="4/3"
      />,
    );

    const image = screen.getByRole("img");

    expect(image).toHaveAttribute("width", "320");
    expect(image).toHaveAttribute("height", "240");
    expect(image).toHaveStyle({ aspectRatio: "4/3" });
  });

  it("replaces the source with fallbackSrc when the image fails to load", () => {
    render(
      <Image
        src="/missing.jpg"
        fallbackSrc="/fallback.jpg"
        alt="Fallback product"
      />,
    );

    const image = screen.getByRole("img", {
      name: "Fallback product",
    }) as HTMLImageElement;

    fireEvent.error(image);

    expect(image.src).toContain("/fallback.jpg");
  });

  it("keeps the original source when no fallbackSrc is provided", () => {
    render(<Image src="/missing.jpg" alt="Missing product" />);

    const image = screen.getByRole("img", {
      name: "Missing product",
    }) as HTMLImageElement;

    fireEvent.error(image);

    expect(image.src).toContain("/missing.jpg");
  });
});
