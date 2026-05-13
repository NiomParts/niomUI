import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Cross, Menu } from "./Icons";

describe("Icons", () => {
  const icons = [
    { name: "Menu", icon: Menu },
    { name: "Cross", icon: Cross },
  ];

  icons.forEach(({ name, icon: Icons }) => {
    describe(`${name} Icon`, () => {
      it("renders correctly with default props", () => {
        const { container } = render(<Icons />);
        expect(container.querySelector("svg")).toBeInTheDocument();
      });
    });
  });
});
